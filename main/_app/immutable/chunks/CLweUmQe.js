const n=`import { writablesForProps, stateStores, true$ } from "../../utils/stores.js";
import { a as bindDirective, b as browserDirective, n as createAttributesDirective, k as mergeDirectives } from "../../dom-gfxqXJpK.js";
import EmblaCarousel from "embla-carousel";
import { writable, computed, readable } from "@amadeus-it-group/tansu";
import { g as typeFunction, e as typeString, c as typeBoolean, a as typeNumber, j as createTypeEnum, f as typeStringOrNull, i as typeArray } from "../../writables-CgpOQ4hA.js";
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
  dragFree: typeBoolean,
  plugins: typeArray,
  align: createTypeEnum(["start", "center", "end"]),
  container: typeStringOrNull,
  containScroll: createTypeEnum([false, "trimSnaps", "keepSnaps"]),
  direction: createTypeEnum(["ltr", "rtl"]),
  dragThreshold: typeNumber,
  duration: typeNumber,
  loop: typeBoolean,
  skipSnaps: typeBoolean,
  showNavigationArrows: typeBoolean,
  showNavigationIndicators: typeBoolean,
  ariaPrevLabel: typeString,
  ariaNextLabel: typeString,
  ariaIndicatorLabel: typeFunction
};
function createEmblaCarousel(options$, plugins$) {
  let emblaApi;
  const scrolling$ = writable(false);
  const canScrollPrev$ = writable(false);
  const canScrollNext$ = writable(true);
  const selectedScrollSnap$ = writable(0);
  const initialized$ = writable(false);
  const directiveArgs$ = computed(() => ({
    options: options$(),
    plugins: plugins$ ? plugins$() : []
  }));
  return {
    directive: bindDirective(
      browserDirective((element, { options, plugins }) => {
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
  ] = writablesForProps(defaultConfig, config, configValidator);
  const emblaOptions$ = computed(() => ({
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
    ...stateStores({
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
      root: mergeDirectives(
        emblaCarousel.directive,
        createAttributesDirective(() => ({
          classNames: {
            "au-carousel": true$
          },
          attributes: {
            role: readable("region"),
            "aria-roledescription": readable("carousel")
          }
        }))
      ),
      scrollPrev: createAttributesDirective(() => ({
        attributes: {
          "aria-label": ariaPrevLabel$,
          disabled: computed(() => !emblaCarousel.stores.canScrollPrev$() || void 0)
        },
        events: {
          click: () => {
            var _a;
            return (_a = emblaCarousel.api) == null ? void 0 : _a.scrollPrev();
          }
        }
      })),
      scrollNext: createAttributesDirective(() => ({
        attributes: {
          "aria-label": ariaNextLabel$,
          disabled: computed(() => !emblaCarousel.stores.canScrollNext$() || void 0)
        },
        events: {
          click: () => {
            var _a;
            return (_a = emblaCarousel.api) == null ? void 0 : _a.scrollNext();
          }
        }
      })),
      tabIndicator: createAttributesDirective((slide$) => ({
        events: {
          click: () => {
            var _a;
            (_a = emblaCarousel.api) == null ? void 0 : _a.scrollTo(slide$().index, slide$().jump ?? true);
          }
        },
        attributes: {
          "aria-label": computed(() => ariaIndicatorLabel$()(slide$().index)),
          "aria-selected": computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? "true" : void 0),
          "aria-controls": computed(() => slide$().id),
          role: readable("tab")
        }
      })),
      slide: createAttributesDirective((slide$) => {
        const selected$ = computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$());
        return {
          attributes: {
            id: computed(() => slide$().id),
            "aria-hidden": computed(() => selected$() ? void 0 : "true"),
            role: computed(() => showNavigationIndicators$() ? "tabpanel" : "group"),
            "aria-roledescription": computed(() => showNavigationIndicators$() ? void 0 : "slide"),
            tabindex: computed(() => showNavigationIndicators$() && selected$() ? "0" : void 0)
          },
          classNames: {
            "au-carousel-slide": true$
          }
        };
      })
    }
  };
}
export {
  createCarousel,
  createEmblaCarousel,
  getCarouselDefaultConfig
};
`;export{n as default};
