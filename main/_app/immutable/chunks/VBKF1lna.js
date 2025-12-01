const t=`import { jsx, Fragment } from "react/jsx-runtime";
import { Component } from "react";
const isReactComponent = (item) => item.prototype instanceof Component;
const Slot = ({ slotContent: SlotContent, props }) => {
  const isFunction = typeof SlotContent === "function";
  if (isFunction) {
    return isReactComponent(SlotContent) ? /* @__PURE__ */ jsx(SlotContent, { ...props }) : /* @__PURE__ */ jsx(Fragment, { children: SlotContent(props) });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: SlotContent });
};
export {
  Slot
};
`;export{t as default};
