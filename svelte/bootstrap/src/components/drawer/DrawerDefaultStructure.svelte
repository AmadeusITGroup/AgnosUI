<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {DrawerContext} from './drawer.gen';

	let widget: DrawerContext = $props();
</script>

<div class="au-drawer-content">
	<div class="au-drawer-header">
		<Slot content={widget.state.header} props={widget} />
	</div>
	<div class="au-drawer-body">
		<Slot content={widget.state.children} props={widget} />
	</div>
</div>
