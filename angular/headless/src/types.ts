import type {
	ContextWidget,
	SlotContent as CoreSlotContent,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
} from '@agnos-ui/core/types';
import type {Signal, TemplateRef, Type} from '@angular/core';
import {Directive, Input} from '@angular/core';

export * from '@agnos-ui/core/types';

export class ComponentTemplate<Props, K extends string, T extends {[key in K]: TemplateRef<Props> | Signal<TemplateRef<Props>>}> {
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

export type AdaptSlotContentProps<Props extends Record<string, any>> =
	Props extends WidgetSlotContext<infer U>
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

export type AngularWidget<W extends Widget> = W & {
	initialized: Promise<void>;
	widget: ContextWidget<W>;
	ngState: Signal<WidgetState<W>>;
	ngInit: () => void;
	patchSlots(slots: {
		[K in keyof WidgetProps<W> & `slot${string}`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
	}): void;
};
