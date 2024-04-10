<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getSelectDefaultConfig} from '@agnos-ui/svelte-bootstrap/components/select';
	import sample from '@agnos-ui/samples/bootstrap/select/playground';
	import doc from '@agnos-ui/generated/doc/api.json?select&extractApi';
</script>

<Playground {sample} config={getSelectDefaultConfig()} {doc} />
