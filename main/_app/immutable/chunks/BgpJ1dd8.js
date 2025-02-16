const t=`import { jsx, Fragment } from "react/jsx-runtime";
import { Component } from "react";
const slotWrapperCache = /* @__PURE__ */ new WeakMap();
const slotWrapperFactory = (slotContent) => {
  const SlotWrapper = (props) => /* @__PURE__ */ jsx(Fragment, { children: slotContent(props) });
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
const isReactComponent = (item) => item.prototype instanceof Component;
const Slot = ({ slotContent, props }) => {
  const isFunction = typeof slotContent === "function";
  if (isFunction) {
    const SlotComponent = isReactComponent(slotContent) ? slotContent : slotWrapper(slotContent);
    return /* @__PURE__ */ jsx(SlotComponent, { ...props });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: slotContent });
};
export {
  Slot
};
`;export{t as default};
