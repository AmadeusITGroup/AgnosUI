const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const types = require("@agnos-ui/react-headless/types");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const slider = require("@agnos-ui/core-bootstrap/components/slider");
const export_getSliderDefaultConfig = slider.getSliderDefaultConfig;
const export_createSlider = slider.createSlider;
const DefaultSlotHandle = (slotContext) => {
  return /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirective(slotContext.widget.directives.handleDirective, { item: slotContext.item }), children: " " });
};
const ProgressDisplay = ({ directive: directive$1, option }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(directive$1, { option }) });
};
const HandleLabelDisplay = ({
  directive: directive$1,
  index,
  children
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(directive$1, { index }), children });
};
const MinMaxLabels = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.widget.directives.minLabelDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.min, ...slotContext } }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.widget.directives.maxLabelDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.max, ...slotContext } }) })
] });
const CombinedLabel = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective), children: slotContext.state.rtl ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
] }) });
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.progressDisplayOptions.map((option, index) => /* @__PURE__ */ jsxRuntime.jsx(ProgressDisplay, { directive: slotContext.widget.directives.progressDisplayDirective, option }, index)),
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.widget.directives.clickableAreaDirective) }),
  slotContext.state.showMinMaxLabels && /* @__PURE__ */ jsxRuntime.jsx(MinMaxLabels, { ...slotContext }),
  slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsxRuntime.jsx(CombinedLabel, { ...slotContext }),
  slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.handle, props: { item, ...slotContext } }),
    slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsxRuntime.jsx(HandleLabelDisplay, { directive: slotContext.widget.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.values[i], ...slotContext } }) })
  ] }, item.id))
] });
const defaultConfig = {
  structure: DefaultSlotStructure,
  handle: DefaultSlotHandle
};
function Slider(props) {
  const [state, widget] = generated_config.useWidgetWithConfig(export_createSlider, props, "slider", { ...defaultConfig });
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widget.directives.sliderDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.structure, props: slotContext }) });
}
exports.DefaultSlotHandle = DefaultSlotHandle;
exports.DefaultSlotStructure = DefaultSlotStructure;
exports.Slider = Slider;
exports.export_createSlider = export_createSlider;
exports.export_getSliderDefaultConfig = export_getSliderDefaultConfig;
`;export{t as default};
