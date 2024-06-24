const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const generated_config = require("./generated/config.cjs");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const alert = require("@agnos-ui/core-bootstrap/components/alert");
const createAlert = alert.createAlert;
const getAlertDefaultConfig = alert.getAlertDefaultConfig;
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "alert-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.dismissible && /* @__PURE__ */ jsxRuntime.jsx("button", { type: "button", className: "btn-close", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })
] });
const defaultConfig = {
  structure: DefaultSlotStructure
};
const AlertElement = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    role: "alert",
    ...directive.useDirectives(
      [
        directive.classDirective,
        \`au-alert alert alert-\${slotContext.state.type} \${slotContext.state.className} \${slotContext.state.dismissible ? "alert-dismissible" : ""}\`
      ],
      slotContext.widget.directives.transitionDirective
    ),
    children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
const Alert = React.forwardRef(function Alert2(props, ref) {
  const [state, widget] = generated_config.useWidgetWithConfig(createAlert, props, "alert", defaultConfig);
  React.useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: !state.hidden && /* @__PURE__ */ jsxRuntime.jsx(AlertElement, { ...slotContext }) });
});
exports.Alert = Alert;
exports.createAlert = createAlert;
exports.getAlertDefaultConfig = getAlertDefaultConfig;
`;export{t as default};
