<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import link from 'bootstrap-icons/icons/link-45deg.svg?raw';
	import playCircle from 'bootstrap-icons/icons/play-circle-fill.svg?raw';
	import pCircle from 'bootstrap-icons/icons/p-circle-fill.svg?raw';
	import cCircle from 'bootstrap-icons/icons/c-circle-fill.svg?raw';
	import arrowReturnRight from 'bootstrap-icons/icons/arrow-return-right.svg?raw';
	import fileFont from 'bootstrap-icons/icons/file-font-fill.svg?raw';
	import gear from 'bootstrap-icons/icons/gear-fill.svg?raw';
	import alignStart from 'bootstrap-icons/icons/align-start.svg?raw';
	import {selectedApiFramework$} from '$lib/stores';
	import Svg from '$lib/layout/Svg.svelte';
	import {getContext} from 'svelte';

	export let depth: 1 | 2 | 3 | 4 | 5 | 6;
	export let text: string;
	export let headerClassName: string = '';
	export let raw: string;
	raw;

	const apiSymbol = getContext<string>('ApiSymbol');

	function badgeFromType(type: string) {
		if (type === 'interface') {
			return 'text-bg-success';
		}
		if (type === 'type alias') {
			return 'text-bg-danger';
		}
		if (type === 'class') {
			return 'text-bg-secondary';
		}
		if (type === 'function') {
			return 'text-bg-info';
		}
		if (type === 'constant') {
			return 'text-bg-warning';
		}
	}
	function svgFromHeaderText() {
		const trimmed = text.trim();
		if (trimmed === 'Methods') {
			return playCircle;
		}
		if (trimmed === 'Constructors') {
			return cCircle;
		}
		if (trimmed === 'Properties') {
			return pCircle;
		}
		if (trimmed === 'Type Parameters' || trimmed === 'Type declaration') {
			return fileFont;
		}
		if (trimmed === 'Parameters') {
			return gear;
		}
		if (trimmed === 'Returns') {
			return arrowReturnRight;
		}
		if (trimmed === 'Default Value') {
			return alignStart;
		}
		return undefined;
	}
</script>

{#if depth === 1}
	<Header title={text} selectedFramework={$selectedApiFramework$} />
{:else if depth === 2}
	{@const compType = text.slice(0, text.indexOf('_'))}
	{@const id = text
		.slice(text.indexOf('_') + 1)
		.toLowerCase()
		.replace(/\s/g, '-')
		.trim()}
	<div class="d-flex align-items-center mb-2 flex-wrap">
		<h2 {id} class="{headerClassName} text-primary-emphasis">
			{text.slice(text.indexOf('_') + 1)}
			<a class="anchor-link" href="#{id}" aria-label="link to {text}"><Svg className="icon-24 align-middle" svg={link} /></a>
		</h2>
		<span class="ms-auto badge rounded-pill {badgeFromType(compType)}">{compType}</span>
	</div>
{:else if depth === 3 || depth === 5}
	{@const svg = svgFromHeaderText()}
	<div class="{headerClassName} h{depth} text-secondary-emphasis d-flex align-items-center">
		{#if svg}
			<Svg className="icon-{depth === 3 ? '24' : '20'} align-middle me-2" {svg} />
		{/if}
		<span>{text}</span>
	</div>
{:else}
	{@const id = apiSymbol.toLowerCase() + '-' + text.toLowerCase().replace(/\s/g, '-').trim()}
	<div class="{headerClassName} h{depth} text-primary-emphasis mt-2" {id}>
		{text}
	</div>
{/if}

<style lang="scss">
	.anchor-link {
		text-decoration: none;
		opacity: 0;
		transition: opacity 0.15s ease-in-out;

		&:focus,
		&:hover,
		:hover > &,
		:target > & {
			opacity: 1;
		}
	}
	.h3 {
		margin-left: -1rem;
		margin-right: -1rem;
	}
</style>
