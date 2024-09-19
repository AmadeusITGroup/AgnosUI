<script lang="ts">
	import '@agnos-ui/common/samples/rating/custom.scss';
	import RatingReadonly from './RatingReadonly.svelte';
</script>

<div>The readonly rating without slot:</div>
<RatingReadonly rating={7} maxRating={10} />

<div class="mt-2">Using a slot to customize the display:</div>
<RatingReadonly rating={7} maxRating={10} className="rating-custom">
	{#snippet star({index, fill})}
		<span class="star" class:filled={fill === 100} class:bad={index < 3}>&#9733;</span>
	{/snippet}
</RatingReadonly>
