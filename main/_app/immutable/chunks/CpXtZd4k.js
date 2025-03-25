const e=`import { getCarouselDefaultConfig as getCarouselDefaultConfig$1, createCarousel as createCarousel$1 } from "@agnos-ui/core/components/carousel";
import { true$ } from "@agnos-ui/core/utils/stores";
import { readable, computed } from "@amadeus-it-group/tansu";
import { mergeDirectives, createAttributesDirective } from "@agnos-ui/core/utils/directive";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { typeArray } from "@agnos-ui/core/utils/writables";
const defaultConfigExtraProps = {
  slidesData: [],
  structure: void 0,
  navigation: void 0,
  slide: void 0
};
const configValidator = {
  slidesData: typeArray,
  structure: void 0,
  navigation: void 0,
  slide: void 0
};
const coreOverride = {
  container: ".au-carousel-container"
};
function getCarouselDefaultConfig() {
  return { ...getCarouselDefaultConfig$1(), ...defaultConfigExtraProps };
}
function createCarousel(config) {
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
          }
        }))
      ),
      tabIndicator: mergeDirectives(
        widget.directives.tabIndicator,
        createAttributesDirective((slide$) => ({
          classNames: {
            active: computed(() => slide$().index === widget.stores.selectedScrollSnap$())
          },
          attributes: {
            ["data-bs-target"]: readable("")
          },
          events: {
            pointerdown: (e) => e.preventDefault()
          }
        }))
      ),
      scrollPrev: mergeDirectives(
        widget.directives.scrollPrev,
        createAttributesDirective(() => ({
          classNames: {
            "carousel-control-prev": true$
          },
          events: {
            pointerdown: (e) => e.preventDefault()
          }
        }))
      ),
      scrollNext: mergeDirectives(
        widget.directives.scrollNext,
        createAttributesDirective(() => ({
          classNames: {
            "carousel-control-next": true$
          },
          events: {
            pointerdown: (e) => e.preventDefault()
          }
        }))
      )
    }
  };
}
export {
  createCarousel as c,
  getCarouselDefaultConfig as g
};
`;export{e as default};
