const t=`<script lang="ts">
	import {Rating} from '@agnos-ui/svelte';
<\/script>

<Rating className="rating-custom" rating={7} ariaLabel="custom rating">
	<span slot="star" let:index let:fill class="star-2" class:filled={fill === 100} class:bad={index < 3}>&#9733;</span>
</Rating>
`;export{t as default};
