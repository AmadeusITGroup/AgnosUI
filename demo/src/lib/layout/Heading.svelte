<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Svg from './Svg.svelte';
	import link from 'bootstrap-icons/icons/link-45deg.svg?raw';

	interface Props {
		depth: 1 | 2 | 3 | 4 | 5 | 6;
		text: string;
		id?: string;
		headerClassName?: string;
	}

	let {depth, text, id = text.toLowerCase().replace(/\s/g, '-').trim(), headerClassName = ''}: Props = $props();
</script>

{#if depth > 1}
	<svelte:element this={'h' + depth} {id} class={`${headerClassName} text-primary ${depth > 1 ? 'mt-2' : ''}`}>
		{text}
		<a class="anchor-link" href="#{id}" aria-label="link to {text}"><Svg className="icon-24 align-middle" svg={link} /></a>
	</svelte:element>
{:else}
	<Header title={text} />
{/if}

<style>
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
</style>
