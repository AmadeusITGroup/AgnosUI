<script lang="ts">
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
	import defaultSample from '@agnos-ui/samples/select/default';
	import customSample from '@agnos-ui/samples/select/custom';
</script>

<Section label="Basic examples" id="default" level={2}>
	<span class="ps-3">Start typing with a, b or c</span>
	<Sample title="Simple select" sample={defaultSample} height={400} />
</Section>
<Section label="Custom example" id="wikipedia" level={2}>
	<span class="ps-3">An example that allows to select pages from the WikipediaService</span>
	<Sample title="Wikipedia example" sample={customSample} height={400} />
</Section>
