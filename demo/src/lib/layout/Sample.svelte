<script lang="ts" module>
	const iframeSrc = (iframe: HTMLIFrameElement, src: string) => {
		const update = (src: string) => iframe.contentWindow?.location.replace(new URL(src, window.location.href));
		update(src);
		return {
			update,
		};
	};
</script>

<script lang="ts">
	import {tooltip} from '$lib/tooltip/tooltip-directive.svelte';
	import openLink from 'bootstrap-icons/icons/box-arrow-up-right.svg?raw';
	import codeSvg from 'bootstrap-icons/icons/code.svg?raw';
	import stackblitz from '$resources/icons/stackblitz.svg?raw';
	import {pathToRoot$, selectedFramework$} from '../stores';
	import Lazy from './Lazy.svelte';
	import Svg from './Svg.svelte';
	import type {SampleInfo} from './sample';
	import {createIframeHandler} from '$lib/layout/iframe';

	interface Props {
		/**
		 * iFrame title
		 */
		title: string;
		/**
		 * Sample
		 */
		sample: SampleInfo;
		noresize?: boolean;
		height: number;
		/**
		 * True if used in the Markdown documentation
		 */
		isDoc?: boolean;
		/**
		 * Object to be stringified and sent in the parameter of the iframe url.
		 *
		 * @example
		 * ```typescript
		 * {
		 * 	param1: 'a',
		 * 	param2: {
		 * 		value1: 1,
		 * 		value2: 2,
		 *  }
		 * }
		 * ```
		 * will be converted to
		 *
		 * ```typescript
		 * {"param1":"a","param2":{"value1":1,"value2":2}}
		 * ```
		 *
		 */
		urlParameters?: object | undefined;
		/**
		 * Whether the code button must be displayed
		 */
		showButtons?: boolean;
		showCode?: boolean;
	}

	let {
		title,
		sample,
		noresize = false,
		height,
		isDoc = false,
		urlParameters = undefined,
		showButtons = true,
		showCode = $bindable(false),
	}: Props = $props();
	let code = $state('');
	let isPlaceholder = $derived(sample.files[$selectedFramework$].entryPoint === 'placeholder');
	let path = $derived(isPlaceholder ? `placeholder/placeholdersample` : `${sample.componentName}/${sample.sampleName}`.toLowerCase());
	let files = $derived(Object.keys(sample.files[$selectedFramework$].files));
	let selectedFileName = $state('');
	$effect.pre(() => {
		selectedFileName = sample.files[$selectedFramework$].entryPoint;
	});
	let complementaryUrl = $derived(sample.files[$selectedFramework$].complementaryUrl);
	$effect.pre(() => {
		if (showCode) {
			void sample.files[$selectedFramework$].files[selectedFileName]().then((val) => (code = val));
		} else {
			code = '';
		}
	});
	let sampleBaseUrl = $derived(`${$pathToRoot$}${$selectedFramework$}/samples${complementaryUrl}/#/${path}`);
	let sampleUrl = $derived(sampleBaseUrl + (urlParameters ? `#${JSON.stringify(urlParameters)}` : ''));

	const {showSpinner$, handlerDirective} = createIframeHandler(height, !noresize);
</script>

<div class="mb-6 py-3 px-0 sm:px-4">
	<div class={`relative ${isDoc ? 'border-bottom' : 'border'} iframe-container`}>
		{#if $showSpinner$}
			<div class="absolute top-1/2 -translate-y-1/2 left-1/2">
				<div class="loading loading-spinner loading-xl" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		{/if}
		<iframe class="demo-sample d-block" use:iframeSrc={sampleUrl} {title} use:handlerDirective={sampleBaseUrl}></iframe>
	</div>
	{#if showButtons}
		<div class="border border-t-0 flex {showCode ? 'border-b-0' : ''} items-center p-1" role="toolbar" aria-label="Toolbar with button groups">
			<button
				class="btn btn-sm btn-link m-1 p-0"
				aria-label="Show or hide the code"
				use:tooltip={{content: 'Toggle code'}}
				onclick={() => (showCode = !showCode)}><Svg className="icon-24 align-middle" svg={codeSvg} /></button
			>
			{#if import.meta.env.STACKBLITZ}
				<button
					class="btn btn-sm btn-link m-1 p-0"
					aria-label="Open example in stackblitz"
					use:tooltip={{content: 'Edit in Stackblitz'}}
					onclick={async () => (await import('../stackblitz')).openInStackblitz(sample, $selectedFramework$)}
					><Svg className="icon-24 align-middle" svg={stackblitz} /></button
				>
			{/if}
			<a
				href={sampleUrl}
				class="action m-1 p-0"
				target="_blank"
				rel="noreferrer nofollow external"
				aria-label="View sample in new tab"
				use:tooltip={{content: 'Open example in a new tab'}}
				><Svg className="icon-20 align-middle" svg={openLink} />
			</a>
		</div>
	{/if}
	{#if showCode}
		{#if files.length > 1}
			<div role="tablist" class="tabs tabs-border p-3 border-x-1 border-t-1 border-gray-300">
				{#each files as file}
					<button role="tab" class={['tab', {'tab-active': selectedFileName === file}]} onclick={() => (selectedFileName = file)}>{file}</button>
				{/each}
			</div>
		{/if}
		<div>
			<Lazy component={() => import('./Code.svelte')} {code} fileName={selectedFileName} language={isPlaceholder ? $selectedFramework$ : undefined}>
				<div class="loading loading-spinner loading-xl text-primary" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</Lazy>
		</div>
	{/if}
</div>

<style>
	.action {
		display: inline-flex;

		> :global(svg) {
			width: 20px;
			height: 20px;
		}
	}
</style>
