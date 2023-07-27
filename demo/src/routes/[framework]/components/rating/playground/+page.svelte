<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getRatingDefaultConfig} from '@agnos-ui/core';
	import doc from '../../../../../../../core/dist/api.json?rating&extractApi';
</script>

<Playground componentName="rating" config={getRatingDefaultConfig()} {doc} />
