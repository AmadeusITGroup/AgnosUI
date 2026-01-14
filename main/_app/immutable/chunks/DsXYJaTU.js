const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const drawer = require("../../drawer-BRQiSxJu.cjs");
const drawer$1 = require("@agnos-ui/core/components/drawer");
exports.createDrawer = drawer.createDrawer;
exports.getDrawerDefaultConfig = drawer.getDrawerDefaultConfig;
Object.keys(drawer$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => drawer$1[k]
  });
});
`;export{e as default};
