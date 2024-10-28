const n=`import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { getPaginationDefaultConfig as getPaginationDefaultConfig$1, createPagination as createPagination$1 } from "@agnos-ui/core/components/pagination";
const defaultConfigExtraProps = {
  structure: void 0,
  ellipsisLabel: "…",
  firstPageLabel: "«",
  previousPageLabel: "‹",
  nextPageLabel: "›",
  lastPageLabel: "»",
  numberLabel: ({ displayedPage }) => \`\${displayedPage}\`,
  pagesDisplay: void 0
};
function getPaginationDefaultConfig() {
  return { ...getPaginationDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createPagination = extendWidgetProps(createPagination$1, defaultConfigExtraProps);
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
export {
  createPagination as c,
  getPaginationDefaultConfig as g,
  ngBootstrapPagination as n
};
`;export{n as default};
