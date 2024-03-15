const t=`import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { createToast } from "@agnos-ui/react-headless/components/toast";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives } from "@agnos-ui/react-headless/utils/directive";
import { forwardRef, useImperativeHandle } from "react";
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.slotHeader ? /* @__PURE__ */ jsxs("div", { className: "toast-header", children: [
    /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }),
    slotContext.state.dismissible ? /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "btn-close me-0 ms-auto",
        onClick: slotContext.widget.api.close,
        "aria-label": slotContext.state.ariaCloseButtonLabel
      }
    ) : null
  ] }) : null,
  /* @__PURE__ */ jsx("div", { className: "toast-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  slotContext.state.dismissible && !slotContext.state.slotHeader ? /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "btn-close btn-close-white me-2 m-auto",
      onClick: slotContext.widget.api.close,
      "aria-label": slotContext.state.ariaCloseButtonLabel
    }
  ) : null
] });
const defaultConfig = {
  slotStructure: DefaultSlotStructure
};
const Toast = forwardRef(function Toast2(props, ref) {
  const [state, widget] = useWidgetWithConfig(createToast, props, "toast", { ...defaultConfig, slotDefault: props.children });
  const refToast = useDirectives([widget.directives.transitionDirective, widget.directives.autoHideDirective]);
  useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsx(Fragment, { children: state.hidden ? null : /* @__PURE__ */ jsx(
    "div",
    {
      className: \`au-toast toast \${state.className} \${state.dismissible ? "toast-dismissible" : ""} \${!state.slotHeader ? "d-flex" : ""}\`,
      role: "alert",
      ref: refToast,
      "aria-atomic": "true",
      children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext })
    }
  ) });
});
export {
  Toast as T
};
`;export{t as default};
