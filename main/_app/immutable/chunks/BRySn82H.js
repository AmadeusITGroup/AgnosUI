const t=`<script lang="ts">
	import {Carousel} from '@agnos-ui/svelte-bootstrap/components/carousel';

	type Photo = {id: string; src: string};
	const photos = [944, 1011, 984].map((n) => ({id: \`carousel-photo-\${n}\`, src: \`https://picsum.photos/id/\${n}/900/500\`}));
<\/script>

<Carousel slidesData={photos}>
	{#snippet slide({src}: Photo)}
		<img class="w-100" alt="random picsum" {src} style="aspect-ratio: 1.8 / 1;" />
	{/snippet}
</Carousel>
`;export{t as default};
