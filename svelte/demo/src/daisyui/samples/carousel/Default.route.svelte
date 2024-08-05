<script lang="ts">
	import Carousel from './Carousel.svelte';

	const photos = [
		'https://picsum.photos/600/450.webp?random=1',
		'https://picsum.photos/600/450.webp?random=2',
		'https://picsum.photos/450/600.webp?random=3',
		'https://picsum.photos/600/450.webp?random=4',
		'https://picsum.photos/600/450.webp?random=5',
		'https://picsum.photos/600/450.webp?random=6',
	];

	let loop = $state(false);
	let withNavArrows = $state(true);
	let withNavIndicators = $state(true);
	let dragFree = $state(false);
	let _autoplay = $state(true);
	let autoplay = $derived(loop && _autoplay);
</script>

<div class="w-full flex justify-center">
	<div class="max-w-[600px] self-center">
		<Carousel items={photos} {withNavArrows} {withNavIndicators} {loop} {dragFree} {autoplay}>
			{#snippet itemSnip(photo)}
				<img class="select-none object-contain aspect-[4/3] w-full" alt="random picsum" src={photo} loading="lazy" />
			{/snippet}
		</Carousel>
		<div class="form-control items-start">
			<label class="label cursor-pointer gap-3">
				<span class="label-text">Loop</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={loop} />
			</label>
			<label class="label gap-3" class:cursor-pointer={loop}>
				<span class="label-text">Autoplay</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={_autoplay} disabled={!loop} />
			</label>
			<label class="label cursor-pointer gap-3">
				<span class="label-text">Drag free</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={dragFree} />
			</label>
			<label class="label cursor-pointer gap-3">
				<span class="label-text">Navigation Indicators</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={withNavIndicators} />
			</label>
			<label class="label cursor-pointer gap-3">
				<span class="label-text">Navigation Arrows</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={withNavArrows} />
			</label>
		</div>
	</div>
</div>
