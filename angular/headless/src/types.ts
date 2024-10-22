import type {SlotContent as CoreSlotContent, Widget, WidgetProps, WidgetState, Extends} from '@agnos-ui/core/types';
import type {Signal, TemplateRef, Type} from '@angular/core';
import {Directive, Input} from '@angular/core';

export * from '@agnos-ui/core/types';

export class ComponentTemplate<Props, K extends string, T extends {[key in K]: TemplateRef<Props>}> {
	constructor(
		public readonly component: Type<T>,
		public readonly templateProp: K,
	) {}
}

export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| TemplateRef<Props>
	| Type<unknown>
	| ComponentTemplate<Props, any, any>;

@Directive()
export abstract class SlotComponent<W extends Widget> {
	@Input()
	state!: AngularState<W>;
	@Input()
	api!: W['api'];
	@Input()
	directives!: W['directives'];
}

export type IsSlotContent<T> = Extends<T, SlotContent<any>> | Extends<SlotContent<any>, T> extends 1 ? T : 0;
export type AngularState<W extends Widget> = {[key in keyof WidgetState<W>]: Signal<WidgetState<W>[key]>};

export type AngularWidget<W extends Widget> = Pick<W, 'api' | 'directives' | 'patch'> & {
	initialized: Promise<void>;
	state: AngularState<W>;
	ngInit: () => void;
	patchSlots(slots: {
		[K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U>
			? TemplateRef<U> | undefined
			: never;
	}): void;
};

export interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api' | 'directives'> {
	/**
	 * the state of the widget
	 */
	state: AngularState<W>;
}
