const t=`<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {DrawerContext} from './drawer.gen';

	let widget: DrawerContext = $props();
	let {state} = widget;
<\/script>

<div class="au-drawer-content">
	<div class="au-drawer-header">
		<Slot content={state.header} props={widget} />
	</div>
	<div class="au-drawer-body">
		<Slot content={state.children} props={widget} />
	</div>
</div>
`;export{t as default};
