<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselContext} from './carousel.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: CarouselContext<SlideData> = $props();
	let {state, directives} = widget;
</script>

<Slot content={state.navigation} props={widget} />
<div class="au-carousel-container" aria-atomic="false" aria-live="polite">
	{#each state.slidesData as slideData, index (slideData.id)}
		<div use:directives.slide={{index, id: slideData.id}}>
			<Slot content={state.slide} props={{...slideData, ...widget}} />
		</div>
	{/each}
</div>
