const e=`import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createSelect } from '@agnos-ui/react-headless/components/select';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { Slot } from '@agnos-ui/react-headless/slot';
import { toSlotContextWidget } from '@agnos-ui/react-headless/types';
import { useDirective, useDirectives } from '@agnos-ui/react-headless/utils/directive';
export * from '@agnos-ui/react-headless/components/select';
function preventDefault(e) {
    e.preventDefault();
}
function DefaultBadge(slotContext) {
    return _jsx(_Fragment, { children: '' + slotContext.itemContext.item });
}
function DefaultItem(slotContext) {
    return _jsx(_Fragment, { children: '' + slotContext.itemContext.item });
}
function Badges({ slotContext }) {
    const badges = [];
    const state = slotContext.state;
    for (const itemContext of slotContext.state.selectedContexts) {
        badges.push(_jsx("div", { className: \`au-select-badge me-1 \${state.badgeClassName}\`, children: _jsx(Slot, { slotContent: state.slotBadgeLabel, props: { ...slotContext, itemContext } }) }, itemContext.id));
    }
    return badges.length ? _jsx(_Fragment, { children: badges }) : null;
}
function Rows({ slotContext }) {
    const { widget, state } = slotContext;
    const highlighted = state.highlighted;
    return (_jsx(_Fragment, { children: state.visibleItems.map((itemContext) => {
            const { id } = itemContext;
            const classname = ['au-select-item dropdown-item position-relative'];
            if (itemContext === highlighted) {
                classname.push('bg-light');
            }
            if (itemContext.selected) {
                classname.push('selected');
            }
            return (_jsx("li", { className: classname.join(' '), onClick: () => widget.api.toggleItem(itemContext.item), children: _jsx(Slot, { slotContent: state.slotItem, props: { ...slotContext, itemContext } }) }, id));
        }) }));
}
const defaultConfig = {
    slotBadgeLabel: DefaultBadge,
    slotItem: DefaultItem,
};
export function Select(props) {
    const [state, widget] = useWidgetWithConfig(createSelect, props, 'select', defaultConfig);
    const slotContext = { state, widget: toSlotContextWidget(widget) };
    const { id, ariaLabel, visibleItems, filterText, open, className, menuClassName, placement } = state;
    const { directives: { floatingDirective, hasFocusDirective, referenceDirective }, } = widget;
    const refSetContainer = useDirective(referenceDirective);
    const refSetInput = useDirective(hasFocusDirective);
    const refSetMenu = useDirectives([hasFocusDirective, floatingDirective]);
    return (_jsxs("div", { ref: refSetContainer, className: \`au-select dropdown border border-1 p-1 mb-3 d-block \${className}\`, children: [_jsxs("div", { ref: refSetInput, role: "combobox", className: "d-flex align-items-center flex-wrap", "aria-haspopup": "listbox", "aria-expanded": open, children: [_jsx(Badges, { slotContext: slotContext }), _jsx("input", { id: id, "aria-label": ariaLabel, className: "au-select-input flex-grow-1 border-0", type: "text", value: filterText, "aria-autocomplete": "list", autoCorrect: "off", autoCapitalize: "none", autoComplete: "off", onKeyDown: widget.actions.onInputKeydown, onInput: widget.actions.onInput })] }), open && visibleItems.length > 0 && (_jsx("ul", { ref: refSetMenu, className: \`dropdown-menu show \${menuClassName}\`, "data-popper-placement": placement, onMouseDown: preventDefault, children: _jsx(Rows, { slotContext: slotContext }) }))] }));
}
`;export{e as default};