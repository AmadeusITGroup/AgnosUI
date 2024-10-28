<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/bootstrap/collapse/default';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Default" level={2}>
	<Sample title="Default example" sample={sampleDefault} height={395} />
</Section>

<Section label="Accessibility" level={2}>
	<p>
		The collapse component for being accessible oblige the usage of <a
			href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"
			target="_blank">ARIA attribute aria-controls</a
		>
		as well as the
		<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role" target="_blank">ARIA attribute aria-expanded</a> as shown
		in the examples.
	</p>
</Section>
