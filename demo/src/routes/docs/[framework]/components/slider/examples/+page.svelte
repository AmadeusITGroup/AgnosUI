<script lang="ts">
	import basicSample from '@agnos-ui/samples/bootstrap/slider/default';
	import rangeSample from '@agnos-ui/samples/bootstrap/slider/range';
	import verticalSample from '@agnos-ui/samples/bootstrap/slider/vertical';
	import rightToLeftSample from '@agnos-ui/samples/bootstrap/slider/right-to-left';
	import customSample from '@agnos-ui/samples/bootstrap/slider/custom';
	import fullcustomSample from '@agnos-ui/samples/bootstrap/slider/fullCustom';
	import customAccessibility from '@agnos-ui/samples/bootstrap/slider/accessibility';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic slider" level={2}>
	<Sample title="Basic slider" sample={basicSample} height={627} />
</Section>
<Section label="Range slider" level={2}>
	<Sample title="Range slider" sample={rangeSample} height={300} />
</Section>
<Section label="Vertical slider" level={2}>
	<Sample title="Vertical slider" sample={verticalSample} height={627} />
</Section>
<Section label="Right to left slider" level={2}>
	<Sample title="Right to left slider" sample={rightToLeftSample} height={627} />
</Section>
<Section label="Custom slider" level={2}>
	<Sample title="Custom slider" sample={customSample} height={287} />
</Section>
<Section label="Full Custom slider" level={2}>
	<Sample title="Full custom slider" sample={fullcustomSample} height={380} />
</Section>
<Section label="Custom Accessibility slider" level={2}>
	<Sample title="Custom Accessibility slider" sample={customAccessibility} height={120} />
</Section>
<Section label="Accessibility" level={2}>
	<p>
		The slider component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role" target="_blank"
			>ARIA slider role</a
		>.
	</p>
</Section>
