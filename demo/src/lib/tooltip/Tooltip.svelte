<script lang="ts">
	export let content: string;
	export let placement: 'top' | 'right' | 'bottom' | 'left' = 'top';
</script>

<div id="tooltip" role="tooltip" class="tooltip bs-tooltip-auto fade show" data-show="" data-popper-placement={placement}>
	<div class="tooltip-inner">
		{content}
	</div>
	<div id="arrow" class="tooltip-arrow" data-popper-arrow />
</div>
