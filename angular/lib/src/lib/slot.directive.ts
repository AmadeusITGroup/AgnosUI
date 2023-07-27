import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, readable, writable} from '@amadeus-it-group/tansu';
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
import {DOCUMENT} from '@angular/common';
import type {ComponentRef, EmbeddedViewRef, FactoryProvider, OnChanges, OnDestroy, SimpleChanges, Type} from '@angular/core';
import {
	Directive,
	EnvironmentInjector,
	InjectionToken,
	Injector,
	Input,
	Optional,
	SkipSelf,
	TemplateRef,
	ViewContainerRef,
	createComponent,
	inject,
	reflectComponentType,
	runInInjectionContext,
} from '@angular/core';

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

export type AdaptWidgetSlots<W extends Widget> = Widget<
	AdaptPropsSlots<WidgetProps<W>>,
	AdaptPropsSlots<WidgetState<W>>,
	W['api'],
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

export type WithPatchSlots<W extends Widget> = AdaptWidgetSlots<W> & {
	patchSlots(slots: {
		[K in keyof WidgetProps<W> & `slot${string}`]: WidgetProps<W>[K] extends CoreSlotContent<infer U>
			? TemplateRef<AdaptSlotContentProps<U>> | undefined
			: never;
	}): void;
};

export const callWidgetFactory = <W extends Widget>(
	factory: WidgetFactory<W>,
	widgetName: keyof WidgetsConfig | null,
	defaultConfig: Partial<AdaptPropsSlots<WidgetProps<W>>> | ReadableSignal<Partial<AdaptPropsSlots<WidgetProps<W>>>> = {}
): WithPatchSlots<W> => {
	const defaultConfigStore = typeof defaultConfig !== 'function' ? readable(defaultConfig) : defaultConfig;
	const slots$ = writable({});
	const widgetsConfig = widgetName ? inject(widgetsConfigInjectionToken, {optional: true}) : undefined;
	return {
		...(factory(
			computed(() => ({...(defaultConfigStore() as any), ...(widgetName ? widgetsConfig?.()[widgetName] : undefined), ...slots$()}))
		) as any),
		patchSlots: createPatchSlots(slots$.set),
	};
};

abstract class SlotHandler<Props extends Record<string, any>, Slot extends SlotContent<Props> = SlotContent<Props>> {
	constructor(public viewContainerRef: ViewContainerRef, public document: Document) {}
	slotChange(slot: Slot, props: Props) {}
	propsChange(slot: Slot, props: Props) {}
	destroy() {}
}

class StringSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, string> {
	#nodeRef: Text | undefined;
	#previousText = '';

	override slotChange(slot: string): void {
		if (slot === this.#previousText) {
			return;
		}
		this.#previousText = slot;
		if (this.#nodeRef) {
			this.#nodeRef.textContent = slot;
		} else {
			const viewContainerElement: Comment | undefined = this.viewContainerRef.element.nativeElement;
			if (this.document && viewContainerElement?.parentNode) {
				this.#nodeRef = viewContainerElement.parentNode.insertBefore(this.document.createTextNode(slot), viewContainerElement);
			}
		}
	}

	override destroy(): void {
		this.#nodeRef?.parentNode?.removeChild(this.#nodeRef);
		this.#nodeRef = undefined;
	}
}

class FunctionSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, (props: Props) => string> {
	#stringSlotHandler = new StringSlotHandler(this.viewContainerRef, this.document);

	override slotChange(slot: (props: Props) => string, props: Props): void {
		this.#stringSlotHandler.slotChange(slot(props));
	}

	override propsChange(slot: (props: Props) => string, props: Props): void {
		this.#stringSlotHandler.slotChange(slot(props));
	}

	override destroy(): void {
		this.#stringSlotHandler.destroy();
	}
}

class ComponentSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, Type<unknown>> {
	#componentRef: ComponentRef<any> | undefined;
	#properties: string[];

	override slotChange(slot: Type<unknown>, props: Props): void {
		if (this.#componentRef) {
			this.destroy();
		}
		this.#componentRef = this.viewContainerRef.createComponent(slot);
		this.#applyProperties(props);
	}

	#applyProperties(props: Props, oldProperties?: Set<string>) {
		const properties = Object.keys(props);
		this.#properties = properties;
		const componentRef = this.#componentRef!;
		for (const property of properties) {
			componentRef.setInput(property, props[property]);
			oldProperties?.delete(property);
		}
	}

	override propsChange(slot: Type<unknown>, props: Props): void {
		const oldProperties = new Set(this.#properties);
		this.#applyProperties(props, oldProperties);
		const componentRef = this.#componentRef!;
		for (const property of oldProperties) {
			componentRef.setInput(property, undefined);
		}
	}

	override destroy(): void {
		this.viewContainerRef.clear();
		this.#componentRef = undefined;
	}
}

class TemplateRefSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, TemplateRef<Props>> {
	#viewRef: EmbeddedViewRef<Props> | undefined;
	#props: Props;

	override slotChange(slot: TemplateRef<Props>, props: Props): void {
		if (this.#viewRef) {
			this.destroy();
		}
		props = {...props};
		this.#props = props;
		this.#viewRef = this.viewContainerRef.createEmbeddedView(slot, props);
	}

	override propsChange(slot: TemplateRef<Props>, props: Props): void {
		if (this.#viewRef) {
			const templateProps = this.#props;
			const oldProperties = new Set<keyof Props>(Object.keys(templateProps));
			for (const property of Object.keys(props) as (keyof Props)[]) {
				templateProps[property] = props[property];
				oldProperties.delete(property);
			}
			for (const oldProperty of oldProperties) {
				delete templateProps[oldProperty];
			}
			this.#viewRef.markForCheck();
		}
	}

	override destroy(): void {
		this.viewContainerRef.clear();
	}
}

class ComponentTemplateSlotHandler<
	Props extends Record<string, any>,
	K extends string,
	T extends {[key in K]: TemplateRef<Props>}
> extends SlotHandler<Props, ComponentTemplate<Props, K, T>> {
	#componentRef: ComponentRef<T> | undefined;
	#templateSlotHandler = new TemplateRefSlotHandler(this.viewContainerRef, this.document);
	#templateRef: TemplateRef<Props> | undefined;

	override slotChange(slot: ComponentTemplate<Props, K, T>, props: Props): void {
		if (this.#componentRef) {
			this.destroy();
		}
		this.#componentRef = createComponent(slot.component, {
			elementInjector: this.viewContainerRef.injector,
			environmentInjector: this.viewContainerRef.injector.get(EnvironmentInjector),
		});
		this.#templateRef = this.#componentRef.instance[slot.templateProp];
		this.#templateSlotHandler.slotChange(this.#templateRef, props);
	}

	override propsChange(slot: ComponentTemplate<Props, K, T>, props: Props): void {
		this.#templateSlotHandler.propsChange(this.#templateRef!, props);
	}

	override destroy(): void {
		this.#templateSlotHandler.destroy();
		this.#componentRef?.destroy();
		this.#componentRef = undefined;
	}
}

const getSlotType = (value: any): undefined | {new (viewContainerRef: ViewContainerRef, document: Document): SlotHandler<any>} => {
	if (!value) return undefined;
	const type = typeof value;
	switch (type) {
		case 'string':
			return StringSlotHandler;
		case 'function':
			if (reflectComponentType(value)) {
				return ComponentSlotHandler;
			}
			return FunctionSlotHandler;
		case 'object':
			if (value instanceof TemplateRef) {
				return TemplateRefSlotHandler;
			}
			if (value instanceof ComponentTemplate) {
				return ComponentTemplateSlotHandler;
			}
			break;
	}
	return undefined;
};

@Directive({
	selector: '[auSlot]',
	standalone: true,
})
export class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
	@Input('auSlot') slot: SlotContent<Props>;
	@Input('auSlotProps') props: Props;

	private _viewContainerRef = inject(ViewContainerRef);
	private _document = inject(DOCUMENT);
	private _slotType: ReturnType<typeof getSlotType>;
	private _slotHandler: SlotHandler<Props> | undefined;

	ngOnChanges(changes: SimpleChanges): void {
		const slotChange = changes['slot'];
		const propsChange = changes['props'];
		const slot = this.slot;
		if (slotChange) {
			const newSlotType = getSlotType(slot);
			if (newSlotType !== this._slotType) {
				this._slotHandler?.destroy();
				this._slotHandler = newSlotType ? new newSlotType(this._viewContainerRef, this._document) : undefined;
				this._slotType = newSlotType;
			}
			this._slotHandler?.slotChange(slot, this.props);
		} else if (propsChange) {
			this._slotHandler?.propsChange(slot, this.props);
		}
	}

	ngOnDestroy(): void {
		this._slotHandler?.destroy();
		this._slotHandler = undefined;
	}
}
