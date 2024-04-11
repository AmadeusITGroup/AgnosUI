<script lang="ts">
	import {Rating} from '@agnos-ui/svelte-bootstrap/components/rating';
	import heartFill from 'bootstrap-icons/icons/heart-fill.svg?raw';
	import '@agnos-ui/common/samples/rating/readonly.scss';
</script>

<Rating className="rating-readonly" rating={3.64} readonly={true} maxRating={5} ariaLabel="readonly rating">
	<span slot="star" let:fill let:index class="star" class:full={fill === 100}>
		<span class="half" style:width={fill + '%'}>{@html heartFill}</span>
		<span>{@html heartFill}</span>
	</span>
</Rating>
