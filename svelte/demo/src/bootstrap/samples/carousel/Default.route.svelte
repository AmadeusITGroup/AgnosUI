<script lang="ts">
	import {Carousel} from '@agnos-ui/svelte-bootstrap/components/carousel';

	type Photo = {id: string; src: string; caption: {title: string; text: string}};
	const prefixId = $props.id();

	const photos: Photo[] = [
		{
			id: `${prefixId}-944`,
			src: 'https://picsum.photos/id/944/900/500',
			caption: {title: 'First slide label', text: 'Some representative placeholder content for the first slide.'},
		},
		{
			id: `${prefixId}-1011`,
			src: 'https://picsum.photos/id/1011/900/500',
			caption: {title: 'Second slide label', text: 'Some representative placeholder content for the second slide.'},
		},
		{
			id: `${prefixId}-984`,
			src: 'https://picsum.photos/id/984/900/500',
			caption: {title: 'Third slide label', text: 'Some representative placeholder content for the third slide.'},
		},
	];
</script>

<Carousel slidesData={photos}>
	{#snippet slide({src, caption}: Photo)}
		<img class="w-100" alt="random picsum" {src} style="aspect-ratio: 1.8 / 1;" />
		<div class="carousel-caption d-none d-md-block">
			<h5>{caption.title}</h5>
			<p>{caption.text}</p>
		</div>
	{/snippet}
</Carousel>
