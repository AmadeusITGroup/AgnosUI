<script lang="ts">
	import clearIcon from 'bootstrap-icons/icons/x-circle-fill.svg?raw';
	import type {SingleValueContextApi} from './playground';
	import Svg from '../Svg.svelte';
	import {getPropValueLabel} from '@agnos-ui/common/propsValues';

	export let type: string;
	export let defaultValue: any;
	export let api: SingleValueContextApi;
	export let placeholder = '';
	export let ariaLabel: string;

	let value: string | undefined = api.selectValue;
	$: valueOrDefault = api.isEmpty ? defaultValue : api.value;
</script>

<td class="value">
	{#if type === 'boolean'}
		<div class="form-check form-switch me-1">
			<input
				class="form-check-input boolean"
				class:empty={api.isEmpty}
				type="checkbox"
				role="switch"
				checked={valueOrDefault}
				on:change={api.onChange}
				aria-label={ariaLabel}
			/>
		</div>
	{:else if type === 'number'}
		<input class="number form-control" class:empty={api.isEmpty} {placeholder} value={api.value} on:input={api.onChange} aria-label={ariaLabel} />
	{:else if type === 'function' && api.selectValues}
		<select class="form-select function" class:empty={api.isEmpty} bind:value on:change={api.onChange} aria-label={ariaLabel}>
			<option hidden disabled value={undefined} selected />
			{#each api.selectValues as option}
				<option value={option}>{getPropValueLabel(option)}</option>
			{/each}
		</select>
	{:else}
		<input class="form-control" class:empty={api.isEmpty} {placeholder} value={api.value} on:input={api.onChange} aria-label={ariaLabel} />
	{/if}
</td>
<td class="checkbox align-middle">
	<button
		class="btn btn-link m-0 p-0 d-flex mx-auto"
		title="Clear value"
		disabled={api.isEmpty}
		on:click={() => {
			value = undefined;
			api.clear();
		}}
	>
		<Svg className="icon-20" svg={clearIcon} />
	</button>
</td>

<style lang="scss">
	td.value {
		max-width: 150px;
	}

	.checkbox {
		width: 35px;
	}

	[type='checkbox'].empty {
		background-color: lightgrey;
		border-color: lightgray;
	}
</style>
