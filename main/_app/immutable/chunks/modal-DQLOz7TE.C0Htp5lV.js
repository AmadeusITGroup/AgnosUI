const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const portal = require("@agnos-ui/react-headless/utils/portal");
const clsx = require("clsx");
const React = require("react");
const ReactDOM = require("react-dom/client");
const generated_config = require("./generated/config.cjs");
const modal = require("@agnos-ui/core-bootstrap/components/modal");
const export_getModalDefaultConfig = modal.getModalDefaultConfig;
const export_createModal = modal.createModal;
const export_modalOutsideClick = modal.modalOutsideClick;
const export_modalCloseButtonClick = modal.modalCloseButtonClick;
const CloseButton = ({ directive: directive$1 }) => /* @__PURE__ */ jsxRuntime.jsx("button", { className: "btn-close", ...directive.useDirective(directive$1) });
const ModalDefaultSlotHeader = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.title, props: slotContext }) }),
  slotContext.state.closeButton && /* @__PURE__ */ jsxRuntime.jsx(CloseButton, { directive: slotContext.directives.closeButtonDirective })
] });
const ModalDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.title && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.footer && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.footer, props: slotContext }) })
] });
const BackdropElement = ({ directives }) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "modal-backdrop"], directives.backdropDirective) });
const ModalElement = (slotContext) => {
  const { fullscreen } = slotContext.state;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "modal d-block"], slotContext.directives.modalDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: clsx("modal-dialog", { "modal-fullscreen": fullscreen }), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext }) }) }) });
};
function Modal(props) {
  const widgetContext = generated_config.useWidgetWithConfig(export_createModal, props, "modal", {
    header: ModalDefaultSlotHeader,
    structure: ModalDefaultSlotStructure
  });
  React.useImperativeHandle(props.ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsxRuntime.jsxs(portal.Portal, { container: widgetContext.state.container, children: [
    !widgetContext.state.backdropHidden && /* @__PURE__ */ jsxRuntime.jsx(BackdropElement, { ...widgetContext }),
    !widgetContext.state.hidden && /* @__PURE__ */ jsxRuntime.jsx(ModalElement, { ...widgetContext })
  ] });
}
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
exports.ModalDefaultSlotHeader = ModalDefaultSlotHeader;
exports.ModalDefaultSlotStructure = ModalDefaultSlotStructure;
exports.export_createModal = export_createModal;
exports.export_getModalDefaultConfig = export_getModalDefaultConfig;
exports.export_modalCloseButtonClick = export_modalCloseButtonClick;
exports.export_modalOutsideClick = export_modalOutsideClick;
exports.openModal = openModal;
`;export{t as default};
