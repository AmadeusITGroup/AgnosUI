const t=`import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createModal } from '@agnos-ui/react-headless/components/modal';
import { Portal } from '@agnos-ui/react-headless/utils/portal';
import { toSlotContextWidget } from '@agnos-ui/react-headless/types';
import { Slot } from '@agnos-ui/react-headless/slot';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { useDirective } from '@agnos-ui/react-headless/utils/directive';
import ReactDOM from 'react-dom/client';
import { forwardRef, useImperativeHandle } from 'react';
export * from '@agnos-ui/react-headless/components/modal';
const DefaultSlotHeader = (slotContext) => (_jsxs(_Fragment, { children: [_jsx("h5", { className: "modal-title", children: _jsx(Slot, { slotContent: slotContext.state.slotTitle, props: slotContext }) }), !slotContext.state.closeButton ? null : (_jsx("button", { type: "button", className: "btn-close", "aria-label": slotContext.state.ariaCloseButtonLabel, onClick: slotContext.widget.actions.closeButtonClick }))] }));
const DefaultSlotStructure = (slotContext) => (_jsxs(_Fragment, { children: [!slotContext.state.slotTitle ? null : (_jsx("div", { className: "modal-header", children: _jsx(Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }) })), _jsx("div", { className: "modal-body", children: _jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }), !slotContext.state.slotFooter ? null : (_jsx("div", { className: "modal-footer", children: _jsx(Slot, { slotContent: slotContext.state.slotFooter, props: slotContext }) }))] }));
const defaultConfig = {
    slotHeader: DefaultSlotHeader,
    slotStructure: DefaultSlotStructure,
};
export const Modal = forwardRef(function Modal(props, ref) {
    const [state, widget] = useWidgetWithConfig((createModal), props, 'modal', { ...defaultConfig, slotDefault: props.children });
    useImperativeHandle(ref, () => widget.api, []);
    const refSetBackdrop = useDirective(widget.directives.backdropDirective);
    const refSetModal = useDirective(widget.directives.modalDirective);
    const slotContext = {
        state,
        widget: toSlotContextWidget(widget),
    };
    return (_jsxs(Portal, { container: state.container, children: [state.backdropHidden ? null : _jsx("div", { className: \`modal-backdrop \${state.backdropClass}\`, ref: refSetBackdrop }), state.hidden ? null : (_jsx("div", { className: \`modal d-block \${state.className}\`, ref: refSetModal, onClick: widget.actions.modalClick, children: _jsx("div", { className: "modal-dialog", children: _jsx("div", { className: "modal-content", children: _jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) }) }) }))] }));
});
export async function openModal(options) {
    const root = ReactDOM.createRoot(document.createElement('div'));
    try {
        const api = await new Promise((resolve) => {
            root.render(_jsx(Modal, { ...options, ref: resolve }));
        });
        return await api.open();
    }
    finally {
        root.unmount();
    }
}
`;export{t as default};
