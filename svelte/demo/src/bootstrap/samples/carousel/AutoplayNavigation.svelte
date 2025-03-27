<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselContext} from '@agnos-ui/svelte-bootstrap/components/carousel';

	import playSvg from 'bootstrap-icons/icons/play-fill.svg?raw';
	import pauseSvg from 'bootstrap-icons/icons/pause-fill.svg?raw';
	import {on} from 'svelte/events';

	let {state: cState, directives, api, isPlaying = $bindable()}: CarouselContext<SlideData> & {isPlaying: boolean} = $props();

	const onpointerdown = (e: PointerEvent) => {
		e.preventDefault();
	};
	const notouchstart = (node: HTMLDivElement) => ({
		destroy: on(node, 'touchstart', (e: TouchEvent) => {
			e.stopPropagation();
		}),
	});
	const onclick = () => {
		if (isPlaying) {
			api.plugins()!.autoplay.stop();
		} else {
			api.plugins()!.autoplay.play();
		}
	};

	let progressbar: HTMLDivElement;

	$effect(() => {
		if (cState.initialized) {
			api
				.emblaApi()!
				.on('autoplay:play', () => {
					isPlaying = true;
				})
				.on('autoplay:stop', () => {
					isPlaying = false;
				})
				.on('autoplay:timerset', (api) => {
					progressbar.style.transition = 'none';
					progressbar.style.width = '0%';
					window.requestAnimationFrame(() => {
						window.setTimeout(() => {
							progressbar.style.transition = `width ${api.plugins().autoplay.timeUntilNext()}ms linear`;
							progressbar.style.width = '100%';
						});
					});
				})
				.on('autoplay:timerstopped', () => {
					progressbar.style.transition = 'none';
					progressbar.style.width = '0%';
				});
		}
	});
</script>

<div class="navigation">
	<div class="d-flex bg-light rounded-4 py-1 px-2" {onpointerdown} use:notouchstart>
		<button
			type="button"
			class="btn btn-sm btn-outline-primary rounded-5 d-flex align-items-center"
			{onclick}
			aria-label={isPlaying ? 'Pause rotation of slides' : 'Play rotation of slides'}
		>
			{@html isPlaying ? pauseSvg : playSvg}
		</button>
	</div>
	<div class="d-flex bg-light rounded-4 py-1 px-3 align-items-center" {onpointerdown} use:notouchstart>
		<div class="pagination pagination-sm align-items-center" use:directives.tabList>
			{#each cState.slidesData as slideData, index (slideData.id)}
				<div class="page-item">
					<button
						type="button"
						class={['page-link', cState.selectedScrollSnap === index && 'active']}
						use:directives.tabIndicator={{index, id: slideData.id}}
					>
						{index + 1}
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
<div class={['progress-container', 'd-none', 'd-sm-flex', !isPlaying && 'opacity-0']} aria-hidden="true">
	<div class="bg-light rounded-4 py-1 px-3 w-100 d-flex align-items-center">
		<div class="progress w-100">
			<div class="autoplay-progress-bar progress-bar" bind:this={progressbar}></div>
		</div>
	</div>
</div>
