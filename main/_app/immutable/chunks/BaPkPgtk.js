const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const clsx = require("clsx");
const generated_config = require("./generated/config.cjs");
const progressbar = require("@agnos-ui/core-bootstrap/components/progressbar");
const export_getProgressbarDefaultConfig = progressbar.getProgressbarDefaultConfig;
const export_createProgressbar = progressbar.createProgressbar;
const ProgressbarDefaultSlotStructure = (slotContext) => {
  const { striped, animated, type } = slotContext.state;
  const classes = clsx("progress-bar", { "progress-bar-striped": striped }, { "progress-bar-animated": animated }, { [\`text-bg-\${type}\`]: !!type });
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "progress", style: { height: slotContext.state.height || void 0 }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes, style: { width: \`\${slotContext.state.percentage}%\` }, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.children, props: slotContext }) }) });
};
const Progressbar = (props) => {
  const widgetContext = generated_config.useWidget(export_createProgressbar, props, {
    structure: ProgressbarDefaultSlotStructure
  });
  const { state, directives } = widgetContext;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(directives.ariaDirective), className: state.className || void 0, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.structure, props: widgetContext }) });
};
exports.Progressbar = Progressbar;
exports.ProgressbarDefaultSlotStructure = ProgressbarDefaultSlotStructure;
exports.export_createProgressbar = export_createProgressbar;
exports.export_getProgressbarDefaultConfig = export_getProgressbarDefaultConfig;
`;export{e as default};
