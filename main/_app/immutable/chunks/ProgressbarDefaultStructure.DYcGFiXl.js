const t=`<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {ProgressbarSlots} from '@agnos-ui/svelte-headless/components/progressbar';

	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = ProgressbarSlots['structure']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = ProgressbarSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
<\/script>

<div class="progress" style:height={state.height}>
	<div
		class={\`progress-bar \${state.className}\`}
		class:progress-bar-striped={state.striped}
		class:progress-bar-animated={state.animated}
		style:width={\`\${state.percentage}%\`}
	>
		<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
			<slot slot="slot" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
</div>
`;export{t as default};
