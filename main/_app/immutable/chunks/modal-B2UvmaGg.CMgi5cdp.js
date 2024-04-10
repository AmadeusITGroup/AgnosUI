const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const modal = require("@agnos-ui/react-headless/components/modal");
const portal = require("@agnos-ui/react-headless/utils/portal");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
const generated_config = require("./generated/config.cjs");
const directive = require("@agnos-ui/react-headless/utils/directive");
const ReactDOM = require("react-dom/client");
const React = require("react");
const DefaultSlotHeader = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotTitle, props: slotContext }) }),
  !slotContext.state.closeButton ? null : /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      className: "btn-close",
      "aria-label": slotContext.state.ariaCloseButtonLabel,
      onClick: slotContext.widget.actions.closeButtonClick
    }
  )
] });
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  !slotContext.state.slotTitle ? null : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  !slotContext.state.slotFooter ? null : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotFooter, props: slotContext }) })
] });
const defaultConfig = {
  slotHeader: DefaultSlotHeader,
  slotStructure: DefaultSlotStructure
};
const Modal = React.forwardRef(function Modal2(props, ref) {
  const [state, widget] = generated_config.useWidgetWithConfig(modal.createModal, props, "modal", { ...defaultConfig, slotDefault: props.children });
  React.useImperativeHandle(ref, () => widget.api, []);
  const refSetBackdrop = directive.useDirective(widget.directives.backdropDirective);
  const refSetModal = directive.useDirective(widget.directives.modalDirective);
  const slotContext = {
    state,
    widget: types.toSlotContextWidget(widget)
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(portal.Portal, { container: state.container, children: [
    state.backdropHidden ? null : /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`modal-backdrop \${state.backdropClass}\`, ...refSetBackdrop }),
    state.hidden ? null : /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`modal d-block \${state.className}\`, onClick: widget.actions.modalClick, ...refSetModal, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-dialog", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) }) }) })
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
exports.openModal = openModal;
`;export{t as default};
