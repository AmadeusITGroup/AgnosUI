const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const widget = require("../../widget-ClcZWw9S.cjs");
const widget$1 = require("@agnos-ui/core/utils/widget");
exports.useWidgetWithConfig = widget.useWidgetWithConfig;
Object.keys(widget$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => widget$1[k]
  });
});
`;export{e as default};
