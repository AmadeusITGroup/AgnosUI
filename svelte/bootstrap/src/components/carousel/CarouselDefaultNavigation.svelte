<script lang="ts" generics="SlideData extends {id: string;}">
	import type {CarouselContext} from './carousel.gen';

	let {state, directives}: CarouselContext<SlideData> = $props();
</script>

{#if state.showNavigationArrows}
	{#if state.canScrollPrev}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:directives.scrollPrev>
			<span class="carousel-control-prev-icon"></span>
		</button>
	{/if}
	{#if state.canScrollNext}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:directives.scrollNext>
			<span class="carousel-control-next-icon"></span>
		</button>
	{/if}
{/if}
{#if state.showNavigationIndicators}
	<div use:directives.tabList>
		{#each state.slidesData as { id }, index (id)}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button use:directives.tabIndicator={{index, id}}></button>
		{/each}
	</div>
{/if}
