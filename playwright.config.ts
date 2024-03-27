import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';
import path from 'path';
import type {FixtureOptions} from './e2e/fixture';
import type {Frameworks, Project} from './e2e/types';

const isCI = process.env.CI === 'true';

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

const allFrameworks: Record<Frameworks, any> = {
	angular: {},
	react: {},
	svelte: {},
};

const allProjects: Record<Project, () => void> = {
	main: () => {
		(selectedFrameworks.filteredList ?? selectedFrameworks.fullList).forEach((framework) => {
			(selectedBrowsers.filteredList ?? selectedBrowsers.fullList).forEach((browser) => {
				playwrightProjects.push({
					name: `main:${framework}:${browser}`,
					testMatch: '**/*.e2e-spec.ts',
					use: {
						...allBrowsers[browser],
						framework,
						project: 'main',
					},
				});
			});
		});
	},
	singlebrowser: () => {
		(selectedFrameworks.filteredList ?? selectedFrameworks.fullList).forEach((framework) => {
			(selectedBrowsers.filteredList ?? ['chromium']).forEach((browser) => {
				playwrightProjects.push({
					name: `singleBrowser:${framework}:${browser}`,
					testMatch: '**/*.singlebrowser-e2e-spec.ts',
					use: {
						...allBrowsers[browser],
						framework,
						project: 'singlebrowser',
					},
				});
			});
		});
	},
	demo: () => {
		(selectedBrowsers.filteredList ?? ['chromium']).forEach((browser) => {
			playwrightProjects.push({
				name: `demo:${browser}`,
				testMatch: '**/*.demo-e2e-spec.ts',
				use: {
					...allBrowsers[browser],
					project: 'demo',
				},
			});
		});
	},
	ssr: () => {
		(selectedFrameworks.filteredList ?? selectedFrameworks.fullList).forEach((framework) => {
			(selectedBrowsers.filteredList ?? ['chromium']).forEach((browser) => {
				playwrightProjects.push({
					name: `ssr:${framework}:${browser}`,
					testMatch: '**/*.ssr-e2e-spec.ts',
					use: {
						...allBrowsers[browser],
						framework,
						project: 'ssr',
					},
				});
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
};
export default config;
