<script lang="ts">
	import './styles.scss';
	import {page} from '$app/stores';
	import Header from '$lib/layout/Header.svelte';
</script>

<Header title={$page.data.mainTitle} />
<div class="apidoc">
	<slot />
</div>
