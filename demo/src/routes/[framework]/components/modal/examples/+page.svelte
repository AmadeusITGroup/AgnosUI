<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleDefault from '@agnos-ui/samples/modal/default';
	import sampleStack from '@agnos-ui/samples/modal/stack';
</script>

<h4>Default</h4>
<Sample title="Default example" sample={sampleDefault} height={300} />

<h4>Modal stack</h4>
<Sample title="Modal stack example" sample={sampleStack} height={400} />
