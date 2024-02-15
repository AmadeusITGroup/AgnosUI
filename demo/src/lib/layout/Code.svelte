<script lang="ts">
	import highlighter, {languageFromFileName, langs} from './highlight';
	import {tooltip} from '$lib/tooltip/tooltip';
	import clipboard from 'bootstrap-icons/icons/clipboard.svg?raw';
	import clipboardCheck from 'bootstrap-icons/icons/clipboard-check.svg?raw';
	import Svg from './Svg.svelte';
	import {writable} from '@amadeus-it-group/tansu';

	export let code: string;
	export let fileName: string | undefined = undefined;
	export let language: string | undefined = undefined;
	export let className: string = '';

	const copied = writable(false);
	async function copyCode() {
		await navigator.clipboard.writeText(code);
		copied.set(true);
	}
	let showButton = false;
	$: if (!showButton) copied.set(false);

	$: appliedLanguage = language ?? languageFromFileName(fileName);
	$: formattedCode =
		appliedLanguage && code
			? highlighter.codeToHtml(code, {
					lang: langs.includes(appliedLanguage) ? appliedLanguage : 'text',
					themes: {light: 'light-plus', dark: 'dark-plus'},
				})
			: null;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`bg-light-subtle doc p-0 d-flex ${className}`} on:mouseenter={() => (showButton = true)} on:mouseleave={() => (showButton = false)}>
	{#if formattedCode != null}
		<!-- eslint-disable-line svelte/no-at-html-tags -->{@html formattedCode}
	{/if}
	{#if showButton}
		<button
			class="btn btn-secondary copy d-flex align-items-center justify-content-center"
			aria-label="copy to clipboard"
			use:tooltip={{content: $copied ? 'Copied !' : 'Copy to clipboard'}}
			on:click={copyCode}><Svg className={`align-middle icon-20`} svg={$copied ? clipboardCheck : clipboard} /></button
		>
	{/if}
</div>

<style lang="scss">
	.doc {
		border: 1px solid #d7d9ea;
		position: relative;
		min-height: 60px;
	}
	.copy {
		position: absolute;
		top: 8px;
		right: 8px;
		z-index: 3;
		width: 44px;
		height: 44px;
		border: 1px solid #d7d9ea !important;
		border-radius: 8px;
	}
</style>
