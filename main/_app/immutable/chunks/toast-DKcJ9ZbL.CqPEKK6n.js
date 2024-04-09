const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const toast = require("@agnos-ui/react-headless/components/toast");
const config = require("@agnos-ui/react-headless/config");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const DefaultSlotStructure = (slotContext) => {
  const refCloseButton = directive.useDirective(slotContext.widget.directives.closeButtonDirective);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    slotContext.state.slotHeader && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "toast-header", children: [
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }),
      slotContext.state.dismissible && /* @__PURE__ */ jsxRuntime.jsx("button", { className: "btn-close me-0 ms-auto", ...refCloseButton })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "toast-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
    slotContext.state.dismissible && !slotContext.state.slotHeader && /* @__PURE__ */ jsxRuntime.jsx("button", { className: "btn-close btn-close-white me-2 m-auto", ...refCloseButton })
  ] });
};
const defaultConfig = {
  slotStructure: DefaultSlotStructure
};
const Toast = React.forwardRef(function Toast2(props, ref) {
  const [state, widget] = config.useWidgetWithConfig(toast.createToast, props, "toast", { ...defaultConfig, slotDefault: props.children });
  const refToast = directive.useDirectives([widget.directives.transitionDirective, widget.directives.autoHideDirective, widget.directives.bodyDirective]);
  React.useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: !state.hidden && /* @__PURE__ */ jsxRuntime.jsx("div", { className: \`toast \${state.dismissible ? "toast-dismissible" : ""} \${!state.slotHeader ? "d-flex" : ""}\`, ...refToast, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) }) });
});
exports.Toast = Toast;
`;export{t as default};
