const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Directive, Widget, WidgetFactory, WidgetProps, WidgetState, WidgetsConfigStore } from '@agnos-ui/core';
import type { RefCallback } from 'react';
import type { AdaptPropsSlots, AdaptWidgetSlots, WidgetsConfig } from './Slot';
export declare function useWidget<Factory extends (...arg: any[]) => Widget>(createWidget: Factory, props?: Partial<WidgetProps<ReturnType<Factory>>>, ...initProps: Parameters<Factory>): [WidgetState<ReturnType<Factory>>, ReturnType<Factory>];
export declare function useObservable<T>(store$: ReadableSignal<T>): T;
export declare function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;
export declare function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;
/**
 * React context which can be used to provide or consume the widgets default configuration store.
 */
export declare const widgetsConfigContext: import("react").Context<WidgetsConfigStore<WidgetsConfig> | undefined>;
export declare const useWidgetWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, props: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined, widgetName: keyof WidgetsConfig | null, defaultProps?: Partial<AdaptPropsSlots<WidgetProps<W>>> | undefined) => [AdaptPropsSlots<WidgetState<W>>, AdaptWidgetSlots<W>];
`;export{e as default};
