import type {PaginationContext, PaginationProps} from '@agnos-ui/react-headless';
import {Slot, createPagination, toSlotContextWidget, useWidgetWithConfig} from '@agnos-ui/react-headless';
import classNames from 'classnames';
import {NavButton, PageItem} from './PageItem';

export function DefaultPages(slotContext: PaginationContext) {
	const {widget, state} = slotContext;
	const jsxPages = [];
	for (let i = 0; i < state.pages.length; i++) {
		if (widget.api.isEllipsis(state.pages[i])) {
			jsxPages.push(
				<NavButton disabled={true} key={'Ellipsis' + i} tabIndex={-1} className={'au-ellipsis'}>
					<Slot slotContent={state.slotEllipsis} props={slotContext}></Slot>
				</NavButton>,
			);
		} else {
			jsxPages.push(
				<PageItem
					key={state.pages[i]}
					className={'au-page'}
					disabled={state.disabled}
					active={state.pages[i] === state.page}
					onClick={(e) => {
						widget.actions.select(state.pages[i]);
						e.preventDefault();
					}}
					ariaLabel={state.pagesLabel[i]}
					activeLabel={state.activeLabel}
				>
					<Slot slotContent={state.slotNumberLabel} props={{...slotContext, displayedPage: state.pages[i]}}></Slot>
				</PageItem>,
			);
		}
	}
	return jsxPages.length ? <>{jsxPages}</> : null;
}

const defaultConfig: Partial<PaginationProps> = {
	slotPages: DefaultPages,
};

// TODO discuss the extension of the props to the HTML UL one for react ?
export function Pagination(props: Partial<PaginationProps>) {
	const [state, widget] = useWidgetWithConfig(createPagination, props, 'pagination', defaultConfig);
	const slotContext: PaginationContext = {state, widget: toSlotContextWidget(widget)};
	const ItemsBefore = [];
	const ItemsAfter = [];

	if (state.boundaryLinks) {
		ItemsBefore.push(
			<NavButton
				key={'first'}
				className={'au-first'}
				ariaLabel={state.ariaFirstLabel}
				onClick={(e) => {
					widget.actions.first();
					e.preventDefault();
				}}
				disabled={state.previousDisabled}
			>
				<Slot slotContent={state.slotFirst} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.directionLinks) {
		ItemsBefore.push(
			<NavButton
				key={'prev'}
				className={'au-previous'}
				ariaLabel={state.ariaPreviousLabel}
				onClick={(e) => {
					widget.actions.previous();
					e.preventDefault();
				}}
				disabled={state.previousDisabled}
			>
				<Slot slotContent={state.slotPrevious} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.directionLinks) {
		ItemsAfter.push(
			<NavButton
				key={'next'}
				className={'au-next'}
				ariaLabel={state.ariaNextLabel}
				onClick={(e) => {
					widget.actions.next();
					e.preventDefault();
				}}
				disabled={state.nextDisabled}
			>
				<Slot slotContent={state.slotNext} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.boundaryLinks) {
		ItemsAfter.push(
			<NavButton
				key={'last'}
				className={'au-last'}
				ariaLabel={state.ariaLastLabel}
				onClick={(e) => {
					widget.actions.last();
					e.preventDefault();
				}}
				disabled={state.nextDisabled}
			>
				<Slot slotContent={state.slotLast} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	return (
		<nav aria-label={state.ariaLabel}>
			<ul className={classNames('au-pagination', 'pagination', state.size ? `pagination-${state.size}` : '', state.className)}>
				{ItemsBefore}
				<Slot slotContent={state.slotPages} props={slotContext}></Slot>
				{ItemsAfter}
			</ul>
			<div aria-live="polite" className="visually-hidden">
				{state.page && `Current page is ${state.page}`}
			</div>
		</nav>
	);
}
