<script lang="ts">
	import sampleBasic from '@agnos-ui/samples/bootstrap/drawer/basic';
	import samplePosition from '@agnos-ui/samples/bootstrap/drawer/position';
	import sampleBody from '@agnos-ui/samples/bootstrap/drawer/body';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic drawer" id="basic" level={2}>
	<Sample title="Basic example" sample={sampleBasic} height={190} noresize />
</Section>
<Section label="Drawer positions" id="positions" level={2}>
	<Sample title="Position example" sample={samplePosition} height={190} noresize />
</Section>
<Section label="Body scrolling" id="body" level={2}>
	<Sample title="Body scrolling" sample={sampleBody} height={190} noresize />
</Section>
<Section label="Accessibility" level={2}>
	<p>
		Drawer is essentially a modal dialog, so you need to specify <code>aria-labelledby</code> and <code>role="dialog"</code> is already added in the core
		Drawer implementation.
	</p>
</Section>
