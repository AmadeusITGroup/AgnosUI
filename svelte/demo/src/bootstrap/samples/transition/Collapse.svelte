<script lang="ts">
	import {createTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/baseTransitions';
	import {collapseVerticalTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/bootstrap';
	import '@agnos-ui/common/samples/transition/collapse.scss';
	import collapseIcon from '@agnos-ui/common/samples/transition/collapseButton.svg?raw';
	import type {Snippet} from 'svelte';
	import {fromStore} from 'svelte/store';

	let {headerText, expanded = false, children}: {headerText: string; expanded: boolean; children: Snippet} = $props();

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
	const visible = fromStore(visible$);
	const hidden = fromStore(hidden$);
</script>

<div class="card">
	<div class="card-header p-0">
		<button
			type="button"
			id="collapse-toggle"
			onclick={() => toggle()}
			class="btn toggle-button"
			aria-controls="collapse-content"
			aria-expanded={visible.current || undefined}
		>
			{headerText}
			<span class="ms-1 collapse-icon" class:expanded={visible.current}>
				{@html collapseIcon}
			</span>
		</button>
	</div>
	{#if !hidden.current}
		<div id="collapse-content" use:directive>
			<div class="card-body">
				{@render children()}
			</div>
		</div>
	{/if}
</div>
