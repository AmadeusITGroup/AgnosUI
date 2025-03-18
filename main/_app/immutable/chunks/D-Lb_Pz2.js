const e=`import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { getCarouselDefaultConfig, createCarousel } from "@agnos-ui/core-bootstrap/components/carousel";
import { useWidgetWithConfig } from "@agnos-ui/react-headless/config";
import { Slot } from "@agnos-ui/react-headless/slot";
import { useDirective } from "@agnos-ui/react-headless/utils/directive";
import { useImperativeHandle, createContext } from "react";
const export_getCarouselDefaultConfig = getCarouselDefaultConfig;
const export_createCarousel = createCarousel;
const CarouselContext = createContext({});
const CarouselPrevButton = ({ scrollPrev }) => /* @__PURE__ */ jsx("button", { ...useDirective(scrollPrev), children: /* @__PURE__ */ jsx("span", { className: "carousel-control-prev-icon" }) });
const CarouselNextButton = ({ scrollNext }) => /* @__PURE__ */ jsx("button", { ...useDirective(scrollNext), children: /* @__PURE__ */ jsx("span", { className: "carousel-control-next-icon" }) });
const CarouselTabIndicator = ({ index, id, tabIndicator }) => /* @__PURE__ */ jsx("button", { ...useDirective(tabIndicator, { index, id }) });
const CarouselSlide = ({
  slideData,
  slideDirective,
  slideSlot,
  index
}) => /* @__PURE__ */ jsx("div", { ...useDirective(slideDirective, { id: slideData.id, index }), children: /* @__PURE__ */ jsx(Slot, { slotContent: slideSlot, props: slideData }) });
function Carousel({ ref, ...props }) {
  const {
    state: { showNavigationArrows, showNavigationIndicators, canScrollPrev, canScrollNext, slidesData, slide },
    directives,
    api
  } = useWidgetWithConfig(export_createCarousel, props, "carousel");
  useImperativeHandle(ref, () => api, [api]);
  return /* @__PURE__ */ jsx(CarouselContext, { value: api, children: /* @__PURE__ */ jsxs("div", { ...useDirective(directives.root), children: [
    showNavigationArrows && /* @__PURE__ */ jsxs(Fragment, { children: [
      canScrollPrev && /* @__PURE__ */ jsx(CarouselPrevButton, { scrollPrev: directives.scrollPrev }),
      canScrollNext && /* @__PURE__ */ jsx(CarouselNextButton, { scrollNext: directives.scrollNext })
    ] }),
    showNavigationIndicators && /* @__PURE__ */ jsx("div", { className: "carousel-indicators", role: "tablist", children: slidesData.map(({ id }, index) => /* @__PURE__ */ jsx(CarouselTabIndicator, { index, tabIndicator: directives.tabIndicator, id }, id)) }),
    /* @__PURE__ */ jsx("div", { className: "au-carousel-container", "aria-atomic": "false", "aria-live": "polite", children: slidesData.map((slideData, index) => /* @__PURE__ */ jsx(CarouselSlide, { slideData, slideDirective: directives.slide, slideSlot: slide, index }, slideData.id)) })
  ] }) });
}
export {
  Carousel as C,
  export_createCarousel as a,
  export_getCarouselDefaultConfig as e
};
`;export{e as default};
