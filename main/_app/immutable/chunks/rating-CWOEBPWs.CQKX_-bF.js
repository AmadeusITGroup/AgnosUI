const t=`import { jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective, useDirective } from "@agnos-ui/react-headless/utils/directive";
import React__default from "react";
import { useWidgetWithConfig } from "./generated/config.js";
import { getRatingDefaultConfig, createRating } from "@agnos-ui/core-bootstrap/components/rating";
const export_getRatingDefaultConfig = getRatingDefaultConfig;
const export_createRating = createRating;
function Star({ star, state, directive }) {
  const arg = { index: star.index };
  return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsx("span", { ...useDirective(directive, arg), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.star, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const [state, widget] = useWidgetWithConfig(export_createRating, props, "rating");
  const {
    directives: { containerDirective, starDirective }
  } = widget;
  return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "d-inline-flex"], containerDirective), children: state.stars.map((star) => /* @__PURE__ */ jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
export {
  Rating as R,
  export_createRating as a,
  export_getRatingDefaultConfig as e
};
`;export{t as default};
