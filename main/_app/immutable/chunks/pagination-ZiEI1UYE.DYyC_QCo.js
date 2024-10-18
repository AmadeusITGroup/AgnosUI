const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const types = require("./types.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
const func = require("./func-Qd3cD9a3.cjs");
const utils_directive = require("./directive-DdlwGFtf.cjs");
const PAGE_LINK_DEFAULT = "#";
const defaultConfig = {
  page: 1,
  collectionSize: 0,
  pageSize: 10,
  disabled: false,
  directionLinks: true,
  boundaryLinks: false,
  size: null,
  onPageChange: func.noop,
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
  page: utils_writables.typeNumber,
  collectionSize: utils_writables.typeNumber,
  pageSize: utils_writables.typeNumber,
  disabled: utils_writables.typeBoolean,
  directionLinks: utils_writables.typeBoolean,
  boundaryLinks: utils_writables.typeBoolean,
  size: { normalizeValue: (value) => value === "lg" || value === "sm" || value === null ? value : types.INVALID_VALUE },
  onPageChange: utils_writables.typeFunction,
  pagesFactory: utils_writables.typeFunction,
  ariaLabel: utils_writables.typeString,
  activeLabel: utils_writables.typeString,
  ariaPageLabel: utils_writables.typeFunction,
  ariaFirstLabel: utils_writables.typeString,
  ariaPreviousLabel: utils_writables.typeString,
  ariaNextLabel: utils_writables.typeString,
  ariaLastLabel: utils_writables.typeString,
  ariaLiveLabel: utils_writables.typeFunction,
  className: utils_writables.typeString,
  pageLink: utils_writables.typeFunction
};
function createPagination(config) {
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
  ] = utils_stores.writablesForProps(defaultConfig, config, configValidator);
  const pageCount$ = tansu.computed(() => {
    let pageCount = Math.ceil(collectionSize$() / pageSize$());
    if (!utils_writables.isNumber(pageCount) || pageCount < 1) {
      pageCount = 1;
    }
    return pageCount;
  });
  const page$ = utils_stores.bindableProp(_dirtyPage$, onPageChange$, (dirtyPage) => utils_writables.clamp(dirtyPage, pageCount$(), 1));
  const pages$ = tansu.computed(() => pagesFactory$()(page$(), pageCount$()));
  const nextDisabled$ = tansu.computed(() => page$() === pageCount$() || disabled$());
  const previousDisabled$ = tansu.computed(() => page$() === 1 || disabled$());
  const pagesLabel$ = tansu.computed(() => {
    const ariaPageLabel = ariaPageLabel$();
    const pageCount = pageCount$();
    return pages$().map((page) => ariaPageLabel(page, pageCount));
  });
  const pagesHrefs$ = tansu.computed(() => {
    const pageLinkFactory = pageLink$();
    const pageCount = pageCount$();
    return Array.from({ length: pageCount }, (_, index) => pageLinkFactory(index + 1));
  });
  const directionsHrefs$ = tansu.computed(() => {
    const pagesHrefs = pagesHrefs$();
    const pageIndex = page$() - 1;
    return {
      previous: pagesHrefs.at(pageIndex > 0 ? pageIndex - 1 : 0),
      next: pagesHrefs.at(pageIndex + 1) ?? pagesHrefs.at(-1)
    };
  });
  const ariaLiveLabelText$ = tansu.computed(() => ariaLiveLabel$()(page$(), pageCount$()));
  function handleNavigation(pageNumber, event) {
    if (pagesHrefs$()[pageNumber - 1] === PAGE_LINK_DEFAULT) {
      event == null ? void 0 : event.preventDefault();
    }
    if (!event || !(event.ctrlKey || event.metaKey)) {
      event == null ? void 0 : event.preventDefault();
      page$.set(pageNumber);
    }
  }
  const widget = {
    ...utils_stores.stateStores({
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
      pageLink: utils_directive.createAttributesDirective((pageLinkContext$) => ({
        events: {
          click: (e) => handleNavigation(pageLinkContext$().page, e)
        },
        attributes: {
          "aria-current": tansu.computed(() => page$() === pageLinkContext$().page ? "page" : void 0),
          "aria-label": tansu.computed(() => pagesLabel$()[pageLinkContext$().page - 1]),
          href: tansu.computed(() => pagesHrefs$()[pageLinkContext$().page - 1]),
          tabindex: tansu.computed(() => disabled$() ? "-1" : void 0),
          "aria-disabled": tansu.computed(() => disabled$() ? "true" : void 0)
        },
        classNames: {
          "au-page": true
        }
      })),
      pageFirst: utils_directive.createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(1, e)
        },
        attributes: {
          "aria-label": ariaFirstLabel$,
          href: tansu.computed(() => pagesHrefs$()[0]),
          tabindex: tansu.computed(() => previousDisabled$() ? "-1" : void 0),
          "aria-disabled": tansu.computed(() => previousDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-first": true
        }
      })),
      pagePrev: utils_directive.createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(page$() - 1, e)
        },
        attributes: {
          "aria-label": ariaPreviousLabel$,
          href: tansu.computed(() => directionsHrefs$().previous),
          tabindex: tansu.computed(() => previousDisabled$() ? "-1" : void 0),
          "aria-disabled": tansu.computed(() => previousDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-previous": true
        }
      })),
      pageNext: utils_directive.createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(page$() + 1, e)
        },
        attributes: {
          "aria-label": ariaNextLabel$,
          href: tansu.computed(() => directionsHrefs$().next),
          tabindex: tansu.computed(() => nextDisabled$() ? "-1" : void 0),
          "aria-disabled": tansu.computed(() => nextDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-next": true
        }
      })),
      pageLast: utils_directive.createAttributesDirective(() => ({
        events: {
          click: (e) => handleNavigation(pageCount$(), e)
        },
        attributes: {
          "aria-label": ariaLastLabel$,
          href: tansu.computed(() => pagesHrefs$().at(-1)),
          tabindex: tansu.computed(() => nextDisabled$() ? "-1" : void 0),
          "aria-disabled": tansu.computed(() => nextDisabled$() ? "true" : void 0)
        },
        classNames: {
          "au-last": true
        }
      }))
    }
  };
  return widget;
}
exports.createPagination = createPagination;
exports.getPaginationDefaultConfig = getPaginationDefaultConfig;
`;export{e as default};
