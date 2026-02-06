const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tree$1 = require("../../tree-DuY7bsYo.cjs");
const tree = require("@agnos-ui/core/components/tree");
exports.createTree = tree$1.createTree;
exports.getTreeDefaultConfig = tree$1.getTreeDefaultConfig;
Object.keys(tree).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => tree[k]
  });
});
`;export{e as default};
