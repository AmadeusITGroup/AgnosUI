const t=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createAccordion } from "@agnos-ui/react-headless/components/accordion";
import { Slot } from "@agnos-ui/react-headless/slot";
import { createContext, forwardRef, useContext, useImperativeHandle, useEffect } from "react";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
const AccordionDIContext = createContext({});
const DefaultSlotStructure = (slotContext) => {
  const collapseSetRef = useDirective(slotContext.widget.directives.collapseDirective);
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(slotContext.state.itemHeadingTag) ? slotContext.state.itemHeadingTag : "h2";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Heading, { className: \`accordion-header \${slotContext.state.itemHeaderClass}\`, children: /* @__PURE__ */ jsx(
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
        children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotItemHeader, props: slotContext })
      }
    ) }),
    slotContext.state.shouldBeInDOM ? /* @__PURE__ */ jsx(
      "div",
      {
        className: \`accordion-collapse \${slotContext.state.itemBodyContainerClass}\`,
        id: \`\${slotContext.state.itemId}-collapse\`,
        "aria-labelledby": \`\${slotContext.state.itemId}-toggle\`,
        ref: collapseSetRef,
        children: /* @__PURE__ */ jsx("div", { className: \`accordion-body \${slotContext.state.itemBodyClass}\`, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotItemBody, props: slotContext }) })
      }
    ) : null
  ] });
};
const defaultConfig = {
  slotItemStructure: DefaultSlotStructure
};
const AccordionItem = forwardRef(
  function AccordionItem2(props, ref) {
    const { registerItem } = useContext(AccordionDIContext);
    const [state, widget] = useWidgetWithConfig(registerItem, props, null, {
      ...defaultConfig
    });
    const slotContext = {
      state,
      widget
    };
    const refSetAccordionItem = useDirective(widget.directives.accordionItemDirective);
    useImperativeHandle(ref, () => widget.api, []);
    useEffect(() => {
      widget.api.initDone();
    }, []);
    return /* @__PURE__ */ jsx("div", { className: \`accordion-item \${state.itemClass}\`, id: state.itemId, ref: refSetAccordionItem, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotItemStructure, props: slotContext }) });
  }
);
const Accordion = forwardRef(
  function Accordion2(props, ref) {
    const [state, widget] = useWidgetWithConfig(createAccordion, props, "accordion");
    useImperativeHandle(ref, () => widget.api, []);
    const refSetAccordion = useDirective(widget.directives.accordionDirective);
    return /* @__PURE__ */ jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsx("div", { className: \`accordion \${state.className}\`, ref: refSetAccordion, children: props.children }) });
  }
);
export {
  AccordionItem as A,
  Accordion as a
};
`;export{t as default};
