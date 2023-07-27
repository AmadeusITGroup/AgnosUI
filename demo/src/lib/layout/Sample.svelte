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
	import Lazy from './Lazy.svelte';
	import Svg from './Svg.svelte';
	import {pathToRoot$} from '../stores';
	// import {onMount} from 'svelte';

	/**
	 * iFrame title
	 */
	export let title: string;

	/**
	 * Component name used to find the code in a specific framework.
	 *
	 * The component must be located in the folder:
	 * ```typescript
	 * ${componentName}/${sampleName}
	 * ```
	 */
	export let componentName: string;

	/**
	 * File name (without the extension), used to retrieve the code
	 *
	 * The component must be located in the folder:
	 * ```typescript
	 * ${componentName}/${sampleName}
	 * ```
	 */
	export let sampleName: string;

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

	$: normalizedComponentName = componentName.toLowerCase();
	$: path = `${normalizedComponentName}/${sampleName}`.toLowerCase();
	async function getCode(_showCode: boolean, frameworkName: Frameworks, _component: string, sample: string) {
		if (!_showCode) {
			return '';
		}
		let module;
		if (frameworkName === 'angular') {
			sample = sample[0].toLowerCase() + sample.substring(1);
			module = await import(`../../../../angular/demo/src/app/samples/${normalizedComponentName}/${sample}.route.ts?raw`);
		} else if (frameworkName === 'react') {
			module = await import(`../../../../react/demo/app/samples/${normalizedComponentName}/${sample}.route.tsx?raw`);
		} else if (frameworkName === 'svelte') {
			module = await import(`../../../../svelte/demo/samples/${normalizedComponentName}/${sample}.route.svelte?raw`);
		}
		return module.default;
	}
	let code = '';
	$: getCode(showCode, $selectedFramework$!, componentName, sampleName).then((importedCode) => {
		code = importedCode;
	});
	let codeTitle = '';
	$: {
		switch ($selectedFramework$) {
			case 'angular':
				codeTitle = `${sampleName[0].toLowerCase() + sampleName.substring(1)}.component.ts`;
				break;
			case 'react':
				codeTitle = `${sampleName}.tsx`;
				break;
			case 'svelte':
				codeTitle = `${sampleName}.svelte`;
				break;
		}
	}

	id++;
	const baseId = `sample-${id}`;
	$: sampleUrl = `${$pathToRoot$}${$selectedFramework$}/samples/#/${path}` + (urlParameters ? `#${JSON.stringify(urlParameters)}` : '');

	// TODO : need a way to resize the content of the iframe (even in dev mode where cross domain is involved)
	// See https://stackoverflow.com/questions/22086722/resize-cross-domain-iframe-height (solution based on parent.postMessage)
	// To verify the issue uncomment this.
	// function onLoad() {
	// 	let head = iframe?.contentDocument?.head || iframe?.contentWindow?.document.head;
	// 	console.log(head);
	// }
	// onMount(() => {
	// 	iframe.addEventListener('load', onLoad);
	// })
</script>

<div class="my-4 py-2 px-0 px-sm-3">
	<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
		{#if showCodeButton}
			<div class="btn-group btn-group-sm me-2" role="group" aria-label="Toggle code">
				<input type="checkbox" class="btn-check" id={`${baseId}-code`} autocomplete="off" bind:checked={showCode} />
				<label class="btn btn-primary" for={`${baseId}-code`}>Code</label>
			</div>
		{/if}
		<a href={sampleUrl} class="action" target="_blank" rel="noreferrer nofollow external" aria-label="View sample in new tab"
			><Svg svg={openLink} />
		</a>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<iframe class="demo-sample" use:iframeSrc={sampleUrl} {title} {height} />
		</div>
		{#if showCode}
			<div class="col-auto">
				<Lazy component={() => import('./Code.svelte')} {code} {codeTitle}>
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
