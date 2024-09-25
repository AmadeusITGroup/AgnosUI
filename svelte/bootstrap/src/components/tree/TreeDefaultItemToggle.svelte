<script lang="ts">
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, directives}: TreeSlotItemContext = $props();
</script>

{#if item.children.length > 0}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button use:directives.itemToggleDirective={{item: item}}></button>
{:else}
	<span class="au-tree-expand-icon-placeholder"></span>
{/if}
