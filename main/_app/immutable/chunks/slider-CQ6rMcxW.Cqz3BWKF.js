const t=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createSlider } from "@agnos-ui/react-headless/components/slider";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import React__default from "react";
import { Slot } from "@agnos-ui/react-headless/slot";
const DefaultSlotHandle = (slotContext) => {
  const sliderHandleSetRef = useDirective(slotContext.widget.directives.handleDirective, { item: slotContext.item });
  return /* @__PURE__ */ jsx("button", { ref: sliderHandleSetRef, children: " " });
};
const ProgressDisplay = ({ directive, option }) => {
  const progressDisplaySetRef = useDirective(directive, { option });
  return /* @__PURE__ */ jsx("div", { ref: progressDisplaySetRef });
};
const HandleLabelDisplay = ({
  directive,
  index,
  children
}) => {
  const handleLabelDisplaySetRef = useDirective(directive, { index });
  return /* @__PURE__ */ jsx("div", { ref: handleLabelDisplaySetRef, children });
};
const DefaultSlotStructure = (slotContext) => {
  const clickableAreaSetRef = useDirective(slotContext.widget.directives.clickableAreaDirective);
  const minSetRef = useDirective(slotContext.widget.directives.minLabelDirective);
  const maxSetRef = useDirective(slotContext.widget.directives.maxLabelDirective);
  const combinedHandleLabelDisplaySetRef = useDirective(slotContext.widget.directives.combinedHandleLabelDisplayDirective);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    slotContext.state.progressDisplayOptions.map((option, index) => /* @__PURE__ */ jsx(ProgressDisplay, { directive: slotContext.widget.directives.progressDisplayDirective, option }, index)),
    /* @__PURE__ */ jsx("div", { ref: clickableAreaSetRef }),
    slotContext.state.showMinMaxLabels ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { ref: minSetRef, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.min, ...slotContext } }) }),
      /* @__PURE__ */ jsx("div", { ref: maxSetRef, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.max, ...slotContext } }) })
    ] }) : /* @__PURE__ */ jsx(Fragment, {}),
    slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay ? /* @__PURE__ */ jsx("div", { ref: combinedHandleLabelDisplaySetRef, children: slotContext.state.rtl ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
      " - ",
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
      " - ",
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {}),
    slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHandle, props: { item, ...slotContext } }),
      slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay ? /* @__PURE__ */ jsx(HandleLabelDisplay, { directive: slotContext.widget.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.values[i], ...slotContext } }) }) : /* @__PURE__ */ jsx(Fragment, {})
    ] }, item.id))
  ] });
};
const defaultConfig = {
  slotStructure: DefaultSlotStructure,
  slotHandle: DefaultSlotHandle
};
function Slider(props) {
  const [state, widget] = useWidgetWithConfig(createSlider, props, "slider", { ...defaultConfig });
  const slotContext = { state, widget: toSlotContextWidget(widget) };
  const sliderSetRef = useDirective(widget.directives.sliderDirective);
  return /* @__PURE__ */ jsx("div", { ref: sliderSetRef, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) });
}
export {
  DefaultSlotHandle as D,
  Slider as S,
  DefaultSlotStructure as a
};
`;export{t as default};
