const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const directive = require("@agnos-ui/react-headless/utils/directive");
const toast$1 = require("@agnos-ui/react-headless/components/toast");
const toast = require("@agnos-ui/core-bootstrap/components/toast");
const slot = require("@agnos-ui/react-headless/slot");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const export_getToastDefaultConfig = toast.getToastDefaultConfig;
const export_createToast = toast.createToast;
const export_toastPositions = toast.toastPositions;
const export_defaultToasterProps = toast.defaultToasterProps;
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
      [directive.classDirective, { "toast-dismissible": slotContext.state.dismissible, "d-flex": !slotContext.state.header }],
      slotContext.directives.transitionDirective,
      slotContext.directives.autoHideDirective,
      slotContext.directives.bodyDirective
    ),
    children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.structure, props: slotContext })
  }
);
function Toast(props) {
  const widgetContext = generated_config.useWidget(export_createToast, props, {
    structure: ToastDefaultSlotStructure,
    children: props.children
  });
  React.useImperativeHandle(props.ref, () => widgetContext.api, [widgetContext.api]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: !widgetContext.state.hidden && /* @__PURE__ */ jsxRuntime.jsx(ToastElement, { ...widgetContext }) });
}
const ToastToaster = ({
  id,
  className,
  visible,
  structure,
  children,
  header,
  dismissible,
  ariaCloseButtonLabel,
  animated,
  animatedOnInit,
  onShown,
  onHidden,
  onVisibleChange,
  transition,
  toaster
}) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(toaster.eventsDirective, id), children: /* @__PURE__ */ jsxRuntime.jsx(
  Toast,
  {
    animated,
    animatedOnInit,
    autoHide: false,
    className,
    dismissible: dismissible ?? toaster.options.dismissible,
    ariaCloseButtonLabel,
    structure,
    header,
    onShown,
    onHidden: () => {
      toaster.removeToast(id);
      onHidden?.();
    },
    onVisibleChange,
    visible,
    transition,
    children
  }
) });
function ToasterContainer() {
  const toaster = useToaster();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "au-toaster", "aria-live": "polite", "aria-atomic": "true", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: \`au-toaster-container toast-container \${export_toastPositions[toaster.options.position]}\`, children: [
    toaster.options.closeAll && toaster.toasts.length > 1 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "d-flex position-relative align-items-end pb-2", children: /* @__PURE__ */ jsxRuntime.jsx("button", { className: "au-toaster-closeAll btn btn-secondary me-0 ms-auto pe-auto", onClick: () => toaster.closeAll(), children: toaster.options.closeAllLabel || "Close all" }) }),
    toaster.toasts.map(({ id, props }) => /* @__PURE__ */ jsxRuntime.jsx(ToastToaster, { id, ...props, toaster }, id))
  ] }) });
}
const ToasterProvider = ({ options, children }) => /* @__PURE__ */ jsxRuntime.jsxs(toast$1.ToasterProvider, { options, children: [
  children,
  /* @__PURE__ */ jsxRuntime.jsx(ToasterContainer, {})
] });
const useToaster = () => toast$1.useToaster();
exports.Toast = Toast;
exports.ToastDefaultSlotStructure = ToastDefaultSlotStructure;
exports.ToasterContainer = ToasterContainer;
exports.ToasterProvider = ToasterProvider;
exports.export_createToast = export_createToast;
exports.export_defaultToasterProps = export_defaultToasterProps;
exports.export_getToastDefaultConfig = export_getToastDefaultConfig;
exports.export_toastPositions = export_toastPositions;
exports.useToaster = useToaster;
`;export{t as default};
