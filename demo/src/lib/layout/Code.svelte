<script lang="ts">
	import './code.scss';
	import hljs, {languageFromFileName} from './highlight';

	export let code: string;
	export let fileName: string | undefined = undefined;
	export let language: string | undefined = undefined;
	export let className = 'doc p-1';

	let container: HTMLElement;
	$: appliedLanguage = language ?? languageFromFileName(fileName);
	$: formattedCode = appliedLanguage ? hljs.highlight(code, {language: appliedLanguage}).value : null;
</script>

<div class={`bg-light-subtle ${className}`}>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<pre class="mb-0" tabindex="0"><code bind:this={container}
			>{#if formattedCode != null}<!-- eslint-disable-line svelte/no-at-html-tags -->{@html formattedCode}{:else}{code}{/if}</code
		></pre>
</div>

<style lang="scss">
	.doc {
		border: 1px solid #d7d9ea;
	}

	pre {
		// color: black;
		tab-size: 1rem;
	}
</style>
