const e=`import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
// className and children are issue of React.HTMLAttributes
export const PageItem = React.forwardRef(({ disabled, active, ariaLabel, activeLabel, className, children, href, ...props }, ref) => {
    return (_jsx("li", { ref: ref, "aria-current": active ? 'page' : undefined, className: classNames('page-item', { active, disabled }), children: _jsxs("a", { className: classNames('page-link', className), "aria-label": ariaLabel || undefined, ...props, href: href, tabIndex: disabled ? -1 : undefined, "aria-disabled": disabled || undefined, children: [children, active && activeLabel && _jsx("span", { className: "visually-hidden", children: activeLabel })] }) }));
});
PageItem.displayName = 'PageItem';
export default PageItem;
export const NavButton = React.forwardRef(({ children, ...props }, ref) => (_jsx(PageItem, { ...props, ref: ref, children: _jsx("span", { "aria-hidden": "true", children: children }) })));
NavButton.displayName = 'NavButton';
`;export{e as default};
