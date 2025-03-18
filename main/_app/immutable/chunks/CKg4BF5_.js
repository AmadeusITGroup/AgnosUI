const e=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const carousel = require("@agnos-ui/core-bootstrap/components/carousel");
const config = require("@agnos-ui/react-headless/config");
const slot = require("@agnos-ui/react-headless/slot");
const directive = require("@agnos-ui/react-headless/utils/directive");
const React = require("react");
const export_getCarouselDefaultConfig = carousel.getCarouselDefaultConfig;
const export_createCarousel = carousel.createCarousel;
const CarouselContext = React.createContext({});
const CarouselPrevButton = ({ scrollPrev }) => /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirective(scrollPrev), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "carousel-control-prev-icon" }) });
const CarouselNextButton = ({ scrollNext }) => /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirective(scrollNext), children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "carousel-control-next-icon" }) });
const CarouselTabIndicator = ({ index, id, tabIndicator }) => /* @__PURE__ */ jsxRuntime.jsx("button", { ...directive.useDirective(tabIndicator, { index, id }) });
const CarouselSlide = ({
  slideData,
  slideDirective,
  slideSlot,
  index
}) => /* @__PURE__ */ jsxRuntime.jsx("div", { ...directive.useDirective(slideDirective, { id: slideData.id, index }), children: /* @__PURE__ */ jsxRuntime.jsx(slot.Slot, { slotContent: slideSlot, props: slideData }) });
function Carousel({ ref, ...props }) {
  const {
    state: { showNavigationArrows, showNavigationIndicators, canScrollPrev, canScrollNext, slidesData, slide },
    directives,
    api
  } = config.useWidgetWithConfig(export_createCarousel, props, "carousel");
  React.useImperativeHandle(ref, () => api, [api]);
  return /* @__PURE__ */ jsxRuntime.jsx(CarouselContext, { value: api, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { ...directive.useDirective(directives.root), children: [
    showNavigationArrows && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      canScrollPrev && /* @__PURE__ */ jsxRuntime.jsx(CarouselPrevButton, { scrollPrev: directives.scrollPrev }),
      canScrollNext && /* @__PURE__ */ jsxRuntime.jsx(CarouselNextButton, { scrollNext: directives.scrollNext })
    ] }),
    showNavigationIndicators && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "carousel-indicators", role: "tablist", children: slidesData.map(({ id }, index) => /* @__PURE__ */ jsxRuntime.jsx(CarouselTabIndicator, { index, tabIndicator: directives.tabIndicator, id }, id)) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "au-carousel-container", "aria-atomic": "false", "aria-live": "polite", children: slidesData.map((slideData, index) => /* @__PURE__ */ jsxRuntime.jsx(CarouselSlide, { slideData, slideDirective: directives.slide, slideSlot: slide, index }, slideData.id)) })
  ] }) });
}
exports.Carousel = Carousel;
exports.export_createCarousel = export_createCarousel;
exports.export_getCarouselDefaultConfig = export_getCarouselDefaultConfig;
`;export{e as default};
