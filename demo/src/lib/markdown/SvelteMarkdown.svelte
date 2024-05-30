<script>
	import {renderers} from './markdown-parser';
	let {type = undefined, tokens, header = undefined, rows = undefined, ordered = false, ...props} = $props();
</script>

{#if !type}
	{#each tokens as token}
		<svelte:self {...token} />
	{/each}
{:else if renderers[type]}
	{#if type === 'table'}
		<svelte:component this={renderers.table}>
			<svelte:component this={renderers.tablehead}>
				<svelte:component this={renderers.tablerow}>
					{#each header as headerItem, i}
						<svelte:component this={renderers.tablecell} header={true} align={props.align[i] || 'center'}>
							<svelte:self tokens={headerItem.tokens} />
						</svelte:component>
					{/each}
				</svelte:component>
			</svelte:component>
			<svelte:component this={renderers.tablebody}>
				{#each rows as row}
					<svelte:component this={renderers.tablerow}>
						{#each row as cells, i}
							<svelte:component this={renderers.tablecell} header={false} align={props.align[i] || 'center'}>
								<svelte:self tokens={cells.tokens} />
							</svelte:component>
						{/each}
					</svelte:component>
				{/each}
			</svelte:component>
		</svelte:component>
	{:else if type === 'list'}
		{#if ordered}
			<svelte:component this={renderers.list} {ordered} {...props}>
				{#each props.items as item}
					<svelte:component this={renderers.orderedlistitem || renderers.listitem} {...item}>
						<svelte:self tokens={item.tokens} />
					</svelte:component>
				{/each}
			</svelte:component>
		{:else}
			<svelte:component this={renderers.list} {ordered} {...props}>
				{#each props.items as item}
					<svelte:component this={renderers.unorderedlistitem || renderers.listitem} {...item}>
						<svelte:self tokens={item.tokens} />
					</svelte:component>
				{/each}
			</svelte:component>
		{/if}
	{:else}
		<svelte:component this={renderers[type]} {...props}>
			{#if tokens}
				<svelte:self {tokens} />
			{:else}
				{props.raw}
			{/if}
		</svelte:component>
	{/if}
{/if}
