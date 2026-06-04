const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const carousel$1 = require("../../carousel-C-vSnTTq.cjs");
const carousel = require("@agnos-ui/core/components/carousel");
exports.createCarousel = carousel$1.createCarousel;
exports.getCarouselDefaultConfig = carousel$1.getCarouselDefaultConfig;
Object.keys(carousel).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => carousel[k]
  });
});
`;export{e as default};
