const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const carousel = require("../../carousel-C-vSnTTq.cjs");
const carousel$1 = require("@agnos-ui/core/components/carousel");
exports.createCarousel = carousel.createCarousel;
exports.getCarouselDefaultConfig = carousel.getCarouselDefaultConfig;
Object.keys(carousel$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => carousel$1[k]
  });
});
`;export{e as default};
