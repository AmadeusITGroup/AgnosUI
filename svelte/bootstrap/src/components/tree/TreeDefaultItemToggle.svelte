<script lang="ts">
	import type {TreeSlotItemContext} from './tree.gen';

	let {item, directives}: TreeSlotItemContext = $props();
</script>

{#if item.children.length > 0}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button use:directives.itemToggleDirective={{item: item}}>
		<svg class="au-tree-expand-icon-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 10 10">
			<path d="M3 1 L7 5 L3 9" class="au-tree-expand-icon-svg-fill" stroke-width="1" fill="none" />
		</svg>
	</button>
{:else}
	<span class="au-tree-expand-icon-placeholder"></span>
{/if}
