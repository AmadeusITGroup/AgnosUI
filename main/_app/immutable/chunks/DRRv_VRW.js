const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const slotWrapperCache = /* @__PURE__ */ new WeakMap();
const slotWrapperFactory = (slotContent) => {
  const SlotWrapper = (props) => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: slotContent(props) });
  return SlotWrapper;
};
const slotWrapper = (slotContent) => {
  let res = slotWrapperCache.get(slotContent);
  if (!res) {
    res = slotWrapperFactory(slotContent);
    slotWrapperCache.set(slotContent, res);
  }
  return res;
};
const isReactComponent = (item) => item.prototype instanceof react.Component;
const Slot = ({ slotContent, props }) => {
  const isFunction = typeof slotContent === "function";
  if (isFunction) {
    const SlotComponent = isReactComponent(slotContent) ? slotContent : slotWrapper(slotContent);
    return /* @__PURE__ */ jsxRuntime.jsx(SlotComponent, { ...props });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: slotContent });
};
exports.Slot = Slot;
`;export{t as default};
