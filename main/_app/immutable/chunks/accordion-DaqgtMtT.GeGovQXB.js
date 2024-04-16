const o=`import { getAccordionDefaultConfig as getAccordionDefaultConfig$1, createAccordion as createAccordion$1 } from "@agnos-ui/core/components/accordion";
import { c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const coreOverride = {
  itemTransition: collapseVerticalTransition
};
function getAccordionDefaultConfig() {
  return { ...getAccordionDefaultConfig$1(), ...coreOverride };
}
const createAccordion = extendWidgetProps(createAccordion$1, {}, {}, coreOverride);
export {
  createAccordion as c,
  getAccordionDefaultConfig as g
};
`;export{o as default};
