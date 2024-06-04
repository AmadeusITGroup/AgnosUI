const e=`"use strict";
const accordion = require("@agnos-ui/core/components/accordion");
const collapse = require("./collapse-sUYbZqEx.cjs");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  slotItemStructure: void 0
};
const defaultConfigItemExtraProps = {
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0
};
const defaultPropsWithoutOverride = {
  ...accordion.getAccordionDefaultConfig(),
  ...defaultConfigExtraProps
};
const accordionItemDefaultConfig = {
  animated: false,
  transition: collapse.collapseVerticalTransition,
  destroyOnHide: false,
  onShown: () => {
  },
  onHidden: () => {
  },
  onVisibleChange: () => {
  },
  visible: false,
  disabled: false,
  id: "",
  headerClassName: "",
  buttonClassName: "",
  bodyContainerClassName: "",
  bodyClassName: "",
  headingTag: "",
  className: "",
  slotItemStructure: void 0,
  slotItemBody: void 0,
  slotItemHeader: void 0
};
const accordionItemProps = Object.keys(accordionItemDefaultConfig);
const createAccordionItem = extendWidget.extendWidgetProps(accordion.createAccordionItem, defaultConfigItemExtraProps);
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
`;export{e as default};
