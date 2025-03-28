const e=`"use strict";
const carousel = require("@agnos-ui/core/components/carousel");
const stores = require("@agnos-ui/core/utils/stores");
const tansu = require("@amadeus-it-group/tansu");
const directive = require("@agnos-ui/core/utils/directive");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const writables = require("@agnos-ui/core/utils/writables");
const defaultConfigExtraProps = {
  className: "",
  containerClass: "",
  slideClass: "",
  slidesData: [],
  structure: void 0,
  navigation: void 0,
  slide: void 0,
  ariaLive: "polite"
};
const configValidator = {
  className: writables.typeString,
  containerClass: writables.typeString,
  slideClass: void 0,
  slidesData: writables.typeArray,
  structure: void 0,
  navigation: void 0,
  slide: void 0,
  ariaLive: writables.typeString
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
          },
          attributes: {
            class: widget.stores.className$
          }
        }))
      ),
      slide: directive.mergeDirectives(
        widget.directives.slide,
        directive.createAttributesDirective((slideData$) => ({
          attributes: {
            class: tansu.computed(() => {
              const slideClass = widget.stores.slideClass$();
              if (typeof slideClass === "function") {
                const slideData = slideData$();
                return slideClass({
                  id: slideData.id,
                  index: slideData.index,
                  active: slideData.index === widget.stores.selectedScrollSnap$()
                });
              } else {
                return slideClass;
              }
            })
          }
        }))
      ),
      container: directive.createAttributesDirective(() => ({
        classNames: {
          "au-carousel-container": stores.true$
        },
        attributes: {
          class: widget.stores.containerClass$,
          "aria-atomic": tansu.readable("false"),
          "aria-live": widget.stores.ariaLive$
        }
      }))
    }
  };
}
exports.createCarousel = createCarousel;
exports.getCarouselDefaultConfig = getCarouselDefaultConfig;
`;export{e as default};
