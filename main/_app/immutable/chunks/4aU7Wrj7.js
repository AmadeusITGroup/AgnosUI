const n=`import { noop } from "./utils/func.js";
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
let internalRevert = noop;
const removeScrollbars = () => {
  internalRevert();
  internalRevert = internalRemoveScrollbars();
};
const revertScrollbars = () => {
  internalRevert();
  internalRevert = noop;
};
export {
  revertScrollbars as a,
  removeScrollbars as r
};
`;export{n as default};
