<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte-bootstrap/components/accordion';
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {Carousel} from '@agnos-ui/svelte-bootstrap/components/carousel';
	import {Modal} from '@agnos-ui/svelte-bootstrap/components/modal';
	import {Pagination} from '@agnos-ui/svelte-bootstrap/components/pagination';
	import {Progressbar} from '@agnos-ui/svelte-bootstrap/components/progressbar';
	import {Rating} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {Select} from '@agnos-ui/svelte-bootstrap/components/select';
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import {Toast} from '@agnos-ui/svelte-bootstrap/components/toast';
	import {Tree, type TreeItem} from '@agnos-ui/svelte-bootstrap/components/tree';
	// [import-placeholder]
	import {onMount} from 'svelte';

	onMount(() => {
		console.log('AGNOSUI-SSR-HYDRATION-COMPLETE');
	});

	const nodes: TreeItem[] = [
		{
			label: 'Node 1',
			isExpanded: true,
			children: [
				{
					label: 'Node 1.1',
					children: [
						{
							label: 'Node 1.1.1',
						},
					],
				},
				{
					label: 'Node 1.2',
					children: [
						{
							label: 'Node 1.2.1',
						},
					],
				},
			],
		},
	];
	type Photo = {id: string; src: string};
	const photos = [944, 1011, 984].map((n) => ({id: `carousel-photo-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));
</script>

<div class="container">
	<h1>SSR Test</h1>
	<h2>Accordion</h2>
	<div class="my-3">
		<Accordion>
			<AccordionItem header="First" visible>Content 1</AccordionItem>
			<AccordionItem header="Second">Content 2</AccordionItem>
			<AccordionItem header="Disabled" disabled>Content 3</AccordionItem>
		</Accordion>
	</div>
	<h2>Alert</h2>
	<div class="my-3">
		<Alert>This is an alert!</Alert>
	</div>
	<h2>Carousel</h2>
	<div class="my-3">
		<Carousel slidesData={photos}>
			{#snippet slide({src}: Photo)}
				<img class="w-100" alt="random picsum" {src} />
			{/snippet}
		</Carousel>
	</div>
	<h2>Modal</h2>
	<div>
		<Modal>This is a modal!</Modal>
	</div>
	<h2>Pagination</h2>
	<div class="my-3">
		<Pagination collectionSize={60} />
	</div>
	<h2>Progressbar</h2>
	<div class="my-3">
		<Progressbar value={20} />
	</div>
	<h2>Rating</h2>
	<div class="my-3">
		<Rating />
	</div>
	<h2>Select</h2>
	<div class="my-3">
		<Select items={['AgnosUI']} />
	</div>
	<h2>Slider</h2>
	<div class="my-3">
		<Slider values={[50]} />
	</div>
	<h2>Toast</h2>
	<div class="my-3">
		<Toast>This is a toast!</Toast>
	</div>
	<h2>Tree</h2>
	<div class="my-3">
		<Tree {nodes} />
	</div>
	<!-- [content-placeholder] -->
</div>
