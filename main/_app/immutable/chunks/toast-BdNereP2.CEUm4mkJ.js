const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const toast = require("@agnos-ui/core-bootstrap/components/toast");
const export_getToastDefaultConfig = toast.getToastDefaultConfig;
const export_createToast = toast.createToast;
const ToastHeaderContent = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "btn-close me-0 ms-auto"], slotContext.directives.closeButtonDirective) });
const ToastHeader = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "toast-header", children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.header, props: slotContext }),
  slotContext.state.dismissible && /* @__PURE__ */ jsxRuntime.jsx(ToastHeaderContent, { ...slotContext })
] });
const ToastCloseButtonNoHeader = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "btn-close btn-close-white me-2 m-auto"], slotContext.directives.closeButtonDirective) });
const ToastDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.header && /* @__PURE__ */ jsxRuntime.jsx(ToastHeader, { ...slotContext }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "toast-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.dismissible && !slotContext.state.header && /* @__PURE__ */ jsxRuntime.jsx(ToastCloseButtonNoHeader, { ...slotContext })
] });
const ToastElement = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ...directive.useDirectives(
      [directive.classDirective, \`toast \${slotContext.state.dismissible ? "toast-dismissible" : ""} \${!slotContext.state.header ? "d-flex" : ""}\`],
      slotContext.directives.transitionDirective,
      slotContext.directives.autoHideDirective,
      slotContext.directives.bodyDirective
    ),
    children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
function Toast(props) {
  const widgetContext = generated_config.useWidgetWithConfig(export_createToast, props, "toast", {
    structure: ToastDefaultSlotStructure,
    children: props.children
  });
  React.useImperativeHandle(props.ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: !widgetContext.state.hidden && /* @__PURE__ */ jsxRuntime.jsx(ToastElement, { ...widgetContext }) });
}
exports.Toast = Toast;
exports.ToastDefaultSlotStructure = ToastDefaultSlotStructure;
exports.export_createToast = export_createToast;
exports.export_getToastDefaultConfig = export_getToastDefaultConfig;
`;export{t as default};