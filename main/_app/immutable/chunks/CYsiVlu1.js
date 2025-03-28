const t=`<script lang="ts">
	import {Carousel} from '@agnos-ui/svelte-bootstrap/components/carousel';
	import './custom.css';

	type Photo = {id: string; src: string; className: string; aspectRatio: string; imgClass: string};
	const prefixId = $props.id();

	const photos: Photo[] = [
		{
			id: \`\${prefixId}-944\`,
			src: 'https://picsum.photos/id/944/900/500',
			className: 'basis-81',
			aspectRatio: '1.8 / 1',
			imgClass: 'rounded-5',
		},
		{
			id: \`\${prefixId}-1011\`,
			src: 'https://picsum.photos/id/1011/500/900',
			className: 'basis-25',
			aspectRatio: '1 / 1.8',
			imgClass: 'rounded-3',
		},
		{
			id: \`\${prefixId}-984\`,
			src: 'https://picsum.photos/id/984/900/500',
			className: ' basis-81',
			aspectRatio: '1.8 / 1',
			imgClass: 'rounded-5',
		},
	];
	const slideClass = ({index, active}: {index: number; active: boolean}) => photos[index].className + (active ? '' : ' opacity-50');
<\/script>

<Carousel slidesData={photos} containerClass="gap-2" className="custom-carousel" {slideClass}>
	{#snippet slide({src, aspectRatio, imgClass}: Photo)}
		<img class={['w-100', imgClass]} alt="random picsum" {src} style="aspect-ratio: {aspectRatio};" />
	{/snippet}
</Carousel>
`;export{t as default};
