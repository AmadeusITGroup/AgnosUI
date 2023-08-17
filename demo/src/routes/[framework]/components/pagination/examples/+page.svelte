<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/pagination/default';
	import sampleCustom from '@agnos-ui/samples/pagination/custom';
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';
</script>

<LinkHeading label="Default pagination" id="default" level={2} />
<Sample title="Pagination example" sample={sampleDefault} height={419} />

<LinkHeading label="Customization" id="custom" level={2} />
<p>The pagination widget is fully customizable, from the page numbers to the arrows.</p>
<Sample title="Custom Pagination example" sample={sampleCustom} height={256} />

<LinkHeading label="Accessibility" id="accessibility" level={2} />
<p>TODO</p>
