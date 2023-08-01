<script lang="ts">
	import {onMount} from 'svelte';
	import {goto} from '$app/navigation';

	onMount(() => goto('accordion/examples', {replaceState: true}));
</script>
