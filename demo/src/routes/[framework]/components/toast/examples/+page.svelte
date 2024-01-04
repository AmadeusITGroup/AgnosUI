<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/toast/default';
	import sampleDynamic from '@agnos-ui/samples/toast/dynamic';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic toast" id="default" level={2}>
	<Sample title="Generic example" sample={sampleDefault} height={627} />
</Section>
<Section label="Dynamic toast" id="dynamic" level={2}>
	<Sample title="Dynamic example" sample={sampleDynamic} height={627} />
</Section>
