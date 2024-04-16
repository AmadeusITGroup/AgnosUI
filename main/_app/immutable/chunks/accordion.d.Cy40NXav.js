const o=`import type { AccordionProps } from '@agnos-ui/core/components/accordion';
export * from '@agnos-ui/core/components/accordion';
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export declare function getAccordionDefaultConfig(): AccordionProps;
/**
 * Create an AccordionWidget with given config props
 * @param config - an optional alert config
 * @returns an AccordionWidget
 */
export declare const createAccordion: import("core/dist/types").WidgetFactory<import("@agnos-ui/core/services/extendWidget").ExtendWidgetProps<import("@agnos-ui/core/components/accordion").AccordionWidget, {}, object>>;
`;export{o as default};
