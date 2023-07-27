<script lang="ts">
	import './code.scss';
	import hljs from './highlight';
	import {selectedFramework$} from '../stores';
	import Svg from './Svg.svelte';
	import clipboard from 'bootstrap-icons/icons/clipboard.svg?raw';

	export let code: string;
	export let codeTitle: string;
	export let isSample = true;

	let container: HTMLElement;
	let formattedCode = '';

	async function updateCode(newCode: string) {
		formattedCode = hljs.highlight(newCode, {language: $selectedFramework$}).value;
	}
	$: containerClass = isSample ? 'py-3 px-2 px-sm-4 code-sample' : 'doc p-1';
	$: updateCode(code);
	function copyToClipboard() {
		void navigator.clipboard.writeText(code);
	}
</script>

<div class={`code-container ${containerClass}`}>
	{#if isSample}
		<div class="d-flex justify-content-between align-items-center border-bottom border-secondary-subtle w-100 pb-2 mb-3">
			<h5 class="mb-0">{codeTitle}</h5>
			<button class="btn" aria-label="copy to clipboard" on:click={copyToClipboard}><Svg className={`align-middle icon-20`} svg={clipboard} /></button
			>
		</div>
	{/if}
	<pre class="mb-0"><code bind:this={container}><!-- eslint-disable-line svelte/no-at-html-tags -->{@html formattedCode}</code></pre>
</div>

<style lang="scss">
	.code-container {
		background-color: #f8f8f8;
	}

	.doc {
		border: 1px solid #d7d9ea;
	}

	.code-sample {
		box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
	}

	pre {
		> code {
			white-space: pre-wrap;
		}
		// color: black;
		tab-size: 1rem;
	}
</style>
