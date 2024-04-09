const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const rating = require("@agnos-ui/react-headless/components/rating");
const config = require("@agnos-ui/react-headless/config");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
function Star({ star, state, directive: directive$1 }) {
  const arg = { index: star.index };
  const starContainer = directive.useDirective(directive$1, arg);
  return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { ref: starContainer, ...directive.ssrAttributes([directive$1, arg]), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.slotStar, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const [state, widget] = config.useWidgetWithConfig(rating.createRating, props, "rating");
  const {
    directives: { containerDirective, starDirective }
  } = widget;
  const refContainer = directive.useDirective(containerDirective);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: refContainer, className: "d-inline-flex", children: state.stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
exports.Rating = Rating;
`;export{e as default};
