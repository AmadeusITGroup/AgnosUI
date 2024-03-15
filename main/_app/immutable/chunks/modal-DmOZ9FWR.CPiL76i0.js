const t=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { createModal } from "@agnos-ui/react-headless/components/modal";
import { Portal } from "@agnos-ui/react-headless/utils/portal";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import ReactDOM from "react-dom/client";
import { forwardRef, useImperativeHandle } from "react";
const DefaultSlotHeader = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("h5", { className: "modal-title", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotTitle, props: slotContext }) }),
  !slotContext.state.closeButton ? null : /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "btn-close",
      "aria-label": slotContext.state.ariaCloseButtonLabel,
      onClick: slotContext.widget.actions.closeButtonClick
    }
  )
] });
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  !slotContext.state.slotTitle ? null : /* @__PURE__ */ jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }) }),
  /* @__PURE__ */ jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  !slotContext.state.slotFooter ? null : /* @__PURE__ */ jsx("div", { className: "modal-footer", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotFooter, props: slotContext }) })
] });
const defaultConfig = {
  slotHeader: DefaultSlotHeader,
  slotStructure: DefaultSlotStructure
};
const Modal = forwardRef(function Modal2(props, ref) {
  const [state, widget] = useWidgetWithConfig(createModal, props, "modal", { ...defaultConfig, slotDefault: props.children });
  useImperativeHandle(ref, () => widget.api, []);
  const refSetBackdrop = useDirective(widget.directives.backdropDirective);
  const refSetModal = useDirective(widget.directives.modalDirective);
  const slotContext = {
    state,
    widget: toSlotContextWidget(widget)
  };
  return /* @__PURE__ */ jsxs(Portal, { container: state.container, children: [
    state.backdropHidden ? null : /* @__PURE__ */ jsx("div", { className: \`modal-backdrop \${state.backdropClass}\`, ref: refSetBackdrop }),
    state.hidden ? null : /* @__PURE__ */ jsx("div", { className: \`modal d-block \${state.className}\`, ref: refSetModal, onClick: widget.actions.modalClick, children: /* @__PURE__ */ jsx("div", { className: "modal-dialog", children: /* @__PURE__ */ jsx("div", { className: "modal-content", children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) }) }) })
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
  openModal as o
};
`;export{t as default};
