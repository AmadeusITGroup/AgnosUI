<script lang="ts">
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/modal/default';
	import sampleStack from '@agnos-ui/samples/modal/stack';
</script>

<LinkHeading label="Default modal" id="default" level={2} />
<Sample title="Default example" sample={sampleDefault} height={300} noresize />

<LinkHeading label="Modal stack" id="stack" level={2} />
<p>
	It is possible to stack modals on top of each other. Note that for better User Experience, stacking modals should be avoided as much as possible.
</p>
<Sample title="Modal stack example" sample={sampleStack} height={400} noresize />
