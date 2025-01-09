const t=`<script lang="ts">
	import './custom.scss';
	import {Rating} from '@agnos-ui/svelte-bootstrap/components/rating';
<\/script>

<Rating className="rating-custom" rating={7} ariaLabel="custom rating">
	{#snippet star({index, fill})}
		<span class={['star', {filled: fill === 100, bad: index < 3}]}>&#9733;</span>
	{/snippet}
</Rating>
`;export{t as default};
