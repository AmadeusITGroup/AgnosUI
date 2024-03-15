const n=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const rating = require("@agnos-ui/react-headless/components/rating");
const slot = require("@agnos-ui/react-headless/slot");
const config = require("@agnos-ui/react-headless/config");
const React = require("react");
function Rating(props) {
  const [
    { tabindex, maxRating, visibleRating, ariaValueText, readonly, disabled, interactive, stars, className, slotStar, ariaLabel, ariaLabelledBy },
    widget
  ] = config.useWidgetWithConfig(rating.createRating, props, "rating");
  const starStyle = {
    cursor: interactive ? "pointer" : "default"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
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
      children: stars.map((star) => /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "visually-hidden", children: [
          "(",
          star.index < visibleRating ? "*" : " ",
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "au-rating-star",
            style: starStyle,
            onMouseEnter: () => widget.actions.hover(star.index + 1),
            onClick: () => widget.actions.click(star.index + 1),
            children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slotStar, props: star })
          }
        )
      ] }, star.index))
    }
  );
}
exports.Rating = Rating;
`;export{n as default};
