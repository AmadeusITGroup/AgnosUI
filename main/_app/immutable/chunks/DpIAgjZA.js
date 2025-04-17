const e=`"use strict";
const carousel = require("@agnos-ui/core/components/carousel");
const stores = require("@agnos-ui/core/utils/stores");
const tansu = require("@amadeus-it-group/tansu");
const directive = require("@agnos-ui/core/utils/directive");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const writables = require("@agnos-ui/core/utils/writables");
const widget = require("@agnos-ui/core/utils/widget");
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
const createCarousel = widget.createWidgetFactory("carousel", (config) => {
  const widget2 = extendWidget.extendWidgetProps(carousel.createCarousel, defaultConfigExtraProps, configValidator, coreOverride)(config);
  return {
    ...widget2,
    directives: {
      ...widget2.directives,
      root: directive.mergeDirectives(
        widget2.directives.root,
        directive.createAttributesDirective(() => ({
          classNames: {
            carousel: stores.true$
          },
          attributes: {
            class: widget2.stores.className$
          }
        }))
      ),
      slide: directive.mergeDirectives(
        widget2.directives.slide,
        directive.createAttributesDirective((slideData$) => ({
          attributes: {
            class: tansu.computed(() => {
              const slideClass = widget2.stores.slideClass$();
              if (typeof slideClass === "function") {
                const slideData = slideData$();
                return slideClass({
                  id: slideData.id,
                  index: slideData.index,
                  active: slideData.index === widget2.stores.selectedScrollSnap$()
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
          class: widget2.stores.containerClass$,
          "aria-atomic": tansu.readable("false"),
          "aria-live": widget2.stores.ariaLive$
        }
      }))
    }
  };
});
exports.createCarousel = createCarousel;
exports.getCarouselDefaultConfig = getCarouselDefaultConfig;
`;export{e as default};
