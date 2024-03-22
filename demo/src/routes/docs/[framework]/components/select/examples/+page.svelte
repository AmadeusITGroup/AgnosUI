<script lang="ts">
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
	import defaultSample from '@agnos-ui/samples/bootstrap/select/default';
	import customSample from '@agnos-ui/samples/bootstrap/select/custom';
</script>

<Section label="Basic examples" level={2}>
	<span class="ps-3">Start typing with a, b or c</span>
	<Sample title="Simple select" sample={defaultSample} height={400} />
</Section>
<Section label="Custom example" level={2}>
	<span class="ps-3">An example that allows to select pages from the WikipediaService</span>
	<Sample title="Wikipedia example" sample={customSample} height={400} />
</Section>
<Section label="Accessibility" level={2}>
	<p>
		The select component follows the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role" target="_blank"
			>ARIA combobox pattern</a
		>, where the combobox trigger manages a role="listbox" element displayed in a pop-up.
	</p>
</Section>
