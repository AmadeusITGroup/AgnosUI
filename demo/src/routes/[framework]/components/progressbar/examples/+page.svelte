<script lang="ts">
	import Section from '$lib/layout/Section.svelte';
	import Sample from '$lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/progressbar/default';
	import sampleSimpleCustom from '@agnos-ui/samples/progressbar/simpleCustom';
	import sampleFullCustom from '@agnos-ui/samples/progressbar/fullCustom';
</script>

<Section label="Default progressbar" id="default" level={2}>
	<Sample title="Progressbar example" sample={sampleDefault} height={147} />
</Section>

<Section label="Simple customization" id="striped" level={2}>
	The label and display of the progressbar can be customized.
	<Sample title="Simple customization" sample={sampleSimpleCustom} height={187} />
</Section>

<Section label="Fully customized" id="customized" level={2}>
	<p>The display can be fully customized while keeping the widget's functionality and accessibility.</p>
	<Sample title="Customized progressbar" sample={sampleFullCustom} height={335} />
</Section>

<Section label="Accessibility" id="accessibility" level={2}>
	<p>
		The progressbar component implements the <a
			href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role"
			target="_blank">ARIA progressbar role</a
		>.
	</p>
</Section>
