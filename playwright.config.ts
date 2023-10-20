import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';
import type {FixtureOptions} from 'e2e/fixture';

const isCI = process.env.CI === 'true';
const includeCoverage = process.env.COVERAGE === 'true';
const envFramework = process.env.FRAMEWORK?.toLowerCase();
const demoUrl = 'http://localhost:4000';
const previewDemoCommand = 'npm run preview demo';
const frameworks = [
	{
		name: 'angular',
		command: isCI ? previewDemoCommand : includeCoverage ? `npm run dev:coverage angular` : `npm run dev angular`,
		url: `${isCI ? demoUrl : 'http://localhost:4200'}/angular/samples/`,
	},
	{
		name: 'react',
		command: isCI ? previewDemoCommand : includeCoverage ? `npm run dev:coverage react` : `npm run dev react`,
		url: `${isCI ? demoUrl : 'http://localhost:3000'}/react/samples/`,
	},
	{
		name: 'svelte',
		command: isCI ? previewDemoCommand : includeCoverage ? `npm run dev:coverage svelte` : `npm run dev svelte`,
		url: `${isCI ? demoUrl : 'http://localhost:3001'}/svelte/samples/`,
	},
].filter(envFramework ? (framework) => framework.name === envFramework : () => true);

const envBrowser = process.env.BROWSER?.toLowerCase();
const devicesToTest = [devices['Desktop Chrome'], devices['Desktop Firefox'], devices['Desktop Safari']].filter(
	envBrowser ? (browser) => browser.defaultBrowserType === envBrowser : () => true
);

const includesDemo = !envFramework || envFramework === 'demo';

const projects: PlaywrightTestConfig<FixtureOptions>['projects'] = includesDemo
	? [
			{
				name: 'demo',
				testMatch: /.*demo.spec.ts/,
				use: {
					...devices['Desktop Chrome'],
					baseURL: demoUrl,
				},
			},
	  ]
	: [];

frameworks.forEach((framework) => {
	devicesToTest.forEach((browser) => {
		projects.push({
			name: `${framework.name}:${browser.defaultBrowserType}`,
			use: {
				...browser,
				framework: framework.name,
				baseURL: framework.url,
			},
		});
	});
});
if (includesDemo) {
	frameworks.push({
		name: 'demo',
		command: isCI ? previewDemoCommand : `npm run dev`,
		url: demoUrl,
	});
}

const config: PlaywrightTestConfig<FixtureOptions> = {
	globalSetup: require.resolve('./e2e/global-setup'),
	testDir: 'e2e',
	testMatch: '*e2e-spec.ts',
	retries: 1,
	reporter: [[isCI ? 'github' : 'list'], ['html', {open: 'never'}]],
	forbidOnly: isCI,
	snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',
	use: {
		trace: 'on-all-retries',
		video: 'on-first-retry',
	},
	projects,
	webServer: frameworks.map((framework) => ({
		command: framework.command,
		url: framework.url,
		reuseExistingServer: true,
	})),
};
export default config;
