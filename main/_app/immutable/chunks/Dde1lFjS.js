const t=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const isReactComponent = (item) => item.prototype instanceof react.Component;
const Slot = ({ slotContent: SlotContent, props }) => {
  const isFunction = typeof SlotContent === "function";
  if (isFunction) {
    return isReactComponent(SlotContent) ? /* @__PURE__ */ jsxRuntime.jsx(SlotContent, { ...props }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: SlotContent(props) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: SlotContent });
};
exports.Slot = Slot;
`;export{t as default};
