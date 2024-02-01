const t=`<script lang="ts">
	import {abortPrevious, debounce} from './debounce';
	import {Select} from '@agnos-ui/svelte/components/select';

	import './custom.scss';

	const basePageUrl = 'https://en.wikipedia.org/?curid=';

	interface WikiResult {
		pageid: number;
		title: string;
		snippet: string;
	}
	let items: WikiResult[] = [];
	let selected: WikiResult[] = [];

	const itemIdFn = (item: WikiResult) => {
		return 'page-' + item.pageid;
	};

	function getHtmlText(html: string) {
		const template = document.createElement('div');
		template.innerHTML = html;
		return template.innerText;
	}

	const onFilterTextChange = debounce(
		abortPrevious(async (signal: AbortSignal, text: string) => {
			const response = await fetch(
				'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=' + text,
				{signal},
			);
			const result = await response.json();
			items = result.query?.search.map((item: WikiResult) => ({...item, snippet: getHtmlText(item.snippet)})) ?? [];
		}),
		200,
	);

	const compareFn = new Intl.Collator('en').compare;
	function onSelectedChange(e: any) {
		selected = (<WikiResult[]>(e.detail || [])).sort((a, b) => compareFn(a.title, b.title));
	}
<\/script>

<div class="custom-select my-auto mb-3">
	<Select {items} {itemIdFn} {onFilterTextChange} {onSelectedChange} badgeClassName="badge text-bg-light d-flex align-items-center">
		<svelte:fragment slot="badgeLabel" let:itemContext let:widget>
			<a href={\`\${basePageUrl}\${itemContext.item.pageid}\`} target="_blank" rel="noreferrer">{itemContext.item.title}</a>
			<button type="button" class="btn-close ms-1 wiki-btn-close" aria-label="Close" on:click={() => widget.api.unselect(itemContext.item)}></button>
		</svelte:fragment>
		<label for={'' + itemContext.id} slot="item" let:itemContext>
			{@const item = itemContext.item}
			<div class="fw-bold">{item.title}</div>
			<div class="text-wrap wiki-desc">{item.snippet}</div>
		</label>
	</Select>

	<span class="fw-bold">Selection: </span>
	{#each selected as item}
		<a href={\`\${basePageUrl}\${item.pageid}\`} class="pe-2">{item.title}</a>
	{:else}
		none
	{/each}
</div>
`;export{t as default};
