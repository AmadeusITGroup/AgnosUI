const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const pagination = require("../../pagination-BOXMB0xl.cjs");
const pagination$1 = require("@agnos-ui/core-bootstrap/components/pagination");
exports.DefaultPages = pagination.DefaultPages;
exports.DefaultStructure = pagination.DefaultStructure;
exports.NavButton = pagination.NavButton;
exports.PageItem = pagination.PageItem;
exports.Pagination = pagination.Pagination;
exports.createPagination = pagination.createPagination;
Object.keys(pagination$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => pagination$1[k]
    });
});
`;export{t as default};
