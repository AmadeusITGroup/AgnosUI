<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselContext} from './carousel.gen';

	let {state, directives}: CarouselContext<SlideData> = $props();
</script>

{#if state.showNavigationArrows}
	{#if state.canScrollPrev}
		{@const prevBtnClassPrefix = state.direction === 'rtl' ? 'carousel-control-next' : 'carousel-control-prev'}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class={prevBtnClassPrefix} use:directives.scrollPrev>
			<span class="{prevBtnClassPrefix}-icon"></span>
		</button>
	{/if}
	{#if state.canScrollNext}
		{@const nextBtnClassPrefix = state.direction === 'ltr' ? 'carousel-control-next' : 'carousel-control-prev'}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class={nextBtnClassPrefix} use:directives.scrollNext>
			<span class="{nextBtnClassPrefix}-icon"></span>
		</button>
	{/if}
{/if}
{#if state.showNavigationIndicators}
	<div class="carousel-indicators" use:directives.tabList>
		{#each state.slidesData as { id }, index (id)}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button data-bs-target class={[state.selectedScrollSnap === index && 'active']} use:directives.tabIndicator={{index, id}}></button>
		{/each}
	</div>
{/if}
