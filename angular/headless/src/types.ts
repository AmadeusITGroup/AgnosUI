import type {ContextWidget, SlotContent as CoreSlotContent, Widget, WidgetProps, WidgetState} from '@agnos-ui/core/types';
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
	state!: WidgetState<W>;
	@Input()
	widget!: ContextWidget<W>;
}

export type AngularWidget<W extends Widget> = W & {
	initialized: Promise<void>;
	widget: ContextWidget<W>;
	ngState: Signal<WidgetState<W>>;
	ngInit: () => void;
	patchSlots(slots: {
		[K in keyof WidgetProps<W> & `slot${string}`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
	}): void;
};
