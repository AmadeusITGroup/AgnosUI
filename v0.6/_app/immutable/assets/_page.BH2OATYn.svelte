<script lang="ts">
	import sampleBasic from '@agnos-ui/samples/bootstrap/tree/basic';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic tree" id="basic" level={2}>
	<Sample title="Basic example" sample={sampleBasic} height={190} noresize />
</Section>
<Section label="Accessibility" level={2}>
	<p>
		The tree component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role" target="_blank"
			>ARIA tree role</a
		>.
	</p>
</Section>
