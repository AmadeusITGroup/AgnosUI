const t=`<script lang="ts">
	import {createTransition} from '@agnos-ui/svelte/services/transitions/baseTransitions';
	import {collapseVerticalTransition} from '@agnos-ui/svelte/services/transitions/bootstrap';
	import './collapse.scss';
	import collapseIcon from './collapseButton.svg?raw';

	export let headerText: string;
	export let expanded = false;

	const {
		stores: {visible$, hidden$},
		api: {toggle},
		directives: {directive},
	} = createTransition({
		props: {
			visible: expanded,
			transition: collapseVerticalTransition,
		},
	});
<\/script>

<div class="card">
	<div class="card-header p-0">
		<button
			type="button"
			id="collapse-toggle"
			on:click={() => toggle()}
			class="btn toggle-button"
			aria-controls="collapse-content"
			aria-expanded={$visible$ || undefined}
		>
			{headerText}
			<span class="ms-1 collapse-icon" class:expanded={$visible$}>
				{@html collapseIcon}
			</span>
		</button>
	</div>
	{#if !$hidden$}
		<div id="collapse-content" use:directive>
			<div class="card-body">
				<slot />
			</div>
		</div>
	{/if}
</div>
`;export{t as default};
