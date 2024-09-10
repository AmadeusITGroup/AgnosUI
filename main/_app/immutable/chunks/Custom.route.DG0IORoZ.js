const e=`import {abortPrevious, debounce} from './debounce';
import type {SelectItemContext} from '@agnos-ui/react-bootstrap/components/select';
import {Select} from '@agnos-ui/react-bootstrap/components/select';
import React, {useCallback, useState} from 'react';

import './custom.scss';

const basePageUrl = 'https://en.wikipedia.org/?curid=';

interface WikiResult {
	pageid: number;
	title: string;
	snippet: string;
}

const compareFn = new Intl.Collator('en').compare;

function getHtmlText(html: string) {
	const template = document.createElement('div');
	template.innerHTML = html;
	return template.innerText;
}

const itemIdFn = (item: WikiResult) => 'page-' + item.pageid;

const SlotBadgeLabel = ({itemContext, widget}: SelectItemContext<WikiResult>) => {
	return (
		<>
			<a href={basePageUrl + itemContext.item.pageid} target="_blank" rel="noreferrer">
				{itemContext.item.title}
			</a>
			<button
				type="button"
				className="btn-close ms-1 wiki-btn-close"
				aria-label="Close"
				onClick={(e) => widget.actions.onRemoveBadgeClick(e.nativeEvent, itemContext.item)}
			></button>
		</>
	);
};

const SlotItemLabel = ({itemContext}: SelectItemContext<WikiResult>) => {
	const item = itemContext.item;
	return (
		<>
			<div className="fw-bold">{item.title}</div>
			<div className="text-wrap wiki-desc">{item.snippet}</div>
		</>
	);
};

const navSelector = (node: HTMLElement) => node.querySelectorAll<HTMLSpanElement | HTMLInputElement>('a,button,input');
const Custom = () => {
	const [items, setItems] = useState([] as WikiResult[]);
	const [selected, setSelected] = useState([] as WikiResult[]);

	const [, setFilterText] = useState(undefined as string | undefined);
	const onFilterTextChange = useCallback(
		debounce(
			abortPrevious(async (signal: AbortSignal, text: string) => {
				setFilterText(text);
				const response = await fetch(
					'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=' + text,
					{signal},
				);
				const result = await response.json();
				setItems(result.query?.search.map((item: WikiResult) => ({...item, snippet: getHtmlText(item.snippet)})) ?? []);
			}),
			200,
		),
		[],
	);

	const onSelectedChange = useCallback((selected: WikiResult[]) => {
		setSelected((selected || []).sort((a, b) => compareFn(a.title, b.title)));
	}, []);

	return (
		<div className="custom-select my-auto mb-3">
			<Select
				items={items}
				itemIdFn={itemIdFn}
				navSelector={navSelector}
				onFilterTextChange={onFilterTextChange}
				onSelectedChange={onSelectedChange}
				badgeLabel={SlotBadgeLabel}
				itemLabel={SlotItemLabel}
				badgeClassName="badge text-bg-light d-flex align-items-center"
			/>
			<span className="fw-bold">Selection: </span>
			{selected.map((item) => (
				<React.Fragment key={itemIdFn(item)}>
					<a href={\`\${basePageUrl}\${item.pageid}\`} className="pe-2">
						{item.title}
					</a>
				</React.Fragment>
			))}
			{!selected.length && <>none</>}
		</div>
	);
};
export default Custom;
`;export{e as default};
