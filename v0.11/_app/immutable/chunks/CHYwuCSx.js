const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const clsx = require("clsx");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const slider = require("@agnos-ui/core-bootstrap/components/slider");
const export_getSliderDefaultConfig = slider.getSliderDefaultConfig;
const export_createSlider = slider.createSlider;
const SliderDefaultSlotHandle = (slotContext) => {
  return /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirective(slotContext.directives.handleDirective, { item: slotContext.item }) });
};
const TickLabelDisplay = ({ directive: directive$1, tick }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { ...directive.useDirective(directive$1, { tick }), children: tick.value });
};
const SliderDefaultTick = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.tick.displayLabel && /* @__PURE__ */ jsxRuntime.jsx(TickLabelDisplay, { directive: slotContext.directives.tickLabelDirective, tick: slotContext.tick }),
  /* @__PURE__ */ jsxRuntime.jsx("span", { ...directive.useDirective(slotContext.directives.tickDirective, { tick: slotContext.tick }), children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "circle",
      {
        className: clsx(
          "au-slider-tick-outer",
          { "au-slider-tick-disabled": slotContext.state.disabled },
          { "au-slider-tick-selected": slotContext.tick.selected }
        )
      }
    ),
    slotContext.tick.selected && /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "au-slider-tick-inner au-slider-tick-selected" })
  ] }) })
] });
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
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.minLabelDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.min, ...slotContext } }) }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.maxLabelDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.max, ...slotContext } }) })
] });
const CombinedLabel = (slotContext) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.combinedHandleLabelDisplayDirective), children: slotContext.state.rtl ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
] }) });
const SliderDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  slotContext.state.progressDisplayOptions.map((option) => /* @__PURE__ */ jsxRuntime.jsx(ProgressDisplay, { directive: slotContext.directives.progressDisplayDirective, option }, option.id)),
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slotContext.directives.clickableAreaDirective) }),
  slotContext.state.showMinMaxLabels && /* @__PURE__ */ jsxRuntime.jsx(MinMaxLabels, { ...slotContext }),
  slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsxRuntime.jsx(CombinedLabel, { ...slotContext }),
  slotContext.state.ticks.map((tick) => /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.tick, props: { tick, ...slotContext } }, tick.position)),
  slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.handle, props: { item, ...slotContext } }),
    slotContext.state.showValueLabels && /* @__PURE__ */ jsxRuntime.jsx(HandleLabelDisplay, { directive: slotContext.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.values[i], ...slotContext } }) })
  ] }, item.id))
] });
function Slider(props) {
  const widgetContext = generated_config.useWidget(export_createSlider, props, {
    structure: SliderDefaultSlotStructure,
    handle: SliderDefaultSlotHandle,
    tick: SliderDefaultTick
  });
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widgetContext.directives.containerDirective), children: /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widgetContext.directives.sliderDirective), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: widgetContext.state.structure, props: widgetContext }) }) });
}
exports.Slider = Slider;
exports.SliderDefaultSlotHandle = SliderDefaultSlotHandle;
exports.SliderDefaultSlotStructure = SliderDefaultSlotStructure;
exports.SliderDefaultTick = SliderDefaultTick;
exports.export_createSlider = export_createSlider;
exports.export_getSliderDefaultConfig = export_getSliderDefaultConfig;
`;export{t as default};
