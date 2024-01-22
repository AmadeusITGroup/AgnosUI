<script lang="ts">
	export let href = '';
	export let title: string;
	export let text = '';

	let src: string;
	async function getSrc(href: string) {
		src = (await import(`../../../resources/images/${href.slice(href.indexOf('resources/images/') + 17, -5)}.webp`)).default;
	}
	$: void getSrc(href);
</script>

<img class="w-100" {src} {title} alt={text} />
