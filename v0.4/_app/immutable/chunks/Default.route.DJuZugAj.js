const e=`<script>
	import Rating from './Rating.svelte';

	let rating = 3;
	let hovered = 0;
	let left = 0;
<\/script>

<Rating bind:rating onHover={(e) => (hovered = e)} onLeave={(e) => (left = e)} />
<div>
	Current rate: <span id="defaultRating">{rating}</span><br />
	Hovered: <span id="defaultHovered">{hovered}</span><br />
	Left: <span id="defaultLeft">{left}</span>
</div>
`;export{e as default};
