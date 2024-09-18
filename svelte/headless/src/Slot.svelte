<script lang="ts" generics="Props extends object">
	import type {SlotContent} from './types';

	let {
		content,
		props,
	}: {
		content: SlotContent<Props>;
		props: Props;
	} = $props();
</script>

{#if content}
	{#if typeof content === 'string'}
		{content}
	{:else}
		{@render content(props)}
	{/if}
{/if}
