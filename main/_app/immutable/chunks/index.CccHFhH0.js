const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const slider = require("../../slider-tt0fqOVJ.cjs");
const slider$1 = require("@agnos-ui/core-bootstrap/components/slider");
exports.DefaultSlotHandle = slider.DefaultSlotHandle;
exports.DefaultSlotStructure = slider.DefaultSlotStructure;
exports.Slider = slider.Slider;
exports.createSlider = slider.createSlider;
Object.keys(slider$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slider$1[k]
    });
});
`;export{e as default};
