const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const progressbar = require("@agnos-ui/react-headless/components/progressbar");
const config = require("@agnos-ui/react-headless/config");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "progress", style: { height: slotContext.state.height }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classList.join(" "), style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }) });
}
const defaultConfig = {
  slotStructure: DefaultSlotContent
};
const Progressbar = (props) => {
  const [state, widget] = config.useWidgetWithConfig(progressbar.createProgressbar, props, "progressbar", { ...defaultConfig, slotDefault: props.children });
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "progressbar",
      "aria-label": state.ariaLabel || void 0,
      "aria-valuenow": state.value,
      "aria-valuemin": state.min,
      "aria-valuemax": state.max,
      "aria-valuetext": state.ariaValueText,
      children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext })
    }
  );
};
exports.Progressbar = Progressbar;
`;export{t as default};
