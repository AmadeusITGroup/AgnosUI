const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rating$1 = require("../../rating-C5NZjIRx.cjs");
const rating = require("@agnos-ui/core/components/rating");
exports.createRating = rating$1.createRating;
exports.getRatingDefaultConfig = rating$1.getRatingDefaultConfig;
Object.keys(rating).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => rating[k]
  });
});
`;export{t as default};
