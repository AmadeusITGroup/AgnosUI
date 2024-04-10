const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const pagination = require("../../pagination-a4GscjDv.cjs");
const pagination$1 = require("@agnos-ui/react-headless/components/pagination");
exports.DefaultPages = pagination.DefaultPages;
exports.DefaultStructure = pagination.DefaultStructure;
exports.NavButton = pagination.NavButton;
exports.PageItem = pagination.PageItem;
exports.Pagination = pagination.Pagination;
Object.keys(pagination$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => pagination$1[k]
    });
});
`;export{t as default};
