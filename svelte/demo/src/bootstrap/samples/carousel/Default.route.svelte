<script lang="ts">
	import {Carousel, Slide} from '@agnos-ui/svelte-bootstrap/components/carousel';

	const photos = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
</script>

<Carousel>
	{#each photos as photo}
		<Slide>
			<img class="w-100" alt="random picsum" src={photo} />
		</Slide>
	{/each}
</Carousel>
