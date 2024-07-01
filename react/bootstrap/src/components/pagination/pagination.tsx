import {useWidgetWithConfig} from '../../config';
import {Slot} from '@agnos-ui/react-headless/slot';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import classNames from 'classnames';
import {NavButton, PageItem} from './pageItem';
import {
	createPagination as coreCreatePagination,
	getPaginationDefaultConfig as coreGetPaginationDefaultConfig,
} from '@agnos-ui/core-bootstrap/components/pagination';
import type {PaginationContext, PaginationProps, PaginationWidget} from './pagination.gen';

export type * from './pagination.gen';
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;
export const getPaginationDefaultConfig: () => PaginationProps = coreGetPaginationDefaultConfig as any;

export * from './pageItem';

export function DefaultPages(slotContext: PaginationContext) {
	const {widget, state} = slotContext;
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
					directive={widget.directives['pageLink']}
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
	const {widget, state} = slotContext;
	const ItemsBefore = [];
	const ItemsAfter = [];

	if (state.boundaryLinks) {
		ItemsBefore.push(
			<NavButton key={'first'} disabled={state.previousDisabled} directive={widget.directives['pageFirst']}>
				<Slot slotContent={state.firstPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.directionLinks) {
		ItemsBefore.push(
			<NavButton key={'prev'} disabled={state.previousDisabled} directive={widget.directives['pagePrev']}>
				<Slot slotContent={state.previousPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.directionLinks) {
		ItemsAfter.push(
			<NavButton key={'next'} disabled={state.nextDisabled} directive={widget.directives['pageNext']}>
				<Slot slotContent={state.nextPageLabel} props={slotContext}></Slot>
			</NavButton>,
		);
	}
	if (state.boundaryLinks) {
		ItemsAfter.push(
			<NavButton key={'last'} disabled={state.nextDisabled} directive={widget.directives['pageLast']}>
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
	const [state, widget] = useWidgetWithConfig(createPagination, props, 'pagination', defaultConfig);
	const slotContext: PaginationContext = {state, widget: toSlotContextWidget(widget)};

	return (
		<nav aria-label={state.ariaLabel}>
			<Slot slotContent={state.structure} props={slotContext} />
		</nav>
	);
}
