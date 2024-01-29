<script lang="ts">
	export let href = '';
	export let title: string;
	export let text = '';

	const imgRegExp = /resources\/images\/(.*)\.(svg|webp|png|jpg)/i;
	let srcPromise: Promise<any>;
	async function getSrc(href: string) {
		try {
			const matches = href.match(imgRegExp);
			if (matches) {
				srcPromise = import(`../../../resources/images/${matches[1]}.${matches[2]}`);
			}
		} catch (error) {
			// Avoid server crash
		}
	}
	$: void getSrc(href);
</script>

{#await srcPromise}
	<div class="d-flex justify-content-center">
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
{:then srcModule}
	<img class="w-100" src={srcModule.default} {title} alt={text} />
{/await}
