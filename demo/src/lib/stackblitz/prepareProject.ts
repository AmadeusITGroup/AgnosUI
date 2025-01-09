import type {SampleInfo} from '$lib/layout/sample';
import type {Frameworks} from '$lib/routing.svelte';
import type {Project} from '@stackblitz/sdk';
import type {StackblitzProcessor} from './utils';
import {addAsyncFiles, isBootstrapCondition, isDaisyuiCondition} from './utils';

export const createBaseFrameworkProcessors = (): Record<Frameworks, StackblitzProcessor[]> => ({
	angular: [
		addAsyncFiles(
			import.meta.glob('./angular-bootstrap/**', {query: '?raw', import: 'default'}) as any,
			'',
			'./angular-bootstrap/',
			isBootstrapCondition,
		),
		addAsyncFiles(import.meta.glob('./angular-daisyui/**', {query: '?raw', import: 'default'}) as any, '', './angular-daisyui/', isDaisyuiCondition),
		(project, sample) => {
			project.files['src/main.ts'] =
				`import {bootstrapApplication} from '@angular/platform-browser';\nimport MainComponent from './${sample.files.angular.entryPoint.replace(
					/\.ts$/,
					'',
				)}';\nbootstrapApplication(MainComponent).catch((err) => console.error(err));`;
		},
	],
	react: [
		addAsyncFiles(
			import.meta.glob('./react-bootstrap/**', {query: '?raw', import: 'default'}) as any,
			'',
			'./react-bootstrap/',
			isBootstrapCondition,
		),
		addAsyncFiles(import.meta.glob('./react-daisyui/**', {query: '?raw', import: 'default'}) as any, '', './react-daisyui/', isDaisyuiCondition),
		(project, sample) => {
			project.files['src/main.tsx'] = `import {createRoot} from "react-dom/client";\nimport "./main.css";\nimport App from ${JSON.stringify(
				`./${sample.files.react.entryPoint.replace(/\.tsx?$/, '')}`,
			)};\nconst rootElement = document.getElementById('root')!;\nconst root = createRoot(rootElement);\nroot.render(<App />)`;
		},
	],
	svelte: [
		addAsyncFiles(
			import.meta.glob('./svelte-bootstrap/**', {query: '?raw', import: 'default'}) as any,
			'',
			'./svelte-bootstrap/',
			isBootstrapCondition,
		),
		addAsyncFiles(import.meta.glob('./svelte-daisyui/**', {query: '?raw', import: 'default'}) as any, '', './svelte-daisyui/', isDaisyuiCondition),
		(project, sample) => {
			project.files['src/main.ts'] = `import "./main.css";\nimport {mount} from 'svelte';\nimport App from ${JSON.stringify(
				`./${sample.files.svelte.entryPoint}`,
			)};\nconst app = mount(App, {target: document.getElementById('root')!});\nexport default app;`;
			project.template = 'node';
		},
	],
});

export const prepareStackblitzProject = async (
	sample: SampleInfo,
	framework: Frameworks,
	frameworkProcessorsToUse: ReturnType<typeof createBaseFrameworkProcessors>,
) => {
	const project: Project = {
		title: `AgnosUI ${framework} demo - ${sample.componentName} - ${sample.sampleName} (${sample.style})`,
		files: {},
		template: 'node',
	};
	const filesInfo = sample.files[framework];
	const {entryPoint, files} = filesInfo;
	const processors = [addAsyncFiles(files, 'src/'), ...frameworkProcessorsToUse[framework]];
	for (const processor of processors) {
		await processor(project, sample, framework);
	}
	const openFile = [entryPoint, ...Object.keys(files).filter((file) => file != entryPoint)].map((file) => `src/${file}`).join(',');
	return {project, openFile};
};
