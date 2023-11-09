<script lang="ts">
	import basicSample from '@agnos-ui/samples/slider/default';
	import rangeSample from '@agnos-ui/samples/slider/range';
	import verticalSample from '@agnos-ui/samples/slider/vertical';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic slider" id="basic" level={2}>
	<Sample title="Basic slider" sample={basicSample} height={627} />
</Section>
<Section label="Range slider" id="range" level={2}>
	<Sample title="Range slider" sample={rangeSample} height={627} />
</Section>
<Section label="Vertical slider" id="range" level={2}>
	<Sample title="Vertical slider" sample={verticalSample} height={627} />
</Section>
<Section label="Accessibility" id="accessibility" level={2}>
	<p>
		The slider component implements the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role" target="_blank"
			>ARIA slider role</a
		>.
	</p>
</Section>
