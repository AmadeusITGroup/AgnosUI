const e=`<script lang="ts" generics="SlideData extends {id: string;}">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CarouselContext} from './carousel.gen';

	let {state, directives}: CarouselContext<SlideData> = $props();
<\/script>

{#if state.showNavigationArrows}
	{#if state.canScrollPrev}
		{@const prevBtnClassPrefix = state.direction === 'rtl' ? 'carousel-control-next' : 'carousel-control-prev'}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:__AgnosUISveltePreprocess__classDirective={(prevBtnClassPrefix)} use:directives.scrollPrev {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.scrollPrev, [__AgnosUISveltePreprocess__classDirective, (prevBtnClassPrefix)])}>
			<span class="{prevBtnClassPrefix}-icon"></span>
		</button>
	{/if}
	{#if state.canScrollNext}
		{@const nextBtnClassPrefix = state.direction === 'ltr' ? 'carousel-control-next' : 'carousel-control-prev'}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:__AgnosUISveltePreprocess__classDirective={(nextBtnClassPrefix)} use:directives.scrollNext {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.scrollNext, [__AgnosUISveltePreprocess__classDirective, (nextBtnClassPrefix)])}>
			<span class="{nextBtnClassPrefix}-icon"></span>
		</button>
	{/if}
{/if}
{#if state.showNavigationIndicators}
	<div use:__AgnosUISveltePreprocess__classDirective={"carousel-indicators"} use:directives.tabList {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.tabList, [__AgnosUISveltePreprocess__classDirective, "carousel-indicators"])}>
		{#each state.slidesData as { id }, index (id)}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button data-bs-target use:__AgnosUISveltePreprocess__classDirective={([state.selectedScrollSnap === index && 'active'])} use:directives.tabIndicator={{index, id}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.tabIndicator, {index, id}], [__AgnosUISveltePreprocess__classDirective, ([state.selectedScrollSnap === index && 'active'])])}></button>
		{/each}
	</div>
{/if}
`;export{e as default};
