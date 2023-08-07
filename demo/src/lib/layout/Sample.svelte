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
	import codeSvg from '../icons/code.svg?raw';
	import {pathToRoot$} from '../stores';
	import Lazy from './Lazy.svelte';
	import Svg from './Svg.svelte';
	import type {SampleInfo} from './sample';
	import {onDestroy} from 'svelte';
	import {tooltip} from '$lib/tooltip/tooltip';

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
	let resizeObserver: ResizeObserver;
	let iframeHeight = 50;
	function onLoad(event: Event) {
		iframeLoaded = true;
		if (!resizeObserver) {
			resizeObserver = new ResizeObserver((entries) => {
				if (entries.length === 1) {
					iframeHeight = entries[0].contentRect.height + 2;
				}
			});
		}
		resizeObserver.disconnect();
		if (event.target instanceof HTMLIFrameElement && event.target.contentDocument) {
			resizeObserver.observe(event.target.contentDocument.body);
		}
	}
	onDestroy(() => {
		resizeObserver?.disconnect();
	});
</script>

<div class="my-4 py-2 px-0 px-sm-3">
	<div class="btn-toolbar d-flex align-items-center" role="toolbar" aria-label="Toolbar with button groups">
		{#if showCodeButton}
			<div class="btn-group btn-group-sm me-2" role="group" aria-label="Toggle code">
				<input type="checkbox" class="btn-check" id={`${baseId}-code`} autocomplete="off" bind:checked={showCode} />
				<label class="btn btn-primary d-flex align-items-center" for={`${baseId}-code`}>
					<Svg className="icon-20 align-middle me-1" svg={codeSvg} />
					Code
				</label>
			</div>
			<button
				class="btn btn-sm btn-link me-2"
				aria-label="Open example in stackblitz"
				use:tooltip={{content: 'Edit in Stackblitz'}}
				on:click={async () => (await import('../stackblitz')).openInStackblitz(sample, $selectedFramework$)}
				><Svg className="icon-24 align-middle" svg={stackblitz} /></button
			>
		{/if}
		<a
			href={sampleUrl}
			class="action"
			target="_blank"
			rel="noreferrer nofollow external"
			aria-label="View sample in new tab"
			use:tooltip={{content: 'Open example in a new tab'}}
			><Svg className="icon-20 align-middle" svg={openLink} />
		</a>
	</div>
	<div class="row">
		{#if showCode}
			<div class="col-auto my-2">
				<Lazy component={() => import('./Code.svelte')} {code} {fileName}>
					<div class="spinner-border text-primary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</Lazy>
			</div>
		{/if}
		<div class="col-sm-12">
			{#if !iframeLoaded}
				<div class="position-relative">
					<div class="position-absolute start-50 translate-middle-x iframeSpinner">
						<div class="spinner-border text-primary" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
				</div>
			{/if}
			<iframe class="demo-sample border rounded mt-3" use:iframeSrc={sampleUrl} {title} height={height ?? iframeHeight} on:load={onLoad} />
		</div>
	</div>
</div>

<style lang="scss">
	.iframeSpinner {
		top: 1.5rem;
	}

	.action {
		display: inline-block;

		> :global(svg) {
			width: 20px;
			height: 20px;
		}
	}
</style>
