<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselContext} from './carousel.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: CarouselContext<SlideData> = $props();
	let {state, attachments} = widget;
</script>

<Slot content={state.navigation} props={widget} />
<div {@attach attachments.container()}>
	{#each state.slidesData as slideData, index (slideData.id)}
		<div {@attach attachments.slide({index, id: slideData.id})}>
			<Slot content={state.slide} props={{...slideData, ...widget}} />
		</div>
	{/each}
</div>
