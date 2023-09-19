const t=`import type { SlotContent as CoreSlotContent, WidgetsConfig as CoreWidgetsConfig, Partial2Levels, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState, WidgetsConfigStore } from '@agnos-ui/core';
import type { ComponentType, SvelteComponent } from 'svelte';
export declare function createPatchChangedProps<T extends object>(patchFn: (arg: Partial<T>) => void): (props: Partial<T>) => void;
/**
 * Key used in the Svelte context to get or set the widgets default configuration store.
 */
export declare const widgetsDefaultConfigKey: unique symbol;
/**
 * Creates in the Svelte context hierarchy a new widgets default configuration store that inherits from any widgets default configuration
 * store already defined at an upper level in the Svelte context hierarchy.
 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.
 *
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * defined at an upper level in the Svelte context hierarchy (or an empty object if there is none) and returns the widgets
 * default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 *
 * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:
 * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
 * The resulting store is writable, its set function is actually the set function of the own$ store.
 *
 * @example
 * \`\`\`ts
 * const widgetsConfig = createWidgetsDefaultConfig((parentConfig) => {
 *   // first step configuration: transforms the parent configuration
 *   parentConfig.rating = parentConfig.rating ?? {};
 *   parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
 *   return parentConfig;
 * });
 * widgetsConfig.set({
 *   // second step configuration: overrides the parent configuration
 *   rating: {
 *     slotStar: MyCustomSlotStar
 *   }
 * });
 * \`\`\`
 */
export declare const createWidgetsDefaultConfig: (adaptParentConfig?: ((config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>) | undefined) => WidgetsConfigStore<WidgetsConfig>;
export declare function withPatchChangedProps<T extends {
    patch: (arg: object) => void;
}>(api: T): T & {
    patchChangedProps: T['patch'];
};
export declare const createEventDispatcher: <T extends object>() => import("svelte").EventDispatcher<{ [K in keyof T]: T[K] extends CustomEvent<infer U> ? U : never; }>;
export type WidgetPropsProps<Props extends object> = Partial<Omit<Props, \`on\${string}\`>>;
export type WidgetPropsEvents<Props extends object> = {
    [K in keyof Props & \`on\${string}\` as K extends \`on\${infer U}\` ? Uncapitalize<U> : never]: NonNullable<Props[K]> extends (arg: infer U) => void ? CustomEvent<U> : never;
};
export type WidgetPropsSlots<Props extends object> = {
    [K in keyof Props & \`slot\${string}\` as K extends \`slot\${infer U}\` ? Uncapitalize<U> : never]: Props[K] extends SlotContent<infer U> ? U : never;
};
export type SlotsPresent<Props extends object> = {
    [K in keyof Props & \`slot\${string}\` as K extends \`slot\${infer U}\` ? Uncapitalize<U> : never]: boolean;
};
export declare const callWidgetFactory: <W extends Widget<object, object, object, object, object>>(factory: WidgetFactory<W>, widgetName: keyof WidgetsConfig | null, slots: SlotsPresent<Omit<WidgetProps<W>, \`slot\${string}\`> & { [K in keyof WidgetProps<W> & \`slot\${string}\`]: WidgetProps<W>[K] extends CoreSlotContent<infer U extends object> ? SlotContent<AdaptSlotContentProps<U>> : WidgetProps<W>[K]; }>, defaultConfig?: Partial<Omit<WidgetProps<W>, \`slot\${string}\`> & { [K in keyof WidgetProps<W> & \`slot\${string}\`]: WidgetProps<W>[K] extends CoreSlotContent<infer U extends object> ? SlotContent<AdaptSlotContentProps<U>> : WidgetProps<W>[K]; }> | undefined) => AdaptWidgetSlots<W> & {
    patchChangedProps: (parameters: Partial<AdaptPropsSlots<WidgetProps<W>>>) => void;
};
export declare const useSvelteSlot: unique symbol;
export type SlotSvelteComponent<Props extends object = object> = ComponentType<SvelteComponent<Props, any, Props extends WidgetSlotContext<infer U> ? WidgetPropsSlots<WidgetProps<U>> : any>>;
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | SlotSvelteComponent<Props> | typeof useSvelteSlot;
export type AdaptSlotContentProps<Props extends Record<string, any>> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<AdaptWidgetSlots<U>> & AdaptPropsSlots<Omit<Props, keyof WidgetSlotContext<any>>> : AdaptPropsSlots<Props>;
export type AdaptPropsSlots<Props> = Omit<Props, \`slot\${string}\`> & {
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends CoreSlotContent<infer U> ? SlotContent<AdaptSlotContentProps<U>> : Props[K];
};
export type WidgetsConfig = {
    [WidgetName in keyof CoreWidgetsConfig]: AdaptPropsSlots<CoreWidgetsConfig[WidgetName]>;
};
export type AdaptWidgetSlots<W extends Widget> = Widget<AdaptPropsSlots<WidgetProps<W>>, AdaptPropsSlots<WidgetState<W>>, W['api'], W['actions'], W['directives']>;
export declare const isSvelteComponent: <Props extends object>(content: SlotContent<Props>) => content is SlotSvelteComponent<Props>;
`;export{t as default};
