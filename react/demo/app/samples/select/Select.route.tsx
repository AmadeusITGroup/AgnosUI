import type {ChangeEvent} from 'react';
import {useState, useCallback} from 'react';
import {Select as SelectAgnosUI, WidgetsDefaultConfig} from '@agnos-ui/react';

function getFilterTextParam() {
	const params = location.hash.split('?')[1];
	const url = new URL(params ? `?${params}` : '', location.href);
	return url.searchParams.get('filterText') ?? '';
}

const Select = () => {
	const [items] = useState(['Action 1', 'Action 2', 'Action 3', 'Other 1', 'Other 2', 'Other 3']);
	const [configFilterText, setConfigFilterText] = useState(getFilterTextParam);
	const [filterTextProp, setFilterTextProp] = useState(undefined as string | undefined);
	const changeConfigFilterText = useCallback((event: ChangeEvent<HTMLInputElement>) => setConfigFilterText(event.target.value), []);
	return (
		<WidgetsDefaultConfig select={{filterText: configFilterText}}>
			<h2>Multiselect example</h2>
			<div className="mb-3">
				<label className="form-label">Multiselect</label>
				<SelectAgnosUI items={items} filterText={filterTextProp} onFilterTextChange={setFilterTextProp} />
			</div>
			<div className="demo-select-config">
				<strong>Default config</strong>
				<br />
				<label>
					Default filterText:
					<input type="text" className="form-control" value={configFilterText} onChange={changeConfigFilterText} />
				</label>
				<br />
				<button type="button" className="mt-3 btn btn-outline-secondary" onClick={() => setFilterTextProp(undefined)}>
					Reset widget filterText
				</button>
			</div>
		</WidgetsDefaultConfig>
	);
};
export default Select;
