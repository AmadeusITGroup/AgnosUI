const e=`/// <reference types="svelte" />
import type { Widget, WidgetFactory, WidgetProps } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { SlotContent, SlotSvelteComponent, SlotsPresent } from './slotTypes';
export declare function createPatchChangedProps<T extends object>(patchFn: (arg: Partial<T>) => void): (props: Partial<T>) => void;
export declare const createEventDispatcher: <T extends object>() => import("svelte").EventDispatcher<{ [K in keyof T]: T[K] extends CustomEvent<infer U> ? U : never; }>;
export declare const callWidgetFactoryWithConfig: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, slots: SlotsPresent<WidgetProps<W>>, defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined> | undefined, widgetConfig?: ReadableSignal<Partial<WidgetProps<W>> | undefined> | null | undefined) => W & {
    patchChangedProps: W["patch"];
};
export declare const isSvelteComponent: <Props extends object>(content: SlotContent<Props>) => content is SlotSvelteComponent<Props>;
`;export{e as default};
