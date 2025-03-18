const e=`"use strict";
const carousel = require("@agnos-ui/core/components/carousel");
const stores = require("@agnos-ui/core/utils/stores");
const index = require("./index-J1BeNka9.cjs");
const directive = require("@agnos-ui/core/utils/directive");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const writables = require("@agnos-ui/core/utils/writables");
const defaultConfigExtraProps = {
  slidesData: [],
  slide: void 0
};
const configValidator = {
  slidesData: writables.typeArray,
  slide: void 0
};
const coreOverride = {
  container: ".au-carousel-container"
};
function getCarouselDefaultConfig() {
  return { ...carousel.getCarouselDefaultConfig(), ...defaultConfigExtraProps };
}
function createCarousel(config) {
  const widget = extendWidget.extendWidgetProps(carousel.createCarousel, defaultConfigExtraProps, configValidator, coreOverride)(config);
  return {
    ...widget,
    directives: {
      ...widget.directives,
      root: directive.mergeDirectives(
        widget.directives.root,
        directive.createAttributesDirective(() => ({
          classNames: {
            carousel: stores.true$
          }
        }))
      ),
      tabIndicator: directive.mergeDirectives(
        widget.directives.tabIndicator,
        directive.createAttributesDirective((slide$) => ({
          classNames: {
            active: index.computed(() => slide$().index === widget.stores.selectedScrollSnap$())
          },
          attributes: {
            ["data-bs-target"]: index.readable("")
          },
          events: {
            pointerdown: (e) => e.preventDefault()
          }
        }))
      ),
      scrollPrev: directive.mergeDirectives(
        widget.directives.scrollPrev,
        directive.createAttributesDirective(() => ({
          classNames: {
            "carousel-control-prev": stores.true$
          },
          events: {
            pointerdown: (e) => e.preventDefault()
          }
        }))
      ),
      scrollNext: directive.mergeDirectives(
        widget.directives.scrollNext,
        directive.createAttributesDirective(() => ({
          classNames: {
            "carousel-control-next": stores.true$
          },
          events: {
            pointerdown: (e) => e.preventDefault()
          }
        }))
      )
    }
  };
}
exports.createCarousel = createCarousel;
exports.getCarouselDefaultConfig = getCarouselDefaultConfig;
`;export{e as default};
