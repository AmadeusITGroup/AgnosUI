const t=`import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createPagination, toSlotContextWidget } from '@agnos-ui/core';
import classNames from 'classnames';
import { Slot } from '../Slot';
import { useWidgetWithConfig } from '../utils';
import { NavButton, PageItem } from './PageItem';
export function DefaultPages(slotContext) {
    const { widget, state } = slotContext;
    const jsxPages = [];
    for (let i = 0; i < state.pages.length; i++) {
        if (widget.api.isEllipsis(state.pages[i])) {
            jsxPages.push(_jsx(NavButton, { disabled: true, tabIndex: -1, className: 'au-ellipsis', children: _jsx(Slot, { slotContent: state.slotEllipsis, props: slotContext }) }, 'Ellipsis' + i));
        }
        else {
            jsxPages.push(_jsx(PageItem, { className: 'au-page', disabled: state.disabled, active: state.pages[i] === state.page, onClick: (e) => {
                    widget.actions.select(state.pages[i]);
                    e.preventDefault();
                }, ariaLabel: state.pagesLabel[i], activeLabel: state.activeLabel, children: _jsx(Slot, { slotContent: state.slotNumberLabel, props: { ...slotContext, displayedPage: state.pages[i] } }) }, state.pages[i]));
        }
    }
    return jsxPages.length ? _jsx(_Fragment, { children: jsxPages }) : null;
}
const defaultConfig = {
    slotPages: DefaultPages,
};
// TODO discuss the extension of the props to the HTML UL one for react ?
export function Pagination(props) {
    const [state, widget] = useWidgetWithConfig(createPagination, props, 'pagination', defaultConfig);
    const slotContext = { state, widget: toSlotContextWidget(widget) };
    const ItemsBefore = [];
    const ItemsAfter = [];
    if (state.boundaryLinks) {
        ItemsBefore.push(_jsx(NavButton, { className: 'au-first', ariaLabel: state.ariaFirstLabel, onClick: (e) => {
                widget.actions.first();
                e.preventDefault();
            }, disabled: state.previousDisabled, children: _jsx(Slot, { slotContent: state.slotFirst, props: slotContext }) }, 'first'));
    }
    if (state.directionLinks) {
        ItemsBefore.push(_jsx(NavButton, { className: 'au-previous', ariaLabel: state.ariaPreviousLabel, onClick: (e) => {
                widget.actions.previous();
                e.preventDefault();
            }, disabled: state.previousDisabled, children: _jsx(Slot, { slotContent: state.slotPrevious, props: slotContext }) }, 'prev'));
    }
    if (state.directionLinks) {
        ItemsAfter.push(_jsx(NavButton, { className: 'au-next', ariaLabel: state.ariaNextLabel, onClick: (e) => {
                widget.actions.next();
                e.preventDefault();
            }, disabled: state.nextDisabled, children: _jsx(Slot, { slotContent: state.slotNext, props: slotContext }) }, 'next'));
    }
    if (state.boundaryLinks) {
        ItemsAfter.push(_jsx(NavButton, { className: 'au-last', ariaLabel: state.ariaLastLabel, onClick: (e) => {
                widget.actions.last();
                e.preventDefault();
            }, disabled: state.nextDisabled, children: _jsx(Slot, { slotContent: state.slotLast, props: slotContext }) }, 'last'));
    }
    return (_jsxs("nav", { "aria-label": state.ariaLabel, children: [_jsxs("ul", { className: classNames('au-pagination', 'pagination', state.size ? \`pagination-\${state.size}\` : '', state.className), children: [ItemsBefore, _jsx(Slot, { slotContent: state.slotPages, props: slotContext }), ItemsAfter] }), _jsx("div", { "aria-live": "polite", className: "visually-hidden", children: state.page && \`Current page is \${state.page}\` })] }));
}
`;export{t as default};
