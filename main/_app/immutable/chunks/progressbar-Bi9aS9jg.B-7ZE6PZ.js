const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const generated_config = require("./generated/config.cjs");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const classNames = require("classnames");
const progressbar = require("@agnos-ui/core-bootstrap/components/progressbar");
const createProgressbar = progressbar.createProgressbar;
const getProgressbarDefaultConfig = progressbar.getProgressbarDefaultConfig;
function DefaultSlotContent(slotContext) {
  const { striped, animated, type } = slotContext.state;
  const classes = classNames("progress-bar", { "progress-bar-striped": striped }, { "progress-bar-animated": animated }, { [\`text-bg-\${type}\`]: !!type });
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "progress", style: { height: slotContext.state.height || void 0 }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes, style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
}
const defaultConfig = {
  slotStructure: DefaultSlotContent
};
const Progressbar = (props) => {
  const [state, widget] = generated_config.useWidgetWithConfig(createProgressbar, props, "progressbar", defaultConfig);
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widget.directives.ariaDirective), className: state.className || void 0, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) });
};
exports.Progressbar = Progressbar;
exports.createProgressbar = createProgressbar;
exports.getProgressbarDefaultConfig = getProgressbarDefaultConfig;
`;export{e as default};
