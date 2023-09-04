<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/accordion/default';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Default" id="default" level={2}>
	<Sample title="Default example" sample={sampleDefault} height={395} />
</Section>

<Section label="Accessibility" id="accessibility" level={2}>
	<p>
		The accordion properly sets up <strong>aria-controls</strong> and <strong>aria-expanded</strong> on the collapsable items.
	</p>
</Section>
