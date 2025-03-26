<script lang="ts">
	import Code from './Code.svelte';

	let {
		style,
	}: {
		style: {
			css: () => Promise<string>;
		};
	} = $props();
	let code = $state('');
	$effect(() => {
		void style.css().then((val) => (code = val));
	});
</script>

<div class="mb-6 py-3 px-0 sm:px-3">
	<Code {code} language="scss" />
</div>
