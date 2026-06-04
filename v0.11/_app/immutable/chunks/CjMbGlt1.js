const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const slider$1 = require("../../slider-CosrWCnn.cjs");
const slider = require("@agnos-ui/core/components/slider");
exports.createSlider = slider$1.createSlider;
exports.getSliderDefaultConfig = slider$1.getSliderDefaultConfig;
Object.keys(slider).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => slider[k]
  });
});
`;export{e as default};
