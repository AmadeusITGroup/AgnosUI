<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import type {WidgetDoc} from '@agnos-ui/doc/types';
	import Code from '../Code.svelte';
	import Sample from '../Sample.svelte';
	import PlaygroundLine from './PlaygroundLine.svelte';
	import {createPlayground} from './playground';
	import type {SampleInfo} from '../sample';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	import conStriped from 'bootstrap-icons/icons/cone-striped.svg?raw';
	import Svg from '../Svg.svelte';

	export let sample: SampleInfo;
	export let config: Record<string, any>;
	export let doc: WidgetDoc;
	export let types: Record<string, string> = {};
	export let height = 100;
	export let noresize = false;
	export let listPropsValues: Record<string, PropsValues[]> = {};
	const {values$, sampleParameters$, help$} = createPlayground({config, types, doc, listPropsValues});
</script>

<Alert type="warning" className="p-0 border-0 border-start border-5 border-warning" visible>
	<div class="alert-container p-3 border border-warning rounded-end">
		<div class="d-flex align-items-center">
			<span class="d-flex me-2">
				<Svg svg={conStriped} className="icon-16" />
			</span>
			<span class="me-4">
				Warning: Playground in construction<br />
			</span>
		</div>
		<hr />
		Please note that the Playground tab is still in construction.
	</div>
</Alert>

<div class="row">
	<div class="col">
		<Sample title="Configuration" {sample} urlParameters={$sampleParameters$} showButtons={false} {height} {noresize} />
	</div>
</div>
<div class="row">
	<div class="col-auto">
		<table class="table table-borderless table-sm">
			<thead>
				<tr class="border-0 bg-transparent">
					<th class="border-0">Prop</th>
					<th class="border-0">Config</th>
					<th class="border-0" />
					<th class="border-0">Value</th>
					<th class="border-0" />
				</tr>
			</thead>
			<tbody>
				{#each $values$ as valueContext}
					<PlaygroundLine {valueContext} />
				{/each}
			</tbody>
		</table>
	</div>
	<div class="col">
		{#if $help$.key}
			{@const type = $help$.type}
			{@const defaultValue = $help$.defaultValue}
			<div>
				<h3>{$help$.key}</h3>
				<code class="d-block mb-2">{$help$.type}</code>
				<div class="description mb-2">
					{#each $help$.description as line}
						<div>{line}</div>
					{/each}
				</div>
				<div class="mb-2">
					<span class="highlight">Default value:</span>
					{#if type === 'function'}
						<div class="mt-3"><Code code={defaultValue} language="typescript" /></div>
					{:else}
						<code>{defaultValue}</code>
					{/if}
				</div>
			</div>
			<hr class="mt-4" />
		{/if}
	</div>
</div>

<style>
	.highlight {
		font-style: italic;
		/* text-decoration: underline; */
	}
</style>
