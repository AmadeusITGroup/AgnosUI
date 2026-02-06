const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const drawer$1 = require("../../drawer-BRQiSxJu.cjs");
const drawer = require("@agnos-ui/core/components/drawer");
exports.createDrawer = drawer$1.createDrawer;
exports.getDrawerDefaultConfig = drawer$1.getDrawerDefaultConfig;
Object.keys(drawer).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => drawer[k]
  });
});
`;export{e as default};
