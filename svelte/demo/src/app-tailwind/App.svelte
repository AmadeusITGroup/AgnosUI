<script lang="ts">
	import './app.css';
	import AppCommon from '../common/AppCommon.svelte';
	const componentsToBeProcessed = import.meta.glob('./samples/*/*.route.svelte');
</script>

<div class="container mx-auto p-3">
	<AppCommon {componentsToBeProcessed} />
</div>
