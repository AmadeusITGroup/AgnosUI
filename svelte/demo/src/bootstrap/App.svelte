<script lang="ts">
	import {onMount} from 'svelte';
	import AppCommon from '../common/AppCommon.svelte';
	import 'bootstrap/dist/css/bootstrap.css';
	const componentsToBeProcessed = import.meta.glob('./samples/*/*.route.svelte');
	onMount(() => {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-bs-theme', event.newValue);
				}
			}
		});
	});
</script>

<AppCommon {componentsToBeProcessed} />
