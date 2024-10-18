import {Slot} from '@agnos-ui/react-headless/slot';
import classNames from 'classnames';
import {useWidgetWithConfig} from '../../config';
import {NavButton, PageItem} from './pageItem';
import type {PaginationContext, PaginationProps} from './pagination.gen';
import {createPagination} from './pagination.gen';

export function DefaultPages(slotContext: PaginationContext) {
	const {state, directives} = slotContext;
	const jsxPages = [];
	for (let i = 0; i < state.pages.length; i++) {
		if (state.pages[i] === -1) {
			jsxPages.push(
				<li className="page-item disabled" key={'Ellipsis' + i}>
					<div className="page-link au-ellipsis" aria-hidden="true">
						<Slot slotContent={state.ellipsisLabel} props={slotContext}></Slot>
					</div>
					<span className="visually-hidden">{state.ariaEllipsisLabel}</span>
				</li>,
			);
		} else {
			jsxPages.push(
				<PageItem
					key={state.pages[i]}
					disabled={state.disabled}
					active={state.pages[i] === state.page}
					activeLabel={state.activeLabel}
					directive={directives['pageLink']}
					page={state.pages[i]}
				>
					<Slot slotContent={state.numberLabel} props={{...slotContext, displayedPage: state.pages[i]}}></Slot>
				</PageItem>,
			);
		}
	}
	return jsxPages.length ? <>{jsxPages}</> : null;
}

const defaultConfig: Partial<PaginationProps> = {
	pagesDisplay: DefaultPages,
	structure: DefaultStructure,
};

export function DefaultStructure(slotContext: PaginationContext) {
	const {state, directives} = slotContext;
	const ItemsBefore = [];
	const ItemsAfter = [];

	if (state.boundaryLinks) {
		ItemsBefore.push(
			<NavButton key={'first'} disabled={state.previousDisabled} directive={directives.pageFirst}>
				<Slot slotContent={state.firstPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.directionLinks) {
		ItemsBefore.push(
			<NavButton key={'prev'} disabled={state.previousDisabled} directive={directives.pagePrev}>
				<Slot slotContent={state.previousPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.directionLinks) {
		ItemsAfter.push(
			<NavButton key={'next'} disabled={state.nextDisabled} directive={directives.pageNext}>
				<Slot slotContent={state.nextPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.boundaryLinks) {
		ItemsAfter.push(
			<NavButton key={'last'} disabled={state.nextDisabled} directive={directives['pageLast']}>
				<Slot slotContent={state.lastPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}

	return (
		<>
			<ul className={classNames('au-pagination', 'pagination', {[`pagination-${state.size}`]: !!state.size}, state.className)}>
				{ItemsBefore}
				<Slot slotContent={state.pagesDisplay} props={slotContext}></Slot>
				{ItemsAfter}
			</ul>
			<div aria-live="polite" className="visually-hidden">
				{`${state.ariaLiveLabelText}`}
			</div>
		</>
	);
}

// TODO discuss the extension of the props to the HTML UL one for react ?
export function Pagination(props: Partial<PaginationProps>) {
	const widgetContext = useWidgetWithConfig(createPagination, props, 'pagination', defaultConfig);

	return (
		<nav aria-label={widgetContext.state.ariaLabel}>
			<Slot slotContent={widgetContext.state.structure} props={widgetContext} />
		</nav>
	);
}
