<script lang="ts">
	import basicSample from '@agnos-ui/samples/bootstrap/slider/default';
	import rangeSample from '@agnos-ui/samples/bootstrap/slider/range';
	import verticalSample from '@agnos-ui/samples/bootstrap/slider/vertical';
	import rightToLeftSample from '@agnos-ui/samples/bootstrap/slider/right-to-left';
	import rangeLimits from '@agnos-ui/samples/bootstrap/slider/rangeLimits';
	import customSample from '@agnos-ui/samples/bootstrap/slider/custom';
	import fullcustomSample from '@agnos-ui/samples/bootstrap/slider/fullCustom';
	import customAccessibility from '@agnos-ui/samples/bootstrap/slider/accessibility';
	import withTicks from '@agnos-ui/samples/bootstrap/slider/ticks';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic slider" level={2}>
	<Sample title="Basic slider" sample={basicSample} height={530} />
</Section>
<Section label="Range slider" level={2}>
	<Sample title="Range slider" sample={rangeSample} height={300} />
</Section>
<Section label="Slider with ticks" level={2}>
	<Sample title="Slider with ticks" sample={withTicks} height={426} />
</Section>
<Section label="Vertical slider" level={2}>
	<Sample title="Vertical slider" sample={verticalSample} height={382} />
</Section>
<Section label="Range with limits" level={2}>
	<div class="py-3 px-0 sm:px-4">Slider handles stay within set distances and can push each other to maintain the range.</div>
	<Sample title="Range slider" sample={rangeLimits} height={300} />
</Section>
<Section label="Right to left slider" level={2}>
	<Sample title="Right to left slider" sample={rightToLeftSample} height={601} />
</Section>
<Section label="Custom slider" level={2}>
	<Sample title="Custom slider" sample={customSample} height={287} />
</Section>
<Section label="Full Custom slider" level={2}>
	<Sample title="Full custom slider" sample={fullcustomSample} height={342} />
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
