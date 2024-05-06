<script lang="ts">
	import './app.css';
	import AppCommon from '../common/AppCommon.svelte';
	import {onMount} from 'svelte';
	const componentsToBeProcessed = import.meta.glob('./samples/*/*.route.svelte');
	onMount(() => {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-theme', event.newValue);
				}
			}
		});
	});
</script>

<AppCommon {componentsToBeProcessed} />
