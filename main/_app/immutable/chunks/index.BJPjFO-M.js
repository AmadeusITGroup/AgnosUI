const o=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("../../accordion-BaQCaLLI.cjs");
const accordion$1 = require("@agnos-ui/core-bootstrap/components/accordion");
exports.Accordion = accordion.Accordion;
exports.AccordionItem = accordion.AccordionItem;
exports.createAccordion = accordion.createAccordion;
Object.keys(accordion$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => accordion$1[k]
    });
});
`;export{o as default};
