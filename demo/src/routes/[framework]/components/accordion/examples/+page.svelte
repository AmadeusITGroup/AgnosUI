<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/accordion/default';
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';
</script>

<LinkHeading label="Default" id="default" level={2} />
<Sample title="Default example" sample={sampleDefault} height={395} />

<LinkHeading label="Accessibility" id="accessibility" level={2} />
<p>
	The accordion properly sets up <strong>aria-controls</strong> and <strong>aria-expanded</strong> on the collapsable items.
</p>
