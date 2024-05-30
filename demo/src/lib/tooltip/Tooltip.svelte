<script lang="ts">
	import type {Directive} from '@agnos-ui/svelte-bootstrap/types';
	import type {Readable} from '@amadeus-it-group/tansu';
	import type {Placement} from '@floating-ui/dom';

	let {
		content,
		placement$,
		directive,
		arrowDirective,
	}: {content: string; placement$: Readable<Placement>; directive: Directive; arrowDirective: Directive} = $props();
</script>

<div use:directive role="tooltip" class="tooltip bs-tooltip-auto fade show position-absolute" data-show="" data-popper-placement={$placement$}>
	<div class="tooltip-inner">
		{content}
	</div>
	<div use:arrowDirective class="tooltip-arrow position-absolute" data-popper-arrow></div>
</div>
