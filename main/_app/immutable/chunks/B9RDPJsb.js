const t=`import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import React__default from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getSliderDefaultConfig, createSlider } from "@agnos-ui/core-bootstrap/components/slider";
const export_getSliderDefaultConfig = getSliderDefaultConfig;
const export_createSlider = createSlider;
const SliderDefaultSlotHandle = (slotContext) => {
  return /* @__PURE__ */ jsx("button", { ...useDirective(slotContext.directives.handleDirective, { item: slotContext.item }), children: " " });
};
const TickLabelDisplay = ({ directive, tick }) => {
  return /* @__PURE__ */ jsx("span", { ...useDirective(directive, { tick }), children: tick.value });
};
const SliderDefaultTick = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.tick.displayLabel && /* @__PURE__ */ jsx(TickLabelDisplay, { directive: slotContext.directives.tickLabelDirective, tick: slotContext.tick }),
  /* @__PURE__ */ jsx("span", { ...useDirective(slotContext.directives.tickDirective, { tick: slotContext.tick }), children: slotContext.tick.selected ? /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: { width: "var(--bs-slider-tick-secondary-size)", height: "var(--bs-slider-tick-primary-size)" },
      fill: "none",
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "50%",
            cy: "50%",
            r: "50%",
            fill: slotContext.state.disabled ? "var(--bs-slider-tick-disabled-color)" : "var(--bs-slider-tick-selected-color)"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "50%", cy: "50%", r: "25%", fill: "white" })
      ]
    }
  ) : /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: { width: "var(--bs-slider-tick-secondary-size)", height: "var(--bs-slider-tick-primary-size)" },
      fill: "none",
      children: /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "50%",
          cy: "50%",
          r: "45%",
          fill: "white",
          stroke: slotContext.state.disabled ? "var(--bs-slider-tick-disabled-color)" : "var(--bs-slider-tick-neutral-color)",
          strokeWidth: "1.5"
        }
      )
    }
  ) })
] });
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
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.minLabelDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.min, ...slotContext } }) }),
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.maxLabelDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.max, ...slotContext } }) })
] });
const CombinedLabel = (slotContext) => /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.combinedHandleLabelDisplayDirective), children: slotContext.state.rtl ? /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
  " - ",
  /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
] }) });
const SliderDefaultSlotStructure = (slotContext) => /* @__PURE__ */ jsxs(Fragment, { children: [
  slotContext.state.progressDisplayOptions.map((option) => /* @__PURE__ */ jsx(ProgressDisplay, { directive: slotContext.directives.progressDisplayDirective, option }, option.id)),
  /* @__PURE__ */ jsx("div", { ...useDirective(slotContext.directives.clickableAreaDirective) }),
  slotContext.state.showMinMaxLabels && /* @__PURE__ */ jsx(MinMaxLabels, { ...slotContext }),
  slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsx(CombinedLabel, { ...slotContext }),
  slotContext.state.ticks.map((tick) => /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.tick, props: { tick, ...slotContext } }, tick.position)),
  slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.handle, props: { item, ...slotContext } }),
    slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay && /* @__PURE__ */ jsx(HandleLabelDisplay, { directive: slotContext.directives.handleLabelDisplayDirective, index: i, children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.label, props: { value: slotContext.state.values[i], ...slotContext } }) })
  ] }, item.id))
] });
function Slider(props) {
  const widgetContext = useWidgetWithConfig(export_createSlider, props, "slider", {
    structure: SliderDefaultSlotStructure,
    handle: SliderDefaultSlotHandle,
    tick: SliderDefaultTick
  });
  return /* @__PURE__ */ jsx("div", { ...useDirective(widgetContext.directives.sliderDirective), children: /* @__PURE__ */ jsx(Slot, { slotContent: widgetContext.state.structure, props: widgetContext }) });
}
export {
  SliderDefaultSlotHandle as S,
  SliderDefaultTick as a,
  SliderDefaultSlotStructure as b,
  Slider as c,
  export_createSlider as d,
  export_getSliderDefaultConfig as e
};
`;export{t as default};
