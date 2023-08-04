<script lang="ts" context="module">
	let id = 0;

	const iframeSrc = (iframe: HTMLIFrameElement, src: string) => {
		const update = (src: string) => iframe.contentWindow?.location.replace(new URL(src, window.location.href));
		update(src);
		return {
			update,
		};
	};
</script>

<script lang="ts">
	import {selectedFramework$, type Frameworks} from '../stores';

	import openLink from '../icons/open-link.svg?raw';
	import stackblitz from '../icons/stackblitz.svg?raw';
	import {pathToRoot$} from '../stores';
	import Lazy from './Lazy.svelte';
	import Svg from './Svg.svelte';
	import type {SampleInfo} from './sample';

	/**
	 * iFrame title
	 */
	export let title: string;

	/**
	 * Sample
	 */
	export let sample: SampleInfo;

	export let height: number | undefined = undefined;

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
	export let showCodeButton = true;

	let showCode = false;

	$: path = `${sample.componentName}/${sample.sampleName}`.toLowerCase();
	async function getCode(_showCode: boolean, frameworkName: Frameworks, sample: SampleInfo) {
		if (!_showCode) {
			return '';
		}
		const frameworkFiles = sample.files[frameworkName];
		return await frameworkFiles.files[frameworkFiles.entryPoint]();
	}
	let code = '';
	$: getCode(showCode, $selectedFramework$!, sample).then((importedCode) => {
		code = importedCode;
	});
	$: fileName = sample.files[$selectedFramework$].entryPoint;

	id++;
	const baseId = `sample-${id}`;
	$: sampleBaseUrl = `${$pathToRoot$}${$selectedFramework$}/samples/#/${path}`;
	$: sampleUrl = sampleBaseUrl + (urlParameters ? `#${JSON.stringify(urlParameters)}` : '');
	$: sampleBaseUrl, (iframeLoaded = false);

	let iframeLoaded = false;
	function onLoad(event: Event) {
		iframeLoaded = true;
		if (height === undefined && event.target instanceof HTMLIFrameElement && event.target.contentWindow) {
			event.target.height = event.target.contentWindow.document.body.scrollHeight.toString(10);
		}
	}
</script>

<div class="my-4 py-2 px-0 px-sm-3">
	<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
		{#if showCodeButton}
			<div class="btn-group btn-group-sm me-2" role="group" aria-label="Toggle code">
				<input type="checkbox" class="btn-check" id={`${baseId}-code`} autocomplete="off" bind:checked={showCode} />
				<label class="btn btn-primary" for={`${baseId}-code`}>Code</label>
			</div>
			<button
				class="btn btn-sm btn-primary me-2"
				aria-label="Open example in stackblitz"
				on:click={async () => (await import('../stackblitz')).openInStackblitz(sample, $selectedFramework$)}
				><Svg className="icon-20 align-middle" svg={stackblitz} /></button
			>
		{/if}
		<a href={sampleUrl} class="action" target="_blank" rel="noreferrer nofollow external" aria-label="View sample in new tab"
			><Svg svg={openLink} />
		</a>
	</div>
	<div class="row">
		<div class="col-sm-12">
			{#if !iframeLoaded}
				<div class="position-relative">
					<div class="position-absolute top-0 start-50 translate-middle-x">
						<div class="spinner-border text-primary" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
				</div>
			{/if}
			<iframe class="demo-sample" use:iframeSrc={sampleUrl} {title} {height} on:load={onLoad} />
		</div>
		{#if showCode}
			<div class="col-auto">
				<Lazy component={() => import('./Code.svelte')} {code} {fileName}>
					<div class="spinner-border text-primary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</Lazy>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.action {
		display: inline-block;

		> :global(svg) {
			width: 20px;
			height: 20px;
		}
	}
</style>
