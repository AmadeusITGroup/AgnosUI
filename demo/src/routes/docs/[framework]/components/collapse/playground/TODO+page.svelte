<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getCollapseDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/collapse';
	import sample from '@agnos-ui/samples/bootstrap/collapse/playground';
	import doc from '@agnos-ui/generated/doc/bootstrap-api.json?collapse&extractApi';
</script>

<Playground {sample} config={getCollapseDefaultConfig()} {doc} />
