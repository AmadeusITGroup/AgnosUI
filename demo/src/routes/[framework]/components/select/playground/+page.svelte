<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getSelectDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/select/playground';
	import doc from '@agnos-ui/generated/doc/api.json?select&extractApi';
</script>

<Playground {sample} config={getSelectDefaultConfig()} {doc} />
