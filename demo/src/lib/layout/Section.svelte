<script lang="ts">
	import Svg from './Svg.svelte';
	import link from 'bootstrap-icons/icons/link-45deg.svg?raw';

	export let level: 1 | 2 | 3;
	export let label: string;
	export let id: string;
	export let headerClassName: string | undefined = undefined;
</script>

<section>
	<svelte:element this={'h' + level} {id} class={headerClassName}>
		{label}
		<a class="anchor-link" href="#{id}" aria-label="link to {label}"><Svg className="icon-24 align-middle" svg={link} /></a>
	</svelte:element>
	<slot />
</section>

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
