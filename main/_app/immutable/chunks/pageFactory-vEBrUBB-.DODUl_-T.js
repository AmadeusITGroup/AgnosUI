const n=`"use strict";
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const pagination = require("@agnos-ui/core/components/pagination");
const writables = require("@agnos-ui/core/utils/writables");
const defaultConfigExtraProps = {
  structure: void 0,
  ellipsisLabel: "…",
  firstPageLabel: "«",
  previousPageLabel: "‹",
  nextPageLabel: "›",
  lastPageLabel: "»",
  numberLabel: ({ displayedPage }) => \`\${displayedPage}\`,
  pagesDisplay: void 0,
  size: null
};
const configValidator = {
  structure: void 0,
  ellipsisLabel: void 0,
  firstPageLabel: void 0,
  previousPageLabel: void 0,
  nextPageLabel: void 0,
  lastPageLabel: void 0,
  numberLabel: void 0,
  pagesDisplay: void 0,
  size: writables.createTypeEnum(["lg", "sm", null])
};
function getPaginationDefaultConfig() {
  return { ...pagination.getPaginationDefaultConfig(), ...defaultConfigExtraProps };
}
const createPagination = extendWidget.extendWidgetProps(pagination.createPagination, defaultConfigExtraProps, configValidator);
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
exports.createPagination = createPagination;
exports.getPaginationDefaultConfig = getPaginationDefaultConfig;
exports.ngBootstrapPagination = ngBootstrapPagination;
`;export{n as default};
