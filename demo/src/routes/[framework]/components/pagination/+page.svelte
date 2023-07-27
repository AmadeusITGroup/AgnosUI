<script lang="ts">
	import {goto} from '$app/navigation';
	import {onMount} from 'svelte';

	onMount(() => goto('pagination/examples', {replaceState: true}));
</script>
