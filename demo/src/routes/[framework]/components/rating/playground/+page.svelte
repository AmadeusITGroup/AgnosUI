<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getRatingDefaultConfig} from '@agnos-ui/core';
	import sample from '@agnos-ui/samples/rating/playground';
	import doc from '../../../../../../../core/dist/api.json?rating&extractApi';
</script>

<Playground {sample} config={getRatingDefaultConfig()} {doc} />
