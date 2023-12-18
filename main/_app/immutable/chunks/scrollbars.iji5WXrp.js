const n=`import { noop } from './func';
const internalRemoveScrollbars = () => {
    const scrollbarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth);
    const body = document.body;
    const bodyStyle = body.style;
    const { overflow, paddingRight } = bodyStyle;
    if (scrollbarWidth > 0) {
        const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
        bodyStyle.paddingRight = \`\${actualPadding + scrollbarWidth}px\`;
    }
    bodyStyle.overflow = 'hidden';
    return () => {
        if (scrollbarWidth > 0) {
            bodyStyle.paddingRight = paddingRight;
        }
        bodyStyle.overflow = overflow;
    };
};
let internalRevert = noop;
export const removeScrollbars = () => {
    internalRevert();
    internalRevert = internalRemoveScrollbars();
};
export const revertScrollbars = () => {
    internalRevert();
    internalRevert = noop;
};
`;export{n as default};
