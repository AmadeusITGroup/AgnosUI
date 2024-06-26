<script lang="ts">
	import sampleDefault from '@agnos-ui/samples/bootstrap/toast/default';
	import sampleDynamic from '@agnos-ui/samples/bootstrap/toast/dynamic';
	import sampleAction from '@agnos-ui/samples/bootstrap/toast/action';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
	import Accessibility from './accessibility.svelte';
</script>

<Section label="Basic toast" id="default" level={2}>
	<Sample title="Generic example" sample={sampleDefault} height={315} />
</Section>
<Section label="Dynamic toast with stacking" id="dynamic" level={2}>
	<Sample title="Dynamic example" sample={sampleDynamic} height={600} />
</Section>
<Section label="Toast with action" id="action" level={2}>
	<Sample title="Toast with action" sample={sampleAction} height={215} />
</Section>
<Section label="Accessibility" id="accessibility" level={2}>
	<Accessibility />
</Section>
