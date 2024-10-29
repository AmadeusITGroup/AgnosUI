const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const accordion = require("@agnos-ui/core-bootstrap/components/accordion");
const export_getAccordionDefaultConfig = accordion.getAccordionDefaultConfig;
const export_createAccordionItem = accordion.createAccordionItem;
const export_createAccordion = accordion.createAccordion;
const export_factoryCreateAccordion = accordion.factoryCreateAccordion;
const Header = (props) => {
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsxRuntime.jsx(Heading, { ...directive.useDirectives([directive.classDirective, "accordion-header"], props.directive), children: props.children });
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion-collapse"], slotContext.directives.bodyContainerDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion-body"], slotContext.directives.bodyDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = React.createContext({});
const AccordionItemDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(Header, { directive: slotContext.directives.headerDirective, headerTag: slotContext.state.headingTag, children: /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "accordion-button"], slotContext.directives.buttonDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsxRuntime.jsx(ItemContent, { ...slotContext })
] });
const AccordionItem = React.forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = React.useContext(AccordionDIContext);
    const widgetContext = generated_config.useWidgetWithConfig(registerItem, props, null, {
      structure: AccordionItemDefaultSlotStructure
    });
    const { state, api, directives } = widgetContext;
    React.useImperativeHandle(ref, () => api, []);
    React.useEffect(() => {
      api.initDone();
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, \`accordion-item \${state.className}\`], directives.itemDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.structure, props: widgetContext }) });
  }
);
const Accordion = React.forwardRef(
  function Accordion2(props, ref) {
    const widget = generated_config.useWidgetWithConfig(export_createAccordion, props, "accordion");
    React.useImperativeHandle(ref, () => widget.api, []);
    return /* @__PURE__ */ jsxRuntime.jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion"], widget.directives.accordionDirective), children: props.children }) });
  }
);
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionItemDefaultSlotStructure = AccordionItemDefaultSlotStructure;
exports.export_createAccordion = export_createAccordion;
exports.export_createAccordionItem = export_createAccordionItem;
exports.export_factoryCreateAccordion = export_factoryCreateAccordion;
exports.export_getAccordionDefaultConfig = export_getAccordionDefaultConfig;
`;export{e as default};
