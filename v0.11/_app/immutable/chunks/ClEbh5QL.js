const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const widget$1 = require("../../widget-ClcZWw9S.cjs");
const widget = require("@agnos-ui/core/utils/widget");
exports.useWidgetWithConfig = widget$1.useWidgetWithConfig;
Object.keys(widget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => widget[k]
  });
});
`;export{e as default};
