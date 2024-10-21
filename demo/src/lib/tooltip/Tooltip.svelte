<script lang="ts">
	import type {Directive} from '@agnos-ui/svelte-bootstrap/types';
	import type {Readable} from '@amadeus-it-group/tansu';
	import type {Placement} from '@floating-ui/dom';

	interface Props {
		content: string;
		placement$: Readable<Placement | undefined>;
		directive: Directive;
		arrowDirective: Directive;
	}

	let {content, placement$, directive, arrowDirective}: Props = $props();
</script>

<div use:directive role="tooltip" class="tooltip bs-tooltip-auto fade show position-absolute" data-show="" data-popper-placement={$placement$}>
	<div class="tooltip-inner">
		{content}
	</div>
	<div use:arrowDirective class="tooltip-arrow position-absolute" data-popper-arrow></div>
</div>
