<script lang="ts">
	import Code from '$lib/layout/Code.svelte';
	import Sample from '$lib/layout/Sample.svelte';
	import {selectedFramework$} from '$lib/stores';
	import samples from '../samples';

	let {lang, text}: {lang: string; text: string} = $props();

	let match = $derived(lang === 'sample' ? text.trim().match(/^\{([^:]+):([a-zA-Z-/]+):(\d+)(:noCode)?(:noResize)?\}$/) : undefined);
	let title = $derived(match?.[1] ?? '');
	let height = $derived(match ? Number.parseInt(match[3], 10) : 500);
	let sample = $derived(match && samples.has(match[2]) ? samples.get(match[2]) : undefined);
	let showCode = $derived(match ? !match[4] : true);
	let noresize = $derived(match ? !!match[5] : false);
	let code = $state('');

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
	$effect(() => {
		// eslint-disable-next-line svelte/valid-compile
		getCode(text, $selectedFramework$, lang);
	});
</script>

{#if lang === 'sample'}
	{#if sample}
		<Sample {title} {sample} {height} {showCode} {noresize} showButtons={false} isDoc={true} />
	{:else}
		Sample not found, make sure to fill the samples.ts file.
	{/if}
{:else}
	<Code language={lang.trim() || 'text'} {code} className="mb-4" />
{/if}
