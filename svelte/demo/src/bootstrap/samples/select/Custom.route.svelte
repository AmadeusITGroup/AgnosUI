<script lang="ts">
	import {abortPrevious, debounce} from '@agnos-ui/common/samples/utils/debounce';
	import {Select} from '@agnos-ui/svelte-bootstrap/components/select';

	import '@agnos-ui/common/samples/select/custom.scss';

	const basePageUrl = 'https://en.wikipedia.org/?curid=';

	interface WikiResult {
		pageid: number;
		title: string;
		snippet: string;
	}
	let items = $state<WikiResult[]>([]);
	let selected = $state<WikiResult[]>([]);

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
	function onSelectedChange(items: WikiResult[]) {
		selected = (items || []).sort((a, b) => compareFn(a.title, b.title));
	}

	const navSelector = (node: HTMLElement) => node.querySelectorAll<HTMLSpanElement | HTMLInputElement>('a,button,input');
</script>

<div class="custom-select my-auto mb-3">
	<Select {items} {itemIdFn} {onFilterTextChange} {onSelectedChange} {navSelector} badgeClassName="badge text-bg-light d-flex align-items-center">
		{#snippet badgeLabel({itemContext, directives})}
			<a href={`${basePageUrl}${itemContext.item.pageid}`} target="_blank" rel="noreferrer">{itemContext.item.title}</a>
			<button type="button" class="btn-close ms-1 wiki-btn-close" aria-label="Close" use:directives.badgeCloseButtonDirective={itemContext}></button>
		{/snippet}
		{#snippet itemLabel({itemContext: {id, item}})}
			<label for={'' + id}>
				<div class="fw-bold">{item.title}</div>
				<div class="text-wrap wiki-desc">{item.snippet}</div>
			</label>
		{/snippet}
	</Select>

	<span class="fw-bold">Selection: </span>
	{#each selected as item}
		<a href={`${basePageUrl}${item.pageid}`} class="pe-2">{item.title}</a>
	{:else}
		none
	{/each}
</div>
