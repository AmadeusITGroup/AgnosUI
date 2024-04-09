const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const slider = require("../../slider-CEj1PbLS.cjs");
const slider$1 = require("@agnos-ui/react-headless/components/slider");
exports.DefaultSlotHandle = slider.DefaultSlotHandle;
exports.DefaultSlotStructure = slider.DefaultSlotStructure;
exports.Slider = slider.Slider;
Object.keys(slider$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slider$1[k]
    });
});
`;export{e as default};
