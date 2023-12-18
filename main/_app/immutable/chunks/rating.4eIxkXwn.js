const a=`import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { createRating } from '@agnos-ui/react-headless/components/rating';
import { Slot } from '@agnos-ui/react-headless/slot';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import React from 'react';
export * from '@agnos-ui/react-headless/components/rating';
export function Rating(props) {
    const [{ tabindex, maxRating, visibleRating, ariaValueText, readonly, disabled, isInteractive, stars, className, slotStar, ariaLabel, ariaLabelledBy }, widget,] = useWidgetWithConfig(createRating, props, 'rating');
    const starStyle = {
        cursor: isInteractive ? 'pointer' : 'default',
    };
    return (_jsx("div", { role: "slider", className: \`d-inline-flex au-rating \${className}\`, tabIndex: tabindex, "aria-valuemin": 0, "aria-valuemax": maxRating, "aria-valuenow": visibleRating, "aria-valuetext": ariaValueText, "aria-readonly": readonly || undefined, "aria-disabled": disabled || undefined, "aria-label": ariaLabel || undefined, "aria-labelledby": ariaLabelledBy || undefined, onKeyDown: (e) => widget.actions.handleKey(e), onMouseLeave: widget.actions.leave, children: stars.map((star) => (_jsxs(React.Fragment, { children: [_jsxs("span", { className: "visually-hidden", children: ["(", star.index < visibleRating ? '*' : ' ', ")"] }), _jsx("span", { className: "au-rating-star", style: starStyle, onMouseEnter: () => widget.actions.hover(star.index + 1), onClick: () => widget.actions.click(star.index + 1), children: _jsx(Slot, { slotContent: slotStar, props: star }) })] }, star.index))) }));
}
`;export{a as default};
