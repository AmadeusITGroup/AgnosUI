const t=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useWidgetWithConfig } from "./generated/config.js";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import React__default from "react";
import { Slot } from "@agnos-ui/react-headless/slot";
import { createSlider as createSlider$1, getSliderDefaultConfig as getSliderDefaultConfig$1 } from "@agnos-ui/core-bootstrap/components/slider";
const createSlider = createSlider$1;
const getSliderDefaultConfig = getSliderDefaultConfig$1;
const DefaultSlotHandle = (slotContext) => {
  return /* @__PURE__ */ jsx("button", { ...useDirective(slotContext.widget.directives.handleDirective, { item: slotContext.item }), children: " " });
};
const ProgressDisplay = ({ directive, option }) => {
  return /* @__PURE__ */ jsx("div", { ...useDirective(directive, { option }) });
};
const HandleLabelDisplay = ({
  directive,
  index,
  children
}) => {
  return /* @__PURE__ */ jsx("div", { ...useDirective(directive, { index }), children });
};
const MinMaxLabels = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.minLabelDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.min, ...slotContext } }) }),
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.maxLabelDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.max, ...slotContext } }) })
] });
const CombinedLabel = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective), children: slotContext.state.rtl ? /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
] }) });
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.progressDisplayOptions.map((option, index) => /* @__PURE__ */ jsx(ProgressDisplay, { directive: slotContext.widget.directives.progressDisplayDirective, option }, index)),
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.clickableAreaDirective) }),
  slotContext.state.showMinMaxLabels && /* @__PURE__ */ jsx(MinMaxLabels, { ...slotContext }),
  slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsx(CombinedLabel, { ...slotContext }),
  slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHandle, props: { item, ...slotContext } }),
    slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsx(HandleLabelDisplay, { directive: slotContext.widget.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.values[i], ...slotContext } }) })
  ] }, item.id))
] });
const defaultConfig = {
  slotStructure: DefaultSlotStructure,
  slotHandle: DefaultSlotHandle
};
function Slider(props) {
  const [state, widget] = useWidgetWithConfig(createSlider, props, "slider", { ...defaultConfig });
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.sliderDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) });
}
export {
  DefaultSlotHandle as D,
  Slider as S,
  DefaultSlotStructure as a,
  createSlider as c,
  getSliderDefaultConfig as g
};
`;export{t as default};
