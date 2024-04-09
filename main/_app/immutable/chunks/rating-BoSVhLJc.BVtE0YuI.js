const t=`import { jsx, jsxs } from "react/jsx-runtime";
import { createRating } from "@agnos-ui/react-headless/components/rating";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import React__default from "react";
function Star({ star, state, directive }) {
  const arg = { index: star.index };
  return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsx("span", { ...useDirective(directive, arg), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStar, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const [state, widget] = useWidgetWithConfig(createRating, props, "rating");
  const {
    directives: { containerDirective, starDirective }
  } = widget;
  return /* @__PURE__ */ jsx("div", { className: "d-inline-flex", ...useDirective(containerDirective), children: state.stars.map((star) => /* @__PURE__ */ jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
export {
  Rating as R
};
`;export{t as default};
