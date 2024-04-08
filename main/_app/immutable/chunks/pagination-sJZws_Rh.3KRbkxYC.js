const e=`import { computed } from "@amadeus-it-group/tansu";
import { INVALID_VALUE } from "./types.js";
import { writablesForProps, bindableProp, stateStores } from "./utils/stores.js";
import { i as clamp, a as typeNumber, c as typeBoolean, f as typeFunction, e as typeString, j as isNumber } from "./writables-DoU_XYTX.js";
import { n as noop } from "./func-DR0n-ShK.js";
function _applyPagination(page, maxSize) {
  const pp = Math.ceil(page / maxSize) - 1;
  const start = pp * maxSize;
  const end = start + maxSize;
  return [start, end];
}
function _applyEllipses(start, end, ellipses, pages, pageCount) {
  if (ellipses) {
    if (start > 0) {
      if (start > 2) {
        pages.unshift(-1);
      } else if (start === 2) {
        pages.unshift(2);
      }
      pages.unshift(1);
    }
    if (end < pageCount) {
      if (end < pageCount - 2) {
        pages.push(-1);
      } else if (end === pageCount - 2) {
        pages.push(pageCount - 1);
      }
      pages.push(pageCount);
    }
  }
}
function _applyRotation(page, maxSize, pageCount) {
  let start = 0;
  let end = pageCount;
  const leftOffset = Math.floor(maxSize / 2);
  const rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
  if (page <= leftOffset) {
    end = maxSize;
  } else if (pageCount - page < leftOffset) {
    start = pageCount - maxSize;
  } else {
    start = page - leftOffset - 1;
    end = page + rightOffset;
  }
  return [start, end];
}
function ngBootstrapPagination(maxSize, rotate, ellipses) {
  return function(page, pageCount) {
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    if (maxSize > 0 && pageCount > maxSize) {
      let start = 0;
      let end = pageCount;
      if (rotate) {
        [start, end] = _applyRotation(page, maxSize, pageCount);
      } else {
        [start, end] = _applyPagination(page, maxSize);
      }
      pages = pages.slice(start, end);
      _applyEllipses(start, end, ellipses, pages, pageCount);
    }
    return pages;
  };
}
const PAGE_LINK_DEFAULT = "#";
const defaultConfig = {
  page: 1,
  collectionSize: 0,
  pageSize: 10,
  disabled: false,
  directionLinks: true,
  boundaryLinks: false,
  size: null,
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
  className: "",
  slotEllipsis: "…",
  slotFirst: "«",
  slotPrevious: "‹",
  slotNext: "›",
  slotLast: "»",
  slotPages: void 0,
  slotStructure: void 0,
  slotNumberLabel: ({ displayedPage }) => \`\${displayedPage}\`,
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
  size: { normalizeValue: (value) => value === "lg" || value === "sm" || value === null ? value : INVALID_VALUE },
  onPageChange: typeFunction,
  pagesFactory: typeFunction,
  ariaLabel: typeString,
  activeLabel: typeString,
  ariaPageLabel: typeFunction,
  ariaFirstLabel: typeString,
  ariaPreviousLabel: typeString,
  ariaNextLabel: typeString,
  ariaLastLabel: typeString,
  className: typeString,
  pageLink: typeFunction
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
      pageLink$,
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
  const nextDisabled$ = computed(() => page$() === pageCount$() || stateProps.disabled$());
  const previousDisabled$ = computed(() => page$() === 1 || stateProps.disabled$());
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
  function handleNavigation(pageNumber, event, pageNavigationHandler) {
    if (pagesHrefs$()[pageNumber - 1] === PAGE_LINK_DEFAULT) {
      event == null ? void 0 : event.preventDefault();
    }
    if (!event || !(event.ctrlKey || event.metaKey)) {
      event == null ? void 0 : event.preventDefault();
      if (pageNavigationHandler) {
        page$.update(pageNavigationHandler);
      } else {
        page$.set(pageNumber);
      }
    }
  }
  return {
    ...stateStores({
      pageCount$,
      page$,
      pages$,
      nextDisabled$,
      previousDisabled$,
      pagesLabel$,
      pagesHrefs$,
      directionsHrefs$,
      ...stateProps
    }),
    patch,
    actions: {
      /**
       * Set the current page pageNumber (starting from 1)
       * @param pageNumber - Current page number to set.
       * Value is normalized between 1 and the number of page
       * @param event UI event that triggered the select
       */
      select(pageNumber, event) {
        handleNavigation(pageNumber, event);
      },
      /**
       * Select the first page
       * @param event Event triggering the action
       */
      first(event) {
        handleNavigation(1, event);
      },
      /**
       * Select the previous page
       * @param event Event triggering the action
       */
      previous(event) {
        handleNavigation(page$() - 1, event, (page) => page - 1);
      },
      /**
       * Select the next page
       * @param event Event triggering the action
       */
      next(event) {
        handleNavigation(page$() + 1, event, (page) => page + 1);
      },
      /**
       * Select the last page
       * @param event Event triggering the action
       */
      last(event) {
        handleNavigation(pageCount$(), event);
      }
    },
    api: {},
    directives: {}
  };
}
export {
  createPagination as c,
  getPaginationDefaultConfig as g,
  ngBootstrapPagination as n
};
`;export{e as default};
