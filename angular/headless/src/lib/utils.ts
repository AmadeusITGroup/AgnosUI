import type {
	SlotContent as CoreSlotContent,
	WidgetsConfig as CoreWidgetsConfig,
	Partial2Levels,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
	WidgetsConfigStore,
} from '@agnos-ui/core';
import {createWidgetsConfig} from '@agnos-ui/core';
import type {ReadableSignal, SubscribableStore} from '@amadeus-it-group/tansu';
import {computed, readable, writable} from '@amadeus-it-group/tansu';
import type {FactoryProvider, SimpleChanges, TemplateRef, Type} from '@angular/core';
import {InjectionToken, Injector, Optional, SkipSelf, inject, runInInjectionContext} from '@angular/core';

export class ComponentTemplate<Props, K extends string, T extends {[key in K]: TemplateRef<Props>}> {
	constructor(public readonly component: Type<T>, public readonly templateProp: K) {}
}

export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| TemplateRef<Props>
	| Type<unknown>
	| ComponentTemplate<Props, any, any>;

export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U>
	? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>>
	: AdaptPropsSlots<Props>;

export type AdaptPropsSlots<Props> = Omit<Props, `slot${string}`> & {
	[K in keyof Props & `slot${string}`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};

export type AdaptWidgetFactories<T> = {
	[K in keyof T]: T[K] extends WidgetFactory<infer U> ? WidgetFactory<AdaptWidgetSlots<U>> : T[K];
};

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptPropsSlots<WidgetProps<W>>,
	AdaptPropsSlots<WidgetState<W>>,
	AdaptWidgetFactories<W['api']>,
	W['actions'],
	W['directives']
>;

export type WidgetsConfig = {
	[WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};

/**
 * Dependency Injection token which can be used to provide or inject the widgets default configuration store.
 */
export const widgetsConfigInjectionToken = new InjectionToken<WidgetsConfigStore<WidgetsConfig>>('widgetsConfig');

/**
 * Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
 * in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
 * the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
 * {@link injectWidgetsConfig}.
 *
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
 * default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 * It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
 * Angular dependency injection system.

 * @returns DI provider to be included a list of `providers` (for example at a component level or
 * any other level of the Angular dependency injection system)
 *
 * @example
 * ```typescript
 * @Component({
 *   // ...
 *   providers: [
 *     provideWidgetsConfig((parentConfig) => {
 *       // first step configuration: transforms the parent configuration
 *       parentConfig.rating = parentConfig.rating ?? {};
 *       parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
 *       return parentConfig;
 *     })
 *   ]
 * })
 * class MyComponent {
 *   widgetsConfig = injectWidgetsConfig();
 *   constructor() {
 *     this.widgetsConfig.set({
 *       // second step configuration: overrides the parent configuration
 *       rating: {
 *         slotStar: MyCustomSlotStar
 *       }
 *     });
 *   }
 *   // ...
 * }
 * ```
 */
export const provideWidgetsConfig = (
	adaptParentConfig?: (config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>
): FactoryProvider => ({
	provide: widgetsConfigInjectionToken,
	useFactory: (parent: WidgetsConfigStore<WidgetsConfig> | null) => {
		if (adaptParentConfig) {
			const injector = inject(Injector);
			const originalAdaptParentConfig = adaptParentConfig;
			adaptParentConfig = (value) => runInInjectionContext(injector, () => originalAdaptParentConfig(value));
		}
		return createWidgetsConfig(parent ?? undefined, adaptParentConfig);
	},
	deps: [[new SkipSelf(), new Optional(), widgetsConfigInjectionToken]],
});

/**
 * Returns the widgets default configuration store that was provided in the current injection context.
 * Throws if the no widgets default configuration store was provided.
 *
 * @remarks
 * This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
 * a function used with {@link https://angular.io/api/core/runInInjectionContext | runInInjectionContext}.
 *
 * @returns the widgets default configuration store.
 */
export const injectWidgetsConfig = () => inject(widgetsConfigInjectionToken);

const createPatchSlots = <T extends object>(set: (object: Partial<T>) => void) => {
	let lastValue: Partial<T> = {};
	return (object: T) => {
		const newValue: Partial<T> = {};
		let hasChange = false;
		for (const key of Object.keys(object) as (string & keyof T)[]) {
			const objectKey = (object as any)[key];
			if (objectKey != null) {
				// only use defined slots
				newValue[key] = objectKey;
			}
			if (objectKey != lastValue[key]) {
				hasChange = true;
			}
		}
		if (hasChange) {
			lastValue = newValue;
			set(newValue);
		}
	};
};

export type WithPatchSlots<W extends Widget> = W & {
	patchSlots(slots: {
		[K in keyof WidgetProps<W> & `slot${string}`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
	}): void;
};

export const callWidgetFactory = <W extends Widget>(
	factory: WidgetFactory<W>,
	widgetName: keyof WidgetsConfig | null,
	defaultConfig: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>>> = {}
): WithPatchSlots<W> => {
	const defaultConfigStore = typeof defaultConfig !== 'function' ? readable(defaultConfig) : defaultConfig;
	const slots$ = writable({});
	const widgetsConfig = widgetName ? inject(widgetsConfigInjectionToken, {optional: true}) : undefined;
	return {
		...(factory({
			config: computed(() => ({...(defaultConfigStore() as any), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined), ...slots$()})),
		}) as any),
		patchSlots: createPatchSlots(slots$.set),
	};
};

export function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges) {
	const obj: any = {};
	for (const [key, simpleChange] of Object.entries(changes)) {
		if (simpleChange !== undefined) {
			obj[key] = simpleChange.currentValue;
		}
	}
	patchFn(obj);
}

export type ExtractStoreType<T> = T extends SubscribableStore<infer U> ? U : never;
