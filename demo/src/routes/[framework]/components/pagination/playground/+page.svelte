<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getPaginationDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/pagination/playground';
	import doc from '../../../../../../../core/dist/api.json?pagination&extractApi';
</script>

<Playground {sample} config={getPaginationDefaultConfig()} {doc} />
