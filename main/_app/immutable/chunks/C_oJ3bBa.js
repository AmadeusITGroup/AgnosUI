const o=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion$1 = require("../../accordion-BMOaHzWf.cjs");
const accordion = require("@agnos-ui/core/components/accordion");
exports.createAccordion = accordion$1.createAccordion;
exports.createAccordionItem = accordion$1.createAccordionItem;
exports.getAccordionDefaultConfig = accordion$1.getAccordionDefaultConfig;
Object.keys(accordion).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => accordion[k]
  });
});
`;export{o as default};
