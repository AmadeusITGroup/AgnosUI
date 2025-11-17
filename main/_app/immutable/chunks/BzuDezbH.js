const o=`import { getAccordionDefaultConfig, createAccordionItem, createAccordion, factoryCreateAccordion } from '@agnos-ui/core-bootstrap/components/accordion';
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
const export_getAccordionDefaultConfig = getAccordionDefaultConfig;
export { export_getAccordionDefaultConfig as getAccordionDefaultConfig };
/**
 * Create an AccordionItemWidget with given config props
 * @param config - an optional AccordionItem config
 * @returns an AccordionItemWidget
 */
const export_createAccordionItem = createAccordionItem;
export { export_createAccordionItem as createAccordionItem };
/**
 * Create an AccordionWidget with given config props
 * @param config - an optional accordion config
 * @returns an AccordionWidget
 */
const export_createAccordion = createAccordion;
export { export_createAccordion as createAccordion };
/**
 * Create an accordion WidgetFactory based on an item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @param accordionConfig - the default accordion config
 * @param accordionValidator - the validator of props
 * @returns the accordion widget factory
 */
const export_factoryCreateAccordion = factoryCreateAccordion;
export { export_factoryCreateAccordion as factoryCreateAccordion };
`;export{o as default};
