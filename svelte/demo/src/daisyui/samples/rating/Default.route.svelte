<script>
	import Rating from './Rating.svelte';

	let rating = $state(3);
	let hovered = $state(0);
	let left = $state(0);
</script>

<Rating bind:rating onHover={(e) => (hovered = e)} onLeave={(e) => (left = e)} />
<div>
	Current rate: <span id="defaultRating">{rating}</span><br />
	Hovered: <span id="defaultHovered">{hovered}</span><br />
	Left: <span id="defaultLeft">{left}</span>
</div>
