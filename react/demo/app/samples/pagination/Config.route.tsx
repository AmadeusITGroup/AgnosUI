import {Pagination, WidgetsDefaultConfig, DefaultPages as DefaultSlotPages} from '@agnos-ui/react';
import type {AdaptSlotContentProps, PaginationContext, PaginationProps} from '@agnos-ui/react';
import {useEffect, useState} from 'react';
const FILTER_PAG_REGEX = /[^0-9]/g;

function CustomPages({widget, state}: AdaptSlotContentProps<PaginationContext>) {
	function handleKeyDownEnter(e: any) {
		if (e.key === 'Enter') {
			handleOnBlur(e);
		}
	}
	const [inputVal, setValue] = useState(state.page.toString());
	function handleOnBlur(e: any) {
		const value = e.target.value;
		const intValue = parseInt(value);
		widget.actions.select(intValue);
		setValue(widget.stores.page$().toString());
	}
	function formatInput(e: any) {
		setValue(e.target.value.replace(FILTER_PAG_REGEX, ''));
	}
	useEffect(() => {
		setValue(state.page.toString());
	}, [state.page]);
	return state.pages.length ? (
		<>
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
						onBlur={handleOnBlur}
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
		</>
	) : null;
}

const PaginationDemo = () => {
	const [paginationConfig, setPaginationConfig] = useState<Partial<PaginationProps>>({});
	const [page, setPage] = useState(3);

	function updatePaginationConfig(values: Partial<PaginationProps>) {
		setPaginationConfig({...paginationConfig, ...values});
	}

	return (
		<WidgetsDefaultConfig pagination={paginationConfig}>
			<Pagination page={page} onPageChange={(page) => setTimeout(() => setPage(page), 0)} />
			<div className="mt-3">
				Disabled:&nbsp;
				<div id="btn-config-disabled" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.disabled ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({disabled: true})}
					>
						true
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${!paginationConfig.disabled ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({disabled: false})}
					>
						false
					</button>
				</div>
				<br />
				collection size:&nbsp;
				<div id="btn-config-collectionSize" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.collectionSize === 40 ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({collectionSize: 40})}
					>
						40
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.collectionSize === 30 ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({collectionSize: 30})}
					>
						30
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.collectionSize === 20 ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({collectionSize: 20})}
					>
						20
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.collectionSize === undefined ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({collectionSize: undefined})}
					>
						undefined
					</button>
				</div>
				<br />
				className:&nbsp;
				<div id="btn-config-className" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.className === 'justify-content-center' ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({className: 'justify-content-center'})}
					>
						justify-content-center
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.className === 'justify-content-end' ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({className: 'justify-content-end'})}
					>
						justify-content-end
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.className === undefined ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({className: undefined})}
					>
						undefined
					</button>
				</div>
				<br />
				slotPages:&nbsp;
				<div id="btn-config-slotPages" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.slotPages === DefaultSlotPages ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({slotPages: DefaultSlotPages})}
					>
						reuse default
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.slotPages === CustomPages ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({slotPages: CustomPages})}
					>
						custom pages
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${paginationConfig.slotPages === undefined ? 'active' : ''}`}
						onClick={() => updatePaginationConfig({slotPages: undefined})}
					>
						undefined
					</button>
				</div>
			</div>
		</WidgetsDefaultConfig>
	);
};
export default PaginationDemo;
