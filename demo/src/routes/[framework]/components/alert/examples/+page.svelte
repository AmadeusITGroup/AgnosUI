<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	const componentName = 'alert';
</script>

<h4>Simple alert</h4>
<Sample title="Generic example" {componentName} sampleName="Generic" height={500} />

<h4>Configurable alert</h4>
<Sample title="Config example" {componentName} sampleName="Config" height={500} />

<h4>Customizable icon</h4>
<Sample title="Customizable icon example" {componentName} sampleName="Icon" height={500} />

<h4>Dynamic alert generation</h4>
<Sample title="Dynamic generation example" {componentName} sampleName="Dynamic" height={500} />
