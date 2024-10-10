import type {SlotContent as CoreSlotContent, Widget, WidgetState, Extends} from '@agnos-ui/core/types';
import type {Signal, TemplateRef, Type} from '@angular/core';
import {Directive, Input} from '@angular/core';

export * from '@agnos-ui/core/types';

/**
 * Represents a template for a component with specified properties.
 *
 * @template Props - The type of properties that the template accepts.
 * @template K - The key in the template object that maps to the template reference.
 * @template T - An object type where each key of type K maps to a TemplateRef of Props.
 *
 * @param component - The component type that contains the template.
 * @param templateProp - The key in the component that maps to the template reference.
 */
export class ComponentTemplate<Props, K extends string, T extends {[key in K]: TemplateRef<Props>}> {
	constructor(
		public readonly component: Type<T>,
		public readonly templateProp: K,
	) {}
}

/**
 * Represents the content that can be used in a slot.
 *
 * @template Props - The type of the properties that the slot content can accept.
 *
 * This type can be one of the following:
 * - `CoreSlotContent<Props>`: Core slot content with the specified properties.
 * - `TemplateRef<Props>`: A reference to an Angular template with the specified properties.
 * - `Type<unknown>`: A type representing an unknown component or directive.
 * - `ComponentTemplate<Props, any, any>`: A component template with the specified properties.
 */
export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| TemplateRef<Props>
	| Type<unknown>
	| ComponentTemplate<Props, any, any>;

/**
 * A directive representing a slot component that can be used to manage the state and context of a widget.
 *
 * @template W - The type of the widget that this slot component manages.
 *
 * @property {WidgetState<W>} state - The current state of the widget.
 * @property {ContextWidget<W>} widget - The context of the widget.
 */
@Directive()
export abstract class SlotComponent<W extends Widget> {
	@Input()
	state!: AngularState<W>;
	@Input()
	api!: W['api'];
	@Input()
	directives!: W['directives'];
}

/**
 * Type utility to determine if a given type `T` is or extends `SlotContent<any>`.
 *
 * This type alias uses conditional types to check if `T` extends `SlotContent<any>` or if `SlotContent<any>` extends `T`.
 * If either condition is true, it resolves to `T`, otherwise it resolves to `0`.
 *
 * @template T - The type to be checked.
 */
export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
export type AngularState<W extends Widget> = {[key in keyof WidgetState<W>]: Signal<WidgetState<W>[key]>};

/**
 * Represents an Angular widget that extends a base widget type.
 *
 * @template W - The type of the base widget.
 *
 * @property {Promise<void>} initialized - A promise that resolves when the widget is initialized.
 * @property {ContextWidget<W>} widget - The context widget associated with this Angular widget.
 * @property {Signal<WidgetState<W>>} ngState - A signal representing the state of the widget.
 * @property {() => void} ngInit - A function to initialize the Angular widget.
 * @property {Function} patchSlots - A function to patch the slots of the widget.
 *
 * @param slots - An object representing the slots to be patched.
 * @param slots[K] - The template reference for the slot content, or undefined if not applicable.
 */
export type AngularWidget<W extends Widget> = Pick<W, 'api' | 'directives' | 'patch'> & {
	initialized: Promise<void>;
	state: AngularState<W>;
	ngInit: () => void;
	updateSlots: () => void;
};

export interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api' | 'directives'> {
	/**
	 * the state of the widget
	 */
	state: AngularState<W>;
}
