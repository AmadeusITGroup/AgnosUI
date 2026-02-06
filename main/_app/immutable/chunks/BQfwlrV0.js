const e=`import { jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirectives, classDirective, useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useImperativeHandle, Fragment } from "react";
import { useWidget } from "./generated/config.js";
import { createRating, getRatingDefaultConfig } from "@agnos-ui/core-bootstrap/components/rating";
const export_getRatingDefaultConfig = getRatingDefaultConfig;
const export_createRating = createRating;
function Star({ star, state, directive }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { className: "visually-hidden", children: [
      "(",
      star.index < state.visibleRating ? "*" : " ",
      ")"
    ] }),
    /* @__PURE__ */ jsx("span", { ...useDirective(directive, { index: star.index }), children: /* @__PURE__ */ jsx(Slot, { slotContent: state.star, props: star }) })
  ] }, star.index);
}
function Rating({ ref, ...props }) {
  const {
    state,
    directives: { containerDirective, starDirective },
    api
  } = useWidget(export_createRating, props);
  useImperativeHandle(ref, () => api, [api]);
  return /* @__PURE__ */ jsx("div", { ...useDirectives([classDirective, "d-inline-flex"], containerDirective), children: state.stars.map((star) => /* @__PURE__ */ jsx(Star, { star, state, directive: starDirective }, star.index)) });
}
export {
  Rating as R,
  export_getRatingDefaultConfig as a,
  export_createRating as e
};
`;export{e as default};
