<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/bootstrap/carousel/default';
	import sampleRtl from '@agnos-ui/samples/bootstrap/carousel/rtl';
	import sampleSimpleCustom from '@agnos-ui/samples/bootstrap/carousel/simpleCustom';
	import sampleAutoplay from '@agnos-ui/samples/bootstrap/carousel/autoplay';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic carousel" level={2}>
	<p>
		The Carousel wraps the <a href="https://www.embla-carousel.com/">Embla Carousel</a> as an AgnosUI widget with bootsrap, allowing the options and plugins
		to be set through our configuration.
	</p>
	<Sample title="Basic carousel" sample={sampleDefault} height={415} />
</Section>

<Section label="Right to left" level={2}>
	<p>To have the Carousel work as expected in Right-to-left mode, you need to set the input <code>direction</code> to <code>rtl</code>.</p>
	<Sample title="Right to left" sample={sampleRtl} height={415} />
</Section>

<Section label="Simple customization" level={2}>
	<p>While Carousel is often used with full-width slides, you can customize as needed.</p>
	<Sample title="Simple customization" sample={sampleSimpleCustom} height={342} />
</Section>

<Section label="Autoplay" level={2}>
	<p>
		This example showcases how to setup Embla plugins, in particular the <a href="https://www.embla-carousel.com/plugins/autoplay/" target="_blank"
			>Autoplay plugin</a
		><br />
		In order to allow users to pause and play the rotation of slides, the slot <code>navigation</code> is customized.
	</p>
	<Sample title="Autoplay" sample={sampleAutoplay} height={357} />
</Section>

<Section label="Accessibility" level={2}>
	The Carousel respects the pattern defined in the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/carousel/" target="_blank"
		>ARIA Authoring Practices Guide</a
	>.<br />
	If <code>showTabIndicators</code> is set to <code>true</code>, the carousel will respect the <strong>Tabbed Carousel</strong> pattern, otherwise it
	will respect the
	<strong>Grouped Carousel</strong> pattern.
</Section>
