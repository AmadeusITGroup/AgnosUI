<script lang="ts">
	import Code from './Code.svelte';
	export let style: any;
	let code = '';
	async function getCode(style: any) {
		code = await style.css();
	}
	$: void getCode(style);
</script>

<div class="mb-4 py-2 px-0 px-sm-3">
	<Code {code} language="scss" />
</div>
