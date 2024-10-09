const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const rating = require("@agnos-ui/core-bootstrap/components/rating");
const export_getRatingDefaultConfig = rating.getRatingDefaultConfig;
const export_createRating = rating.createRating;
function Star({ star, state, directive: directive$1 }) {
  const arg = { index: star.index };
  return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { ...directive.useDirective(directive$1, arg), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.star, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const [state, widget] = generated_config.useWidgetWithConfig(export_createRating, props, "rating");
  const {
    directives: { containerDirective, starDirective }
  } = widget;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "d-inline-flex"], containerDirective), children: state.stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
exports.Rating = Rating;
exports.export_createRating = export_createRating;
exports.export_getRatingDefaultConfig = export_getRatingDefaultConfig;
`;export{t as default};