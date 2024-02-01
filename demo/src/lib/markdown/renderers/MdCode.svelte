<script lang="ts">
	import Code from '$lib/layout/Code.svelte';
	import Mermaid from '$lib/layout/Mermaid.svelte';
	import Sample from '$lib/layout/Sample.svelte';
	import type {SampleInfo} from '$lib/layout/sample';
	import {selectedFramework$} from '$lib/stores';
	import samples from '../samples';

	export let lang: string;
	export let text: string;

	let code = '';
	let title: string;
	let sample: SampleInfo;
	let height = 500;

	const extensions: Map<string, string> = new Map();
	extensions.set('typescript', 'ts');
	extensions.set('bash', 'sh');

	async function getCode(text: string, selectedFramework: string, lang: string) {
		if (lang !== 'sample' && text.trim().match(/^\{[a-z-]+\}$/) && extensions.has(lang)) {
			const codeKey = text.trim().slice(1, -1);
			code = (await import(`../../../../../docs/code/${codeKey}/${codeKey}-${selectedFramework}.${extensions.get(lang)}?raw`)).default;
		} else {
			code = text.trim();
		}
	}
	async function getSample(text: string, lang: string) {
		if (lang === 'sample') {
			const match = text.trim().match(/^\{([^:]+):([a-zA-Z-/]+):(\d+)\}$/);
			if (match) {
				title = match[1];
				const sampleKey = match[2];
				height = Number.parseInt(match[3], 10);
				if (samples.has(sampleKey)) {
					sample = samples.get(sampleKey)!;
				}
			}
		}
	}

	$: void getCode(text, $selectedFramework$, lang);
	$: void getSample(text, lang);
</script>

{#if lang === 'sample'}
	{#if sample}
		<Sample {title} {sample} {height} showCode showButtons={false} isDoc={true} />
	{:else}
		Sample not found, make sure to fill the samples.ts file.
	{/if}
{:else if lang === 'mermaid'}
	<Mermaid {code} />
{:else}
	<Code language={lang} {code} className="mb-4" />
{/if}
