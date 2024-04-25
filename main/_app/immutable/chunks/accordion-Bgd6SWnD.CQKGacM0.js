const o=`import { getAccordionDefaultConfig as getAccordionDefaultConfig$1, createAccordionItem as createAccordionItem$1, factoryCreateAccordion } from "@agnos-ui/core/components/accordion";
import { c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfigExtraProps = {
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0
};
const defaultPropsWithoutOverride = {
  ...getAccordionDefaultConfig$1(),
  ...defaultConfigExtraProps
};
const accordionItemProps = Object.keys(defaultPropsWithoutOverride);
const createAccordionItem = extendWidgetProps(createAccordionItem$1, defaultConfigExtraProps);
const coreOverride = {
  itemTransition: collapseVerticalTransition
};
function getAccordionDefaultConfig() {
  return { ...defaultPropsWithoutOverride, ...coreOverride };
}
const createAccordion = factoryCreateAccordion(
  createAccordionItem,
  accordionItemProps,
  getAccordionDefaultConfig()
);
export {
  createAccordion as a,
  createAccordionItem as c,
  getAccordionDefaultConfig as g
};
`;export{o as default};
