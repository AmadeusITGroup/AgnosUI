const e=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { useContext, createContext, useImperativeHandle, useEffect } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getAccordionDefaultConfig, createAccordionItem, createAccordion, factoryCreateAccordion } from "@agnos-ui/core-bootstrap/components/accordion";
const export_getAccordionDefaultConfig = getAccordionDefaultConfig;
const export_createAccordionItem = createAccordionItem;
const export_createAccordion = createAccordion;
const export_factoryCreateAccordion = factoryCreateAccordion;
const Header = (props) => {
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsx(Heading, { ...useDirectives([classDirective, "accordion-header"], props.directive), children: props.children });
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-collapse"], slotContext.directives.bodyContainerDirective), children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-body"], slotContext.directives.bodyDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = createContext({});
const AccordionItemDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Header, { directive: slotContext.directives.headerDirective, headerTag: slotContext.state.headingTag, children: /* @__PURE__ */ jsx("button", { ...useDirectives([classDirective, "accordion-button"], slotContext.directives.buttonDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsx(ItemContent, { ...slotContext })
] });
function AccordionItem(props) {
  const { registerItem } = useContext(AccordionDIContext);
  const widgetContext = useWidgetWithConfig(registerItem, props, null, {
    structure: AccordionItemDefaultSlotStructure
  });
  const { state, api, directives } = widgetContext;
  useImperativeHandle(props.ref, () => api, [api]);
  useEffect(() => {
    api.initDone();
  }, [api]);
  return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, \`accordion-item \${state.className}\`], directives.itemDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: widgetContext }) });
}
function Accordion(props) {
  const widget = useWidgetWithConfig(export_createAccordion, props, "accordion");
  useImperativeHandle(props.ref, () => widget.api, [widget.api]);
  return /* @__PURE__ */ jsx(AccordionDIContext, { value: widget.api, children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion"], widget.directives.accordionDirective), children: props.children }) });
}
export {
  AccordionItemDefaultSlotStructure as A,
  AccordionItem as a,
  Accordion as b,
  export_createAccordionItem as c,
  export_createAccordion as d,
  export_getAccordionDefaultConfig as e,
  export_factoryCreateAccordion as f
};
`;export{e as default};
