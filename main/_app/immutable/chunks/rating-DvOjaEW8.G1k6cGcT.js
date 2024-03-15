const a=`import { jsx, jsxs } from "react/jsx-runtime";
import { createRating } from "@agnos-ui/react-headless/components/rating";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import React__default from "react";
function Rating(props) {
  const [
    { tabindex, maxRating, visibleRating, ariaValueText, readonly, disabled, interactive, stars, className, slotStar, ariaLabel, ariaLabelledBy },
    widget
  ] = useWidgetWithConfig(createRating, props, "rating");
  const starStyle = {
    cursor: interactive ? "pointer" : "default"
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "slider",
      className: \`d-inline-flex au-rating \${className}\`,
      tabIndex: tabindex,
      "aria-valuemin": 0,
      "aria-valuemax": maxRating,
      "aria-valuenow": visibleRating,
      "aria-valuetext": ariaValueText,
      "aria-readonly": readonly || void 0,
      "aria-disabled": disabled || void 0,
      "aria-label": ariaLabel || void 0,
      "aria-labelledby": ariaLabelledBy || void 0,
      onKeyDown: (e) => widget.actions.handleKey(e),
      onMouseLeave: widget.actions.leave,
      children: stars.map((star) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
        /* @__PURE__ */ jsxs("span", { className: "visually-hidden", children: [
          "(",
          star.index < visibleRating ? "*" : " ",
          ")"
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "au-rating-star",
            style: starStyle,
            onMouseEnter: () => widget.actions.hover(star.index + 1),
            onClick: () => widget.actions.click(star.index + 1),
            children: /* @__PURE__ */ jsx(Slot, { slotContent: slotStar, props: star })
          }
        )
      ] }, star.index))
    }
  );
}
export {
  Rating as R
};
`;export{a as default};
