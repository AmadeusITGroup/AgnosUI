<script lang="ts">
	import '@agnos-ui/common/samples/rating/custom.scss';
	import {Rating} from '@agnos-ui/svelte/components/rating';
</script>

<Rating className="rating-custom" rating={7} ariaLabel="custom rating">
	<span slot="star" let:index let:fill class="star" class:filled={fill === 100} class:bad={index < 3}>&#9733;</span>
</Rating>
