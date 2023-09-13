<script lang="ts">
	import sampleCustom from '@agnos-ui/samples/pagination/custom';
	import sampleDefault from '@agnos-ui/samples/pagination/default';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic paginations" id="default" level={2}>
	<Sample title="Pagination example" sample={sampleDefault} height={419} />
</Section>

<Section label="Customization" id="custom" level={2}>
	<p>The pagination widget is fully customizable, from the page numbers to the arrows.</p>
	<Sample title="Custom Pagination example" sample={sampleCustom} height={256} />
</Section>
