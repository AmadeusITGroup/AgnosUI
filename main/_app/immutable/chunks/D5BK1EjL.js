const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const reactDom = require("react-dom");
const Portal = ({ children, container }) => container ? reactDom.createPortal(children, container) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
exports.Portal = Portal;
`;export{t as default};
