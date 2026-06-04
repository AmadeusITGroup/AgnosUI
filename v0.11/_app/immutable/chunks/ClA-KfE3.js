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
  const HeadingTag = \`h\${props.headingLevel}\`;
  return React.createElement(HeadingTag, { ...directive.useDirectives([directive.classDirective, "accordion-header"], props.directive) }, props.children);
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion-collapse"], slotContext.directives.bodyContainerDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion-body"], slotContext.directives.bodyDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
const AccordionDIContext = React.createContext({});
const AccordionItemDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(Header, { directive: slotContext.directives.headerDirective, headingLevel: slotContext.state.headingLevel, children: /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "accordion-button"], slotContext.directives.buttonDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsxRuntime.jsx(ItemContent, { ...slotContext })
] });
function AccordionItem({ ref, ...props }) {
  const { registerItem } = React.useContext(AccordionDIContext);
  const id = React.useId();
  const widgetContext = generated_config.useWidget(registerItem, props, {
    structure: AccordionItemDefaultSlotStructure,
    id
  });
  const { state, api, directives } = widgetContext;
  React.useImperativeHandle(ref, () => api, [api]);
  React.useEffect(() => {
    api.initDone();
  }, [api]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, \`accordion-item \${state.className}\`], directives.itemDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.structure, props: widgetContext }) });
}
function Accordion({ ref, ...props }) {
  const widget = generated_config.useWidget(export_createAccordion, props);
  React.useImperativeHandle(ref, () => widget.api, [widget.api]);
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionDIContext, { value: widget.api, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "accordion"], widget.directives.accordionDirective), children: props.children }) });
}
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionItemDefaultSlotStructure = AccordionItemDefaultSlotStructure;
exports.export_createAccordion = export_createAccordion;
exports.export_createAccordionItem = export_createAccordionItem;
exports.export_factoryCreateAccordion = export_factoryCreateAccordion;
exports.export_getAccordionDefaultConfig = export_getAccordionDefaultConfig;
`;export{e as default};
