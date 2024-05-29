const t=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Portal } from "@agnos-ui/react-headless/utils/portal";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useWidgetWithConfig } from "./generated/config.js";
import { useDirectives, classDirective, useDirective } from "@agnos-ui/react-headless/utils/directive";
import ReactDOM from "react-dom/client";
import { forwardRef, useImperativeHandle } from "react";
import { createModal as createModal$1 } from "@agnos-ui/core-bootstrap/components/modal";
import classNames from "classnames";
const createModal = createModal$1;
const CloseButton = ({ directive }) => /* @__PURE__ */ jsx("button", { className: "btn-close", ...useDirective(directive) });
const DefaultSlotHeader = (slotContext) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotTitle, props: slotContext }) }),
    slotContext.state.closeButton && /* @__PURE__ */ jsx(CloseButton, { directive: slotContext.widget.directives.closeButtonDirective })
  ] });
};
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.slotTitle && /* @__PURE__ */ jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }) }),
  /* @__PURE__ */ jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  slotContext.state.slotFooter && /* @__PURE__ */ jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotFooter, props: slotContext }) })
] });
const defaultConfig = {
  slotHeader: DefaultSlotHeader,
  slotStructure: DefaultSlotStructure
};
const BackdropElement = ({ widget }) => /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "modal-backdrop"], widget.directives.backdropDirective) });
const ModalElement = (slotContext) => {
  const { fullscreen } = slotContext.state;
  return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "modal d-block"], slotContext.widget.directives.modalDirective), children: /* @__PURE__ */ jsx("div", { className: classNames("modal-dialog", { "modal-fullscreen": fullscreen }), children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotStructure, props: slotContext }) }) }) });
};
const Modal = forwardRef(function Modal2(props, ref) {
  const [state, widget] = useWidgetWithConfig(createModal, props, "modal", { ...defaultConfig, slotDefault: props.children });
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
  createModal as c,
  openModal as o
};
`;export{t as default};
