<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	const componentName = 'Rating';
</script>

<h4>Default</h4>
<Sample title="Rating example" {componentName} sampleName="Default" />

<h4>Readonly</h4>
<Sample title="Read only rating" {componentName} sampleName="Readonly" />

<h4>Custom Template</h4>
<Sample title="Custom template" {componentName} sampleName="CustomTemplate" />

<h4>Form integration</h4>
<Sample title="Form" {componentName} sampleName="Form" />
