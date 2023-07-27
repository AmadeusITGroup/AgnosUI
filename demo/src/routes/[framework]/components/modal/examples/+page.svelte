<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	const componentName = 'modal';
</script>

<h4>Default</h4>
<Sample title="Default example" {componentName} sampleName="Default" height={500} />

<h4>Modal stack</h4>
<Sample title="Modal stack example" {componentName} sampleName="Stack" height={500} />
