const t=`import { jsx } from "react/jsx-runtime";
import { createProgressbar } from "@agnos-ui/react-headless/components/progressbar";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { Slot } from "@agnos-ui/react-headless/slot";
function DefaultSlotContent(slotContext) {
  const classList = ["progress-bar"];
  if (slotContext.state.striped) {
    classList.push("progress-bar-striped");
  }
  if (slotContext.state.animated) {
    classList.push("progress-bar-animated");
  }
  if (slotContext.state.className) {
    classList.push(slotContext.state.className);
  }
  return /* @__PURE__ */ jsx("div", { className: "progress", style: { height: slotContext.state.height }, children: /* @__PURE__ */ jsx("div", { className: classList.join(" "), style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }) });
}
const defaultConfig = {
  slotStructure: DefaultSlotContent
};
const Progressbar = (props) => {
  const [state, widget] = useWidgetWithConfig(createProgressbar, props, "progressbar", { ...defaultConfig, slotDefault: props.children });
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "progressbar",
      "aria-label": state.ariaLabel || void 0,
      "aria-valuenow": state.value,
      "aria-valuemin": state.min,
      "aria-valuemax": state.max,
      "aria-valuetext": state.ariaValueText,
      children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext })
    }
  );
};
export {
  Progressbar as P
};
`;export{t as default};
