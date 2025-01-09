<script lang="ts">
	import Code from '$lib/layout/Code.svelte';
	import Sample from '$lib/layout/Sample.svelte';
	import type {SampleInfo} from '$lib/layout/sample';
	import {routing} from '$lib/routing.svelte';
	import samples from '../samples';

	interface Props {
		lang: string;
		text: string;
	}

	let {lang, text}: Props = $props();

	let code = $state('');
	let title = $state('');
	let sample: SampleInfo | undefined = $state();
	let height = $state(500);

	let showCode = $state(true);
	let noresize = $state(false);

	const extensions: Map<string, string> = new Map();
	extensions.set('typescript', 'ts');
	extensions.set('bash', 'sh');

	$effect(() => {
		if (lang !== 'sample' && text.trim().match(/^\{[a-z-]+\}$/) && extensions.has(lang)) {
			const codeKey = text.trim().slice(1, -1);
			void import(`../../../../../docs/code/${codeKey}/${codeKey}-${routing.selectedFramework}.${extensions.get(lang)}?raw`).then(
				(val) => (code = val.default),
			);
		} else {
			code = text.trim();
		}
	});
	$effect(() => {
		if (lang === 'sample') {
			const match = text.trim().match(/^\{([^:]+):([a-zA-Z-/]+):(\d+)(:noCode)?(:noResize)?\}$/);
			if (match) {
				title = match[1];
				const sampleKey = match[2];
				height = Number.parseInt(match[3], 10);
				if (samples.has(sampleKey)) {
					sample = samples.get(sampleKey)!;
				}
				showCode = !match[4];
				noresize = !!match[5];
			}
		}
	});
</script>

{#if lang === 'sample'}
	{#if sample}
		<Sample {title} {sample} {height} {showCode} {noresize} showButtons={false} isDoc />
	{:else}
		Sample not found, make sure to fill the samples.ts file.
	{/if}
{:else}
	<Code language={lang.trim() || 'text'} {code} className="mb-4" />
{/if}
