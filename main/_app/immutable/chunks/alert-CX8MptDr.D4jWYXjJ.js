const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const alert = require("@agnos-ui/react-headless/components/alert");
const slot = require("@agnos-ui/react-headless/slot");
const config = require("@agnos-ui/react-headless/config");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "alert-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
  slotContext.state.dismissible ? /* @__PURE__ */ jsxRuntime.jsx("button", { type: "button", className: "btn-close", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel }) : null
] });
const defaultConfig = {
  slotStructure: DefaultSlotStructure
};
const Alert = React.forwardRef(function Alert2(props, ref) {
  const [state, widget] = config.useWidgetWithConfig(alert.createAlert, props, "alert", { ...defaultConfig, slotDefault: props.children });
  const refTransition = directive.useDirective(widget.directives.transitionDirective);
  React.useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: state.hidden ? null : /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: \`au-alert alert alert-\${state.type} \${state.className} \${state.dismissible ? "alert-dismissible" : ""}\`,
      role: "alert",
      ...refTransition,
      children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext })
    }
  ) });
});
exports.Alert = Alert;
`;export{t as default};
