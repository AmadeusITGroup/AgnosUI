<script lang="ts">
	import Alert from './Alert.svelte';

	let visible = $state(true);
</script>

<button class="btn btn-primary" onclick={() => (visible = true)}>Reset Alert</button>
<div class="flex flex-col gap-3 mt-3">
	<Alert className="alert-success" bind:visible>
		<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
			><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg
		>
		<span>Alert is a success!</span>
	</Alert>
	<Alert className="alert-error" dismissible={false}>
		<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>Alert is an error!</span>
	</Alert>
</div>
