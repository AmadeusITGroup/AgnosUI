const t=`import { jsx as _jsx } from "react/jsx-runtime";
import { createProgressbar } from '@agnos-ui/react-headless/components/progressbar';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { toSlotContextWidget } from '@agnos-ui/react-headless/types';
import { Slot } from '@agnos-ui/react-headless/slot';
export * from '@agnos-ui/react-headless/components/progressbar';
function DefaultSlotContent(slotContext) {
    const classList = ['progress-bar'];
    if (slotContext.state.striped) {
        classList.push('progress-bar-striped');
    }
    if (slotContext.state.animated) {
        classList.push('progress-bar-animated');
    }
    if (slotContext.state.className) {
        classList.push(slotContext.state.className);
    }
    return (_jsx("div", { className: "progress", style: { height: slotContext.state.height }, children: _jsx("div", { className: classList.join(' '), style: { width: \`\${slotContext.state.percentage}%\` }, children: _jsx(Slot, { slotContent: slotContext.state.slotDefault, props: slotContext }) }) }));
}
const defaultConfig = {
    slotContent: DefaultSlotContent,
};
export const Progressbar = (props) => {
    const [state, widget] = useWidgetWithConfig(createProgressbar, props, 'progressbar', { ...defaultConfig, slotDefault: props.children });
    const slotContext = { state, widget: toSlotContextWidget(widget) };
    return (_jsx("div", { role: "progressbar", "aria-label": state.ariaLabel || undefined, "aria-valuenow": state.value, "aria-valuemin": state.min, "aria-valuemax": state.max, "aria-valuetext": state.ariaValueText, children: _jsx(Slot, { slotContent: state.slotContent, props: slotContext }) }));
};
`;export{t as default};
