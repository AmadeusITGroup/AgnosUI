<script lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte/components/accordion';
	import {Alert} from '@agnos-ui/svelte/components/alert';
	import {Modal} from '@agnos-ui/svelte/components/modal';
	import {Pagination} from '@agnos-ui/svelte/components/pagination';
	import {Progressbar} from '@agnos-ui/svelte/components/progressbar';
	import {Rating} from '@agnos-ui/svelte/components/rating';
	import {Select} from '@agnos-ui/svelte/components/select';
	import {Slider} from '@agnos-ui/svelte/components/slider';
	import {Toast} from '@agnos-ui/svelte/components/toast';
	import {onMount} from 'svelte';

	onMount(() => {
		console.log('AGNOSUI-SSR-HYDRATION-COMPLETE');
	});
</script>

<div class="container">
	<h1>SSR Test</h1>
	<h2>Accordion</h2>
	<div class="my-3">
		<Accordion>
			<AccordionItem itemVisible={true}>
				<svelte:fragment slot="itemHeader">First</svelte:fragment>
				<svelte:fragment slot="itemBody">Content 1</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="itemHeader">Second</svelte:fragment>
				<svelte:fragment slot="itemBody">Content 2</svelte:fragment>
			</AccordionItem>
			<AccordionItem itemDisabled={true}>
				<svelte:fragment slot="itemHeader">Disabled</svelte:fragment>
				<svelte:fragment slot="itemBody">Content 3</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
	<h2>Alert</h2>
	<div class="my-3">
		<Alert>This is an alert!</Alert>
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
		<Slider />
	</div>
	<h2>Toast</h2>
	<div class="my-3">
		<Toast>This is a toast!</Toast>
	</div>
</div>
