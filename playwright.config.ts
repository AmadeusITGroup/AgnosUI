import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';
import type {FixtureOptions} from 'e2e/fixture';
import path from 'path';

const isCI = process.env.CI === 'true';
const isPreview = isCI || process.env.PREVIEW === 'true';
const includeCoverage = isCI || process.env.COVERAGE === 'true';
const coverageSuffix = includeCoverage ? ':coverage' : '';
const previewOrDev = isPreview ? 'preview' : 'dev';

const allBrowsers = {
	chromium: devices['Desktop Chrome'],
	firefox: devices['Desktop Firefox'],
	webkit: devices['Desktop Safari'],
};

const processEnvList = <T extends string>(name: string, valuesMap: Record<T, any>): {fullList: T[]; filteredList?: T[]} => {
	const fullList = Object.keys(valuesMap) as T[];
	const envValue = process.env[name]?.trim()?.toLowerCase()?.split(',');
	if (!envValue) {
		return {fullList};
	}
	const envValueSet = new Set<T>(envValue as T[]);
	for (const value of envValueSet) {
		if (!Object.prototype.hasOwnProperty.call(valuesMap, value)) {
			throw new Error(`Invalid value for ${name}: ${value}`);
		}
	}
	return {fullList, filteredList: [...envValueSet]};
};

const playwrightProjects: PlaywrightTestConfig<FixtureOptions>['projects'] = [];

const allServers = {
	angularDemoDevBootstrap: {
		command: `npm run -w angular/demo dev:bootstrap${coverageSuffix}`,
		url: 'http://localhost:4200',
		urlReadyPath: '/angular/samples/bootstrap/',
	},
	angularDemoDevDaisyui: {
		command: `npm run -w angular/demo dev:daisyui${coverageSuffix}`,
		url: 'http://localhost:4201',
		urlReadyPath: '/angular/samples/daisyui/',
	},
	reactDemoDev: {
		command: `npm run -w react/demo dev${coverageSuffix}`,
		url: 'http://localhost:3000',
		urlReadyPath: '/react/samples/bootstrap/',
	},
	svelteDemoDev: {
		command: `npm run -w svelte/demo dev${coverageSuffix}`,
		url: 'http://localhost:3001',
		urlReadyPath: '/svelte/samples/bootstrap/',
	},
	demoSite: {
		command: `npm run -w demo ${previewOrDev}${coverageSuffix}`,
		url: 'http://localhost:4000',
		urlReadyPath: '/',
	},
};

const selectedServers = new Set<keyof typeof allServers>();
const addServer = (server: keyof typeof allServers) => {
	selectedServers.add(server);
	return allServers[server].url;
};

const allFrameworks = {
	angular: {
		samplesDevServer: () => {
			addServer('angularDemoDevBootstrap');
			addServer('angularDemoDevDaisyui');
			return addServer('demoSite');
		},
	},
	react: {
		samplesDevServer: () => addServer('reactDemoDev'),
	},
	svelte: {
		samplesDevServer: () => addServer('svelteDemoDev'),
	},
};

const addSamplesServer = (framework: keyof typeof allFrameworks) =>
	`${isPreview ? addServer('demoSite') : allFrameworks[framework].samplesDevServer()}/${framework}/samples/bootstrap/`;

const allProjects = {
	main: () => {
		(selectedFrameworks.filteredList ?? selectedFrameworks.fullList).forEach((framework) => {
			const baseURL = addSamplesServer(framework);
			(selectedBrowsers.filteredList ?? selectedBrowsers.fullList).forEach((browser) => {
				playwrightProjects.push({
					name: `main:${framework}:${browser}`,
					testMatch: '**/*.e2e-spec.ts',
					use: {
						...allBrowsers[browser],
						framework,
						baseURL,
					},
				});
			});
		});
	},
	singlebrowser: () => {
		(selectedFrameworks.filteredList ?? selectedFrameworks.fullList).forEach((framework) => {
			const baseURL = addSamplesServer(framework);
			(selectedBrowsers.filteredList ?? ['chromium']).forEach((browser) => {
				playwrightProjects.push({
					name: `singleBrowser:${framework}:${browser}`,
					testMatch: '**/*.singlebrowser-e2e-spec.ts',
					use: {
						...allBrowsers[browser],
						baseURL,
					},
				});
			});
		});
	},
	demo: () => {
		const baseURL = addServer('demoSite');
		(selectedBrowsers.filteredList ?? ['chromium']).forEach((browser) => {
			playwrightProjects.push({
				name: `demo:${browser}`,
				testMatch: '**/*.demo-e2e-spec.ts',
				use: {
					...allBrowsers[browser],
					baseURL,
				},
			});
		});
	},
};

const selectedProjects = processEnvList('PROJECT', allProjects);
const selectedFrameworks = processEnvList('FRAMEWORK', allFrameworks);
const selectedBrowsers = processEnvList('BROWSER', allBrowsers);

(selectedProjects.filteredList ?? selectedProjects.fullList).forEach((project) => allProjects[project]());

const config: PlaywrightTestConfig<FixtureOptions> = {
	globalSetup: path.join(import.meta.dirname, './e2e/global-setup'),
	testDir: 'e2e',
	retries: 1,
	reporter: [[isCI ? 'github' : 'list'], isCI ? ['blob'] : ['html', {open: 'never'}]],
	forbidOnly: isCI,
	snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',
	use: {
		trace: 'on-all-retries',
		video: 'on-first-retry',
	},
	projects: playwrightProjects,
	webServer: [...selectedServers].map((server) => {
		const {command, url, urlReadyPath} = allServers[server];
		return {command, url: `${url}${urlReadyPath}`, reuseExistingServer: !isCI};
	}),
};
export default config;
