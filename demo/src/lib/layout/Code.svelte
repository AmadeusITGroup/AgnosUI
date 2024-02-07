<script lang="ts">
	import {languageFromFileName} from './highlight';
	import {tooltip} from '$lib/tooltip/tooltip';
	import clipboard from 'bootstrap-icons/icons/clipboard.svg?raw';
	import Svg from './Svg.svelte';
	import {codeToHtml} from 'shiki';

	export let code: string;
	export let fileName: string | undefined = undefined;
	export let language: string | undefined = undefined;
	export let className: string = '';

	let copied = false;
	function copyCode() {
		navigator.clipboard.writeText(code);
		copied = true;
	}
	let showButton = false;

	$: appliedLanguage = language ?? languageFromFileName(fileName);
	$: formattedCodePromise = appliedLanguage
		? codeToHtml(code, {lang: appliedLanguage, themes: {light: 'catppuccin-latte', dark: 'catppuccin-mocha'}})
		: null;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`bg-light-subtle doc p-0 d-flex ${className}`} on:mouseenter={() => (showButton = true)} on:mouseleave={() => (showButton = false)}>
	{#if formattedCodePromise != null}
		{#await formattedCodePromise}
			<div class="d-flex justify-content-center">
				<div class="spinner-border" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		{:then formattedCode}
			<!-- eslint-disable-line svelte/no-at-html-tags -->{@html formattedCode}
		{/await}
	{/if}
	{#if showButton}
		<button
			class="btn copy d-flex align-items-center justify-content-center"
			aria-label="copy to clipboard"
			use:tooltip={{content: copied ? 'Copied !' : 'Copy to clipboard'}}
			on:mouseenter={() => (copied = false)}
			on:click={copyCode}><Svg className={`align-middle icon-20`} svg={clipboard} /></button
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
		background-color: white !important;
	}
</style>
