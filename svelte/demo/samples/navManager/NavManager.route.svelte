<script lang="ts">
	import NavManagerLine from './NavManagerLine.svelte';
</script>

<div class="demo-navmanager">
	<div dir="ltr" class="mt-3 pb-3">
		<h2>Left-to-right</h2>
		<NavManagerLine text="Hello" />
	</div>

	<div dir="rtl" class="mt-3 pb-3">
		<h2>Right-to-left</h2>
		<NavManagerLine text={'\u05e9\u05c1\u05b8\u05dc\u05d5\u05b9\u05dd'} />
	</div>
</div>
