const t=`import type { Partial2Levels } from '@agnos-ui/core';
import type { PropsWithChildren } from 'react';
import type { WidgetsConfig } from './Slot';
/**
 * React component that provides in the React context (for all AgnosUI descendant widgets) a new widgets default configuration
 * store that inherits from any widgets default configuration store already defined at an upper level in the React context hierarchy.
 * It contains its own set of widgets configuration properties that override the same properties form the parent configuration.
 *
 * @remarks
 * The configuration is computed from the parent configuration in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the properties of the component.
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
 * \`\`\`tsx
 * <WidgetsDefaultConfig
 *   adaptParentConfig={(parentConfig) => {
 *     parentConfig.rating = parentConfig.rating ?? {};
 *     parentConfig.rating.className = \`\${parentConfig.rating.className ?? ''} my-rating-extra-class\`
 *     return parentConfig;
 *   }}
 *   rating={{slotStar: MyCustomSlotStar}}
 * />
 * \`\`\`
 */
export declare const WidgetsDefaultConfig: ({ children, adaptParentConfig, ...props }: Partial<{
    pagination: Partial<import("./Slot").AdaptPropsSlots<import("@agnos-ui/core").PaginationProps>>;
    rating: Partial<import("./Slot").AdaptPropsSlots<import("@agnos-ui/core").RatingProps>>;
    select: Partial<import("./Slot").AdaptPropsSlots<import("@agnos-ui/core").SelectProps<any>>>;
    modal: Partial<import("./Slot").AdaptPropsSlots<import("@agnos-ui/core").ModalProps>>;
    alert: Partial<import("./Slot").AdaptPropsSlots<import("@agnos-ui/core").AlertProps>>;
    accordion: Partial<import("./Slot").AdaptPropsSlots<import("@agnos-ui/core").AccordionProps>>;
}> & {
    children?: import("react").ReactNode;
} & {
    adaptParentConfig?: ((config: Partial2Levels<WidgetsConfig>) => Partial2Levels<WidgetsConfig>) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
`;export{t as default};
