const t=`import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { forwardRef, useImperativeHandle } from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getAlertDefaultConfig, createAlert } from "@agnos-ui/core-bootstrap/components/alert";
const export_getAlertDefaultConfig = getAlertDefaultConfig;
const export_createAlert = createAlert;
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { className: "alert-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.dismissible && /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close", onClick: slotContext.widget.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })
] });
const defaultConfig = {
  structure: DefaultSlotStructure
};
const AlertElement = (slotContext) => /* @__PURE__ */ jsx(
  "div",
  {
    role: "alert",
    ...useDirectives(
      [
        classDirective,
        \`au-alert alert alert-\${slotContext.state.type} \${slotContext.state.className} \${slotContext.state.dismissible ? "alert-dismissible" : ""}\`
      ],
      slotContext.widget.directives.transitionDirective
    ),
    children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
const Alert = forwardRef(function Alert2(props, ref) {
  const [state, widget] = useWidgetWithConfig(export_createAlert, props, "alert", defaultConfig);
  useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !state.hidden && /* @__PURE__ */ jsx(AlertElement, { ...slotContext }) });
});
export {
  Alert as A,
  export_createAlert as a,
  export_getAlertDefaultConfig as e
};
`;export{t as default};
