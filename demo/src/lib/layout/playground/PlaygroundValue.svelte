<script lang="ts">
	import clearIcon from 'bootstrap-icons/icons/x-circle-fill.svg?raw';
	import type {SingleValueContextApi} from './playground';
	import Svg from '../Svg.svelte';

	export let type: string;
	export let defaultValue: any;
	export let api: SingleValueContextApi;
	export let placeholder = '';
	export let ariaLabel: string;

	$: valueOrDefault = api.isEmpty ? defaultValue : api.value;
</script>

{#if type === 'boolean'}
	<td class="value">
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
	</td>
	<td class="checkbox"
		><button class="btn btn-link icon" title="Clear value" disabled={api.isEmpty} on:click={api.clear}
			><Svg className="icon-20" svg={clearIcon} /></button
		></td
	>
{:else if type === 'number'}
	<td class="value">
		<input class="number" class:empty={api.isEmpty} {placeholder} value={api.value} on:input={api.onChange} aria-label={ariaLabel} />
	</td>
	<td class="checkbox"
		><button class="btn btn-link icon" title="Clear value" disabled={api.isEmpty} on:click={api.clear}
			><Svg className="icon-20" svg={clearIcon} /></button
		></td
	>
{:else if type === 'function'}
	<td class="value">
		(function)
		<!-- <select class="form-select function" class:empty={api.isEmpty} bind:value on:change={api.onChange}>
        {#each computedOptions as option}
        <option value={option}>{option}</option>
        {/each}
    </select> -->
	</td>
	<td class="checkbox"
		><!-- <button class="btn btn-link icon" title="Clear value" disabled={api.isEmpty} on:click={api.clear}><Svg className="icon-20" svg={clearIcon} /> --></td
	>
{:else}
	<td class="value"
		><input class="string" class:empty={api.isEmpty} {placeholder} value={api.value} on:input={api.onChange} aria-label={ariaLabel} /></td
	>
	<td class="checkbox"
		><button class="btn btn-link icon" title="Clear value" disabled={api.isEmpty} on:click={api.clear}
			><Svg className="icon-20" svg={clearIcon} /></button
		></td
	>
{/if}

<style lang="scss">
	td.value {
		max-width: 150px;
	}
	input {
		max-width: 100%;
	}
	input.string {
		// border: 0;
		margin: 0;
		// padding: 0.4rem;
		width: 100%;

		&:focus-visible {
			border: 0;
			box-shadow: none;
		}
	}
	.btn-link {
		padding: 0;
	}
	button.icon {
		margin: 0;
		padding: 0;
	}

	.checkbox {
		width: 35px;
	}

	input:not([type='checkbox']).empty {
		opacity: 0.6;
	}

	[type='checkbox'].empty {
		background-color: lightgrey;
		border-color: lightgray;
	}
</style>
