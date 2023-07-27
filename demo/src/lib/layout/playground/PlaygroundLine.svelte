<script lang="ts">
	import helpIcon from 'bootstrap-icons/icons/question-circle-fill.svg?raw';
	import Svg from '../Svg.svelte';
	import PlaygroundValue from './PlaygroundValue.svelte';
	import type {ValueContextApi} from './playground';
	import {getPlaygroundContext} from './playground';

	export let valueContext: ValueContextApi;

	$: ({key, defaultValue, config, prop, type} = valueContext);

	const {showHelp} = getPlaygroundContext();
</script>

<tr>
	<td class="align-middle"
		><Svg className="icon-20 align-middle" svg={helpIcon} />
		<button class="btn btn-link align-middle" on:click={() => showHelp(key)}>{key}</button></td
	>
	<PlaygroundValue {type} {defaultValue} api={config} placeholder={defaultValue} ariaLabel="property {key} config input" />
	<PlaygroundValue {type} {defaultValue} api={prop} ariaLabel="property {key} value input" />
</tr>

<style lang="scss">
	.btn-link {
		padding: 0;
	}
</style>
