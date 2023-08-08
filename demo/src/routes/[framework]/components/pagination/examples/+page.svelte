<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/pagination/default';
	import sampleCustom from '@agnos-ui/samples/pagination/custom';
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';
</script>

<LinkHeading label="Default pagination" id="default" level={2} />
<Sample title="Pagination example" sample={sampleDefault} />

<LinkHeading label="Customization" id="custom" level={2} />
<Sample title="Custom Pagination example" sample={sampleCustom} />
