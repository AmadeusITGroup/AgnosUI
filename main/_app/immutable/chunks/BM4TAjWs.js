const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tree = require("../../tree-DuY7bsYo.cjs");
const tree$1 = require("@agnos-ui/core/components/tree");
exports.createTree = tree.createTree;
exports.getTreeDefaultConfig = tree.getTreeDefaultConfig;
Object.keys(tree$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => tree$1[k]
  });
});
`;export{e as default};
