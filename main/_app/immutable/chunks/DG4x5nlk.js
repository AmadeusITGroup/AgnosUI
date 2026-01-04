const e=`import { writablesForProps, stateStores, true$ } from "../../utils/stores.js";
import { a as bindDirective, b as browserDirective, p as createAttributesDirective, n as mergeDirectives } from "../../dom-DD1hAVZy.js";
import EmblaCarousel from "embla-carousel";
import { writable, computed, asReadable, readable } from "@amadeus-it-group/tansu";
import { g as typeFunction, e as typeString, c as typeBoolean, a as typeNumber, j as createTypeEnum, f as typeStringOrNull, i as typeArray } from "../../writables-e0tyaQpe.js";
import { createNavManager } from "../../services/navManager.js";
import { createWidgetFactory } from "../../utils/widget.js";
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
  const slideNodes$ = writable([]);
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
        emblaApi.on("slidesChanged", (api) => {
          slideNodes$.set(api.slideNodes());
        });
        canScrollNext$.set(emblaApi.canScrollNext());
        canScrollPrev$.set(emblaApi.canScrollPrev());
        slideNodes$.set(emblaApi.slideNodes());
        return {
          update: ({ options: options2, plugins: plugins2 }) => {
            emblaApi.reInit(options2, plugins2);
          },
          destroy: () => {
            emblaApi?.destroy();
            emblaApi = void 0;
            initialized$.set(false);
            scrolling$.set(false);
            canScrollPrev$.set(false);
            canScrollNext$.set(true);
            selectedScrollSnap$.set(0);
            slideNodes$.set([]);
          }
        };
      }),
      directiveArgs$
    ),
    stores: {
      scrolling$: asReadable(scrolling$),
      canScrollPrev$: asReadable(canScrollPrev$),
      canScrollNext$: asReadable(canScrollNext$),
      selectedScrollSnap$: asReadable(selectedScrollSnap$),
      initialized$: asReadable(initialized$),
      slideNodes$: asReadable(slideNodes$)
    },
    get api() {
      return emblaApi;
    }
  };
}
const createCarousel = createWidgetFactory("carousel", (config) => {
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
  const {
    stores: { slideNodes$, ...emblaStores }
  } = emblaCarousel;
  const { directive: navDirective, refreshElements, focusLeft, focusRight, focusFirst, focusLast } = createNavManager();
  const navManagerConfig = {
    keys: {
      ArrowLeft: focusLeft,
      ArrowRight: focusRight,
      Home: focusFirst,
      End: focusLast
    },
    selector: (node) => node.querySelectorAll("[role='tab']")
  };
  return {
    ...stateStores({
      ...emblaStores,
      ...stateProps,
      direction$,
      showNavigationIndicators$
    }),
    patch,
    api: {
      scrollPrev: (jump) => {
        emblaCarousel.api?.scrollPrev?.(jump);
      },
      scrollNext: (jump) => {
        emblaCarousel.api?.scrollNext?.(jump);
      },
      scrollTo: (index, jump) => {
        emblaCarousel.api?.scrollTo?.(index, jump);
      },
      plugins: () => emblaCarousel.api?.plugins?.(),
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
            "aria-roledescription": readable("carousel"),
            dir: direction$
          }
        }))
      ),
      scrollPrev: createAttributesDirective(() => ({
        attributes: {
          "aria-label": ariaPrevLabel$,
          disabled: computed(() => !emblaCarousel.stores.canScrollPrev$() || void 0)
        },
        events: {
          click: () => emblaCarousel.api?.scrollPrev(),
          pointerdown: (event) => event.preventDefault(),
          touchstart: (event) => event.stopPropagation()
        }
      })),
      scrollNext: createAttributesDirective(() => ({
        attributes: {
          "aria-label": ariaNextLabel$,
          disabled: computed(() => !emblaCarousel.stores.canScrollNext$() || void 0)
        },
        events: {
          click: () => emblaCarousel.api?.scrollNext(),
          pointerdown: (event) => event.preventDefault(),
          touchstart: (event) => event.stopPropagation()
        }
      })),
      tabList: mergeDirectives(
        bindDirective(navDirective, readable(navManagerConfig)),
        browserDirective(() => {
          const unsubscribe = slideNodes$.subscribe(() => {
            refreshElements();
          });
          return {
            destroy: unsubscribe
          };
        }),
        createAttributesDirective(() => ({
          attributes: {
            role: readable("tablist")
          }
        }))
      ),
      tabIndicator: createAttributesDirective((slide$) => ({
        events: {
          click: () => {
            emblaCarousel.api?.scrollTo(slide$().index, slide$().jump ?? true);
          }
        },
        attributes: {
          "aria-label": computed(() => ariaIndicatorLabel$()(slide$().index)),
          "aria-selected": computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? "true" : void 0),
          "aria-controls": computed(() => slide$().id),
          role: readable("tab"),
          tabindex: computed(() => slide$().index === emblaCarousel.stores.selectedScrollSnap$() ? "0" : "-1")
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
});
export {
  createCarousel,
  createEmblaCarousel,
  getCarouselDefaultConfig
};
`;export{e as default};
