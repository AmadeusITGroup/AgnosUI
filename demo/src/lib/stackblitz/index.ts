import type {Frameworks} from '$lib/stores';
import type {Project} from '@stackblitz/sdk';
import stackblitz from '@stackblitz/sdk';
import type {AsyncFilesSet, SampleInfo} from '../layout/sample';

type StackblitzProcessor = (project: Project, sample: SampleInfo, framework: Frameworks) => Promise<void>;

const isBootstrapCondition = (sample: SampleInfo) => sample.style === 'bootstrap';
const addTailwindConfig = (project: Project, framework: Frameworks) => {
	const packageJson = JSON.parse(project.files['package.json']);
	packageJson.devDependencies['autoprefixer'] = '^10.4.16';
	packageJson.devDependencies['postcss'] = '^8.4.33';
	packageJson.devDependencies['tailwindcss'] = '^3.4.1';
	project.files['package.json'] = JSON.stringify(packageJson, null, '\t');
	project.files['tailwind.config.js'] = `
		module.exports = {
			content: ['./src/**/*.{html,js,svelte,ts,tsx}'],
			theme: {
				extend: {},
			},
			plugins: [],
		};`;
	project.files['postcss.config.js'] = `
		export default {
			plugins: {
				'tailwindcss/nesting': {},
				tailwindcss: {},
				autoprefixer: {},
			},
		};`;
	project.files['main.css'] = `
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
	`;
	const tailwindCss = `<link rel="stylesheet" href="main.css" />`;
	project.files['index.html'] = project.files['index.html'].replace('<!--	STYLE CONFIG -->', tailwindCss);
};

const addBootstrapConfig = (project: Project, framework: Frameworks) => {
	const bootstrapLink = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
													integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>`;
	project.files['index.html'] = project.files['index.html'].replace('<!--	STYLE CONFIG -->', bootstrapLink);
	switch (framework) {
		case 'angular': {
			const angularJson = JSON.parse(project.files['angular.json']);
			angularJson['projects']['demo']['architect']['build']['options']['styles'] = ['@agnos-ui/style-bootstrap/css/agnosui.css'];
			project.files['angular.json'] = JSON.stringify(angularJson, null, '\t');
			break;
		}
		case 'react': {
			project.files['src/main.tsx'] = 'import "@agnos-ui/style-bootstrap/css/agnosui.css";\n' + project.files['src/main.tsx'];
			break;
		}
		case 'svelte': {
			project.files['src/main.ts'] = 'import "@agnos-ui/style-bootstrap/css/agnosui.css";\n' + project.files['src/main.ts'];
			break;
		}
	}
};

const styleConfiguration: Record<SampleInfo['style'], (project: Project, framework: Frameworks) => void> = {
	tailwind: addTailwindConfig,
	bootstrap: addBootstrapConfig,
};

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
			project.files['src/main.tsx'] = `import {createRoot} from "react-dom/client";\nimport App from ${JSON.stringify(
				`./${sample.files.react.entryPoint.replace(/\.tsx?$/, '')}`,
			)};\nconst rootElement = document.getElementById('root');\nconst root = createRoot(rootElement);\nroot.render(<App />)`;
		},
	],
	svelte: [
		addAsyncFiles(import.meta.glob('./svelte/**', {as: 'raw', import: 'default'}) as any, '', './svelte/'),
		async (project, sample) => {
			project.files['src/main.ts'] = `import App from ${JSON.stringify(
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
	styleConfiguration[sample.style](project, framework);
	const openFile = [entryPoint, ...Object.keys(files).filter((file) => file != entryPoint)].map((file) => `src/${file}`).join(',');
	stackblitz.openProject(project, {newWindow: true, openFile});
};
