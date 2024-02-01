<script lang="ts">
	import './code.scss';
	import hljs, {languageFromFileName} from './highlight';
	import {tooltip} from '$lib/tooltip/tooltip';
	import clipboard from 'bootstrap-icons/icons/clipboard.svg?raw';
	import Svg from './Svg.svelte';

	export let code: string;
	export let fileName: string | undefined = undefined;
	export let language: string | undefined = undefined;
	export let className: string = '';

	let container: HTMLElement;
	$: appliedLanguage = language ?? languageFromFileName(fileName);
	$: formattedCode = appliedLanguage ? hljs.highlight(code, {language: appliedLanguage}).value : null;
</script>

<div class={`bg-light-subtle doc p-1 d-flex flex-nowrap align-items-start py-2  px-2 px-sm-4 ${className}`}>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<pre class="mb-0 align-self-center" tabindex="0"><code bind:this={container}
			>{#if formattedCode != null}<!-- eslint-disable-line svelte/no-at-html-tags -->{@html formattedCode}{:else}{code}{/if}</code
		></pre>
	<button
		class="btn flex-grow-0 flex-shrink-0 ms-auto"
		aria-label="copy to clipboard"
		use:tooltip={{content: 'Copy to clipboard'}}
		on:click={() => navigator.clipboard.writeText(code)}><Svg className={`align-middle icon-20`} svg={clipboard} /></button
	>
</div>

<style lang="scss">
	.doc {
		border: 1px solid #d7d9ea;
	}

	pre {
		> code {
			white-space: pre-wrap;
		}
		// color: black;
		tab-size: 1rem;
	}
</style>
