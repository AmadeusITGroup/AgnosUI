const t=`<script lang="ts">
	import Carousel from './Carousel.svelte';

	const photos = [
		'https://picsum.photos/600/450.webp?random=1',
		'https://picsum.photos/600/450.webp?random=2',
		'https://picsum.photos/450/600.webp?random=3',
		'https://picsum.photos/600/450.webp?random=4',
		'https://picsum.photos/600/450.webp?random=5',
		'https://picsum.photos/600/450.webp?random=6',
	].map((src, index) => ({src, id: \`photo-\${index}\`, alt: \`picsum photo \${index + 1} of 6\`}));

	let loop = $state(false);
	let showNavigationArrows = $state(true);
	let showNavigationIndicators = $state(true);
	let dragFree = $state(false);
	let _autoplay = $state(true);
	let autoplay = $derived(loop && _autoplay);
	let rtl = $state(false);
<\/script>

<div class="w-full flex justify-center">
	<div class="max-w-[600px] grow">
		<Carousel {photos} {showNavigationIndicators} {showNavigationArrows} {loop} {dragFree} {autoplay} direction={rtl ? 'rtl' : 'ltr'}>
			{#snippet slide({alt, src})}
				<img class="select-none object-contain aspect-[4/3] w-full" {alt} {src} loading="lazy" />
			{/snippet}
		</Carousel>

		<div class="flex justify-around mt-2">
			<div class="flex flex-col items-end gap-1">
				<label class="label text-sm md:text-base">
					Loop
					<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" bind:checked={loop} />
				</label>
				<label class={['label text-sm md:text-base', !loop && 'has-[input]:cursor-not-allowed']}>
					Autoplay
					<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" bind:checked={_autoplay} disabled={!loop} />
				</label>
				<label class="label text-sm md:text-base">
					Drag free
					<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" bind:checked={dragFree} />
				</label>
			</div>
			<div class="flex flex-col items-end gap-1">
				<label class="label text-sm md:text-base">
					Right-to-left
					<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" bind:checked={rtl} />
				</label>
				<label class="label text-sm md:text-base">
					Indicators
					<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" bind:checked={showNavigationIndicators} />
				</label>
				<label class="label text-sm md:text-base">
					Arrows
					<input type="checkbox" class="toggle toggle-xs md:toggle-sm toggle-primary" bind:checked={showNavigationArrows} />
				</label>
			</div>
		</div>
	</div>
</div>
`;export{t as default};
