const r=`import { jsx, Fragment } from "react/jsx-runtime";
import { createPortal } from "react-dom";
const Portal = ({ children, container }) => container ? createPortal(children, container) : /* @__PURE__ */ jsx(Fragment, { children });
export {
  Portal as P
};
`;export{r as default};
