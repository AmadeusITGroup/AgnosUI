const t=`<script>import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
$:
  slotContext = { widget, state };
<\/script>

<div class="progress" style:height={state.height}>
	<div
		class={\`progress-bar \${state.type ? \`text-bg-\${state.type}\` : ''}\`}
		class:progress-bar-striped={state.striped}
		class:progress-bar-animated={state.animated}
		style:width={\`\${state.percentage}%\`}
	>
		<Slot slotContent={state.slotDefault} props={slotContext} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
</div>
`;export{t as default};
