const t=`import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordion } from '@agnos-ui/react-headless/components/accordion';
import { Slot } from '@agnos-ui/react-headless/slot';
import { createContext, forwardRef, useContext, useEffect, useImperativeHandle } from 'react';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { useDirective } from '@agnos-ui/react-headless/utils/directive';
export * from '@agnos-ui/react-headless/components/accordion';
const AccordionDIContext = createContext({});
const DefaultSlotStructure = (slotContext) => {
    const collapseSetRef = useDirective(slotContext.widget.directives.collapseDirective);
    const re = new RegExp('^h[1-6]$');
    const Heading = re.test(slotContext.state.itemHeadingTag)
        ? slotContext.state.itemHeadingTag
        : 'h2';
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { className: \`accordion-header \${slotContext.state.itemHeaderClass}\`, children: _jsx("button", { type: "button", id: \`\${slotContext.state.itemId}-toggle\`, onClick: slotContext.widget.actions.click, className: \`accordion-button \${slotContext.state.itemButtonClass} \${slotContext.state.itemVisible ? '' : 'collapsed'}\`, disabled: slotContext.state.itemDisabled, "aria-controls": \`\${slotContext.state.itemId}-collapse\`, "aria-disabled": slotContext.state.itemDisabled, "aria-expanded": slotContext.state.itemVisible, children: _jsx(Slot, { slotContent: slotContext.state.slotItemHeader, props: slotContext }) }) }), slotContext.state.shouldBeInDOM ? (_jsx("div", { className: \`accordion-collapse \${slotContext.state.itemBodyContainerClass}\`, id: \`\${slotContext.state.itemId}-collapse\`, "aria-labelledby": \`\${slotContext.state.itemId}-toggle\`, ref: collapseSetRef, children: _jsx("div", { className: \`accordion-body \${slotContext.state.itemBodyClass}\`, children: _jsx(Slot, { slotContent: slotContext.state.slotItemBody, props: slotContext }) }) })) : null] }));
};
const defaultConfig = {
    slotItemStructure: DefaultSlotStructure,
};
export const AccordionItem = forwardRef(function AccordionItem(props, ref) {
    const { registerItem } = useContext(AccordionDIContext);
    const [state, widget] = useWidgetWithConfig(registerItem, props, null, {
        ...defaultConfig,
    });
    const slotContext = {
        state,
        widget: widget,
    };
    const refSetAccordionItem = useDirective(widget.directives.accordionItemDirective);
    useImperativeHandle(ref, () => widget.api, []);
    useEffect(() => {
        widget.api.initDone();
    }, []);
    return (_jsx("div", { className: \`accordion-item \${state.itemClass}\`, id: state.itemId, ref: refSetAccordionItem, children: _jsx(Slot, { slotContent: state.slotItemStructure, props: slotContext }) }));
});
export const Accordion = forwardRef(function Accordion(props, ref) {
    const [state, widget] = useWidgetWithConfig(createAccordion, props, 'accordion');
    useImperativeHandle(ref, () => widget.api, []);
    const refSetAccordion = useDirective(widget.directives.accordionDirective);
    return (_jsx(AccordionDIContext.Provider, { value: widget.api, children: _jsx("div", { className: \`accordion \${state.className}\`, ref: refSetAccordion, children: props.children }) }));
});
`;export{t as default};
