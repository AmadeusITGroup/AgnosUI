<script lang="ts">
	import {Drawer} from '@agnos-ui/svelte-bootstrap/components/drawer';

	type DrawerTypes = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
	let drawerPlacement = $state('inline-start' as DrawerTypes);
	let drawer: Drawer;

	let visible = $state(true);

	async function toggleDrawer() {
		if (visible) {
			await drawer.api.close();
		} else {
			await drawer.api.open();
		}
	}
</script>

<button class="btn btn-primary mb-3" onclick={toggleDrawer}>Toggle Inline Drawer</button>
<div class="d-flex align-items-center mb-3">
	<label for="drawerPlacement" class="me-3">Placement:</label>
	<select id="drawerPlacement" bind:value={drawerPlacement} class="w-auto form-select">
		<option value="inline-start">Left</option>
		<option value="inline-end">Right</option>
		<option value="block-start">Top</option>
		<option value="block-end">Bottom</option>
	</select>
</div>

<div class="d-flex demo-inline-drawer" class:flex-column={drawerPlacement.includes('block')}>
	<div style="order: {drawerPlacement.endsWith('end') ? 2 : 1}">
		<Drawer bind:this={drawer} className={drawerPlacement} resizable inline bind:visible>
			{#snippet header()}
				<h2>Inline Drawer</h2>
				<button class="btn-close ms-auto" onclick={() => drawer.api.close()} aria-label="Close"></button>
			{/snippet}
			<div class="p-3">
				<h6>Drawer Content</h6>
				<ul>
					<li>No backdrop overlay</li>
					<li>Stays in document flow</li>
					<li>Pushes page content</li>
					<li>Page remains scrollable</li>
					<li>Fully interactable</li>
				</ul>
			</div>
		</Drawer>
	</div>

	<div class="flex-grow-1 p-3" style="order: {drawerPlacement.endsWith('end') ? 1 : 2}">
		<h6>Main Page Content</h6>
		<p>This content is pushed aside by the inline drawer. You can interact with everything on this page even when the drawer is open.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		<button class="btn btn-secondary">Clickable Button</button>
		<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<input type="text" class="form-control mt-2" placeholder="Type here..." />
		<p class="mt-2">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident.
		</p>
	</div>
</div>

<style>
	.demo-inline-drawer {
		border: 1px solid #dee2e6;
		padding: 1rem;
		border-radius: 0.375rem;
	}
</style>
