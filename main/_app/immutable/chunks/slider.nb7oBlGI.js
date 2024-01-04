const e=`import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createSlider } from '@agnos-ui/react-headless/components/slider';
import { useDirective } from '@agnos-ui/react-headless/utils/directive';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import React from 'react';
export * from '@agnos-ui/react-headless/components/slider';
export function Slider(props) {
    const [{ className, combinedLabelDisplay, combinedLabelPositionLeft, combinedLabelPositionTop, disabled, handleDisplayOptions, max, maxValueLabelDisplay, min, minValueLabelDisplay, progressDisplayOptions, readonly, sortedHandles, sortedValues, values, vertical, showValueLabels, showMinMaxLabels, rtl, }, { actions: { click, keydown, mouseDown }, directives: { sliderDirective, minLabelDirective, maxLabelDirective }, },] = useWidgetWithConfig(createSlider, props, 'slider');
    const sliderSetRef = useDirective(sliderDirective);
    const minSetRef = useDirective(minLabelDirective);
    const maxSetRef = useDirective(maxLabelDirective);
    return (_jsxs("div", { ref: sliderSetRef, className: \`au-slider \${vertical ? 'au-slider-vertical' : 'au-slider-horizontal'} \${className} \${disabled ? ' disabled' : ''}\`, children: [progressDisplayOptions.map((option, index) => (_jsx("div", { className: 'au-slider-progress', style: {
                    left: \`\${option.left}%\`,
                    right: \`\${option.right}%\`,
                    bottom: \`\${option.bottom}%\`,
                    top: \`\${option.top}%\`,
                    width: \`\${option.width}%\`,
                    height: \`\${option.height}%\`,
                } }, index))), _jsx("div", { className: vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area', onClick: (e) => click(e) }), showMinMaxLabels ? (_jsxs(_Fragment, { children: [_jsx("div", { ref: minSetRef, className: \`\${rtl ? 'au-slider-rtl' : ''} \${vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'} \${!minValueLabelDisplay ? ' invisible' : ''}
						\`, children: min }), _jsx("div", { ref: maxSetRef, className: \`\${rtl ? 'au-slider-rtl' : ''} \${vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'} \${!maxValueLabelDisplay ? ' invisible' : ''}\`, children: max })] })) : (_jsx(_Fragment, {})), showValueLabels && combinedLabelDisplay ? (_jsx("div", { className: vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now', style: {
                    left: \`\${combinedLabelPositionLeft}%\`,
                    top: \`\${combinedLabelPositionTop}%\`,
                }, children: rtl ? (_jsxs(_Fragment, { children: [sortedValues[1], " - ", sortedValues[0]] })) : (_jsxs(_Fragment, { children: [sortedValues[0], " - ", sortedValues[1]] })) })) : (_jsx(_Fragment, {})), sortedHandles.map((item, i) => (_jsxs(React.Fragment, { children: [_jsx("button", { className: \`au-slider-handle \${vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}\`, role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": item.value, "aria-valuetext": '' + item.value, "aria-label": item.ariaLabel, "aria-readonly": readonly ? 'true' : undefined, "aria-disabled": disabled ? 'true' : undefined, "aria-orientation": vertical ? 'vertical' : undefined, disabled: disabled, style: {
                            top: \`\${handleDisplayOptions[item.id].top}%\`,
                            left: \`\${handleDisplayOptions[item.id].left}%\`,
                        }, onKeyDown: (e) => keydown(e, item.id), onMouseDown: (e) => mouseDown(e, item.id), children: "\\u00A0" }), showValueLabels && !combinedLabelDisplay ? (_jsx("div", { className: vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now', style: {
                            left: \`\${handleDisplayOptions[i].left}%\`,
                            top: \`\${handleDisplayOptions[i].top}%\`,
                        }, children: values[i] })) : (_jsx(_Fragment, {}))] }, item.id)))] }));
}
`;export{e as default};
