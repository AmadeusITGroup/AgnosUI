<script lang="ts">
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
	import sampleBasic from '@agnos-ui/samples/bootstrap/drawer/basic';
	import sampleBody from '@agnos-ui/samples/bootstrap/drawer/body';
	import sampleInline from '@agnos-ui/samples/bootstrap/drawer/inline';
	import samplePosition from '@agnos-ui/samples/bootstrap/drawer/position';
	import sampleSizes from '@agnos-ui/samples/bootstrap/drawer/sizes';
</script>

<Section label="Basic drawer" id="basic" level={2}>
	<Sample title="Basic example" sample={sampleBasic} height={190} noresize />
</Section>
<Section label="Inline drawer" id="inline" level={2}>
	<p>
		An inline drawer stays in the document flow and pushes the page content instead of overlaying it. The page remains fully scrollable and
		interactable.
	</p>
	<p>
		It is your responsibility to properly position the drawer in the context. In case of flex layout, make sure to set the correct order for the
		drawer and page content based on the drawer's placement.
	</p>
	<Sample title="Inline drawer example" sample={sampleInline} height={600} noresize />
</Section>
<Section label="Drawer size" id="positions" level={2}>
	<p>You can customize the drawer's width or height by adjusting the following CSS variables:</p>
	<p class="ps-5">
		<code>--bs-drawer-size</code>: sets the default size of the drawer<br />
		<code>--bs-drawer-min-size</code>: defines the minimum allowed size<br />
		<code>--bs-drawer-max-size</code>: defines the maximum allowed size<br />
	</p>
	<Sample title="Sizes example" sample={sampleSizes} height={190} noresize />
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
