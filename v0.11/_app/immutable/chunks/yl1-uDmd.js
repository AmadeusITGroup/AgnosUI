const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const directive$1 = require("../../directive-C1WhTndu.cjs");
const directive = require("@agnos-ui/core/utils/directive");
exports.directiveAttributes = directive$1.directiveAttributes;
exports.ssrAttributes = directive$1.ssrAttributes;
exports.useDirective = directive$1.useDirective;
exports.useDirectives = directive$1.useDirectives;
Object.keys(directive).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => directive[k]
  });
});
`;export{e as default};
