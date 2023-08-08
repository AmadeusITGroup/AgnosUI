<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleGeneric from '@agnos-ui/samples/alert/generic';
	import sampleConfig from '@agnos-ui/samples/alert/config';
	import sampleIcon from '@agnos-ui/samples/alert/icon';
	import sampleDynamic from '@agnos-ui/samples/alert/dynamic';
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';
</script>

<LinkHeading label="Simple alert" id="default" level={2} />
<Sample title="Generic example" sample={sampleGeneric} />

<LinkHeading label="Configurable alert" id="config" level={2} />
<Sample title="Config example" sample={sampleConfig} />

<LinkHeading label="Customizable icon" id="custom" level={2} />
<Sample title="Customizable icon example" sample={sampleIcon} />

<LinkHeading label="Dynamic alert generation" id="dynamic" level={2} />
<Sample title="Dynamic generation example" sample={sampleDynamic} />
