import {Pagination} from '@agnos-ui/react-bootstrap/components/pagination';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import type {PaginationContext, PaginationNumberContext} from '@agnos-ui/react-bootstrap/components/pagination';
import {useEffect, useState} from 'react';
import type {FormEvent, FocusEvent, KeyboardEvent} from 'react';

const FILTER_PAG_REGEX = /[^0-9]/g;

function CustomPages({state, actions}: PaginationContext) {
	const [inputVal, setValue] = useState(state.page.toString());
	function handleKeyDownEnter(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			handleTheChange(e);
		}
	}
	function handleTheChange(e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) {
		const value = e.currentTarget.value;
		const intValue = parseInt(value);
		actions.select(intValue);
	}
	function formatInput(e: FormEvent<HTMLInputElement>) {
		setValue(e.currentTarget.value.replace(FILTER_PAG_REGEX, ''));
	}
	useEffect(() => {
		setValue(state.page.toString());
	}, [state.page]);
	return (
		state.pages.length && (
			<li className="au-custom-pages-item">
				<div className="mb-3 d-flex flex-nowrap px-2">
					<label id="paginationInputLabel" htmlFor="paginationInput" className="col-form-label me-2 ms-1">
						Page
					</label>
					<input
						value={inputVal}
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						className="form-control custom-pages-input"
						id="paginationInput"
						onInput={formatInput}
						onBlur={handleTheChange}
						onKeyUp={handleKeyDownEnter}
						aria-labelledby="paginationInputLabel paginationDescription"
						style={{width: '2.5rem'}}
					/>
					<span id="paginationDescription" className="col-form-label text-nowrap px-2">
						{' '}
						of {state.pages.length}
					</span>
				</div>
			</li>
		)
	);
}

const getPageSymbol = ({displayedPage}: PaginationNumberContext) => ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];

const PaginationCustom = () => {
	const [customPage, setPage] = useState(4);
	return (
		<WidgetsDefaultConfig pagination={{collectionSize: 60}}>
			<p>A pagination with customized links:</p>
			<Pagination
				ariaLabel={'Page navigation with customized links'}
				previousPageLabel={'Prev'}
				nextPageLabel={'Next'}
				numberLabel={getPageSymbol}
				page={customPage}
				onPageChange={setPage}
			/>
			<hr />
			<p>A pagination with customized pages:</p>
			<Pagination page={customPage} onPageChange={setPage} pagesDisplay={CustomPages} ariaLabel={'Page navigation with customized pages'} />
		</WidgetsDefaultConfig>
	);
};
export default PaginationCustom;
