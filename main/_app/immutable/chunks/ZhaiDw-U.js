const t=`<script lang="ts" generics="SlideData extends {id: string;}">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CarouselContext} from './carousel.gen';

	let {state, directives}: CarouselContext<SlideData> = $props();
<\/script>

{#if state.showNavigationArrows}
	{#if state.canScrollPrev}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:directives.scrollPrev {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.scrollPrev)}>
			<span class="carousel-control-prev-icon"></span>
		</button>
	{/if}
	{#if state.canScrollNext}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:directives.scrollNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.scrollNext)}>
			<span class="carousel-control-next-icon"></span>
		</button>
	{/if}
{/if}
{#if state.showNavigationIndicators}
	<div class="carousel-indicators" role="tablist">
		{#each state.slidesData as { id }, index (id)}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button use:directives.tabIndicator={{index, id}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.tabIndicator, {index, id}])}></button>
		{/each}
	</div>
{/if}
`;export{t as default};
