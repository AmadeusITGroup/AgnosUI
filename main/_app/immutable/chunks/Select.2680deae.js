const e=`import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createSelect, useDirective, useWidgetWithConfig } from '@agnos-ui/react-headless';
const inputGroupText = {
    backgroundColor: 'transparent',
};
function preventDefault(e) {
    e.preventDefault();
}
function Badges({ api, selected }) {
    const badges = [];
    for (const item of selected) {
        badges.push(_jsxs("div", { className: "badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1", onMouseDown: preventDefault, children: [_jsx("div", { className: "me-1", children: '' + item }), _jsx("span", { role: "button", tabIndex: -1, "aria-label": "Close", onClick: () => api.api.unselect(item), children: "x" })] }));
    }
    return badges.length ? (_jsx("div", { className: "input-group-text", style: inputGroupText, children: badges })) : null;
}
function Rows({ visible, highlighted }) {
    return (_jsx(_Fragment, { children: visible.map((itemCtx) => {
            const id = \`au-select-checkbox-\${itemCtx.id}\`;
            const classname = ['dropdown-item position-relative'];
            if (itemCtx === highlighted) {
                classname.push('bg-light');
            }
            return (_jsx("li", { className: classname.join(' '), children: _jsxs("div", { className: "form-check", children: [_jsx("input", { id: id, tabIndex: -1, type: "checkbox", className: "form-check-input", checked: itemCtx.selected, onChange: itemCtx.toggle }), _jsx("label", { htmlFor: id, className: "form-check-label stretched-link", onClick: (e) => {
                                itemCtx.toggle();
                                e.preventDefault();
                            }, children: '' + itemCtx.item })] }) }, itemCtx.id));
        }) }));
}
export function Select(props) {
    const [state, widget] = useWidgetWithConfig(createSelect, props, 'select');
    const { visible, selected, highlighted, filterText, opened, className } = state;
    const { directives: { hasFocusDirective }, } = widget;
    const refSetInput = useDirective(hasFocusDirective);
    const refSetMenu = useDirective(hasFocusDirective);
    return (_jsxs("div", { className: \`au-select dropdown input-group input-group-sm mb-3 d-block \${className}\`, children: [_jsxs("div", { ref: refSetInput, role: "combobox", className: "input-group", "aria-haspopup": "listbox", "aria-expanded": "true", children: [_jsx(Badges, { api: widget, selected: selected }), _jsx("input", { className: "form-control", type: "text", value: filterText, "aria-autocomplete": "list", autoCorrect: "off", autoCapitalize: "none", autoComplete: "off", onKeyDown: widget.actions.onInputKeydown, onInput: widget.actions.onInput })] }), opened && visible.length > 0 && (_jsx("ul", { ref: refSetMenu, className: "dropdown-menu show w-100", style: {
                    position: 'absolute',
                    inset: '0px auto auto 0px',
                    margin: '0px',
                    transform: 'translate3d(0px, 45px, 0px)',
                }, "data-popper-placement": "bottom-start", onMouseDown: preventDefault, children: _jsx(Rows, { visible: visible, highlighted: highlighted }) }))] }));
}
`;export{e as default};
