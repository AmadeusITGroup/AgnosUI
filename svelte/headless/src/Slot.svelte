<script lang="ts">
	import type {SlotContent} from './types';

	type Props = $$Generic<object>; // eslint-disable-line no-undef

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
