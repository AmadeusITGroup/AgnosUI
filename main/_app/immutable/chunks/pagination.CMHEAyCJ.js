const t=`import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createPagination } from '@agnos-ui/react-headless/components/pagination';
import { useWidgetWithConfig } from '@agnos-ui/react-headless/config';
import { Slot } from '@agnos-ui/react-headless/slot';
import { toSlotContextWidget } from '@agnos-ui/react-headless/types';
import classNames from 'classnames';
import { NavButton, PageItem } from './pageItem';
export * from '@agnos-ui/react-headless/components/pagination';
export * from './pageItem';
export function DefaultPages(slotContext) {
    const { widget, state } = slotContext;
    const jsxPages = [];
    for (let i = 0; i < state.pages.length; i++) {
        if (state.pages[i] === -1) {
            jsxPages.push(_jsxs("li", { className: "page-item disabled", children: [_jsx("div", { className: "page-link au-ellipsis", "aria-hidden": "true", children: _jsx(Slot, { slotContent: state.slotEllipsis, props: slotContext }) }), _jsx("span", { className: "visually-hidden", children: state.ariaEllipsisLabel })] }, 'Ellipsis' + i));
        }
        else {
            jsxPages.push(_jsx(PageItem, { className: 'au-page', disabled: state.disabled, active: state.pages[i] === state.page, onClick: (e) => widget.actions.select(state.pages[i], e.nativeEvent), href: state.pagesHrefs[i], ariaLabel: state.pagesLabel[i], activeLabel: state.activeLabel, children: _jsx(Slot, { slotContent: state.slotNumberLabel, props: { ...slotContext, displayedPage: state.pages[i] } }) }, state.pages[i]));
        }
    }
    return jsxPages.length ? _jsx(_Fragment, { children: jsxPages }) : null;
}
const defaultConfig = {
    slotPages: DefaultPages,
    slotStructure: DefaultStructure,
};
export function DefaultStructure(slotContext) {
    const { widget, state } = slotContext;
    const ItemsBefore = [];
    const ItemsAfter = [];
    if (state.boundaryLinks) {
        ItemsBefore.push(_jsx(NavButton, { className: 'au-first', ariaLabel: state.ariaFirstLabel, href: state.pagesHrefs[0], onClick: (e) => widget.actions.first(e.nativeEvent), disabled: state.previousDisabled, children: _jsx(Slot, { slotContent: state.slotFirst, props: slotContext }) }, 'first'));
    }
    if (state.directionLinks) {
        ItemsBefore.push(_jsx(NavButton, { className: 'au-previous', ariaLabel: state.ariaPreviousLabel, href: state.directionsHrefs.previous, onClick: (e) => widget.actions.previous(e.nativeEvent), disabled: state.previousDisabled, children: _jsx(Slot, { slotContent: state.slotPrevious, props: slotContext }) }, 'prev'));
    }
    if (state.directionLinks) {
        ItemsAfter.push(_jsx(NavButton, { className: 'au-next', ariaLabel: state.ariaNextLabel, href: state.directionsHrefs.next, onClick: (e) => widget.actions.next(e.nativeEvent), disabled: state.nextDisabled, children: _jsx(Slot, { slotContent: state.slotNext, props: slotContext }) }, 'next'));
    }
    if (state.boundaryLinks) {
        ItemsAfter.push(_jsx(NavButton, { className: 'au-last', ariaLabel: state.ariaLastLabel, href: state.pagesHrefs.at(-1), onClick: (e) => widget.actions.last(e.nativeEvent), disabled: state.nextDisabled, children: _jsx(Slot, { slotContent: state.slotLast, props: slotContext }) }, 'last'));
    }
    return (_jsxs(_Fragment, { children: [_jsxs("ul", { className: classNames('au-pagination', 'pagination', state.size ? \`pagination-\${state.size}\` : '', state.className), children: [ItemsBefore, _jsx(Slot, { slotContent: state.slotPages, props: slotContext }), ItemsAfter] }), _jsx("div", { "aria-live": "polite", className: "visually-hidden", children: state.page && \`Current page is \${state.page}\` })] }));
}
// TODO discuss the extension of the props to the HTML UL one for react ?
export function Pagination(props) {
    const [state, widget] = useWidgetWithConfig(createPagination, props, 'pagination', defaultConfig);
    const slotContext = { state, widget: toSlotContextWidget(widget) };
    return (_jsx("nav", { "aria-label": state.ariaLabel, children: _jsx(Slot, { slotContent: state.slotStructure, props: slotContext }) }));
}
`;export{t as default};
