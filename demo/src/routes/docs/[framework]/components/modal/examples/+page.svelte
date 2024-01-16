<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/modal/default';
	import sampleComponent from '@agnos-ui/samples/modal/component';
	import sampleStack from '@agnos-ui/samples/modal/stack';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Default modal" level={2}>
	<Sample title="Default example" sample={sampleDefault} height={300} noresize />
</Section>

<Section label="Component as content" level={2}>
	<p>You may use an existing component as content.</p>
	<Sample title="Component as content example" sample={sampleComponent} height={300} noresize />
</Section>

<Section label="Modal stack" level={2}>
	<p>
		It is possible to stack modals on top of each other. Note that for better User Experience, stacking modals should be avoided as much as possible.
	</p>
	<Sample title="Modal stack example" sample={sampleStack} height={400} noresize />
</Section>
