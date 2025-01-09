<script lang="ts">
	import '@agnos-ui/common/samples/floatingui/floatingui.scss';
	import {callWidgetFactory} from '@agnos-ui/svelte-bootstrap/config';
	import {createFloatingUI} from '@agnos-ui/svelte-bootstrap/services/floatingUI';
	import {autoPlacement, hide, offset, shift} from '@floating-ui/dom';

	const {
		state: fState,
		directives: {floatingDirective, referenceDirective, arrowDirective},
	} = callWidgetFactory({
		factory: createFloatingUI,
		props: {
			arrowOptions: {
				padding: 6,
			},
			computePositionOptions: {
				middleware: [
					offset(10),
					autoPlacement(),
					shift({
						padding: 5,
					}),
					hide(),
				],
			},
		},
	});

	let displayPopover = $state(true);
	const toggleButton = () => {
		displayPopover = !displayPopover;
	};

	const scrollToMiddle = (element: HTMLElement) => {
		element.scrollTo({left: 326, top: 420});
	};
</script>

<div class="position-relative overflow-auto border border-primary-subtle demo-floatingui" use:scrollToMiddle>
	<button use:referenceDirective type="button" class="btn btn-primary" onclick={toggleButton}>Toggle popover</button>
	{#if displayPopover}
		<div
			use:floatingDirective
			data-popper-placement={fState.placement}
			class={['popover bs-popover-auto position-absolute', {invisible: fState.middlewareData?.hide?.referenceHidden}]}
			role="tooltip"
		>
			<div class="popover-arrow position-absolute" use:arrowDirective></div>
			<div class="popover-body text-center">This is a sample popover</div>
		</div>
	{/if}
</div>
