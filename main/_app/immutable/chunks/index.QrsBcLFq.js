const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rating = require("../../rating-Cv_sh0OO.cjs");
const rating$1 = require("@agnos-ui/react-headless/components/rating");
exports.Rating = rating.Rating;
Object.keys(rating$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => rating$1[k]
    });
});
`;export{e as default};
