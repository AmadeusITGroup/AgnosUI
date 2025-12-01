const t=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective } from "@agnos-ui/react-headless/utils/directive";
import { useImperativeHandle } from "react";
import { useWidget } from "./generated/config.js";
import { getAlertDefaultConfig, createAlert } from "@agnos-ui/core-bootstrap/components/alert";
const export_getAlertDefaultConfig = getAlertDefaultConfig;
const export_createAlert = createAlert;
const AlertDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { className: "alert-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }),
  slotContext.state.dismissible && /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close", onClick: slotContext.api.close, "aria-label": slotContext.state.ariaCloseButtonLabel })
] });
const AlertElement = (slotContext) => /* @__PURE__ */ jsx(
  "div",
  {
    role: "alert",
    ...useDirectives(
      [
        classDirective,
        [\`au-alert alert alert-\${slotContext.state.type} \${slotContext.state.className}\`, { "alert-dismissible": slotContext.state.dismissible }]
      ],
      slotContext.directives.transitionDirective
    ),
    children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
function Alert({ ref, ...props }) {
  const widgetContext = useWidget(export_createAlert, props, {
    structure: AlertDefaultSlotStructure
  });
  useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsx(Fragment, { children: !widgetContext.state.hidden && /* @__PURE__ */ jsx(AlertElement, { ...widgetContext }) });
}
export {
  AlertDefaultSlotStructure as A,
  Alert as a,
  export_createAlert as b,
  export_getAlertDefaultConfig as e
};
`;export{t as default};
