<script lang="ts">
	import type {Token, Tokens} from 'marked';
	import Self from './SvelteMarkdown.svelte';
	import {List, ListItem, Table, TableBody, TableCell, TableHead, TableRow} from './renderers';
	import {getContext, type Component} from 'svelte';

	let {
		type = undefined,
		tokens,
		header = undefined,
		rows = undefined,
		ordered = false,
		...props
	}: {
		tokens?: Token[];
		type?: Token['type'];
		header?: Tokens.TableCell[];
		rows?: Tokens.TableCell[][];
		ordered?: boolean;
		[key: string]: any;
	} = $props();

	const renderers = getContext<Record<string, Component>>('renderers');
</script>

{#if !type}
	{#each tokens! as token}
		<Self {...token} />
	{/each}
{:else if renderers[type]}
	{#if type === 'table'}
		<Table>
			<TableHead>
				<TableRow>
					{#each header! as headerItem, i}
						<TableCell header align={props.align[i] || 'center'}>
							<Self tokens={headerItem.tokens} />
						</TableCell>
					{/each}
				</TableRow>
			</TableHead>
			<TableBody>
				{#each rows! as row}
					<TableRow>
						{#each row as cells, i}
							<TableCell align={props.align[i] || 'center'}>
								<Self tokens={cells.tokens} />
							</TableCell>
						{/each}
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	{:else if type === 'list'}
		<List {ordered} {...props}>
			{#each props.items as item}
				<ListItem {...item}>
					<Self tokens={item.tokens} />
				</ListItem>
			{/each}
		</List>
	{:else}
		{@const Renderer = renderers[type]}
		<Renderer {...props}>
			{#if tokens}
				<Self {tokens} />
			{:else}
				{props.raw}
			{/if}
		</Renderer>
	{/if}
{/if}
