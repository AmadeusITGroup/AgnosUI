const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const progressbar = require("@agnos-ui/react-headless/components/progressbar");
const config = require("@agnos-ui/react-headless/config");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const classNames = require("classnames");
function DefaultSlotContent(slotContext) {
  const { striped, animated, className } = slotContext.state;
  const classes = classNames("progress-bar", { "progress-bar-striped": striped }, { "progress-bar-animated": animated }, className);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "progress", style: { height: slotContext.state.height }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes, style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }) });
}
const defaultConfig = {
  slotStructure: DefaultSlotContent
};
const Progressbar = (props) => {
  const [state, widget] = config.useWidgetWithConfig(progressbar.createProgressbar, props, "progressbar", { ...defaultConfig, slotDefault: props.children });
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  const refAria = directive.useDirective(widget.directives.ariaDirective);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: refAria, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) });
};
exports.Progressbar = Progressbar;
`;export{t as default};
