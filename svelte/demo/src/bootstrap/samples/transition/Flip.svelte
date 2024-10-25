<script lang="ts">
	import {createTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/baseTransitions';
	import {createSimpleClassTransition} from '@agnos-ui/svelte-bootstrap/services/transitions/simpleClassTransition';
	import '@agnos-ui/common/samples/transition/flip.scss';
	import type {Snippet} from 'svelte';
	import {callWidgetFactory} from '@agnos-ui/svelte-bootstrap/config';

	let {hiddenText, children}: {hiddenText: string; children: Snippet} = $props();

	const {
		api: {show, hide},
		directives: {directive},
	} = callWidgetFactory({
		factory: createTransition,
		props: {
			visible: false,
			transition: createSimpleClassTransition({hideClasses: ['hide'], animationPendingHideClasses: ['hide']}),
		},
	});
</script>

<div class="flip-card">
	<div class="flip-card-inner" use:directive>
		<div class="flip-card-front">
			{@render children()}
			<button class="btn btn-outline-secondary" onclick={() => hide()}>Hide again.</button>
		</div>
		<div class="flip-card-back">
			<button class="btn btn-outline-primary" onclick={() => show()}>{hiddenText}</button>
		</div>
	</div>
</div>
