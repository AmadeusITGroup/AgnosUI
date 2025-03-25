const e=`import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { getCarouselDefaultConfig, createCarousel } from "@agnos-ui/core-bootstrap/components/carousel";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useImperativeHandle } from "react";
const export_getCarouselDefaultConfig = getCarouselDefaultConfig;
const export_createCarousel = createCarousel;
const CarouselPrevButton = ({ scrollPrev }) => /* @__PURE__ */ jsx("button", { ...useDirective(scrollPrev), children: /* @__PURE__ */ jsx("span", { className: "carousel-control-prev-icon" }) });
const CarouselNextButton = ({ scrollNext }) => /* @__PURE__ */ jsx("button", { ...useDirective(scrollNext), children: /* @__PURE__ */ jsx("span", { className: "carousel-control-next-icon" }) });
const CarouselTabIndicator = ({ index, id, tabIndicator }) => /* @__PURE__ */ jsx("button", { ...useDirective(tabIndicator, { index, id }) });
const CarouselSlide = ({
  slideData,
  widget,
  index
}) => /* @__PURE__ */ jsx("div", { ...useDirective(widget.directives.slide, { id: slideData.id, index }), children: /* @__PURE__ */ jsx(Slot, { slotContent: widget.state.slide, props: { ...slideData, ...widget } }) });
const CarouselTabList = ({
  slidesData,
  tabList,
  tabIndicator
}) => /* @__PURE__ */ jsx("div", { ...useDirective(tabList), children: slidesData.map(({ id }, index) => /* @__PURE__ */ jsx(CarouselTabIndicator, { index, tabIndicator, id }, id)) });
const CarouselDefaultNavigation = (widget) => {
  const {
    state: { showNavigationArrows, showNavigationIndicators, canScrollNext, canScrollPrev, slidesData },
    directives
  } = widget;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showNavigationArrows && /* @__PURE__ */ jsxs(Fragment, { children: [
      canScrollPrev && /* @__PURE__ */ jsx(CarouselPrevButton, { scrollPrev: directives.scrollPrev }),
      canScrollNext && /* @__PURE__ */ jsx(CarouselNextButton, { scrollNext: directives.scrollNext })
    ] }),
    showNavigationIndicators && /* @__PURE__ */ jsx(CarouselTabList, { slidesData, tabList: directives.tabList, tabIndicator: directives.tabIndicator })
  ] });
};
const CarouselDefaultStructure = (widget) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Slot, { slotContent: widget.state.navigation, props: widget }),
  /* @__PURE__ */ jsx("div", { className: "au-carousel-container", "aria-atomic": "false", "aria-live": "polite", children: widget.state.slidesData.map((slideData, index) => /* @__PURE__ */ jsx(CarouselSlide, { slideData, widget, index }, slideData.id)) })
] });
function Carousel({ ref, ...props }) {
  const widget = useWidgetWithConfig(export_createCarousel, props, "carousel", {
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
