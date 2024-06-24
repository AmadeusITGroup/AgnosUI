const n=`"use strict";
const accordion = require("@agnos-ui/core/components/accordion");
const collapse = require("./collapse-sUYbZqEx.cjs");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  itemStructure: void 0
};
const defaultConfigItemExtraProps = {
  structure: void 0,
  children: void 0,
  header: void 0
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
  structure: void 0,
  children: void 0,
  header: void 0
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
`;export{n as default};
