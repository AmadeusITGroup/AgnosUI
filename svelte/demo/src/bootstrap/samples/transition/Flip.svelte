<script lang="ts">
	import {createSimpleClassTransition, createTransition} from '@agnos-ui/svelte-bootstrap/transitions';
	import '@agnos-ui/common/samples/transition/flip.scss';

	export let hiddenText: string;

	const {
		api: {show, hide},
		directives: {directive},
	} = createTransition({
		props: {
			visible: false,
			transition: createSimpleClassTransition({hideClasses: ['hide'], animationPendingHideClasses: ['hide']}),
		},
	});
</script>

<div class="flip-card">
	<div class="flip-card-inner" use:directive>
		<div class="flip-card-front">
			<slot />
			<button class="btn btn-outline-secondary" on:click={() => hide()}>Hide again.</button>
		</div>
		<div class="flip-card-back">
			<button class="btn btn-outline-primary" on:click={() => show()}>{hiddenText}</button>
		</div>
	</div>
</div>
