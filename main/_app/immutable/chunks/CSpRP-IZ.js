const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const slider = require("../../slider-CosrWCnn.cjs");
const slider$1 = require("@agnos-ui/core/components/slider");
exports.createSlider = slider.createSlider;
exports.getSliderDefaultConfig = slider.getSliderDefaultConfig;
Object.keys(slider$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => slider$1[k]
  });
});
`;export{e as default};
