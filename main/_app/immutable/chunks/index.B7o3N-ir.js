const o=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("../../accordion-BpHgq1MV.cjs");
const accordion$1 = require("@agnos-ui/react-headless/components/accordion");
exports.Accordion = accordion.Accordion;
exports.AccordionItem = accordion.AccordionItem;
Object.keys(accordion$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => accordion$1[k]
    });
});
`;export{o as default};
