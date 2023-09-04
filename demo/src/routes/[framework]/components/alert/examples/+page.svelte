<script lang="ts">
	import sampleDynamic from '@agnos-ui/samples/alert/dynamic';
	import sampleGeneric from '@agnos-ui/samples/alert/generic';
	import sampleIcon from '@agnos-ui/samples/alert/icon';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Simple alert" id="default" level={2}>
	<Sample title="Generic example" sample={sampleGeneric} height={627} />
</Section>

<Section label="Customizable icon" id="custom" level={2}>
	<Sample title="Customizable icon example" sample={sampleIcon} height={405} />
</Section>

<Section label="Dynamic alert generation" id="dynamic" level={2}>
	<p>This example showcases how an application would typically generate and handle dismissable alerts.</p>
	<Sample title="Dynamic generation example" sample={sampleDynamic} height={113} />
</Section>

<Section label="Accessibility" id="accessibility" level={2}>
	<p>
		The alert component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role" target="_blank"
			>ARIA alert role</a
		>.
	</p>
</Section>
