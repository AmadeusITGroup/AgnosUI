const e=`import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createSlider, useDirective, useWidgetWithConfig } from '@agnos-ui/react-headless';
import React from 'react';
export function Slider(props) {
    const [{ className, combinedLabelDisplay, combinedLabelPositionLeft, combinedLabelPositionTop, disabled, handleDisplayOptions, max, maxValueLabelDisplay, min, minValueLabelDisplay, progressDisplayOptions, readonly, sortedHandles, sortedValues, values, vertical, }, { actions: { click, keydown, mouseDown }, directives: { sliderDirective, minLabelDirective, maxLabelDirective }, },] = useWidgetWithConfig(createSlider, props, 'slider');
    const sliderSetRef = useDirective(sliderDirective);
    const minSetRef = useDirective(minLabelDirective);
    const maxSetRef = useDirective(maxLabelDirective);
    return (_jsxs("div", { ref: sliderSetRef, className: \`au-slider \${vertical ? 'au-slider-vertical' : 'au-slider-horizontal'} \${className} \${disabled ? ' disabled' : ''}\`, children: [progressDisplayOptions.map((option, index) => (_jsx("div", { className: 'au-slider-progress', style: { left: \`\${option.left}%\`, bottom: \`\${option.bottom}%\`, width: \`\${option.width}%\`, height: \`\${option.height}%\` } }, index))), _jsx("div", { className: vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area', onClick: (e) => click(e) }), _jsx("div", { ref: minSetRef, className: vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min', style: { visibility: minValueLabelDisplay ? 'visible' : 'hidden' }, children: min }), _jsx("div", { ref: maxSetRef, className: vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max', style: { visibility: maxValueLabelDisplay ? 'visible' : 'hidden' }, children: max }), _jsxs("div", { className: vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now', style: {
                    visibility: combinedLabelDisplay ? 'visible' : 'hidden',
                    left: \`\${combinedLabelPositionLeft}%\`,
                    top: \`\${combinedLabelPositionTop}%\`,
                }, children: [sortedValues[0], " - ", sortedValues[1]] }), sortedHandles.map((item, i) => (_jsxs(React.Fragment, { children: [_jsx("button", { className: \`au-slider-handle \${vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}\`, role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": item.value, "aria-valuetext": '' + item.value, "aria-label": item.ariaLabel, "aria-readonly": readonly ? 'true' : undefined, "aria-disabled": disabled ? 'true' : undefined, "aria-orientation": vertical ? 'vertical' : undefined, disabled: disabled, style: {
                            left: \`\${handleDisplayOptions[item.id].left}%\`,
                            top: \`\${handleDisplayOptions[item.id].top}%\`,
                        }, onKeyDown: (e) => keydown(e, item.id), onMouseDown: (e) => mouseDown(e, item.id), children: "\\u00A0" }), _jsx("div", { className: vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now', style: {
                            left: \`\${handleDisplayOptions[i].left}%\`,
                            top: \`\${handleDisplayOptions[i].top}%\`,
                            visibility: combinedLabelDisplay ? 'hidden' : 'visible',
                        }, children: values[i] })] }, item.id)))] }));
}
`;export{e as default};
