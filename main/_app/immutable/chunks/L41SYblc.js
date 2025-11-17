const e=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { useContext, createContext, useId, useImperativeHandle, useEffect, createElement } from "react";
import { useWidget } from "./generated/config.js";
import { getAccordionDefaultConfig, createAccordionItem, createAccordion, factoryCreateAccordion } from "@agnos-ui/core-bootstrap/components/accordion";
const export_getAccordionDefaultConfig = getAccordionDefaultConfig;
const export_createAccordionItem = createAccordionItem;
const export_createAccordion = createAccordion;
const export_factoryCreateAccordion = factoryCreateAccordion;
const Header = (props) => {
  const HeadingTag = \`h\${props.headingLevel}\`;
  return createElement(HeadingTag, { ...useDirectives([classDirective, "accordion-header"], props.directive) }, props.children);
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-collapse"], slotContext.directives.bodyContainerDirective), children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-body"], slotContext.directives.bodyDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = createContext({});
const AccordionItemDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Header, { directive: slotContext.directives.headerDirective, headingLevel: slotContext.state.headingLevel, children: /* @__PURE__ */ jsx("button", { ...useDirectives([classDirective, "accordion-button"], slotContext.directives.buttonDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsx(ItemContent, { ...slotContext })
] });
function AccordionItem(props) {
  const { registerItem } = useContext(AccordionDIContext);
  const id = useId();
  const widgetContext = useWidget(registerItem, props, {
    structure: AccordionItemDefaultSlotStructure,
    id
  });
  const { state, api, directives } = widgetContext;
  useImperativeHandle(props.ref, () => api, [api]);
  useEffect(() => {
    api.initDone();
  }, [api]);
  return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, \`accordion-item \${state.className}\`], directives.itemDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: widgetContext }) });
}
function Accordion(props) {
  const widget = useWidget(export_createAccordion, props);
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
