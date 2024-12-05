import {Slot} from '@agnos-ui/react-headless/slot';
import classNames from 'classnames';
import {useWidgetWithConfig} from '../../config';
import {NavButton, PageItem} from './pageItem';
import type {PaginationApi, PaginationContext, PaginationProps} from './pagination.gen';
import {createPagination} from './pagination.gen';
import {type Ref, useImperativeHandle} from 'react';

/**
 * Renders the default slot pages for the pagination component.
 *
 * @param slotContext - The context containing pagination state and directives.
 * @returns The rendered pagination items or null if there are no pages.
 *
 * The function iterates over the pages in the pagination state and generates JSX elements for each page.
 * If a page is represented by -1, it renders an ellipsis item. Otherwise, it renders a page item.
 *
 * - Ellipsis items are rendered as disabled list items with an aria-hidden attribute for accessibility.
 * - Page items are rendered using the `PageItem` component, with properties for disabled state, active state, and directives.
 *
 * The function returns a fragment containing the generated JSX elements, or null if there are no pages to render.
 */
export const PaginationDefaultSlotPages = (slotContext: PaginationContext) => {
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
};

/**
 * Renders the default slot structure for the pagination component.
 *
 * @param slotContext - The context containing the state and directives for pagination.
 * @returns The rendered pagination component.
 *
 * The function constructs the pagination structure based on the provided state and directives.
 * It conditionally includes navigation buttons for first, previous, next, and last pages based on the state.
 * The pagination items are wrapped in an unordered list with appropriate classes.
 * Additionally, an aria-live region is included for accessibility purposes.
 */
export const PaginationDefaultSlotStructure = (slotContext: PaginationContext) => {
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
};

/**
 * Pagination component that renders a navigation element for paginated content.
 * It uses the {@link useWidgetWithConfig} hook to create a pagination widget with the provided props.
 *
 * @param props - The properties for the Pagination component.
 * @param props.ref - Forwarded reference to the PaginationApi.
 * @returns The rendered pagination navigation element.
 */
export function Pagination(props: Partial<PaginationProps> & {ref?: Ref<PaginationApi>}) {
	const widgetContext = useWidgetWithConfig(createPagination, props, 'pagination', {
		pagesDisplay: PaginationDefaultSlotPages,
		structure: PaginationDefaultSlotStructure,
	});
	useImperativeHandle(props.ref, () => widgetContext.api, [widgetContext.api]);

	return (
		<nav aria-label={widgetContext.state.ariaLabel}>
			<Slot slotContent={widgetContext.state.structure} props={widgetContext} />
		</nav>
	);
}
