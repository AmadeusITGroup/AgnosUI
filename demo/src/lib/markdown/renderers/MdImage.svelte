<script lang="ts">
	let {href = '', title, text = ''}: {href: string; title: string; text: string} = $props();

	const imgRegExp = /resources\/images\/(.*)\.(svg|webp|png|jpg)/i;

	let matchesRegex = $derived(href.match(imgRegExp));
	let className = $derived(matchesRegex ? matchesRegex[1] : 'w-100');
	let srcPromise = $derived(matchesRegex ? import(`../../../resources/images/${matchesRegex[1]}.${matchesRegex[2]}`) : undefined);
</script>

{#await srcPromise}
	<div class="d-flex justify-content-center">
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
{:then srcModule}
	<img class={className} src={srcModule.default} {title} alt={text} />
{/await}
