const t=`<script lang="ts">
	import './floatingui.scss';
	import {createFloatingUI} from '@agnos-ui/svelte-bootstrap/services/floatingUI';
	import {autoPlacement, hide, offset, shift} from '@floating-ui/dom';
	import {fromStore} from 'svelte/store';

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
	const placement = fromStore(placement$);
	const middlewareData = fromStore(middlewareData$);

	let displayPopover = $state(true);
	const toggleButton = () => {
		displayPopover = !displayPopover;
	};

	const scrollToMiddle = (element: HTMLElement) => {
		element.scrollTo({left: 326, top: 420});
	};
<\/script>

<div class="position-relative overflow-auto border border-primary-subtle demo-floatingui" use:scrollToMiddle>
	<button use:referenceDirective type="button" class="btn btn-primary" onclick={toggleButton}>Toggle popover</button>
	{#if displayPopover}
		<div
			use:floatingDirective
			data-popper-placement={placement.current}
			class="popover bs-popover-auto position-absolute"
			class:invisible={middlewareData.current?.hide?.referenceHidden}
			role="tooltip"
		>
			<div class="popover-arrow position-absolute" use:arrowDirective></div>
			<div class="popover-body text-center">This is a sample popover</div>
		</div>
	{/if}
</div>
`;export{t as default};
