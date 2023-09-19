<script lang="ts">
	import {selectedFramework$} from '$lib/stores';
	import Code from '$lib/layout/Code.svelte';
	import {pathToRoot$, frameworkLessUrl$} from '$lib/stores';
	import Section from '$lib/layout/Section.svelte';
	$: isAngular = $selectedFramework$ === 'angular';
	$: isReact = $selectedFramework$ === 'react';
	$: isSvelte = $selectedFramework$ === 'svelte';
	$: capitalizedFramework = $selectedFramework$?.[0]?.toUpperCase() + $selectedFramework$?.substring(1);

	$: fwkDir = `./fwk/${$selectedFramework$}/`;
	const modules: Record<string, any> = import.meta.glob('./fwk/*/*.svelte', {eager: true, import: 'default'});
</script>

<svelte:head>
	<title>AgnosUI - {capitalizedFramework} Installation Guide</title>
	<meta name="description" content="Installation Guide for {capitalizedFramework} AgnosUI" />
</svelte:head>

<!-- TODO refactor it with the header part to use the same component -->
<div class="row mb-4 align-items-center">
	<h1 class="col-auto me-auto me-md-none mb-0 p-3">AgnosUI <span class="text-capitalize">{$selectedFramework$}</span> Installation Guide</h1>
	<div class="col flex-grow-0">
		<div class="btn-group btn-group-sm me-2 bg-white" role="group" aria-label="Basic radio toggle button group">
			<a
				href={`${$pathToRoot$}angular/${$frameworkLessUrl$}`}
				class="btn btn-outline-primary"
				class:active={isAngular}
				aria-current={!isAngular || 'page'}>Angular</a
			>
			<a href={`${$pathToRoot$}react/${$frameworkLessUrl$}`} class="btn btn-outline-primary" class:active={isReact} aria-current={!isReact || 'page'}
				>React</a
			>
			<a
				href={`${$pathToRoot$}svelte/${$frameworkLessUrl$}`}
				class="btn btn-outline-primary"
				class:active={isSvelte}
				aria-current={!isSvelte || 'page'}>Svelte</a
			>
		</div>
	</div>
</div>

<Section label="Prerequisites" id="Prerequisites" level={2}>
	<p>Before you begin, make sure you have the following prerequisites installed on your system:</p>
	<ul>
		<li>Node.js: You can download and install Node.js from the <a href="https://nodejs.org/" target="_blank">official website</a>.</li>
	</ul>
</Section>
<Section label="Create a New Project" id="Create-a-New-Project" level={2}>
	<p>
		If you haven't already, create a new project where you want to use AgnosUI. You can use the <svelte:component
			this={modules[`${fwkDir}NewProject.svelte`]}
		/> for this.
	</p>
</Section>
<Section label="Install AgnosUI" id="Install-AgnosUI" level={2}>
	<p>AgnosUI provides two flavours of the widgets for you to choose from:</p>
	<ul>
		<li>
			<strong>Headless</strong>: The {$selectedFramework$}-headless package contains the headless functionality of the widget library. It can be used
			with any front-end CSS framework. It uses the core of AgnosUI which is framework agnostic
		</li>
		<li>
			<strong>Bootstrap</strong>: The Bootstrap package builds upon the {$selectedFramework$}-headless package to provide additional UI widgets styled
			with Bootstrap.
		</li>
	</ul>

	<p>To install the headless part, open your project's terminal and run the following command:</p>
	<Code code={`npm install @agnos-ui/${$selectedFramework$}-headless`} language="bash" />

	<p>To install the bootstrap part, open your project's terminal and run the following command:</p>
	<Code code={`npm install @agnos-ui/${$selectedFramework$}`} language="bash" />
</Section>
