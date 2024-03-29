const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const accordion = require("@agnos-ui/react-headless/components/accordion");
const slot = require("@agnos-ui/react-headless/slot");
const React = require("react");
const config = require("@agnos-ui/react-headless/config");
const directive = require("@agnos-ui/react-headless/utils/directive");
const Header = (props) => {
  const headerSetRef = directive.useDirective(props.directive);
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsxRuntime.jsx(Heading, { className: "accordion-header", ref: headerSetRef, children: props.children });
};
const AccordionDIContext = React.createContext({});
const DefaultSlotStructure = (slotContext) => {
  const bodyContainerSetRef = directive.useDirective(slotContext.widget.directives.bodyContainerDirective);
  const bodySetRef = directive.useDirective(slotContext.widget.directives.bodyDirective);
  const buttonSetRef = directive.useDirective(slotContext.widget.directives.buttonDirective);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Header, { directive: slotContext.widget.directives.headerDirective, headerTag: slotContext.state.itemHeadingTag, children: /* @__PURE__ */ jsxRuntime.jsx("button", { className: "accordion-button", ref: buttonSetRef, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItemHeader, props: slotContext }) }) }),
    slotContext.state.shouldBeInDOM ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "accordion-collapse", ref: bodyContainerSetRef, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "accordion-body", ref: bodySetRef, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItemBody, props: slotContext }) }) }) : null
  ] });
};
const defaultConfig = {
  slotItemStructure: DefaultSlotStructure
};
const AccordionItem = React.forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = React.useContext(AccordionDIContext);
    const [state, widget] = config.useWidgetWithConfig(registerItem, props, null, {
      ...defaultConfig
    });
    const slotContext = {
      state,
      widget
    };
    const refSetAccordionItem = directive.useDirective(widget.directives.accordionItemDirective);
    React.useImperativeHandle(ref, () => widget.api, []);
    React.useEffect(() => {
      widget.api.initDone();
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`accordion-item \${state.itemClass}\`, id: state.itemId, ref: refSetAccordionItem, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotItemStructure, props: slotContext }) });
  }
);
const Accordion = React.forwardRef(
  function Accordion2(props, ref) {
    const widget = config.useWidgetWithConfig(accordion.createAccordion, props, "accordion")[1];
    React.useImperativeHandle(ref, () => widget.api, []);
    const refSetAccordion = directive.useDirective(widget.directives.accordionDirective);
    return /* @__PURE__ */ jsxRuntime.jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "accordion", ref: refSetAccordion, children: props.children }) });
  }
);
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
`;export{e as default};
