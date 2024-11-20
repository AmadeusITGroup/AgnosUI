const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const alert = require("@agnos-ui/core-bootstrap/components/alert");
const export_getAlertDefaultConfig = alert.getAlertDefaultConfig;
const export_createAlert = alert.createAlert;
const AlertDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "alert-body", children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.dismissible && /* @__PURE__ */ jsxRuntime.jsx("button", { type: "button", className: "btn-close", onClick: slotContext.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })
] });
const AlertElement = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    role: "alert",
    ...directive.useDirectives(
      [
        directive.classDirective,
        \`au-alert alert alert-\${slotContext.state.type} \${slotContext.state.className} \${slotContext.state.dismissible ? "alert-dismissible" : ""}\`
      ],
      slotContext.directives.transitionDirective
    ),
    children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
const Alert = React.forwardRef(function Alert2(props, ref) {
  const widgetContext = generated_config.useWidgetWithConfig(export_createAlert, props, "alert", {
    structure: AlertDefaultSlotStructure
  });
  React.useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: !widgetContext.state.hidden && /* @__PURE__ */ jsxRuntime.jsx(AlertElement, { ...widgetContext }) });
});
exports.Alert = Alert;
exports.AlertDefaultSlotStructure = AlertDefaultSlotStructure;
exports.export_createAlert = export_createAlert;
exports.export_getAlertDefaultConfig = export_getAlertDefaultConfig;
`;export{t as default};
