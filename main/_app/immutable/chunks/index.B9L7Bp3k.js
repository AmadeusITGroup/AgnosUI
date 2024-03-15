const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rating = require("@agnos-ui/core/components/rating");
const createRating = rating.createRating;
exports.createRating = createRating;
Object.keys(rating).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => rating[k]
    });
});
`;export{e as default};
