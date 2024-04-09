const t=`import { jsx } from "react/jsx-runtime";
import { createProgressbar } from "@agnos-ui/react-headless/components/progressbar";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import classNames from "classnames";
function DefaultSlotContent(slotContext) {
  const { striped, animated, className } = slotContext.state;
  const classes = classNames("progress-bar", { "progress-bar-striped": striped }, { "progress-bar-animated": animated }, className);
  return /* @__PURE__ */ jsx("div", { className: "progress", style: { height: slotContext.state.height }, children: /* @__PURE__ */ jsx("div", { className: classes, style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }) });
}
const defaultConfig = {
  slotStructure: DefaultSlotContent
};
const Progressbar = (props) => {
  const [state, widget] = useWidgetWithConfig(createProgressbar, props, "progressbar", { ...defaultConfig, slotDefault: props.children });
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.ariaDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) });
};
export {
  Progressbar as P
};
`;export{t as default};
