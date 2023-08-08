<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/rating/default';
	import sampleReadonly from '@agnos-ui/samples/rating/readonly';
	import sampleCustomTemplate from '@agnos-ui/samples/rating/customTemplate';
	import sampleForm from '@agnos-ui/samples/rating/form';
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';
</script>

<LinkHeading label="Default rating" id="default" level={2} />
<Sample title="Rating example" sample={sampleDefault} />

<LinkHeading label="Readonly" id="readonly" level={2} />
<Sample title="Read only rating" sample={sampleReadonly} />

<LinkHeading label="Custom Template" id="custom" level={2} />
<Sample title="Custom template" sample={sampleCustomTemplate} />

<LinkHeading label="Form integration" id="form" level={2} />
<Sample title="Form" sample={sampleForm} />
