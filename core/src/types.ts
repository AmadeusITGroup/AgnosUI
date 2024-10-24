import type {ReadableSignal, StoreOptions, SubscribableStore, WritableSignal} from '@amadeus-it-group/tansu';

/**
 * A type that maps each property of an object type `T` to either a `ReadableSignal` of that property type or the property type itself.
 *
 * @template T - The object type whose properties are being mapped.
 * @property {ReadableSignal<T[K] | undefined> | T[K]} [K] - A property of type `T[K]` or a `ReadableSignal` of type `T[K]` or `undefined`.
 */
export type ValuesOrReadableSignals<T extends object> = {
	[K in keyof T]?: ReadableSignal<T[K] | undefined> | T[K];
};

/**
 * A type that maps the properties of an object type `T` to either a `WritableSignal` of the property type or the property type itself.
 *
 * @template T - The object type whose properties are being mapped.
 * @property {WritableSignal<T[K] | undefined> | T[K]} [K] - A property of type `T[K]` or a `WritableSignal` of type `T[K] | undefined`.
 */
export type ValuesOrWritableSignals<T extends object> = {
	[K in keyof T]?: WritableSignal<T[K] | undefined> | T[K];
};

/**
 * Interface representing the configuration for properties.
 *
 * @template U - An object type representing the properties.
 *
 * @property {ValuesOrWritableSignals<U>} [props] - Object containing, for each property, either its initial value, or a store that will contain the value at any time.
 * When the value of a property is undefined or invalid, the value from the config is used.
 *
 * @property {ReadableSignal<Partial<U>> | ValuesOrReadableSignals<Partial<U>>} [config] - Either a store of objects containing, for each property, the default value,
 * or an object containing, for each property, either a store containing the default value or the default value itself.
 */
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

/**
 * Represents a generic widget with reactive state, stores, and various functionalities.
 *
 * @template Props - The type of the properties that can be passed to the widget.
 * @template State - The type of the state managed by the widget.
 * @template Api - The type of the API functions available for interacting with the widget.
 * @template Actions - The type of the action handlers for user interactions.
 * @template Directives - The type of the directives used in the widget's template.
 */
export interface Widget<
	Props extends object = object,
	State extends object = object,
	Api extends object = object,
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
	 * all the api functions to interact with the widget
	 */
	api: Api;
}

/**
 * Represents the context for a widget slot, providing access to the widget and its state.
 *
 * @template W - The type of the widget.
 *
 */
export interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api' | 'directives'> {
	/**
	 * the state of the widget
	 */
	state: WidgetState<W>;
}

/**
 * Extracts the state type from a widget type that contains a `state$` property.
 *
 * @template T - A type that extends an object with a `state$` property of type `SubscribableStore<any>`.
 * @returns The type of the state contained within the `state$` property if it extends an object, otherwise `never`.
 */
export type WidgetState<T extends {state$: SubscribableStore<any>}> = T extends {state$: SubscribableStore<infer U extends object>} ? U : never;

/**
 * Extracts the type of the argument expected by the `patch` method of a given type `T`.
 *
 * This utility type takes a generic type `T` which must have a `patch` method. The `patch` method
 * should accept an argument that is a partial of some object type `U`. If `T` meets this condition,
 * `WidgetProps` will resolve to the type `U`. Otherwise, it will resolve to `never`.
 *
 * @template T - A type that includes a `patch` method accepting a partial object.
 */
export type WidgetProps<T extends {patch: (arg: any) => void}> = T extends {patch: (arg: Partial<infer U extends object>) => void} ? U : never;

/**
 * A factory function type for creating instances of a widget.
 *
 * @template W - The type of the widget that extends the base Widget type.
 * @param props - Optional configuration properties for the widget.
 * @returns An instance of the widget.
 */
export type WidgetFactory<W extends Widget> = (props?: PropsConfig<WidgetProps<W>>) => W;

/**
 * Represents a server-side rendered HTML element with limited functionality.
 *
 * This interface extends a subset of the `HTMLElement` interface, providing
 * methods to set and remove attributes, manipulate the element's classes, and
 * partially manipulate the element's style.
 *
 */
export interface SSRHTMLElement extends Pick<HTMLElement, 'setAttribute' | 'removeAttribute'> {
	/**
	 * Object allowing to manipulate the classes of the element.
	 */
	classList: Pick<HTMLElement['classList'], 'add' | 'remove' | 'toggle'>;
	/**
	 * Object allowing to manipulate the style of the element.
	 */
	style: Partial<Record<StyleKey, StyleValue>>;
}

/**
 * Represents a directive function that can be applied to an SSRHTMLElement.
 *
 * @template T - The type of the arguments passed to the directive.
 * @template U - The type of the SSRHTMLElement, defaults to SSRHTMLElement.
 *
 * @param node - The SSRHTMLElement to which the directive is applied.
 * @param args - The arguments passed to the directive.
 *
 * @returns An optional object that may contain:
 * - `update`: A function to update the directive with new arguments.
 * - `destroy`: A function to clean up when the directive is no longer needed.
 */
export type Directive<T = void, U extends SSRHTMLElement = SSRHTMLElement> = (
	node: U,
	args: T,
) => void | {update?: (args: T) => void; destroy?: () => void};

/**
 * Represents a tuple containing a directive and its associated parameter.
 *
 * @template T - The type of the parameter associated with the directive.
 * @template U - The type of the SSRHTMLElement, defaults to SSRHTMLElement.
 */
export type DirectiveAndParam<T, U extends SSRHTMLElement = SSRHTMLElement> = [Directive<T, U>, T];

/**
 * Represents a mapping of directives and their optional parameters.
 *
 * @template T - An array type representing the parameters for the directives.
 * @template U - The type of the SSR HTML element, defaults to `SSRHTMLElement`.
 */
export type DirectivesAndOptParam<T extends any[], U extends SSRHTMLElement = SSRHTMLElement> = {
	[K in keyof T]: Directive<void, U> | DirectiveAndParam<T[K], U>;
};

/**
 * Represents the content that can be used in a slot.
 * The content can be one of the following:
 * - `undefined`
 * - `null`
 * - A `string`
 * - A function that takes `props` of type `Props` and returns a `string`
 */
export type SlotContent<Props extends object = object> = undefined | null | string | ((props: Props) => string);

/**
 * A unique symbol representing an invalid value.
 * This can be used as a sentinel value to indicate that a variable or property
 * does not hold a valid value.
 */
export const INVALID_VALUE: unique symbol = Symbol();

/**
 * A type alias for a function that normalizes a value of type `T`.
 * The function takes a value of type `T` and returns either a normalized value of type `T`
 * or a special constant `INVALID_VALUE` indicating that the value is invalid.
 *
 * @template T - The type of the value to be normalized.
 * @param value - The value to be normalized.
 * @returns The normalized value of type `T` or `INVALID_VALUE` if the value is invalid.
 */
export type NormalizeValue<T> = (value: T) => T | typeof INVALID_VALUE;

/**
 * Interface representing options for a writable store with default values.
 *
 * @template T - The type of the value stored.
 */
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

/**
 * Represents a type that validates a configuration object.
 *
 * @template T - The type of the configuration object to be validated.
 *
 * This type maps each key of the configuration object `T` to an optional
 * `WritableWithDefaultOptions` type, allowing for partial validation.
 */
export type ConfigValidator<T extends object> = {[K in keyof T]?: WritableWithDefaultOptions<T[K]>};

/**
 * Represents a value that can be assigned to an attribute.
 */
export type AttributeValue = string | number | boolean | undefined;

/**
 * Represents a key of the CSSStyleDeclaration interface, excluding certain properties and methods.
 *
 * This is useful for scenarios where you need to work with CSS properties directly without
 * dealing with the methods and other non-style properties of CSSStyleDeclaration.
 */
export type StyleKey = Exclude<
	keyof CSSStyleDeclaration,
	| 'length'
	| 'item'
	| 'parentRule'
	| 'getPropertyValue'
	| 'getPropertyPriority'
	| 'setProperty'
	| 'removeProperty'
	| typeof Symbol.iterator
	| number
	| 'cssText'
>;

/**
 * Represents a value that can be used for styling purposes.
 * @remarks
 * This type can be a string representing a style value, or it can be undefined or null.
 * It is useful for scenarios where a style value might be optional or not set.
 */
export type StyleValue = string | undefined | null;

/**
 * A conditional type that checks if type `T` extends type `U`.
 * @template T - The type to check.
 * @template U - The type to check against.
 * @returns `1` if `T` extends `U`, otherwise `0`.
 */
export type Extends<T, U> = T extends U ? 1 : 0;

/**
 * Type utility to determine if a given type `T` is or extends `SlotContent<any>`.
 *
 * This utility uses conditional types to check if `T` extends `SlotContent<any>` or if `SlotContent<any>` extends `T`.
 * If either condition is true, it returns `T`, otherwise it returns `0`.
 *
 * @template T - The type to be checked.
 * @returns `T` if `T` is or extends `SlotContent<any>`, otherwise `0`.
 */
export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
