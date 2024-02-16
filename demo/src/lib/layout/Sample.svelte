<script lang="ts" context="module">
	const iframeSrc = (iframe: HTMLIFrameElement, src: string) => {
		const update = (src: string) => iframe.contentWindow?.location.replace(new URL(src, window.location.href));
		update(src);
		return {
			update,
		};
	};
</script>

<script lang="ts">
	import {tooltip} from '$lib/tooltip/tooltip';
	import openLink from 'bootstrap-icons/icons/box-arrow-up-right.svg?raw';
	import codeSvg from 'bootstrap-icons/icons/code.svg?raw';
	import stackblitz from '$resources/icons/stackblitz.svg?raw';
	import type {Frameworks} from '../stores';
	import {pathToRoot$, selectedFramework$} from '../stores';
	import Lazy from './Lazy.svelte';
	import Svg from './Svg.svelte';
	import type {SampleInfo} from './sample';
	import {createIframeHandler} from '$lib/layout/iframe';

	/**
	 * iFrame title
	 */
	export let title: string;

	/**
	 * Sample
	 */
	export let sample: SampleInfo;

	export let noresize = false;
	export let height: number;

	/**
	 * True if used in the Markdown documentation
	 */
	export let isDoc: boolean = false;

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
	export let urlParameters: object | undefined = undefined;

	/**
	 * Whether the code button must be displayed
	 */
	export let showButtons = true;

	export let showCode = false;
	let code = '';
	$: isPlaceholder = sample.files[$selectedFramework$].entryPoint === 'placeholder';
	$: path = isPlaceholder ? `placeholder/placeholdersample` : `${sample.componentName}/${sample.sampleName}`.toLowerCase();
	$: files = Object.keys(sample.files[$selectedFramework$].files);
	$: selectedFileName = sample.files[$selectedFramework$].entryPoint;
	$: complementaryUrl = sample.files[$selectedFramework$].complementaryUrl;
	async function getCode(showCode: boolean, frameworkName: Frameworks, sample: SampleInfo, fileName: string) {
		code = showCode ? await sample.files[frameworkName].files[fileName]() : '';
	}
	$: void getCode(showCode, $selectedFramework$!, sample, selectedFileName);
	$: sampleBaseUrl = `${$pathToRoot$}${$selectedFramework$}/samples${complementaryUrl}/#/${path}`;
	$: sampleUrl = sampleBaseUrl + (urlParameters ? `#${JSON.stringify(urlParameters)}` : '');

	const {showSpinner$, handlerDirective} = createIframeHandler(height, !noresize);
</script>

<div class="mb-4 py-2 px-0 px-sm-3">
	<div class={`position-relative ${isDoc ? 'border-bottom' : 'border'} iframe-container`}>
		{#if $showSpinner$}
			<div class="position-absolute top-50 start-50 translate-middle iframeSpinner">
				<div class="spinner-border text-primary-emphasis" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		{/if}
		<iframe class="demo-sample d-block" use:iframeSrc={sampleUrl} {title} use:handlerDirective={sampleBaseUrl} />
	</div>
	{#if showButtons}
		<div class="btn-toolbar border border-top-0 d-flex align-items-center p-1" role="toolbar" aria-label="Toolbar with button groups">
			<button
				class="btn btn-sm btn-link m-1 p-0"
				aria-label="Show or hide the code"
				use:tooltip={{content: 'Toggle code'}}
				on:click={() => (showCode = !showCode)}><Svg className="icon-24 align-middle" svg={codeSvg} /></button
			>
			<button
				class="btn btn-sm btn-link m-1 p-0"
				aria-label="Open example in stackblitz"
				use:tooltip={{content: 'Edit in Stackblitz'}}
				on:click={async () => (await import('../stackblitz')).openInStackblitz(sample, $selectedFramework$)}
				><Svg className="icon-24 align-middle" svg={stackblitz} /></button
			>
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
			<ul class="nav nav-underline p-3 border-start border-end">
				{#each files as file}
					<li class="nav-item">
						<button class="nav-link" class:active={selectedFileName === file} on:click={() => (selectedFileName = file)}>{file}</button>
					</li>
				{/each}
			</ul>
		{/if}
		<div class="border border-top-0">
			<Lazy component={() => import('./Code.svelte')} {code} fileName={selectedFileName} language={isPlaceholder ? $selectedFramework$ : undefined}>
				<div class="spinner-border text-primary-emphasis" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</Lazy>
		</div>
	{/if}
</div>

<style lang="scss">
	.iframeSpinner {
		top: 1.5rem;
	}

	.action {
		display: inline-flex;

		> :global(svg) {
			width: 20px;
			height: 20px;
		}
	}
</style>
