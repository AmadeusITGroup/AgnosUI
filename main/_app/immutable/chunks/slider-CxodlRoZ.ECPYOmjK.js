const t=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import React__default from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getSliderDefaultConfig, createSlider } from "@agnos-ui/core-bootstrap/components/slider";
const export_getSliderDefaultConfig = getSliderDefaultConfig;
const export_createSlider = createSlider;
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
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.minLabelDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.min, ...slotContext } }) }),
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.maxLabelDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.max, ...slotContext } }) })
] });
const CombinedLabel = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective), children: slotContext.state.rtl ? /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
] }) });
const DefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.progressDisplayOptions.map((option, index) => /* @__PURE__ */ jsx(ProgressDisplay, { directive: slotContext.widget.directives.progressDisplayDirective, option }, index)),
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.widget.directives.clickableAreaDirective) }),
  slotContext.state.showMinMaxLabels && /* @__PURE__ */ jsx(MinMaxLabels, { ...slotContext }),
  slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsx(CombinedLabel, { ...slotContext }),
  slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.handle, props: { item, ...slotContext } }),
    slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsx(HandleLabelDisplay, { directive: slotContext.widget.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.values[i], ...slotContext } }) })
  ] }, item.id))
] });
const defaultConfig = {
  structure: DefaultSlotStructure,
  handle: DefaultSlotHandle
};
function Slider(props) {
  const [state, widget] = useWidgetWithConfig(export_createSlider, props, "slider", { ...defaultConfig });
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  return /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.sliderDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.structure, props: slotContext }) });
}
export {
  DefaultSlotHandle as D,
  Slider as S,
  DefaultSlotStructure as a,
  export_createSlider as b,
  export_getSliderDefaultConfig as e
};
`;export{t as default};
