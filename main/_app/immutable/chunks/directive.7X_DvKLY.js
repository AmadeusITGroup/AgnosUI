const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const directive = require("../../directive-CHqmYtoV.cjs");
const directive$1 = require("@agnos-ui/core/utils/directive");
exports.directiveAttributes = directive.directiveAttributes;
exports.ssrAttributes = directive.ssrAttributes;
exports.useDirective = directive.useDirective;
exports.useDirectives = directive.useDirectives;
Object.keys(directive$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => directive$1[k]
    });
});
`;export{e as default};
