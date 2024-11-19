import type {ChangeEvent} from 'react';
import {useState, useCallback} from 'react';
import {Select} from '@agnos-ui/react-bootstrap/components/select';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';

function getFilterTextParam() {
	const params = location.hash.split('?')[1];
	const url = new URL(params ? `?${params}` : '', location.href);
	return url.searchParams.get('filterText') ?? '';
}

const mainList = ['Action 1', 'Action 2', 'Action 3', 'Other 1', 'Other 2', 'Other 3'];

const MultiSelect = () => {
	const [configFilterText, setConfigFilterText] = useState(getFilterTextParam);
	const changeConfigFilterText = useCallback((event: ChangeEvent<HTMLInputElement>) => setConfigFilterText(event.target.value), []);

	const [items, setItems] = useState([] as string[]);
	const [filterTextProp, setFilterTextProp] = useState(undefined as string | undefined);
	const onFilterTextChange = useCallback((filterText: string) => {
		setFilterTextProp(filterText);
		setItems(filterText ? mainList.filter((item) => item.toLowerCase().startsWith(filterText)) : mainList.slice(0, 10));
	}, []);
	return (
		<WidgetsDefaultConfig select={{filterText: configFilterText}}>
			<h2>Multiselect example</h2>
			<div className="mb-3">
				<label className="form-label">Multiselect</label>
				<Select items={items} filterText={filterTextProp} onFilterTextChange={onFilterTextChange} />
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
export default MultiSelect;
