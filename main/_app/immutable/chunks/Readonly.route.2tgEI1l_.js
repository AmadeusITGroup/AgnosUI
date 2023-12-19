const t=`<script lang="ts">
	import {Rating} from '@agnos-ui/svelte/components/rating';
	import heartFill from 'bootstrap-icons/icons/heart-fill.svg?raw';
	import './readonly.scss';
<\/script>

<Rating className="rating-readonly" rating={3.64} readonly={true} maxRating={5} ariaLabel="readonly rating">
	<span slot="star" let:fill let:index class="star" class:full={fill === 100}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<span class="half" style:width={fill + '%'}>{@html heartFill}</span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<span>{@html heartFill}</span>
	</span>
</Rating>
`;export{t as default};
