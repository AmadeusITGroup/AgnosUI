const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const generated_config = require("./generated/config.cjs");
const rating = require("@agnos-ui/core-bootstrap/components/rating");
const export_getRatingDefaultConfig = rating.getRatingDefaultConfig;
const export_createRating = rating.createRating;
function Star({ star, state, directive: directive$1 }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { ...directive.useDirective(directive$1, { index: star.index }), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: state.star, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const {
    state,
    directives: { containerDirective, starDirective },
    api
  } = generated_config.useWidget(export_createRating, props);
  React.useImperativeHandle(props.ref, () => api, [api]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirectives([directive.classDirective, "d-inline-flex"], containerDirective), children: state.stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
exports.Rating = Rating;
exports.export_createRating = export_createRating;
exports.export_getRatingDefaultConfig = export_getRatingDefaultConfig;
`;export{e as default};
