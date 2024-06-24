const e=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { createContext, forwardRef, useContext, useImperativeHandle, useEffect } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { createAccordion as createAccordion$1, getAccordionDefaultConfig as getAccordionDefaultConfig$1, createAccordionItem as createAccordionItem$1 } from "@agnos-ui/core-bootstrap/components/accordion";
const createAccordion = createAccordion$1;
const getAccordionDefaultConfig = getAccordionDefaultConfig$1;
const createAccordionItem = createAccordionItem$1;
const Header = (props) => {
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsx(Heading, { ...useDirectives([classDirective, "accordion-header"], props.directive), children: props.children });
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-collapse"], slotContext.widget.directives.bodyContainerDirective), children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion-body"], slotContext.widget.directives.bodyDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = createContext({});
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Header, { directive: slotContext.widget.directives.headerDirective, headerTag: slotContext.state.headingTag, children: /* @__PURE__ */ jsx("button", { ...useDirectives([classDirective, "accordion-button"], slotContext.widget.directives.buttonDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsx(ItemContent, { ...slotContext })
] });
const defaultConfig = {
  structure: DefaultSlotStructure
};
const AccordionItem = forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = useContext(AccordionDIContext);
    const [state, widget] = useWidgetWithConfig(registerItem, props, null, defaultConfig);
    const slotContext = {
      state,
      widget
    };
    useImperativeHandle(ref, () => widget.api, []);
    useEffect(() => {
      widget.api.initDone();
    }, []);
    return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, \`accordion-item \${state.className}\`], widget.directives.itemDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: slotContext }) });
  }
);
const Accordion = forwardRef(
  function Accordion2(props, ref) {
    const widget = useWidgetWithConfig(createAccordion, props, "accordion")[1];
    useImperativeHandle(ref, () => widget.api, []);
    return /* @__PURE__ */ jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "accordion"], widget.directives.accordionDirective), children: props.children }) });
  }
);
export {
  AccordionItem as A,
  createAccordionItem as a,
  Accordion as b,
  createAccordion as c,
  getAccordionDefaultConfig as g
};
`;export{e as default};
