const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const accordion = require("@agnos-ui/react-headless/components/accordion");
const slot = require("@agnos-ui/react-headless/slot");
const React = require("react");
const config = require("@agnos-ui/react-headless/config");
const directive = require("@agnos-ui/react-headless/utils/directive");
const AccordionDIContext = React.createContext({});
const DefaultSlotStructure = (slotContext) => {
  const collapseSetRef = directive.useDirective(slotContext.widget.directives.collapseDirective);
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(slotContext.state.itemHeadingTag) ? slotContext.state.itemHeadingTag : "h2";
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Heading, { className: \`accordion-header \${slotContext.state.itemHeaderClass}\`, children: /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        id: \`\${slotContext.state.itemId}-toggle\`,
        onClick: slotContext.widget.actions.click,
        className: \`accordion-button \${slotContext.state.itemButtonClass} \${slotContext.state.itemVisible ? "" : "collapsed"}\`,
        disabled: slotContext.state.itemDisabled,
        "aria-controls": \`\${slotContext.state.itemId}-collapse\`,
        "aria-disabled": slotContext.state.itemDisabled,
        "aria-expanded": slotContext.state.itemVisible,
        children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItemHeader, props: slotContext })
      }
    ) }),
    slotContext.state.shouldBeInDOM ? /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: \`accordion-collapse \${slotContext.state.itemBodyContainerClass}\`,
        id: \`\${slotContext.state.itemId}-collapse\`,
        "aria-labelledby": \`\${slotContext.state.itemId}-toggle\`,
        ref: collapseSetRef,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`accordion-body \${slotContext.state.itemBodyClass}\`, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotItemBody, props: slotContext }) })
      }
    ) : null
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
    const [state, widget] = config.useWidgetWithConfig(accordion.createAccordion, props, "accordion");
    React.useImperativeHandle(ref, () => widget.api, []);
    const refSetAccordion = directive.useDirective(widget.directives.accordionDirective);
    return /* @__PURE__ */ jsxRuntime.jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`accordion \${state.className}\`, ref: refSetAccordion, children: props.children }) });
  }
);
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
`;export{t as default};
