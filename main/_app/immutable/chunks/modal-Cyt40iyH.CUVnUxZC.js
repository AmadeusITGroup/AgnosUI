const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const types = require("@agnos-ui/react-headless/types");
const directive = require("@agnos-ui/react-headless/utils/directive");
const portal = require("@agnos-ui/react-headless/utils/portal");
const classNames = require("classnames");
const React = require("react");
const ReactDOM = require("react-dom/client");
const generated_config = require("./generated/config.cjs");
const modal = require("@agnos-ui/core-bootstrap/components/modal");
const export_getModalDefaultConfig = modal.getModalDefaultConfig;
const export_createModal = modal.createModal;
const export_modalOutsideClick = modal.modalOutsideClick;
const export_modalCloseButtonClick = modal.modalCloseButtonClick;
const CloseButton = ({ directive: directive$1 }) => /* @__PURE__ */ jsxRuntime.jsx("button", { className: "btn-close", ...directive.useDirective(directive$1) });
const DefaultSlotHeader = (slotContext) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.title, props: slotContext }) }),
    slotContext.state.closeButton && /* @__PURE__ */ jsxRuntime.jsx(CloseButton, { directive: slotContext.widget.directives.closeButtonDirective })
  ] });
};
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.title && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.footer && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.footer, props: slotContext }) })
] });
const defaultConfig = {
  header: DefaultSlotHeader,
  structure: DefaultSlotStructure
};
const BackdropElement = ({ widget }) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "modal-backdrop"], widget.directives.backdropDirective) });
const ModalElement = (slotContext) => {
  const { fullscreen } = slotContext.state;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "modal d-block"], slotContext.widget.directives.modalDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classNames("modal-dialog", { "modal-fullscreen": fullscreen }), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext }) }) }) });
};
const Modal = React.forwardRef(function Modal2(props, ref) {
  const [state, widget] = generated_config.useWidgetWithConfig(export_createModal, props, "modal", defaultConfig);
  React.useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget: types.toSlotContextWidget(widget)
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(portal.Portal, { container: state.container, children: [
    !state.backdropHidden && /* @__PURE__ */ jsxRuntime.jsx(BackdropElement, { ...slotContext }),
    !state.hidden && /* @__PURE__ */ jsxRuntime.jsx(ModalElement, { ...slotContext })
  ] });
});
async function openModal(options) {
  const root = ReactDOM.createRoot(document.createElement("div"));
  try {
    const api = await new Promise((resolve) => {
      root.render(/* @__PURE__ */ jsxRuntime.jsx(Modal, { ...options, ref: resolve }));
    });
    return await api.open();
  } finally {
    root.unmount();
  }
}
exports.Modal = Modal;
exports.export_createModal = export_createModal;
exports.export_getModalDefaultConfig = export_getModalDefaultConfig;
exports.export_modalCloseButtonClick = export_modalCloseButtonClick;
exports.export_modalOutsideClick = export_modalOutsideClick;
exports.openModal = openModal;
`;export{t as default};
