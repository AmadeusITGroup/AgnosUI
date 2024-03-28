const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slider = require("@agnos-ui/react-headless/components/slider");
const directive = require("@agnos-ui/react-headless/utils/directive");
const config = require("@agnos-ui/react-headless/config");
const types = require("@agnos-ui/react-headless/types");
const React = require("react");
const slot = require("@agnos-ui/react-headless/slot");
const DefaultSlotHandle = (slotContext) => {
  const sliderHandleSetRef = directive.useDirective(slotContext.widget.directives.handleDirective, { item: slotContext.item });
  return /* @__PURE__ */ jsxRuntime.jsx("button", { ref: sliderHandleSetRef, children: " " });
};
const ProgressDisplay = ({ directive: directive$1, option }) => {
  const progressDisplaySetRef = directive.useDirective(directive$1, { option });
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: progressDisplaySetRef });
};
const HandleLabelDisplay = ({
  directive: directive$1,
  index,
  children
}) => {
  const handleLabelDisplaySetRef = directive.useDirective(directive$1, { index });
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: handleLabelDisplaySetRef, children });
};
const DefaultSlotStructure = (slotContext) => {
  const clickableAreaSetRef = directive.useDirective(slotContext.widget.directives.clickableAreaDirective);
  const minSetRef = directive.useDirective(slotContext.widget.directives.minLabelDirective);
  const maxSetRef = directive.useDirective(slotContext.widget.directives.maxLabelDirective);
  const combinedHandleLabelDisplaySetRef = directive.useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    slotContext.state.progressDisplayOptions.map((option, index) => /* @__PURE__ */ jsxRuntime.jsx(ProgressDisplay, { directive: slotContext.widget.directives.progressDisplayDirective, option }, index)),
    /* @__PURE__ */ jsxRuntime.jsx("div", { ref: clickableAreaSetRef }),
    slotContext.state.showMinMaxLabels ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { ref: minSetRef, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.min, ...slotContext } }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { ref: maxSetRef, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.max, ...slotContext } }) })
    ] }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {}),
    slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay ? /* @__PURE__ */ jsxRuntime.jsx("div", { ref: combinedHandleLabelDisplaySetRef, children: slotContext.state.rtl ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
      " - ",
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
    ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
      " - ",
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
    ] }) }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {}),
    slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotHandle, props: { item, ...slotContext } }),
      slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay ? /* @__PURE__ */ jsxRuntime.jsx(HandleLabelDisplay, { directive: slotContext.widget.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.values[i], ...slotContext } }) }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {})
    ] }, item.id))
  ] });
};
const defaultConfig = {
  slotStructure: DefaultSlotStructure,
  slotHandle: DefaultSlotHandle
};
function Slider(props) {
  const [state, widget] = config.useWidgetWithConfig(slider.createSlider, props, "slider", { ...defaultConfig });
  const slotContext = { state, widget: types.toSlotContextWidget(widget) };
  const sliderSetRef = directive.useDirective(widget.directives.sliderDirective);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: sliderSetRef, children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStructure, props: slotContext }) });
}
exports.DefaultSlotHandle = DefaultSlotHandle;
exports.DefaultSlotStructure = DefaultSlotStructure;
exports.Slider = Slider;
`;export{t as default};
