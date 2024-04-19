const t=`import { jsx } from "react/jsx-runtime";
import { useWidgetWithConfig } from "./generated/config.js";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import classNames from "classnames";
import { createProgressbar as createProgressbar$1 } from "@agnos-ui/core-bootstrap/components/progressbar";
const createProgressbar = createProgressbar$1;
function DefaultSlotContent(slotContext) {
  const { striped, animated, type } = slotContext.state;
  const classes = classNames("progress-bar", { "progress-bar-striped": striped }, { "progress-bar-animated": animated }, { [\`text-bg-\${type}\`]: !!type });
  return /* @__PURE__ */ jsx("div", { className: "progress", style: { height: slotContext.state.height || void 0 }, children: /* @__PURE__ */ jsx("div", { className: classes, style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }) });
}
const defaultConfig = {
  slotStructure: DefaultSlotContent
};
const Progressbar = (props) => {
  const [state, widget] = useWidgetWithConfig(createProgressbar, props, "progressbar", { ...defaultConfig, slotDefault: props.children });
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.ariaDirective), className: state.className || void 0, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) });
};
export {
  Progressbar as P,
  createProgressbar as c
};
`;export{t as default};
