const t=`import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useWidgetWithConfig } from "./generated/config.js";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, useDirective } from "@agnos-ui/react-headless/utils/directive";
import { forwardRef, useImperativeHandle } from "react";
import { createToast as createToast$1 } from "@agnos-ui/core-bootstrap/components/toast";
const createToast = createToast$1;
const DefaultSlotStructure = (slotContext) => {
  const refCloseButton = useDirective(slotContext.widget.directives.closeButtonDirective);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    slotContext.state.slotHeader && /* @__PURE__ */ jsxs("div", { className: "toast-header", children: [
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHeader, props: slotContext }),
      slotContext.state.dismissible && /* @__PURE__ */ jsx("button", { className: "btn-close me-0 ms-auto", ...refCloseButton })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "toast-body", children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }),
    slotContext.state.dismissible && !slotContext.state.slotHeader && /* @__PURE__ */ jsx("button", { className: "btn-close btn-close-white me-2 m-auto", ...refCloseButton })
  ] });
};
const defaultConfig = {
  slotStructure: DefaultSlotStructure
};
const Toast = forwardRef(function Toast2(props, ref) {
  const [state, widget] = useWidgetWithConfig(createToast, props, "toast", { ...defaultConfig, slotDefault: props.children });
  const refToast = useDirectives([widget.directives.transitionDirective, widget.directives.autoHideDirective, widget.directives.bodyDirective]);
  useImperativeHandle(ref, () => widget.api, []);
  const slotContext = {
    state,
    widget
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !state.hidden && /* @__PURE__ */ jsx("div", { className: \`toast \${state.dismissible ? "toast-dismissible" : ""} \${!state.slotHeader ? "d-flex" : ""}\`, ...refToast, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) }) });
});
export {
  Toast as T,
  createToast as c
};
`;export{t as default};
