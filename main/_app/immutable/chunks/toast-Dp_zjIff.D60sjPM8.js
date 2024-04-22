const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const generated_config = require("./generated/config.cjs");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const toast = require("@agnos-ui/core-bootstrap/components/toast");
const createToast = toast.createToast;
const ToastHeader = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "toast-header", children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }),
  slotContext.state.dismissible && /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "btn-close me-0 ms-auto"], slotContext.widget.directives.closeButtonDirective) })
] });
const ToastCloseButtonNoHeader = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirectives([directive.classDirective, "btn-close btn-close-white me-2 m-auto"], slotContext.widget.directives.closeButtonDirective) });
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.slotHeader && /* @__PURE__ */ jsxRuntime.jsx(ToastHeader, { ...slotContext }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "toast-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  slotContext.state.dismissible && !slotContext.state.slotHeader && /* @__PURE__ */ jsxRuntime.jsx(ToastCloseButtonNoHeader, { ...slotContext })
] });
const defaultConfig = {
  slotStructure: DefaultSlotStructure
};
const ToastElement = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ...directive.useDirectives(
      [directive.classDirective, \`toast \${slotContext.state.dismissible ? "toast-dismissible" : ""} \${!slotContext.state.slotHeader ? "d-flex" : ""}\`],
      slotContext.widget.directives.transitionDirective,
      slotContext.widget.directives.autoHideDirective,
      slotContext.widget.directives.bodyDirective
    ),
    children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotStructure, props: slotContext })
  }
);
const Toast = React.forwardRef(function Toast2(props, ref) {
  const [state, widget] = generated_config.useWidgetWithConfig(createToast, props, "toast", { ...defaultConfig, slotDefault: props.children });
  React.useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: !state.hidden && /* @__PURE__ */ jsxRuntime.jsx(ToastElement, { ...slotContext }) });
});
exports.Toast = Toast;
exports.createToast = createToast;
`;export{t as default};
