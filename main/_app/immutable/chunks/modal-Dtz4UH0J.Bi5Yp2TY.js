const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const portal = require("@agnos-ui/react-headless/utils/portal");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
const generated_config = require("./generated/config.cjs");
const directive = require("@agnos-ui/react-headless/utils/directive");
const ReactDOM = require("react-dom/client");
const React = require("react");
const modal = require("@agnos-ui/core-bootstrap/components/modal");
const classNames = require("classnames");
const createModal = modal.createModal;
const CloseButton = ({ directive: directive$1 }) => /* @__PURE__ */ jsxRuntime.jsx("button", { className: "btn-close", ...directive.useDirective(directive$1) });
const DefaultSlotHeader = (slotContext) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotTitle, props: slotContext }) }),
    slotContext.state.closeButton && /* @__PURE__ */ jsxRuntime.jsx(CloseButton, { directive: slotContext.widget.directives.closeButtonDirective })
  ] });
};
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.slotTitle && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  slotContext.state.slotFooter && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotFooter, props: slotContext }) })
] });
const defaultConfig = {
  slotHeader: DefaultSlotHeader,
  slotStructure: DefaultSlotStructure
};
const BackdropElement = ({ widget }) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "modal-backdrop"], widget.directives.backdropDirective) });
const ModalElement = (slotContext) => {
  const { fullscreen } = slotContext.state;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "modal d-block"], slotContext.widget.directives.modalDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classNames("modal-dialog", { "modal-fullscreen": fullscreen }), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotStructure, props: slotContext }) }) }) });
};
const Modal = React.forwardRef(function Modal2(props, ref) {
  const [state, widget] = generated_config.useWidgetWithConfig(createModal, props, "modal", { ...defaultConfig, slotDefault: props.children });
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
exports.createModal = createModal;
exports.openModal = openModal;
`;export{t as default};
