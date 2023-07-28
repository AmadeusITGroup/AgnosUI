const a=`<script lang="ts">
	import {Rating} from '@agnos-ui/svelte';
<\/script>

<Rating className="rating-custom" rating={3.64} readonly={true} maxRating={5} ariaLabel="readonly rating">
	<span slot="star" let:fill let:index class="star" class:full={fill === 100}>
		<span class="half" style:width={fill + '%'}>&hearts;</span>&hearts;
	</span>
</Rating>
`;export{a as default};
