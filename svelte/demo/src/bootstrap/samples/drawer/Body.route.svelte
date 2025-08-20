<script lang="ts">
	import {Drawer} from '@agnos-ui/svelte-bootstrap/components/drawer';
	import BODY from '@agnos-ui/common/samples/drawer/body.txt?raw';

	// svelte-ignore non_reactive_update
	let drawer: Drawer;
	let bodyScroll = $state(false);
	let backdrop = $state(true);
</script>

<Drawer bind:this={drawer} className="inline-start" {backdrop} {bodyScroll}>
	{#snippet header()}
		<div class="d-flex">
			<span>Hi, I am drawer!</span>
			<button class="btn-close ms-auto" onclick={() => drawer.api.close()} aria-label="Close"></button>
		</div>
	{/snippet}
	<ul>
		<li>First item</li>
		<li>Second item</li>
		<li>Third item</li>
	</ul>
</Drawer>
<div class="d-flex align-items-center mb-3">
	<button class="btn btn-primary" onclick={() => drawer.api.open()}>Open Drawer</button>
	<div class="form-check form-switch ms-3">
		<input class="form-check-input" type="checkbox" id="bodyScroll" role="switch" bind:checked={bodyScroll} />
		<label class="form-check-label" for="bodyScroll">Body scrolling</label>
	</div>
	<div class="form-check form-switch ms-3">
		<input class="form-check-input" type="checkbox" id="backdrop" role="switch" bind:checked={backdrop} />
		<label class="form-check-label" for="backdrop">Backdrop</label>
	</div>
</div>
<div style="width: 100px">
	{BODY}
</div>
<button class="btn btn-primary">ScrollToMe</button>
