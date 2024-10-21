<script lang="ts">
	import PlaygroundValue from './PlaygroundValue.svelte';
	import type {ValueContextApi} from './playground';
	import {getPlaygroundContext} from './playground';

	interface Props {
		valueContext: ValueContextApi;
	}

	let {valueContext}: Props = $props();
	let {key, defaultValue, config, prop, type} = $derived(valueContext);
	const {showHelp} = getPlaygroundContext();
</script>

<tr>
	<td> <button class="btn btn-link align-middle" onclick={() => showHelp(key)}>{key}</button></td>
	<PlaygroundValue {type} {defaultValue} api={config} placeholder={defaultValue} ariaLabel="property {key} config input" />
	<PlaygroundValue {type} {defaultValue} api={prop} ariaLabel="property {key} value input" />
</tr>

<style lang="scss">
	.btn-link {
		padding: 0;
	}
</style>
