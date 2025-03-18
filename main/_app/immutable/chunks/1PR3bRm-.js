const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_stores = require("../../utils/stores.cjs");
const utils_directive = require("../../dom-CuBx1JPZ.cjs");
const EmblaCarousel = require("embla-carousel");
const tansu = require("@amadeus-it-group/tansu");
const utils_writables = require("../../writables-Bn3uhKEG.cjs");
const defaultConfig = {
  align: "center",
  container: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  dragFree: false,
  dragThreshold: 10,
  duration: 25,
  loop: false,
  skipSnaps: false,
  plugins: [],
  showNavigationArrows: true,
  showNavigationIndicators: true,
  ariaPrevLabel: "Select previous slide",
  ariaNextLabel: "Select next slide",
  ariaIndicatorLabel: (index) => \`Select slide \${index + 1}\`
};
function getCarouselDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  dragFree: utils_writables.typeBoolean,
  plugins: utils_writables.typeArray,
  align: utils_writables.createTypeEnum(["start", "center", "end"]),
  container: utils_writables.typeStringOrNull,
  containScroll: utils_writables.createTypeEnum([false, "trimSnaps", "keepSnaps"]),
  direction: utils_writables.createTypeEnum(["ltr", "rtl"]),
  dragThreshold: utils_writables.typeNumber,
  duration: utils_writables.typeNumber,
  loop: utils_writables.typeBoolean,
  skipSnaps: utils_writables.typeBoolean,
  showNavigationArrows: utils_writables.typeBoolean,
  showNavigationIndicators: utils_writables.typeBoolean,
  ariaPrevLabel: utils_writables.typeString,
  ariaNextLabel: utils_writables.typeString,
  ariaIndicatorLabel: utils_writables.typeFunction
};
function createEmblaCarousel(options$, plugins$) {
  let emblaApi;
  const scrolling$ = tansu.writable(false);
  const canScrollPrev$ = tansu.writable(false);
  const canScrollNext$ = tansu.writable(true);
  const selectedScrollSnap$ = tansu.writable(0);
  const initialized$ = tansu.writable(false);
  const directiveArgs$ = tansu.computed(() => ({
    options: options$(),
    plugins: plugins$ ? plugins$() : []
  }));
  return {
    directive: utils_directive.bindDirective(
      utils_directive.browserDirective((element, { options, plugins }) => {
        if (emblaApi) {
          throw new Error("Only one Embla directive can be attached per carousel widget !");
        }
        emblaApi = EmblaCarousel(element, options, plugins);
        emblaApi.on("scroll", () => {
          scrolling$.set(true);
        });
        emblaApi.on("settle", () => {
          scrolling$.set(false);
        });
        emblaApi.on("select", (api) => {
          canScrollNext$.set(api.canScrollNext());
          canScrollPrev$.set(api.canScrollPrev());
          selectedScrollSnap$.set(api.selectedScrollSnap());
        });
        emblaApi.on("init", () => {
          initialized$.set(true);
        });
        emblaApi.on("reInit", (api) => {
          canScrollNext$.set(api.canScrollNext());
          canScrollPrev$.set(api.canScrollPrev());
          scrolling$.set(false);
          selectedScrollSnap$.set(api.selectedScrollSnap());
        });
        canScrollNext$.set(emblaApi.canScrollNext());
        canScrollPrev$.set(emblaApi.canScrollPrev());
        return {
          update: ({ options: options2, plugins: plugins2 }) => {
            emblaApi.reInit(options2, plugins2);
          },
          destroy: () => {
            emblaApi == null ? void 0 : emblaApi.destroy();
            emblaApi = void 0;
          }
        };
      }),
      directiveArgs$
    ),
    stores: {
      scrolling$,
      canScrollPrev$,
      canScrollNext$,
      selectedScrollSnap$,
      initialized$
    },
    get api() {
      return emblaApi;
    }
  };
}
function createCarousel(config) {
  const [
    {
      align$,
      container$,
      containScroll$,
      direction$,
      dragFree$,
      dragThreshold$,
      duration$,
      loop$,
      skipSnaps$,
      plugins$,
      ariaPrevLabel$,
      ariaNextLabel$,
      ariaIndicatorLabel$,
      showNavigationIndicators$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultConfig, config, configValidator);
  const emblaOptions$ = tansu.computed(() => ({
    align: align$(),
    container: container$(),
    containScroll: containScroll$(),
    direction: direction$(),
    dragFree: dragFree$(),
    dragThreshold: dragThreshold$(),
    duration: duration$(),
    loop: loop$(),
    skipSnaps: skipSnaps$()
  }));
  const emblaCarousel = createEmblaCarousel(emblaOptions$, plugins$);
  return {
    ...utils_stores.stateStores({
      ...emblaCarousel.stores,
      ...stateProps,
      direction$,
      showNavigationIndicators$
    }),
    patch,
    api: {
      scrollPrev: (jump) => {
        var _a, _b;
        (_b = (_a = emblaCarousel.api) == null ? void 0 : _a.scrollPrev) == null ? void 0 : _b.call(_a, jump);
      },
      scrollNext: (jump) => {
        var _a, _b;
        (_b = (_a = emblaCarousel.api) == null ? void 0 : _a.scrollNext) == null ? void 0 : _b.call(_a, jump);
      },
      scrollTo: (index, jump) => {
        var _a, _b;
        (_b = (_a = emblaCarousel.api) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, index, jump);
      },
      plugins: () => {
        var _a, _b;
        return (_b = (_a = emblaCarousel.api) == null ? void 0 : _a.plugins) == null ? void 0 : _b.call(_a);
      },
      emblaApi: () => emblaCarousel.api
    },
    directives: {
      root: utils_directive.mergeDirectives(
        emblaCarousel.directive,
        utils_directive.createAttributesDirective(() => ({
          classNames: {
            "au-carousel": utils_stores.true$
          },
          attributes: {
            role: tansu.readable("region"),
            "aria-roledescription": tansu.readable("carousel")
          }
        }))
      ),
      scrollPrev: utils_directive.createAttributesDirective(() => ({
        attributes: {
          "aria-label": ariaPrevLabel$,
          disabled: tansu.computed(() => !emblaCarousel.stores.canScrollPrev$() || void 0)
        },
        events: {
          click: () => {
            var _a;
            return (_a = emblaCarousel.api) == null ? void 0 : _a.scrollPrev();
          }
        }
      })),
      scrollNext: utils_directive.createAttributesDirective(() => ({
        attributes: {
          "aria-label": ariaNextLabel$,
          disabled: tansu.computed(() => !emblaCarousel.stores.canScrollNext$() || void 0)
        },
        events: {
          click: () => {
            var _a;
            return (_a = emblaCarousel.api) == null ? void 0 : _a.scrollNext();
          }
        }
      })),
      tabIndicator: utils_directive.createAttributesDirective((slide$) => ({
        events: {
          click: () => {
            var _a;
            (_a = emblaCarousel.api) == null ? void 0 : _a.scrollTo(slide$().index, slide$().jump ?? true);
          }
        },
        attributes: {
          "aria-label": tansu.computed(() => ariaIndicatorLabel$()(slide$().index)),
          "aria-selected": tansu.computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? "true" : void 0),
          "aria-controls": tansu.computed(() => slide$().id),
          role: tansu.readable("tab")
        }
      })),
      slide: utils_directive.createAttributesDirective((slide$) => {
        const selected$ = tansu.computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$());
        return {
          attributes: {
            id: tansu.computed(() => slide$().id),
            "aria-hidden": tansu.computed(() => selected$() ? void 0 : "true"),
            role: tansu.computed(() => showNavigationIndicators$() ? "tabpanel" : "group"),
            "aria-roledescription": tansu.computed(() => showNavigationIndicators$() ? void 0 : "slide"),
            tabindex: tansu.computed(() => showNavigationIndicators$() && selected$() ? "0" : void 0)
          },
          classNames: {
            "au-carousel-slide": utils_stores.true$
          }
        };
      })
    }
  };
}
exports.createCarousel = createCarousel;
exports.createEmblaCarousel = createEmblaCarousel;
exports.getCarouselDefaultConfig = getCarouselDefaultConfig;
`;export{e as default};
