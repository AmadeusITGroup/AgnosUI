<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import link from '../icons/link-45deg.svg?raw';

	export let level: 1 | 2 | 3;
	export let label: string;
	export let id: string;
	export let className: string | undefined = undefined;
</script>

{#if level === 1}
	<h1 {id} class={className}>
		{label}
		<a class="anchor-link" href="#{id}" aria-label="link to {label}"><Svg className="icon-24 align-middle" svg={link} /></a>
	</h1>
{:else if level === 2}
	<h2 {id} class={className}>
		{label}
		<a class="anchor-link" href="#{id}" aria-label="link to {label}"><Svg className="icon-24 align-middle" svg={link} /></a>
	</h2>
{:else if level === 3}
	<h3 {id} class={className}>
		{label}
		<a class="anchor-link" href="#{id}" aria-label="link to {label}"><Svg className="icon-24 align-middle" svg={link} /></a>
	</h3>
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
</style>
