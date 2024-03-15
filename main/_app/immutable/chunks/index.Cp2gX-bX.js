const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("@agnos-ui/core/components/accordion");
const createAccordion = accordion.createAccordion;
exports.createAccordion = createAccordion;
Object.keys(accordion).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => accordion[k]
    });
});
`;export{e as default};
