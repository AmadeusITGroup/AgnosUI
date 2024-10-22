const t=`import { jsx } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import classNames from "classnames";
import { useWidgetWithConfig } from "./generated/config.js";
import { getProgressbarDefaultConfig, createProgressbar } from "@agnos-ui/core-bootstrap/components/progressbar";
const export_getProgressbarDefaultConfig = getProgressbarDefaultConfig;
const export_createProgressbar = createProgressbar;
function DefaultSlotContent(slotContext) {
  const { striped, animated, type } = slotContext.state;
  const classes = classNames("progress-bar", { "progress-bar-striped": striped }, { "progress-bar-animated": animated }, { [\`text-bg-\${type}\`]: !!type });
  return /* @__PURE__ */ jsx("div", { className: "progress", style: { height: slotContext.state.height || void 0 }, children: /* @__PURE__ */ jsx("div", { className: classes, style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
}
const defaultConfig = {
  structure: DefaultSlotContent
};
const Progressbar = (props) => {
  const widgetContext = useWidgetWithConfig(export_createProgressbar, props, "progressbar", defaultConfig);
  const { state, directives } = widgetContext;
  return /* @__PURE__ */ jsx("div", { ...useDirective(directives.ariaDirective), className: state.className || void 0, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: widgetContext }) });
};
export {
  Progressbar as P,
  export_createProgressbar as a,
  export_getProgressbarDefaultConfig as e
};
`;export{t as default};
