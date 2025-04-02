<script lang="ts">
	import highlighter, {languageFromFileName, langs} from './highlight';
	import clipboard from 'bootstrap-icons/icons/clipboard.svg?raw';
	import clipboardCheck from 'bootstrap-icons/icons/clipboard-check.svg?raw';
	import Svg from './Svg.svelte';

	interface Props {
		code: string;
		fileName?: string;
		language?: string;
		className?: string;
		noCopy?: boolean;
	}

	let {code, fileName, language, className = '', noCopy = false}: Props = $props();

	let copied = $state(false);
	async function copyCode() {
		await navigator.clipboard.writeText(code);
		copied = true;
	}
	let showButton = $state(false);
	$effect(() => {
		if (!showButton) {
			copied = false;
		}
	});

	let appliedLanguage = $derived(language ?? languageFromFileName(fileName));
	let formattedCode = $derived(
		code
			? highlighter.codeToHtml(code, {
					lang: appliedLanguage && langs.includes(appliedLanguage) ? appliedLanguage : 'text',
					themes: {light: 'github-light-default', dark: 'github-dark-default'},
				})
			: null,
	);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={`bg-light-subtle doc p-0 flex ${className}`}
	onmouseenter={() => (showButton = !noCopy)}
	onmouseleave={() => (showButton = false)}
	style:min-height={noCopy ? 'unset' : '60px'}
>
	{#if formattedCode != null}
		<!-- eslint-disable-line svelte/no-at-html-tags -->{@html formattedCode}
	{/if}
	{#if showButton}
		<button
			class="btn btn-secondary absolute top-[8px] right-[8px] text-primary copy flex items-center justify-center p-0 tooltip"
			data-tip={copied ? 'Copied !' : 'Copy to clipboard'}
			aria-label="copy to clipboard"
			onclick={copyCode}><Svg className={`align-middle icon-20`} svg={copied ? clipboardCheck : clipboard} /></button
		>
	{/if}
</div>

<style>
	.doc {
		border: 1px solid var(--color-gray-300);
		position: relative;
	}
	.copy {
		z-index: 3;
		width: 44px;
		height: 44px;
		border: 1px solid var(--color-gray-300) !important;
		border-radius: 8px;
	}
</style>
