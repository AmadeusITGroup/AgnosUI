<script lang="ts">
	import Markdown from '$lib/markdown/Markdown.svelte';
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import ApiCode from '$lib/api/render/ApiCode.svelte';
	import ApiHeading from '$lib/api/render/ApiHeading.svelte';
	import ApiParagraph from '$lib/api/render/ApiParagraph.svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
	import Header from '$lib/layout/Header.svelte';
	import ApiSection from '$lib/api/render/ApiSection.svelte';
	import {routing} from '$lib/routing.svelte';
	import type {PageData} from './$types';

	let {data}: {data: PageData} = $props();

	const overrideRenderers = {
		heading: ApiHeading,
		paragraph: ApiParagraph,
		code: ApiCode,
		section: ApiSection,
	} as any;
</script>

<Header title={data.title} cssFramework={routing.selectedPackageType} />
<Alert type="info" className="p-0 border-0 border-start border-5 border-info" visible dismissible={false}>
	<div class="alert-container p-3 border border-info rounded-end">
		<div class="d-flex align-items-center">
			<span class="d-flex me-2">
				<Svg svg={biInfoCircleFill} className="icon-16" />
			</span>
			<span>
				All following symbols can be imported from <strong class="text-break">{data.import}</strong>
			</span>
		</div>
	</div>
</Alert>
{#each data.content as { source, name }, i (name)}
	{#if i !== 0}
		<hr />
	{/if}
	<Markdown {source} {overrideRenderers} apiSymbol={name} />
{/each}
