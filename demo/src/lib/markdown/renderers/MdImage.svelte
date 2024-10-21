<script lang="ts">
	interface Props {
		href?: string;
		title: string;
		text?: string;
	}

	let {href = '', title, text = ''}: Props = $props();
	let className = $state('w-100');

	const imgRegExp = /resources\/images\/(.*)\.(svg|webp|png|jpg)/i;
	let srcPromise: Promise<any> | undefined = $derived.by(() => {
		try {
			const matches = href.match(imgRegExp);
			if (matches) {
				className = matches[1];
				return import(`../../../resources/images/${matches[1]}.${matches[2]}`);
			}
		} catch (_) {
			// Avoid server crash
			return undefined;
		}
	});
</script>

{#await srcPromise then srcModule}
	<img class={className} src={srcModule.default} {title} alt={text} />
{/await}
