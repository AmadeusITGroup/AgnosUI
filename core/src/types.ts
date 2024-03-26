import type {ReadableSignal, StoreOptions, SubscribableStore, WritableSignal} from '@amadeus-it-group/tansu';

export type ValuesOrReadableSignals<T extends object> = {
	[K in keyof T]?: ReadableSignal<T[K] | undefined> | T[K];
};

export type ValuesOrWritableSignals<T extends object> = {
	[K in keyof T]?: WritableSignal<T[K] | undefined> | T[K];
};

export interface PropsConfig<U extends object> {
	/**
	 * Object containing, for each property, either its initial value, or a store that will contain the value at any time.
	 * When the value of a property is undefined or invalid, the value from the config is used.
	 */
	props?: ValuesOrWritableSignals<U>;

	/**
	 * Either a store of objects containing, for each property, the default value,
	 * or an object containing, for each property, either a store containing the default value or the default value itself.
	 */
	config?: ReadableSignal<Partial<U>> | ValuesOrReadableSignals<Partial<U>>;
}

export interface Widget<
	Props extends object = object,
	State extends object = object,
	Api extends object = object,
	Actions extends object = object,
	Directives extends object = object,
> {
	/**
	 * the reactive state of the widget, combining all the values served by the stores
	 */
	state$: ReadableSignal<State>;
	/**
	 * the different stores of the widget, all reactive
	 */
	stores: {[K in keyof State as `${K & string}$`]: ReadableSignal<State[K]>};

	/**
	 * Modify the parameter values, and recalculate the stores accordingly
	 */
	patch(parameters: Partial<Props>): void;
	/**
	 * directives to be used on html elements in the template of the widget or in the slots
	 */
	directives: Directives;
	/**
	 * all the handlers that should be connected to user interactions i.e. click, keyboard and touch interactions.
	 * typically, the handlers are event listeners that call api functions to affect the widget state
	 */
	actions: Actions;
	/**
	 * all the api functions to interact with the widget
	 */
	api: Api;
}

export type ContextWidget<W extends Widget> = Pick<W, 'actions' | 'api' | 'directives' | 'state$' | 'stores'>;

export interface WidgetSlotContext<W extends Widget> {
	/**
	 * the state of the widget
	 */
	state: WidgetState<W>;
	/**
	 * the widget
	 */
	widget: ContextWidget<W>;
}

/**
 * Extract actions, api, directives, state and stores from the widget to be passed to slots as context.
 *
 * @param w - the widget
 * @returns the slot context
 */
export const toSlotContextWidget = <W extends Widget>(w: W): ContextWidget<W> => ({
	actions: w.actions,
	api: w.api,
	directives: w.directives,
	state$: w.state$,
	stores: w.stores,
});

export type WidgetState<T extends {state$: SubscribableStore<any>}> = T extends {state$: SubscribableStore<infer U extends object>} ? U : never;
export type WidgetProps<T extends {patch: (arg: any) => void}> = T extends {patch: (arg: Partial<infer U extends object>) => void} ? U : never;
export type WidgetFactory<W extends Widget> = (props?: PropsConfig<WidgetProps<W>>) => W;

export interface Directive<T = void> {
	(node: HTMLElement, args: T): void | {update?: (args: T) => void; destroy?: () => void};

	/**
	 * Function that returns the {@link AttributesDirectiveProps}
	 */
	propsFn?: (arg: ReadableSignal<T>) => AttributesDirectiveProps;
}

export type AttributeEvent<K extends keyof HTMLElementEventMap> =
	| {
			handler: (this: HTMLElement, event: HTMLElementEventMap[K]) => void;
			options?: boolean | AddEventListenerOptions;
	  }
	| ((this: HTMLElement, event: HTMLElementEventMap[K]) => void);

/**
 * Properties for configuring server-side rendering directives.
 */
export interface AttributesDirectiveProps {
	/**
	 * Events to be attached to an HTML element.
	 * @remarks
	 * Key-value pairs where keys are event types and values are event handlers.
	 * value can be an array in case of multiple events callback need to be attached.
	 */
	events?: Partial<{
		[K in keyof HTMLElementEventMap]: AttributeEvent<K> | AttributeEvent<K>[];
	}>;

	/**
	 * Attributes to be added to the provided node.
	 * @remarks
	 * The `style` attribute must be added separately.
	 */
	attributes?: Record<string, AttributeValue | ReadableSignal<AttributeValue>>;

	/**
	 * Styles to be added to an HTML element.
	 * @remarks
	 * Key-value pairs where keys are CSS style properties and values are style values.
	 */
	styles?: Partial<Record<keyof CSSStyleDeclaration, StyleValue | ReadableSignal<StyleValue>>>;

	/**
	 * Class names to be added to an HTML element.
	 * @remarks
	 * Key-value pairs where keys are class names and values indicate whether the class should be added (true) or removed (false).
	 */
	classNames?: Record<string, boolean | ReadableSignal<boolean>>;
}

export type SlotContent<Props extends object = object> = undefined | null | string | ((props: Props) => string);

export const INVALID_VALUE = Symbol();
export type NormalizeValue<T> = (value: T) => T | typeof INVALID_VALUE;

export interface WritableWithDefaultOptions<T> {
	/**
	 * the normalize value function. should return the invalidValue symbol when the provided value is invalid
	 */
	normalizeValue?: NormalizeValue<T>;
	/**
	 * the equal function, allowing to compare two values. used to check if a previous and current values are equals.
	 */
	equal?: StoreOptions<T>['equal'];
}

export type ConfigValidator<T extends object> = {[K in keyof T]?: WritableWithDefaultOptions<T[K]>};

export type AttributeValue = string | number | boolean | undefined;
export type StyleValue = string | undefined | null;
