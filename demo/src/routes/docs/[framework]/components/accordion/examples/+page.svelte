<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/accordion/default';
	import togglePanels from '@agnos-ui/samples/accordion/togglePanels';
	import customHeaders from '@agnos-ui/samples/accordion/customHeaders';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Default" level={2}>
	<Sample title="Default example" sample={sampleDefault} height={395} />
</Section>
<Section label="Toggle panels" level={2}>
	<Sample title="Toggle panels" sample={togglePanels} height={395} />
</Section>
<Section label="Custom Headers" level={2}>
	<Sample title="Custom Headers" sample={customHeaders} height={395} />
</Section>

<Section label="Accessibility" level={2}>
	The accordion properly sets up <strong>aria-controls</strong> and <strong>aria-expanded</strong> on the collapsable items.
</Section>
