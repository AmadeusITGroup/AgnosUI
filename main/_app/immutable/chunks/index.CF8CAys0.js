const r=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const progressbar = require("../../progressbar-D-yo9AHH.cjs");
const progressbar$1 = require("@agnos-ui/core-bootstrap/components/progressbar");
exports.Progressbar = progressbar.Progressbar;
exports.createProgressbar = progressbar.createProgressbar;
Object.keys(progressbar$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => progressbar$1[k]
    });
});
`;export{r as default};
