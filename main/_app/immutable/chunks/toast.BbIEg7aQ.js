const t=`import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createToast } from '@agnos-ui/react-headless/components/toast';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { Slot } from '@agnos-ui/react-headless/slot';
import { useDirectives } from '@agnos-ui/react-headless/utils/directive';
import { forwardRef, useImperativeHandle } from 'react';
export * from '@agnos-ui/react-headless/components/toast';
const DefaultSlotStructure = (slotContext) => (_jsxs(_Fragment, { children: [slotContext.state.slotHeader ? (_jsxs("div", { className: "toast-header", children: [_jsx(Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }), slotContext.state.dismissible ? (_jsx("button", { type: "button", className: "btn-close me-0 ms-auto", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })) : null] })) : null, _jsx("div", { className: "toast-body", children: _jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }), slotContext.state.dismissible && !slotContext.state.slotHeader ? (_jsx("button", { type: "button", className: "btn-close btn-close-white me-2 m-auto", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })) : null] }));
const defaultConfig = {
    slotStructure: DefaultSlotStructure,
};
export const Toast = forwardRef(function Toast(props, ref) {
    const [state, widget] = useWidgetWithConfig(createToast, props, 'toast', { ...defaultConfig, slotDefault: props.children });
    const refToast = useDirectives([widget.directives.transitionDirective, widget.directives.autoHideDirective]);
    useImperativeHandle(ref, () => widget.api, []);
    const slotContext = {
        state,
        widget,
    };
    return (_jsx(_Fragment, { children: state.hidden ? null : (_jsx("div", { className: \`au-toast toast \${state.className} \${state.dismissible ? 'toast-dismissible' : ''} \${!state.slotHeader ? 'd-flex' : ''}\`, role: "alert", ref: refToast, "aria-atomic": "true", children: _jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) })) }));
});
`;export{t as default};
