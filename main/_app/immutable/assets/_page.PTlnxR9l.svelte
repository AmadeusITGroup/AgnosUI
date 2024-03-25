<script lang="ts">
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
	import sampleCustomTemplate from '@agnos-ui/samples/bootstrap/rating/customTemplate';
	import sampleDefault from '@agnos-ui/samples/bootstrap/rating/default';
	import sampleForm from '@agnos-ui/samples/bootstrap/rating/form';
	import sampleReadonly from '@agnos-ui/samples/bootstrap/rating/readonly';
</script>

<Section label="Default rating" level={2}>
	<p>
		The simplest example shows how the user may interact with the widget to set a rating.<br />
		The value can be unset by clicking on the current rating.
	</p>
	<Sample title="Rating example" sample={sampleDefault} height={130} />
</Section>

<Section label="Readonly" level={2}>
	<p>The readonly example below showcases how to disable the widget and use custom star display to support decimal ratings.</p>
	<Sample title="Read only rating" sample={sampleReadonly} height={95} />
</Section>

<Section label="Custom template" level={2}>
	<p>The star can be fully customized, enabling various implementations of a rating.</p>
	<Sample title="Custom template" sample={sampleCustomTemplate} height={70} />
</Section>

<Section label="Form integration" level={2}>
	<p>The widget can be integrated in a form as a mandatory field.</p>
	<Sample title="Form" sample={sampleForm} height={183} />
</Section>

<Section label="Accessibility" level={2}>
	<p>
		The rating component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role" target="_blank"
			>ARIA slider role</a
		>.
	</p>
</Section>
