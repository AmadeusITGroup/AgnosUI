const e=`import { computed } from "@amadeus-it-group/tansu";
import { writablesForProps, bindableProp, stateStores, true$ } from "./utils/stores.js";
import { l as isNumber, e as typeString, g as typeFunction, c as typeBoolean, a as typeNumber, k as clamp } from "./writables-e0tyaQpe.js";
import { noop } from "./utils/func.js";
import { n as createAttributesDirective } from "./dom-CzJpOnsw.js";
import { createWidgetFactory } from "./utils/widget.js";
const PAGE_LINK_DEFAULT = "#";
const defaultConfig = {
  page: 1,
  collectionSize: 0,
  pageSize: 10,
  disabled: false,
  directionLinks: true,
  boundaryLinks: false,
  onPageChange: noop,
  pagesFactory: (_page, pageCount) => {
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return pages;
  },
  ariaLabel: "Page navigation",
  activeLabel: "(current)",
  ariaPageLabel: (processPage, pageCount) => \`Page \${processPage} of \${pageCount}\`,
  ariaFirstLabel: "Action link for first page",
  ariaPreviousLabel: "Action link for previous page",
  ariaNextLabel: "Action link for next page",
  ariaLastLabel: "Action link for last page",
  ariaEllipsisLabel: "Ellipsis page element",
  ariaLiveLabel: (currentPage) => \`Current page is \${currentPage}\`,
  className: "",
  pageLink: (_page) => PAGE_LINK_DEFAULT
};
function getPaginationDefaultConfig() {
  return { ...defaultConfig };
}
const configValidator = {
  page: typeNumber,
  collectionSize: typeNumber,
  pageSize: typeNumber,
  disabled: typeBoolean,
  directionLinks: typeBoolean,
  boundaryLinks: typeBoolean,
  onPageChange: typeFunction,
  pagesFactory: typeFunction,
  ariaLabel: typeString,
  activeLabel: typeString,
  ariaPageLabel: typeFunction,
  ariaFirstLabel: typeString,
  ariaPreviousLabel: typeString,
  ariaNextLabel: typeString,
  ariaLastLabel: typeString,
  ariaLiveLabel: typeFunction,
  className: typeString,
  pageLink: typeFunction,
  ariaEllipsisLabel: typeString
};
const createPagination = createWidgetFactory("pagination", (config) => {
  const [
    {
      // dirty inputs that need adjustment:
      page$: _dirtyPage$,
      // clean inputs with value validation:
      collectionSize$,
      pageSize$,
      onPageChange$,
      pagesFactory$,
      ariaPageLabel$,
      ariaLiveLabel$,
      pageLink$,
      disabled$,
      ariaFirstLabel$,
      ariaLastLabel$,
      ariaNextLabel$,
      ariaPreviousLabel$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultConfig, config, configValidator);
  const pageCount$ = computed(() => {
    let pageCount = Math.ceil(collectionSize$() / pageSize$());
    if (!isNumber(pageCount) || pageCount < 1) {
      pageCount = 1;
    }
    return pageCount;
  });
  const page$ = bindableProp(_dirtyPage$, onPageChange$, (dirtyPage) => clamp(dirtyPage, pageCount$(), 1));
  const pages$ = computed(() => pagesFactory$()(page$(), pageCount$()));
  const nextDisabled$ = computed(() => page$() === pageCount$() || disabled$());
  const previousDisabled$ = computed(() => page$() === 1 || disabled$());
  const pagesLabel$ = computed(() => {
    const ariaPageLabel = ariaPageLabel$();
    const pageCount = pageCount$();
    return pages$().map((page) => ariaPageLabel(page, pageCount));
  });
  const pagesHrefs$ = computed(() => {
    const pageLinkFactory = pageLink$();
    const pageCount = pageCount$();
    return Array.from({ length: pageCount }, (_, index) => pageLinkFactory(index + 1));
  });
  const directionsHrefs$ = computed(() => {
    const pagesHrefs = pagesHrefs$();
    const pageIndex = page$() - 1;
    return {
      previous: pagesHrefs.at(pageIndex > 0 ? pageIndex - 1 : 0),
      next: pagesHrefs.at(pageIndex + 1) ?? pagesHrefs.at(-1)
    };
  });
  const ariaLiveLabelText$ = computed(() => ariaLiveLabel$()(page$(), pageCount$()));
  function handleNavigation(pageNumber, event) {
    if (pagesHrefs$()[pageNumber - 1] === PAGE_LINK_DEFAULT) {
      event?.preventDefault();
    }
    if (!event || !(event.ctrlKey || event.metaKey)) {
      event?.preventDefault();
      page$.set(pageNumber);
    }
  }
  const widget = {
    ...stateStores({
      pageCount$,
      page$,
      pages$,
      nextDisabled$,
      previousDisabled$,
      pagesLabel$,
      pagesHrefs$,
      directionsHrefs$,
      disabled$,
      ariaFirstLabel$,
      ariaLastLabel$,
      ariaNextLabel$,
      ariaPreviousLabel$,
      ariaLiveLabelText$,
      ...stateProps
    }),
    patch,
    api: {
      /**
       * Set the current page pageNumber (starting from 1)
       * @param pageNumber - Current page number to set.
       * Value is normalized between 1 and the number of page
       */
      select(pageNumber) {
        page$.set(pageNumber);
      },
      /**
       * Select the first page
       */
      first() {
        page$.set(1);
      },
      /**
       * Select the previous page
       */
      previous() {
        page$.update((p) => p - 1);
      },
      /**
       * Select the next page
       */
      next() {
        page$.update((p) => p + 1);
      },
      /**
       * Select the last page
       */
      last() {
        page$.set(pageCount$());
      }
    },
    directives: {
      pageLink: createAttributesDirective((pageLinkContext$) => ({
        events: {
          click: (e) => handleNavigation(pageLinkContext$().page, e)
        },
        attributes: {
          "aria-current": computed(() => page$() === pageLinkContext$().page ? "page" : void 0),
          "aria-label": computed(() => pagesLabel$()[pageLinkContext$().page - 1]),
          href: computed(() => pagesHrefs$()[pageLinkContext$().page - 1]),
          tabindex: computed(() => disabled$() ? "-1" : void 0),
          "aria-disabled": computed(() => disabled$() ? "true" : void 0)
        },
        classNames: {
          "au-page": true$
        }
      })),
      pageFirst: createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(1, e)
        },
        attributes: {
          "aria-label": ariaFirstLabel$,
          href: computed(() => pagesHrefs$()[0]),
          tabindex: computed(() => previousDisabled$() ? "-1" : void 0),
          "aria-disabled": computed(() => previousDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-first": true$
        }
      })),
      pagePrev: createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(page$() - 1, e)
        },
        attributes: {
          "aria-label": ariaPreviousLabel$,
          href: computed(() => directionsHrefs$().previous),
          tabindex: computed(() => previousDisabled$() ? "-1" : void 0),
          "aria-disabled": computed(() => previousDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-previous": true$
        }
      })),
      pageNext: createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(page$() + 1, e)
        },
        attributes: {
          "aria-label": ariaNextLabel$,
          href: computed(() => directionsHrefs$().next),
          tabindex: computed(() => nextDisabled$() ? "-1" : void 0),
          "aria-disabled": computed(() => nextDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-next": true$
        }
      })),
      pageLast: createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(pageCount$(), e)
        },
        attributes: {
          "aria-label": ariaLastLabel$,
          href: computed(() => pagesHrefs$().at(-1)),
          tabindex: computed(() => nextDisabled$() ? "-1" : void 0),
          "aria-disabled": computed(() => nextDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-last": true$
        }
      }))
    }
  };
  return widget;
});
export {
  createPagination as c,
  getPaginationDefaultConfig as g
};
`;export{e as default};
