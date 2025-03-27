<script lang="ts">
	import {Carousel} from '@agnos-ui/svelte-bootstrap/components/carousel';

	type Photo = {id: string; src: string};
	const prefixId = $props.id();

	const photos: Photo[] = [944, 1011, 984].map((n) => ({id: `${prefixId}-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));
</script>

<Carousel slidesData={photos} direction="rtl">
	{#snippet slide({src}: Photo)}
		<img class="w-100" alt="random picsum" {src} style="aspect-ratio: 1.8 / 1;" />
	{/snippet}
</Carousel>
