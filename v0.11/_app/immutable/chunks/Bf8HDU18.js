const e=`<script lang="ts" generics="SlideData extends {id: string;}">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {CarouselContext} from './carousel.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: CarouselContext<SlideData> = $props();
	let state = $derived(widget.state);
	let directives = $derived(widget.directives);
<\/script>

<Slot content={state.navigation} props={widget} />
<div use:directives.container {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(directives.container)}>
	{#each state.slidesData as slideData, index (slideData.id)}
		<div use:directives.slide={{index, id: slideData.id}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([directives.slide, {index, id: slideData.id}])}>
			<Slot content={state.slide} props={{...slideData, ...widget}} />
		</div>
	{/each}
</div>
`;export{e as default};
