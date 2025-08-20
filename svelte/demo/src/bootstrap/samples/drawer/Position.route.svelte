<script lang="ts">
	import {Drawer} from '@agnos-ui/svelte-bootstrap/components/drawer';

	type DrawerTypes = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
	let drawerPlacement = $state('inline-start' as DrawerTypes);
	// svelte-ignore non_reactive_update
	let drawer: Drawer;
	let mounted = $state(true);
	let width = $state(300);
	let height = $state(300);

	function openDrawer() {
		mounted = true;
		requestAnimationFrame(() => {
			drawer.api.open();
		});
	}
</script>

<button class="btn btn-primary mb-3" onclick={openDrawer}>Open Drawer</button>
<div class="d-flex align-items-center">
	<label for="drawerPlacement" class="me-3">Placement:</label>
	<select id="drawerPlacement" bind:value={drawerPlacement} class="w-auto form-select">
		<option value="inline-start">Left</option>
		<option value="inline-end">Right</option>
		<option value="block-start">Top</option>
		<option value="block-end">Bottom</option>
	</select>
</div>

{#if mounted}
	<Drawer
		bind:this={drawer}
		className={drawerPlacement}
		header="Basic drawer"
		resizable
		onHidden={() => (mounted = false)}
		onHeightChange={(h) => (height = h)}
		{height}
		onWidthChange={(w) => (width = w)}
		{width}
	>
		<ul>
			<li>First item</li>
			<li>Second item</li>
			<li>Third item</li>
		</ul>
	</Drawer>
{/if}
