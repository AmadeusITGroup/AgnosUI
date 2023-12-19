<script lang="ts">
	import type {Directive} from '@agnos-ui/core/types';
	import type {Readable} from '@amadeus-it-group/tansu';
	import type {Placement} from '@floating-ui/dom';

	export let content: string;
	export let placement$: Readable<Placement>;
	export let directive: Directive;
	export let arrowDirective: Directive;
</script>

<div use:directive role="tooltip" class="tooltip bs-tooltip-auto fade show position-absolute" data-show="" data-popper-placement={$placement$}>
	<div class="tooltip-inner">
		{content}
	</div>
	<div use:arrowDirective class="tooltip-arrow position-absolute" data-popper-arrow />
</div>
