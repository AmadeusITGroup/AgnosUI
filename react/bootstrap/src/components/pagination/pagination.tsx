import {useWidgetWithConfig} from '../../config';
import {Slot} from '@agnos-ui/react-headless/slot';
import type {AdaptSlotContentProps, AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import classNames from 'classnames';
import {NavButton, PageItem} from './pageItem';
import {createPagination as coreCreatePagination} from '@agnos-ui/core-bootstrap/components/pagination';

export * from '@agnos-ui/core-bootstrap/components/pagination';

export type PaginationWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/pagination').PaginationWidget>;
export type PaginationProps = WidgetProps<PaginationWidget>;
export type PaginationState = WidgetState<PaginationWidget>;
export type PaginationContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/pagination').PaginationContext>;
export type PaginationNumberContext = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/pagination').PaginationNumberContext>;
export const createPagination: WidgetFactory<PaginationWidget> = coreCreatePagination as any;

export * from './pageItem';

export function DefaultPages(slotContext: PaginationContext) {
	const {widget, state} = slotContext;
	const jsxPages = [];
	for (let i = 0; i < state.pages.length; i++) {
		if (state.pages[i] === -1) {
			jsxPages.push(
				<li className="page-item disabled" key={'Ellipsis' + i}>
					<div className="page-link au-ellipsis" aria-hidden="true">
						<Slot slotContent={state.slotEllipsis} props={slotContext}></Slot>
					</div>
					<span className="visually-hidden">{state.ariaEllipsisLabel}</span>
				</li>,
			);
		} else {
			jsxPages.push(
				<PageItem
					key={state.pages[i]}
					className={'au-page'}
					disabled={state.disabled}
					active={state.pages[i] === state.page}
					onClick={(e) => widget.actions.select(state.pages[i], e.nativeEvent)}
					href={state.pagesHrefs[i]}
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
	slotStructure: DefaultStructure,
};

export function DefaultStructure(slotContext: PaginationContext) {
	const {widget, state} = slotContext;
	const ItemsBefore = [];
	const ItemsAfter = [];

	if (state.boundaryLinks) {
		ItemsBefore.push(
			<NavButton
				key={'first'}
				className={'au-first'}
				ariaLabel={state.ariaFirstLabel}
				href={state.pagesHrefs[0]}
				onClick={(e) => widget.actions.first(e.nativeEvent)}
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
				href={state.directionsHrefs.previous}
				onClick={(e) => widget.actions.previous(e.nativeEvent)}
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
				href={state.directionsHrefs.next}
				onClick={(e) => widget.actions.next(e.nativeEvent)}
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
				href={state.pagesHrefs.at(-1)}
				onClick={(e) => widget.actions.last(e.nativeEvent)}
				disabled={state.nextDisabled}
			>
				<Slot slotContent={state.slotLast} props={slotContext}></Slot>
			</NavButton>,
		);
	}

	return (
		<>
			<ul className={classNames('au-pagination', 'pagination', state.size ? `pagination-${state.size}` : '', state.className)}>
				{ItemsBefore}
				<Slot slotContent={state.slotPages} props={slotContext}></Slot>
				{ItemsAfter}
			</ul>
			<div aria-live="polite" className="visually-hidden">
				{state.page && `Current page is ${state.page}`}
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
			<Slot slotContent={state.slotStructure} props={slotContext} />
		</nav>
	);
}
