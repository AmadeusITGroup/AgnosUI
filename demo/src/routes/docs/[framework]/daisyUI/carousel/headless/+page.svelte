<script lang="ts">
	import daisyUIDefault from '@agnos-ui/samples/daisyui/carousel/default';
	import demoGallery from '@agnos-ui/samples/daisyui/carousel/demoGallery';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Headless" id="default" level={2}>
	<p>
		The headless Carousel simply wraps the <a href="https://www.embla-carousel.com/">Embla Carousel</a> as an AgnosUI widget, allowing the options and
		plugins to be set through our configuration.
	</p>
	<Sample title="Headless example" sample={daisyUIDefault} height={450} />
</Section>

<Section label="Photo Gallery" id="photo-gallery" level={2}>
	<p>
		A classic usage of a Carousel is a Photo Gallery.<br />
		The following example shows how to build such a component combining two carousels.
	</p>
	<Sample title="Photo gallery example" sample={demoGallery} height={630} noresize />
</Section>
