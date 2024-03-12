const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toSlotContextWidget = (w) => ({
  actions: w.actions,
  api: w.api,
  directives: w.directives,
  state$: w.state$,
  stores: w.stores
});
const INVALID_VALUE = Symbol();
exports.INVALID_VALUE = INVALID_VALUE;
exports.toSlotContextWidget = toSlotContextWidget;
`;export{t as default};
