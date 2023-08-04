<script lang="ts">
	import type {WidgetDoc} from '@agnos-ui/doc/types';
	import Code from '../Code.svelte';
	import Sample from '../Sample.svelte';
	import PlaygroundLine from './PlaygroundLine.svelte';
	import {createPlayground} from './playground';
	import type {SampleInfo} from '../sample';

	export let sample: SampleInfo;
	export let config: Record<string, any>;
	export let doc: WidgetDoc;
	export let types: Record<string, string> = {};
	export let height: number | undefined = undefined;

	const {values$, sampleParameters$, help$} = createPlayground({config, types, doc});
</script>

<div class="row">
	<div class="col">
		<Sample title="Configuration" {sample} urlParameters={$sampleParameters$} showCodeButton={false} {height} />
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
						<div class="mt-3"><Code code={defaultValue} title={'function'} isSample={false} language="typescript" /></div>
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
