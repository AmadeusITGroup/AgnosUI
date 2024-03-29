const e=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createAccordion } from "@agnos-ui/react-headless/components/accordion";
import { Slot } from "@agnos-ui/react-headless/slot";
import { createContext, forwardRef, useContext, useImperativeHandle, useEffect } from "react";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
const Header = (props) => {
  const headerSetRef = useDirective(props.directive);
  const re = new RegExp("^h[1-6]$");
  const Heading = re.test(props.headerTag) ? props.headerTag : "h2";
  return /* @__PURE__ */ jsx(Heading, { className: "accordion-header", ref: headerSetRef, children: props.children });
};
const AccordionDIContext = createContext({});
const DefaultSlotStructure = (slotContext) => {
  const bodyContainerSetRef = useDirective(slotContext.widget.directives.bodyContainerDirective);
  const bodySetRef = useDirective(slotContext.widget.directives.bodyDirective);
  const buttonSetRef = useDirective(slotContext.widget.directives.buttonDirective);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, { directive: slotContext.widget.directives.headerDirective, headerTag: slotContext.state.itemHeadingTag, children: /* @__PURE__ */ jsx("button", { className: "accordion-button", ref: buttonSetRef, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotItemHeader, props: slotContext }) }) }),
    slotContext.state.shouldBeInDOM ? /* @__PURE__ */ jsx("div", { className: "accordion-collapse", ref: bodyContainerSetRef, children: /* @__PURE__ */ jsx("div", { className: "accordion-body", ref: bodySetRef, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotItemBody, props: slotContext }) }) }) : null
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
    const widget = useWidgetWithConfig(createAccordion, props, "accordion")[1];
    useImperativeHandle(ref, () => widget.api, []);
    const refSetAccordion = useDirective(widget.directives.accordionDirective);
    return /* @__PURE__ */ jsx(AccordionDIContext.Provider, { value: widget.api, children: /* @__PURE__ */ jsx("div", { className: "accordion", ref: refSetAccordion, children: props.children }) });
  }
);
export {
  AccordionItem as A,
  Accordion as a
};
`;export{e as default};
