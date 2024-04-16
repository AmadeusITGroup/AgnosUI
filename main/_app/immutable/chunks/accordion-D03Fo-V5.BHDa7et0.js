const e=`"use strict";
const accordion = require("@agnos-ui/core/components/accordion");
const collapse = require("./collapse-sUYbZqEx.cjs");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const coreOverride = {
  itemTransition: collapse.collapseVerticalTransition
};
function getAccordionDefaultConfig() {
  return { ...accordion.getAccordionDefaultConfig(), ...coreOverride };
}
const createAccordion = extendWidget.extendWidgetProps(accordion.createAccordion, {}, {}, coreOverride);
exports.createAccordion = createAccordion;
exports.getAccordionDefaultConfig = getAccordionDefaultConfig;
`;export{e as default};
