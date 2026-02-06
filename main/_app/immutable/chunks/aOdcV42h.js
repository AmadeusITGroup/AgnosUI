const e=`import { createCarousel as createCarousel$1, getCarouselDefaultConfig as getCarouselDefaultConfig$1 } from "@agnos-ui/core/components/carousel";
import { true$ } from "@agnos-ui/core/utils/stores";
import { readable, computed } from "@amadeus-it-group/tansu";
import { createAttributesDirective, mergeDirectives } from "@agnos-ui/core/utils/directive";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { typeString, typeArray } from "@agnos-ui/core/utils/writables";
import { createWidgetFactory } from "@agnos-ui/core/utils/widget";
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
  className: typeString,
  containerClass: typeString,
  slideClass: void 0,
  slidesData: typeArray,
  structure: void 0,
  navigation: void 0,
  slide: void 0,
  ariaLive: typeString
};
const coreOverride = {
  container: ".au-carousel-container"
};
function getCarouselDefaultConfig() {
  return { ...getCarouselDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createCarousel = createWidgetFactory("carousel", (config) => {
  const widget = extendWidgetProps(createCarousel$1, defaultConfigExtraProps, configValidator, coreOverride)(config);
  return {
    ...widget,
    directives: {
      ...widget.directives,
      root: mergeDirectives(
        widget.directives.root,
        createAttributesDirective(() => ({
          classNames: {
            carousel: true$
          },
          attributes: {
            class: widget.stores.className$
          }
        }))
      ),
      slide: mergeDirectives(
        widget.directives.slide,
        createAttributesDirective((slideData$) => ({
          attributes: {
            class: computed(() => {
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
      container: createAttributesDirective(() => ({
        classNames: {
          "au-carousel-container": true$
        },
        attributes: {
          class: widget.stores.containerClass$,
          "aria-atomic": readable("false"),
          "aria-live": widget.stores.ariaLive$
        }
      }))
    }
  };
});
export {
  createCarousel as c,
  getCarouselDefaultConfig as g
};
`;export{e as default};
