import {Pagination as PaginationAgnosUI, WidgetsDefaultConfig, NavButton, PageItem, Slot} from '@agnos-ui/react';
import type {AdaptSlotContentProps} from '@agnos-ui/react';
import {useState} from 'react';
import type {PaginationContext, PaginationNumberContext} from '@agnos-ui/core';
import {ngBootstrapPagination} from '@agnos-ui/core';

const renderPageTemplate = ({displayedPage}: AdaptSlotContentProps<PaginationNumberContext>) => {
	return `${displayedPage} AAAAHHHH`;
};

function CustomPages({widget, state}: AdaptSlotContentProps<PaginationContext>) {
	const jsxPages = [];
	for (let i = 0; i < state.pages.length; i++) {
		if (state.pages[i] === -1) {
			jsxPages.push(
				<NavButton disabled={true} key={'Ellipsis' + i} tabIndex={-1} className={'au-ellipsis'}>
					<Slot slotContent={state.slotEllipsis} props={{state, widget}}></Slot>
				</NavButton>
			);
		} else {
			jsxPages.push(
				<PageItem
					key={state.pages[i]}
					className={'au-page'}
					disabled={state.disabled}
					active={state.pages[i] === state.page}
					onClick={(e) => {
						e.preventDefault();
						widget.actions.select(state.pages[i]);
					}}
					ariaLabel={state.pagesLabel[i]}
					activeLabel={state.activeLabel}
				>
					<Slot slotContent={state.slotNumberLabel ?? `aa ${state.pages[i]}`} props={{state, widget, displayedPage: state.pages[i]}}></Slot>
				</PageItem>
			);
		}
	}
	return jsxPages.length ? <>{jsxPages}</> : null;
}

const Pagination = () => {
	const [page, setPage] = useState(3);
	return (
		<>
			<WidgetsDefaultConfig pagination={{collectionSize: 60}}>
				<h2>Pagination example</h2>
				<div className="mb-3">
					<nav aria-label="Page navigation example">
						<PaginationAgnosUI
							slotNumberLabel={renderPageTemplate}
							pagesFactory={ngBootstrapPagination(3, false, true)}
							collectionSize={70}
							disabled={false}
							pageSize={10}
							activeLabel={'(courante)'}
							page={page}
							onPageChange={setPage}
						/>
					</nav>
				</div>
				<span>Current page {page}</span>
				<h2>Pagination pages ex</h2>
				<nav aria-label="Page navigation example 2">
					<PaginationAgnosUI slotPages={CustomPages} className={'customClass'} size={'sm'} />
				</nav>
			</WidgetsDefaultConfig>
		</>
	);
};
export default Pagination;
