<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/rating/default';
	import sampleReadonly from '@agnos-ui/samples/rating/readonly';
	import sampleCustomTemplate from '@agnos-ui/samples/rating/customTemplate';
	import sampleForm from '@agnos-ui/samples/rating/form';
</script>

<h4>Default</h4>
<Sample title="Rating example" sample={sampleDefault} />

<h4>Readonly</h4>
<Sample title="Read only rating" sample={sampleReadonly} />

<h4>Custom Template</h4>
<Sample title="Custom template" sample={sampleCustomTemplate} />

<h4>Form integration</h4>
<Sample title="Form" sample={sampleForm} />
