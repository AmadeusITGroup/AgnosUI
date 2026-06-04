const n=`"use strict";
const utils_func = require("./utils/func.cjs");
const internalRemoveScrollbars = () => {
  const scrollbarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth);
  const body = document.body;
  const bodyStyle = body.style;
  const { overflow, paddingRight } = bodyStyle;
  if (scrollbarWidth > 0) {
    const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
    bodyStyle.paddingRight = \`\${actualPadding + scrollbarWidth}px\`;
  }
  bodyStyle.overflow = "hidden";
  return () => {
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = paddingRight;
    }
    bodyStyle.overflow = overflow;
  };
};
let internalRevert = utils_func.noop;
const removeScrollbars = () => {
  internalRevert();
  internalRevert = internalRemoveScrollbars();
};
const revertScrollbars = () => {
  internalRevert();
  internalRevert = utils_func.noop;
};
exports.removeScrollbars = removeScrollbars;
exports.revertScrollbars = revertScrollbars;
`;export{n as default};
