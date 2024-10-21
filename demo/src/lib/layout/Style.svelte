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

<div class="mb-4 py-2 px-0 px-sm-3">
	<Code {code} language="scss" />
</div>
