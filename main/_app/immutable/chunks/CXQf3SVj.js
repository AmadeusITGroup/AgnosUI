const e=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { getCarouselDefaultConfig, createCarousel } from "@agnos-ui/core-bootstrap/components/carousel";
import { useWidget } from "@agnos-ui/react-headless/config";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useImperativeHandle } from "react";
const export_getCarouselDefaultConfig = getCarouselDefaultConfig;
const export_createCarousel = createCarousel;
const CarouselPrevButton = ({ direction, scrollPrev }) => {
  const prevBtnClassPrefix = direction === "rtl" ? "carousel-control-next" : "carousel-control-prev";
  return /* @__PURE__ */ jsx("button", { className: prevBtnClassPrefix, ...useDirective(scrollPrev), children: /* @__PURE__ */ jsx("span", { className: \`\${prevBtnClassPrefix}-icon\` }) });
};
const CarouselNextButton = ({ direction, scrollNext }) => {
  const prevBtnClassPrefix = direction === "ltr" ? "carousel-control-next" : "carousel-control-prev";
  return /* @__PURE__ */ jsx("button", { className: prevBtnClassPrefix, ...useDirective(scrollNext), children: /* @__PURE__ */ jsx("span", { className: \`\${prevBtnClassPrefix}-icon\` }) });
};
const CarouselTabIndicator = ({
  index,
  id,
  tabIndicator,
  active
}) => /* @__PURE__ */ jsx("button", { "data-bs-target": true, className: active ? "active" : void 0, ...useDirective(tabIndicator, { index, id }) });
const CarouselSlide = ({
  slideData,
  widget,
  index
}) => /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.slide, { id: slideData.id, index }), children: /* @__PURE__ */ jsx(Slot, { slotContent: widget.state.slide, props: { ...slideData, ...widget } }) });
const CarouselTabList = ({
  slidesData,
  tabList,
  tabIndicator,
  selectedScrollSnap
}) => /* @__PURE__ */ jsx("div", { className: "carousel-indicators", ...useDirective(tabList), children: slidesData.map(({ id }, index) => /* @__PURE__ */ jsx(CarouselTabIndicator, { index, tabIndicator, id, active: selectedScrollSnap === index }, id)) });
const CarouselDefaultNavigation = (widget) => {
  const {
    state: { showNavigationArrows, showNavigationIndicators, canScrollNext, canScrollPrev, slidesData, direction, selectedScrollSnap },
    directives
  } = widget;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showNavigationArrows && /* @__PURE__ */ jsxs(Fragment, { children: [
      canScrollPrev && /* @__PURE__ */ jsx(CarouselPrevButton, { scrollPrev: directives.scrollPrev, direction }),
      canScrollNext && /* @__PURE__ */ jsx(CarouselNextButton, { scrollNext: directives.scrollNext, direction })
    ] }),
    showNavigationIndicators && /* @__PURE__ */ jsx(
      CarouselTabList,
      {
        slidesData,
        tabList: directives.tabList,
        tabIndicator: directives.tabIndicator,
        selectedScrollSnap
      }
    )
  ] });
};
const CarouselDefaultStructure = (widget) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: widget.state.navigation, props: widget }),
  /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.container), children: widget.state.slidesData.map((slideData, index) => /* @__PURE__ */ jsx(CarouselSlide, { slideData, widget, index }, slideData.id)) })
] });
function Carousel({ ref, ...props }) {
  const widget = useWidget(export_createCarousel, props, {
    structure: CarouselDefaultStructure,
    navigation: CarouselDefaultNavigation
  });
  useImperativeHandle(ref, () => widget.api, [widget.api]);
  return /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.root), children: /* @__PURE__ */ jsx(Slot, { slotContent: widget.state.structure, props: widget }) });
}
export {
  CarouselDefaultNavigation as C,
  export_createCarousel as a,
  CarouselDefaultStructure as b,
  Carousel as c,
  export_getCarouselDefaultConfig as e
};
`;export{e as default};
