const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const pageFactory = require("../../pageFactory-vEBrUBB-.cjs");
const pagination = require("@agnos-ui/core/components/pagination");
exports.createPagination = pageFactory.createPagination;
exports.getPaginationDefaultConfig = pageFactory.getPaginationDefaultConfig;
exports.ngBootstrapPagination = pageFactory.ngBootstrapPagination;
Object.keys(pagination).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => pagination[k]
  });
});
`;export{t as default};
