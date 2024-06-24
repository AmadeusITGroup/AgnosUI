const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const directive = require("@agnos-ui/react-headless/utils/directive");
const accordion = require("@agnos-ui/core-bootstrap/components/accordion");
const createAccordion = accordion.createAccordion;
const getAccordionDefaultConfig = accordion.getAccordionDefaultConfig;
const createAccordionItem = accordion.createAccordionItem;
const Header = (props) => {
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsxRuntime.jsx(Heading, { ...directive.useDirectives([directive.classDirective, "accordion-header"], props.directive), children: props.children });
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion-collapse"], slotContext.widget.directives.bodyContainerDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion-body"], slotContext.widget.directives.bodyDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = React.createContext({});
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(Header, { directive: slotContext.widget.directives.headerDirective, headerTag: slotContext.state.headingTag, children: /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "accordion-button"], slotContext.widget.directives.buttonDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsxRuntime.jsx(ItemContent, { ...slotContext })
] });
const defaultConfig = {
  structure: DefaultSlotStructure
};
const AccordionItem = React.forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = React.useContext(AccordionDIContext);
    const [state, widget] = generated_config.useWidgetWithConfig(registerItem, props, null, defaultConfig);
    const slotContext = {
      state,
      widget
    };
    React.useImperativeHandle(ref, () => widget.api, []);
    React.useEffect(() => {
      widget.api.initDone();
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, \`accordion-item \${state.className}\`], widget.directives.itemDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.structure, props: slotContext }) });
  }
);
const Accordion = React.forwardRef(
  function Accordion2(props, ref) {
    const widget = generated_config.useWidgetWithConfig(createAccordion, props, "accordion")[1];
    React.useImperativeHandle(ref, () => widget.api, []);
    return /* @__PURE__ */ jsxRuntime.jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion"], widget.directives.accordionDirective), children: props.children }) });
  }
);
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.createAccordion = createAccordion;
exports.createAccordionItem = createAccordionItem;
exports.getAccordionDefaultConfig = getAccordionDefaultConfig;
`;export{e as default};
