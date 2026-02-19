<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselContext} from './carousel.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: CarouselContext<SlideData> = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);
</script>

<Slot content={state.navigation} props={widget} />
<div use:directives.container>
	{#each state.slidesData as slideData, index (slideData.id)}
		<div use:directives.slide={{index, id: slideData.id}}>
			<Slot content={state.slide} props={{...slideData, ...widget}} />
		</div>
	{/each}
</div>
