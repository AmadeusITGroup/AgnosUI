const t=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { useDirectives, classDirective, useDirective } from "@agnos-ui/react-headless/utils/directive";
import { Portal } from "@agnos-ui/react-headless/utils/portal";
import classNames from "classnames";
import { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom/client";
import { useWidgetWithConfig } from "./generated/config.js";
import { getModalDefaultConfig, createModal, modalOutsideClick, modalCloseButtonClick } from "@agnos-ui/core-bootstrap/components/modal";
const export_getModalDefaultConfig = getModalDefaultConfig;
const export_createModal = createModal;
const export_modalOutsideClick = modalOutsideClick;
const export_modalCloseButtonClick = modalCloseButtonClick;
const CloseButton = ({ directive }) => /* @__PURE__ */ jsx("button", { className: "btn-close", ...useDirective(directive) });
const DefaultSlotHeader = (slotContext) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.title, props: slotContext }) }),
    slotContext.state.closeButton && /* @__PURE__ */ jsx(CloseButton, { directive: slotContext.widget.directives.closeButtonDirective })
  ] });
};
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.title && /* @__PURE__ */ jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }) }),
  /* @__PURE__ */ jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.footer && /* @__PURE__ */ jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.footer, props: slotContext }) })
] });
const defaultConfig = {
  header: DefaultSlotHeader,
  structure: DefaultSlotStructure
};
const BackdropElement = ({ widget }) => /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "modal-backdrop"], widget.directives.backdropDirective) });
const ModalElement = (slotContext) => {
  const { fullscreen } = slotContext.state;
  return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "modal d-block"], slotContext.widget.directives.modalDirective), children: /* @__PURE__ */ jsx("div", { className: classNames("modal-dialog", { "modal-fullscreen": fullscreen }), children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.structure, props: slotContext }) }) }) });
};
const Modal = forwardRef(function Modal2(props, ref) {
  const [state, widget] = useWidgetWithConfig(export_createModal, props, "modal", defaultConfig);
  useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget: toSlotContextWidget(widget)
  };
  return /* @__PURE__ */ jsxs(Portal, { container: state.container, children: [
    !state.backdropHidden && /* @__PURE__ */ jsx(BackdropElement, { ...slotContext }),
    !state.hidden && /* @__PURE__ */ jsx(ModalElement, { ...slotContext })
  ] });
});
async function openModal(options) {
  const root = ReactDOM.createRoot(document.createElement("div"));
  try {
    const api = await new Promise((resolve) => {
      root.render(/* @__PURE__ */ jsx(Modal, { ...options, ref: resolve }));
    });
    return await api.open();
  } finally {
    root.unmount();
  }
}
export {
  Modal as M,
  export_createModal as a,
  export_modalOutsideClick as b,
  export_modalCloseButtonClick as c,
  export_getModalDefaultConfig as e,
  openModal as o
};
`;export{t as default};