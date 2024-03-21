const t=`import { jsx, jsxs } from "react/jsx-runtime";
import { createRating } from "@agnos-ui/react-headless/components/rating";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import React__default from "react";
function Star({ star, state, directive }) {
  const starContainer = useDirective(directive, { index: star.index });
  return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsx("span", { ref: starContainer, children: /* @__PURE__ */ jsx(Slot, { slotContent: state.slotStar, props: star }) })
  ] }, star.index);
}
function Rating(props) {
  const [state, widget] = useWidgetWithConfig(createRating, props, "rating");
  const {
    directives: { containerDirective, starDirective }
  } = widget;
  const refContainer = useDirective(containerDirective);
  return /* @__PURE__ */ jsx("div", { ref: refContainer, className: "d-inline-flex", children: state.stars.map((star) => /* @__PURE__ */ jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
export {
  Rating as R
};
`;export{t as default};
