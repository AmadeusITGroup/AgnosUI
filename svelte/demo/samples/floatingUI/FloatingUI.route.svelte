<script lang="ts">
	import '@agnos-ui/common/samples/floatingui/floatingui.scss';
	import {createFloatingUI, floatingUI} from '@agnos-ui/svelte-headless/services';

	const {
		directives: {floatingDirective, referenceDirective, arrowDirective},
		stores: {placement$, middlewareData$},
	} = createFloatingUI({
		props: {
			arrowOptions: {
				padding: 6,
			},
			computePositionOptions: {
				middleware: [
					floatingUI.offset(10),
					floatingUI.autoPlacement(),
					floatingUI.shift({
						padding: 5,
					}),
					floatingUI.hide(),
				],
			},
		},
	});

	let displayPopover = true;
	const toggleButton = () => {
		displayPopover = !displayPopover;
	};

	const scrollToMiddle = (element: HTMLElement) => {
		element.scrollTo({left: 326, top: 420});
	};
</script>

<div class="position-relative overflow-auto border border-primary-subtle demo-floatingui" use:scrollToMiddle>
	<button use:referenceDirective type="button" class="btn btn-primary" on:click={toggleButton}>Toggle popover</button>
	{#if displayPopover}
		<div
			use:floatingDirective
			data-popper-placement={$placement$}
			class="popover bs-popover-auto position-absolute"
			class:invisible={$middlewareData$?.hide?.referenceHidden}
			role="tooltip"
		>
			<div class="popover-arrow position-absolute" use:arrowDirective></div>
			<div class="popover-body text-center">This is a sample popover</div>
		</div>
	{/if}
</div>
