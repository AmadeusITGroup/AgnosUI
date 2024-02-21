import type {Frameworks} from '$lib/stores';
import type {Project} from '@stackblitz/sdk';
import stackblitz from '@stackblitz/sdk';
import type {AsyncFilesSet, SampleInfo} from '../layout/sample';

type StackblitzProcessor = (project: Project, sample: SampleInfo, framework: Frameworks) => Promise<void>;

const isBootstrapCondition = (sample: SampleInfo) => sample.style === 'bootstrap';

const addAsyncFiles =
	(files: AsyncFilesSet, prefix = '', removePrefix?: string, condition: (sample: SampleInfo) => boolean = () => true): StackblitzProcessor =>
	async (project, sample) => {
		if (condition(sample)) {
			await Promise.all(
				Object.keys(files).map(async (fileName) => {
					const finalName = prefix + (removePrefix && fileName.startsWith(removePrefix) ? fileName.substring(removePrefix.length) : fileName);
					project.files[finalName] = await files[fileName]();
				}),
			);
		}
	};

const frameworkCreateStackblitz: Record<Frameworks, StackblitzProcessor[]> = {
	angular: [
		addAsyncFiles(import.meta.glob('./angular/**', {as: 'raw', import: 'default'}) as any, '', './angular/'),
		async (project, sample) => {
			project.files['src/main.ts'] =
				`import {bootstrapApplication} from '@angular/platform-browser';\nimport MainComponent from './${sample.files.angular.entryPoint.replace(
					/\.ts$/,
					'',
				)}';\nbootstrapApplication(MainComponent).catch((err) => console.error(err));`;
		},
	],
	react: [
		addAsyncFiles(import.meta.glob('./react/**', {as: 'raw', import: 'default'}) as any, '', './react/'),
		async (project, sample) => {
			project.files['src/main.tsx'] = `import {createRoot} from "react-dom/client";\nimport "./main.css";\nimport App from ${JSON.stringify(
				`./${sample.files.react.entryPoint.replace(/\.tsx?$/, '')}`,
			)};\nconst rootElement = document.getElementById('root');\nconst root = createRoot(rootElement);\nroot.render(<App />)`;
		},
	],
	svelte: [
		addAsyncFiles(import.meta.glob('./svelte/**', {as: 'raw', import: 'default'}) as any, '', './svelte/', isBootstrapCondition),
		addAsyncFiles(
			import.meta.glob('./svelte-tailwind/**', {as: 'raw', import: 'default'}) as any,
			'',
			'./svelte-tailwind/',
			(sample) => !isBootstrapCondition(sample),
		),
		async (project, sample) => {
			project.files['src/main.ts'] = `import "./main.css";\nimport App from ${JSON.stringify(
				`./${sample.files.svelte.entryPoint}`,
			)};\nconst app = new App({target: document.getElementById('root')});\nexport default app;`;
			project.template = 'node';
		},
	],
};

const isReleased = import.meta.env.AGNOSUI_VERSION !== '0.0.0';

if (isReleased) {
	const setPackageJsonVersion: StackblitzProcessor = async ({files}, sample, framework) => {
		const packageJson = JSON.parse(files['package.json']);
		if (isBootstrapCondition(sample)) {
			packageJson.devDependencies[`@agnos-ui/${framework}`] = import.meta.env.AGNOSUI_VERSION;
		} else {
			packageJson.devDependencies[`@agnos-ui/${framework}-headless`] = import.meta.env.AGNOSUI_VERSION;
		}
		files['package.json'] = JSON.stringify(packageJson, null, '\t');
	};
	frameworkCreateStackblitz.angular.push(setPackageJsonVersion);
	frameworkCreateStackblitz.svelte.push(setPackageJsonVersion);
	frameworkCreateStackblitz.react.push(setPackageJsonVersion);
} else {
	const mergePackageJson: StackblitzProcessor = async ({files}) => {
		const packageJson = JSON.parse(files['package.json']);
		for (const file of Object.keys(files)) {
			if (file.startsWith('packages/') && file.endsWith('/package.json')) {
				const pkg = JSON.parse(files[file]);
				packageJson.devDependencies[pkg.name] = `file:./packages/${pkg.name}`;
				for (const key of Object.keys(pkg.dependencies ?? {})) {
					if (!files[`packages/${key}/package.json`]) {
						packageJson.devDependencies[key] = pkg.dependencies[key];
					}
				}
			}
		}
		files['package.json'] = JSON.stringify(packageJson, null, '\t');
	};

	const corePackage = addAsyncFiles(
		import.meta.glob(['../../../../core/dist/**', '!**/*.map'], {
			as: 'raw',
			import: 'default',
		}) as any,
		'packages/@agnos-ui/core/',
		'../../../../core/dist/',
	);
	const stylePackage = addAsyncFiles(
		import.meta.glob(['../../../../style-bootstrap/**', '!**/*.map', '!**/*.scss'], {
			as: 'raw',
			import: 'default',
		}) as any,
		'packages/@agnos-ui/style-bootstrap/',
		'../../../../style-bootstrap/',
		isBootstrapCondition,
	);
	frameworkCreateStackblitz.angular.push(
		corePackage,
		stylePackage,
		addAsyncFiles(
			import.meta.glob(['../../../../angular/headless/dist/**', '!**/*.map'], {
				as: 'raw',
				import: 'default',
			}) as any,
			'packages/@agnos-ui/angular-headless/',
			'../../../../angular/headless/dist/',
		),
		addAsyncFiles(
			import.meta.glob(['../../../../angular/lib/dist/**', '!**/*.map'], {
				as: 'raw',
				import: 'default',
			}) as any,
			'packages/@agnos-ui/angular/',
			'../../../../angular/lib/dist/',
			isBootstrapCondition,
		),
		mergePackageJson,
	);
	frameworkCreateStackblitz.react.push(
		corePackage,
		stylePackage,
		addAsyncFiles(
			import.meta.glob(['../../../../react/headless/dist/**', '!**/*.map'], {
				as: 'raw',
				import: 'default',
			}) as any,
			'packages/@agnos-ui/react-headless/',
			'../../../../react/headless/dist/',
		),
		addAsyncFiles(
			import.meta.glob(['../../../../react/lib/dist/**', '!**/*.map'], {
				as: 'raw',
				import: 'default',
			}) as any,
			'packages/@agnos-ui/react/',
			'../../../../react/lib/dist/',
			isBootstrapCondition,
		),
		mergePackageJson,
	);
	frameworkCreateStackblitz.svelte.push(
		corePackage,
		stylePackage,
		addAsyncFiles(
			import.meta.glob(['../../../../svelte/headless/dist/**', '!**/*.map'], {
				as: 'raw',
				import: 'default',
			}) as any,
			'packages/@agnos-ui/svelte-headless/',
			'../../../../svelte/headless/dist/',
		),
		addAsyncFiles(
			import.meta.glob(['../../../../svelte/lib/dist/**', '!**/*.map'], {
				as: 'raw',
				import: 'default',
			}) as any,
			'packages/@agnos-ui/svelte/',
			'../../../../svelte/lib/dist/',
			isBootstrapCondition,
		),
		mergePackageJson,
	);
}

export const openInStackblitz = async (sample: SampleInfo, framework: Frameworks) => {
	const project: Project = {
		title: `AgnosUI ${framework} demo - ${sample.componentName} - ${sample.sampleName}`,
		files: {},
		template: 'node',
	};
	const filesInfo = sample.files[framework];
	const {entryPoint, files} = filesInfo;
	const processors = [addAsyncFiles(files, 'src/'), ...frameworkCreateStackblitz[framework]];
	for (const processor of processors) {
		await processor(project, sample, framework);
	}
	const openFile = [entryPoint, ...Object.keys(files).filter((file) => file != entryPoint)].map((file) => `src/${file}`).join(',');
	stackblitz.openProject(project, {newWindow: true, openFile});
};
