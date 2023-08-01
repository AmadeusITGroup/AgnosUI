<script lang="ts">
	import Sample from '../../../../../lib/layout/Sample.svelte';
	import sampleGeneric from '@agnos-ui/samples/alert/generic';
	import sampleConfig from '@agnos-ui/samples/alert/config';
	import sampleIcon from '@agnos-ui/samples/alert/icon';
	import sampleDynamic from '@agnos-ui/samples/alert/dynamic';
</script>

<h4>Simple alert</h4>
<Sample title="Generic example" sample={sampleGeneric} />

<h4>Configurable alert</h4>
<Sample title="Config example" sample={sampleConfig} />

<h4>Customizable icon</h4>
<Sample title="Customizable icon example" sample={sampleIcon} />

<h4>Dynamic alert generation</h4>
<Sample title="Dynamic generation example" sample={sampleDynamic} />
