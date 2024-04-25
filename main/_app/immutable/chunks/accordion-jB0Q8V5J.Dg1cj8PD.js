const o=`"use strict";
const accordion = require("@agnos-ui/core/components/accordion");
const collapse = require("./collapse-sUYbZqEx.cjs");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0
};
const defaultPropsWithoutOverride = {
  ...accordion.getAccordionDefaultConfig(),
  ...defaultConfigExtraProps
};
const accordionItemProps = Object.keys(defaultPropsWithoutOverride);
const createAccordionItem = extendWidget.extendWidgetProps(accordion.createAccordionItem, defaultConfigExtraProps);
const coreOverride = {
  itemTransition: collapse.collapseVerticalTransition
};
function getAccordionDefaultConfig() {
  return { ...defaultPropsWithoutOverride, ...coreOverride };
}
const createAccordion = accordion.factoryCreateAccordion(
  createAccordionItem,
  accordionItemProps,
  getAccordionDefaultConfig()
);
exports.createAccordion = createAccordion;
exports.createAccordionItem = createAccordionItem;
exports.getAccordionDefaultConfig = getAccordionDefaultConfig;
`;export{o as default};
