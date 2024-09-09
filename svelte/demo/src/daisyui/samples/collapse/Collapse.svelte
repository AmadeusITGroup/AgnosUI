<script lang="ts">
	import {createSimpleClassTransition} from '@agnos-ui/svelte-headless/services/transitions/simpleClassTransition';
	import {createTransition} from '@agnos-ui/svelte-headless/services/transitions/baseTransitions';
	import type {Snippet} from 'svelte';
	/**
	 * You can create easily your own collapse component with the help of the `createTransition` function
	 * you will be able to plug the transition event of DaisyUI to your component.
	 * The `createSimpleClassTransition` is a helper to create a transition that will add a class to the element but you don't have to add classes as this
	 * DaisyUI CSS is not using this feature.
	 */
	let {children, ...props}: Partial<{title: string; onHidden: () => void; onShown: () => void}> & {children: Snippet} = $props();

	const transition = createTransition({
		props: {
			visible: false, // could be something in an input that also add the collapse-open class
			transition: createSimpleClassTransition({}),
			onShown: () => props.onShown?.(),
			onHidden: () => props.onHidden?.(),
		},
	});

	export const api = transition.api;
</script>

<div
	tabIndex={0}
	class="collapse bg-base-200"
	use:transition.directives.directive
	onblur={() => transition.api.hide()}
	onfocus={() => transition.api.show()}
>
	<div class="collapse-title font-medium text-xl">{props.title ?? 'Focus me to see content'}</div>
	<div class="collapse-content">{@render children()}</div>
</div>
