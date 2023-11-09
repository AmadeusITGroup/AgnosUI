import type {ContextWidget, SlotContent as CoreSlotContent, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState} from '@agnos-ui/core';
import {Directive, Input, type TemplateRef, type Type} from '@angular/core';

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

@Directive()
export abstract class SlotComponent<W extends Widget> {
	@Input()
	state!: WidgetState<W>;
	@Input()
	widget!: ContextWidget<W>;
}
