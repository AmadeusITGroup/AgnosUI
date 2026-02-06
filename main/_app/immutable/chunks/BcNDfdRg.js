const n=`import { factoryCreateAccordion, createAccordionItem as createAccordionItem$1, getAccordionDefaultConfig as getAccordionDefaultConfig$1 } from "@agnos-ui/core/components/accordion";
import { a as collapseVerticalTransition } from "./collapse-B7J7HK0W.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { noop } from "@agnos-ui/core/utils/func";
const defaultConfigExtraProps = {
  itemStructure: void 0
};
const defaultConfigItemExtraProps = {
  structure: void 0,
  children: void 0,
  header: void 0
};
const defaultPropsWithoutOverride = {
  ...getAccordionDefaultConfig$1(),
  ...defaultConfigExtraProps
};
const accordionItemDefaultConfig = {
  animated: false,
  transition: collapseVerticalTransition,
  destroyOnHide: false,
  onShown: noop,
  onHidden: noop,
  onVisibleChange: noop,
  visible: false,
  disabled: false,
  id: "",
  headerClassName: "",
  buttonClassName: "",
  bodyContainerClassName: "",
  bodyClassName: "",
  headingLevel: 2,
  className: "",
  structure: void 0,
  children: void 0,
  header: void 0
};
const accordionItemProps = Object.keys(accordionItemDefaultConfig);
const createAccordionItem = extendWidgetProps(createAccordionItem$1, defaultConfigItemExtraProps);
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
  createAccordionItem as a,
  createAccordion as c,
  getAccordionDefaultConfig as g
};
`;export{n as default};
