const o=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("../../accordion-BSxUDkXY.cjs");
const accordion$1 = require("@agnos-ui/core/components/accordion");
exports.createAccordion = accordion.createAccordion;
exports.createAccordionItem = accordion.createAccordionItem;
exports.getAccordionDefaultConfig = accordion.getAccordionDefaultConfig;
Object.keys(accordion$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => accordion$1[k]
  });
});
`;export{o as default};
