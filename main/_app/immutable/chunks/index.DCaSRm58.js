const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rating = require("../../rating-DqvhVr_0.cjs");
const rating$1 = require("@agnos-ui/react-headless/components/rating");
exports.Rating = rating.Rating;
exports.createRating = rating.createRating;
Object.keys(rating$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => rating$1[k]
    });
});
`;export{e as default};
