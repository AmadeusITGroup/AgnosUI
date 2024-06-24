const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rating = require("../../rating-Bf8cRtHn.cjs");
const rating$1 = require("@agnos-ui/core/components/rating");
exports.createRating = rating.createRating;
exports.getRatingDefaultConfig = rating.getRatingDefaultConfig;
Object.keys(rating$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => rating$1[k]
  });
});
`;export{t as default};
