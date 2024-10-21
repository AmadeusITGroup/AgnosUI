<script lang="ts">
	interface Props {
		href?: string;
		title: string;
		text?: string;
	}

	let {href = '', title, text = ''}: Props = $props();

	const imgRegExp = /resources\/images\/(.*)\.(svg|webp|png|jpg)/i;

	let className = $derived(href.match(imgRegExp)![1]);
	let srcPromise: Promise<any> | undefined = $derived.by(() => {
		const matches = href.match(imgRegExp)!;
		return import(`../../../resources/images/${matches[1]}.${matches[2]}`);
	});
</script>

{#await srcPromise then srcModule}
	<img class={className} src={srcModule.default} {title} alt={text} />
{/await}
