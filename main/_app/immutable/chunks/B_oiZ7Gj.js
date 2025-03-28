const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const carousel = require("@agnos-ui/core-bootstrap/components/carousel");
const config = require("@agnos-ui/react-headless/config");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const export_getCarouselDefaultConfig = carousel.getCarouselDefaultConfig;
const export_createCarousel = carousel.createCarousel;
const CarouselPrevButton = ({ direction, scrollPrev }) => {
  const prevBtnClassPrefix = direction === "rtl" ? "carousel-control-next" : "carousel-control-prev";
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className: prevBtnClassPrefix, ...directive.useDirective(scrollPrev), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: \`\${prevBtnClassPrefix}-icon\` }) });
};
const CarouselNextButton = ({ direction, scrollNext }) => {
  const prevBtnClassPrefix = direction === "ltr" ? "carousel-control-next" : "carousel-control-prev";
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className: prevBtnClassPrefix, ...directive.useDirective(scrollNext), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: \`\${prevBtnClassPrefix}-icon\` }) });
};
const CarouselTabIndicator = ({
  index,
  id,
  tabIndicator,
  active
}) => /* @__PURE__ */ jsxRuntime.jsx("button", { "data-bs-target": true, className: active ? "active" : void 0, ...directive.useDirective(tabIndicator, { index, id }) });
const CarouselSlide = ({
  slideData,
  widget,
  index
}) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widget.directives.slide, { id: slideData.id, index }), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: widget.state.slide, props: { ...slideData, ...widget } }) });
const CarouselTabList = ({
  slidesData,
  tabList,
  tabIndicator,
  selectedScrollSnap
}) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "carousel-indicators", ...directive.useDirective(tabList), children: slidesData.map(({ id }, index) => /* @__PURE__ */ jsxRuntime.jsx(CarouselTabIndicator, { index, tabIndicator, id, active: selectedScrollSnap === index }, id)) });
const CarouselDefaultNavigation = (widget) => {
  const {
    state: { showNavigationArrows, showNavigationIndicators, canScrollNext, canScrollPrev, slidesData, direction, selectedScrollSnap },
    directives
  } = widget;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    showNavigationArrows && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      canScrollPrev && /* @__PURE__ */ jsxRuntime.jsx(CarouselPrevButton, { scrollPrev: directives.scrollPrev, direction }),
      canScrollNext && /* @__PURE__ */ jsxRuntime.jsx(CarouselNextButton, { scrollNext: directives.scrollNext, direction })
    ] }),
    showNavigationIndicators && /* @__PURE__ */ jsxRuntime.jsx(
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
const CarouselDefaultStructure = (widget) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: widget.state.navigation, props: widget }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widget.directives.container), children: widget.state.slidesData.map((slideData, index) => /* @__PURE__ */ jsxRuntime.jsx(CarouselSlide, { slideData, widget, index }, slideData.id)) })
] });
function Carousel({ ref, ...props }) {
  const widget = config.useWidgetWithConfig(export_createCarousel, props, "carousel", {
    structure: CarouselDefaultStructure,
    navigation: CarouselDefaultNavigation
  });
  React.useImperativeHandle(ref, () => widget.api, [widget.api]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(widget.directives.root), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: widget.state.structure, props: widget }) });
}
exports.Carousel = Carousel;
exports.CarouselDefaultNavigation = CarouselDefaultNavigation;
exports.CarouselDefaultStructure = CarouselDefaultStructure;
exports.export_createCarousel = export_createCarousel;
exports.export_getCarouselDefaultConfig = export_getCarouselDefaultConfig;
`;export{e as default};
