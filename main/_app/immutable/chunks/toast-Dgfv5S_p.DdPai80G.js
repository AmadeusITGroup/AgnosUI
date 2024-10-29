const t=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { forwardRef, useImperativeHandle } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getToastDefaultConfig, createToast } from "@agnos-ui/core-bootstrap/components/toast";
const export_getToastDefaultConfig = getToastDefaultConfig;
const export_createToast = createToast;
const ToastHeader = (slotContext) => /* @__PURE__ */ jsxs("div", { className: "toast-header", children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.header, props: slotContext }),
  slotContext.state.dismissible && /* @__PURE__ */ jsx("button", { ...useDirectives([classDirective, "btn-close me-0 ms-auto"], slotContext.directives.closeButtonDirective) })
] });
const ToastCloseButtonNoHeader = (slotContext) => /* @__PURE__ */ jsx("button", { ...useDirectives([classDirective, "btn-close btn-close-white me-2 m-auto"], slotContext.directives.closeButtonDirective) });
const ToastDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.header && /* @__PURE__ */ jsx(ToastHeader, { ...slotContext }),
  /* @__PURE__ */ jsx("div", { className: "toast-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.dismissible && !slotContext.state.header && /* @__PURE__ */ jsx(ToastCloseButtonNoHeader, { ...slotContext })
] });
const ToastElement = (slotContext) => /* @__PURE__ */ jsx(
  "div",
  {
    ...useDirectives(
      [classDirective, \`toast \${slotContext.state.dismissible ? "toast-dismissible" : ""} \${!slotContext.state.header ? "d-flex" : ""}\`],
      slotContext.directives.transitionDirective,
      slotContext.directives.autoHideDirective,
      slotContext.directives.bodyDirective
    ),
    children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
const Toast = forwardRef(function Toast2(props, ref) {
  const widgetContext = useWidgetWithConfig(export_createToast, props, "toast", {
    structure: ToastDefaultSlotStructure,
    children: props.children
  });
  useImperativeHandle(ref, () => widgetContext.api, []);
  return /* @__PURE__ */ jsx(Fragment, { children: !widgetContext.state.hidden && /* @__PURE__ */ jsx(ToastElement, { ...widgetContext }) });
});
export {
  ToastDefaultSlotStructure as T,
  Toast as a,
  export_createToast as b,
  export_getToastDefaultConfig as e
};
`;export{t as default};
