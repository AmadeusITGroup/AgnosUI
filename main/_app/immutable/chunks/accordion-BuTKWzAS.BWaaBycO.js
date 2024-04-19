const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const directive = require("@agnos-ui/react-headless/utils/directive");
const accordion = require("@agnos-ui/core-bootstrap/components/accordion");
const createAccordion = accordion.createAccordion;
const Header = (props) => {
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsxRuntime.jsx(Heading, { className: "accordion-header", ...directive.useDirective(props.directive), children: props.children });
};
const ItemContent = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "accordion-collapse", ...directive.useDirective(slotContext.widget.directives.bodyContainerDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "accordion-body", ...directive.useDirective(slotContext.widget.directives.bodyDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItemBody, props: slotContext }) }) });
const AccordionDIContext = React.createContext({});
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(Header, { directive: slotContext.widget.directives.headerDirective, headerTag: slotContext.state.itemHeadingTag, children: /* @__PURE__ */ jsxRuntime.jsx("button", { className: "accordion-button", ...directive.useDirective(slotContext.widget.directives.buttonDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItemHeader, props: slotContext }) }) }),
  slotContext.state.shouldBeInDOM && /* @__PURE__ */ jsxRuntime.jsx(ItemContent, { ...slotContext })
] });
const defaultConfig = {
  slotItemStructure: DefaultSlotStructure
};
const AccordionItem = React.forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = React.useContext(AccordionDIContext);
    const [state, widget] = generated_config.useWidgetWithConfig(registerItem, props, null, {
      ...defaultConfig
    });
    const slotContext = {
      state,
      widget
    };
    React.useImperativeHandle(ref, () => widget.api, []);
    React.useEffect(() => {
      widget.api.initDone();
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`accordion-item \${state.itemClass}\`, ...directive.useDirective(widget.directives.accordionItemDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotItemStructure, props: slotContext }) });
  }
);
const Accordion = React.forwardRef(
  function Accordion2(props, ref) {
    const widget = generated_config.useWidgetWithConfig(createAccordion, props, "accordion")[1];
    React.useImperativeHandle(ref, () => widget.api, []);
    return /* @__PURE__ */ jsxRuntime.jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "accordion", ...directive.useDirective(widget.directives.accordionDirective), children: props.children }) });
  }
);
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.createAccordion = createAccordion;
`;export{e as default};
