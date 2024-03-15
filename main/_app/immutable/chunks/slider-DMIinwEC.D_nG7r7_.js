const t=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createSlider } from "@agnos-ui/react-headless/components/slider";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { toSlotContextWidget } from "@agnos-ui/react-headless/types";
import React__default from "react";
import { Slot } from "@agnos-ui/react-headless/slot";
const DefaultSlotHandle = (slotContext) => /* @__PURE__ */ jsx(
  "button",
  {
    className: \`au-slider-handle \${slotContext.state.vertical ? "au-slider-handle-vertical" : "au-slider-handle-horizontal"}\`,
    role: "slider",
    "aria-valuemin": slotContext.state.min,
    "aria-valuemax": slotContext.state.max,
    "aria-valuenow": slotContext.item.value,
    "aria-valuetext": slotContext.item.ariaValueText,
    "aria-label": slotContext.item.ariaLabel,
    "aria-readonly": slotContext.state.readonly ? "true" : void 0,
    "aria-disabled": slotContext.state.disabled ? "true" : void 0,
    "aria-orientation": slotContext.state.vertical ? "vertical" : void 0,
    disabled: slotContext.state.disabled,
    style: {
      top: \`\${slotContext.state.handleDisplayOptions[slotContext.item.id].top}%\`,
      left: \`\${slotContext.state.handleDisplayOptions[slotContext.item.id].left}%\`
    },
    onKeyDown: (e) => slotContext.widget.actions.keydown(e.nativeEvent, slotContext.item.id),
    onMouseDown: (e) => slotContext.widget.actions.mouseDown(e.nativeEvent, slotContext.item.id),
    onTouchStart: (e) => slotContext.widget.actions.touchStart(e.nativeEvent, slotContext.item.id),
    children: " "
  }
);
const DefaultSlotStructure = (slotContext) => {
  const minSetRef = useDirective(slotContext.widget.directives.minLabelDirective);
  const maxSetRef = useDirective(slotContext.widget.directives.maxLabelDirective);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    slotContext.state.progressDisplayOptions.map((option, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "au-slider-progress",
        style: {
          left: \`\${option.left}%\`,
          right: \`\${option.right}%\`,
          bottom: \`\${option.bottom}%\`,
          top: \`\${option.top}%\`,
          width: \`\${option.width}%\`,
          height: \`\${option.height}%\`
        }
      },
      index
    )),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: slotContext.state.vertical ? "au-slider-clickable-area-vertical" : "au-slider-clickable-area",
        onClick: (e) => slotContext.widget.actions.click(e)
      }
    ),
    slotContext.state.showMinMaxLabels ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: minSetRef,
          className: \`\${slotContext.state.rtl ? "au-slider-rtl" : ""} \${slotContext.state.vertical ? "au-slider-label-vertical au-slider-label-vertical-min" : "au-slider-label au-slider-label-min"} \${!slotContext.state.minValueLabelDisplay ? " invisible" : ""}
						\`,
          children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.min, ...slotContext } })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: maxSetRef,
          className: \`\${slotContext.state.rtl ? "au-slider-rtl" : ""} \${slotContext.state.vertical ? "au-slider-label-vertical au-slider-label-vertical-max" : "au-slider-label au-slider-label-max"} \${!slotContext.state.maxValueLabelDisplay ? " invisible" : ""}\`,
          children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.max, ...slotContext } })
        }
      )
    ] }) : /* @__PURE__ */ jsx(Fragment, {}),
    slotContext.state.showValueLabels && slotContext.state.combinedLabelDisplay ? /* @__PURE__ */ jsx(
      "div",
      {
        className: slotContext.state.vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now",
        style: {
          left: \`\${slotContext.state.combinedLabelPositionLeft}%\`,
          top: \`\${slotContext.state.combinedLabelPositionTop}%\`
        },
        children: slotContext.state.rtl ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } }),
          " - ",
          /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[0], ...slotContext } }),
          " - ",
          /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.sortedValues[1], ...slotContext } })
        ] })
      }
    ) : /* @__PURE__ */ jsx(Fragment, {}),
    slotContext.state.sortedHandles.map((item, i) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
      /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotHandle, props: { item, ...slotContext } }),
      slotContext.state.showValueLabels && !slotContext.state.combinedLabelDisplay ? /* @__PURE__ */ jsx(
        "div",
        {
          className: slotContext.state.vertical ? "au-slider-label-vertical au-slider-label-vertical-now" : "au-slider-label au-slider-label-now",
          style: {
            left: \`\${slotContext.state.handleDisplayOptions[i].left}%\`,
            top: \`\${slotContext.state.handleDisplayOptions[i].top}%\`
          },
          children: /* @__PURE__ */ jsx(Slot, { slotContent: slotContext.state.slotLabel, props: { value: slotContext.state.values[i], ...slotContext } })
        }
      ) : /* @__PURE__ */ jsx(Fragment, {})
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: sliderSetRef,
      className: \`au-slider \${props.vertical ? "au-slider-vertical" : "au-slider-horizontal"} \${props.className ? props.className : ""} \${props.disabled ? " disabled" : ""}\`,
      "aria-disabled": props.disabled ? "true" : void 0,
      children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStructure, props: slotContext })
    }
  );
}
export {
  DefaultSlotHandle as D,
  Slider as S,
  DefaultSlotStructure as a
};
`;export{t as default};
