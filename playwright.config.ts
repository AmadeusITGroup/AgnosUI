import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

const isCI = process.env.CI === 'true';
const envFramework = process.env.FRAMEWORK?.toLowerCase();
const demoUrl = 'http://localhost:4000';
const previewDemoCommand = 'npm run preview demo';
const frameworks = [
	{
		name: 'angular',
		command: isCI ? previewDemoCommand : `npm run dev angular`,
		url: `${isCI ? demoUrl : 'http://localhost:4200'}/angular/samples/`,
	},
	{
		name: 'react',
		command: isCI ? previewDemoCommand : `npm run dev react`,
		url: `${isCI ? demoUrl : 'http://localhost:3000'}/react/samples/`,
	},
	{
		name: 'svelte',
		command: isCI ? previewDemoCommand : `npm run dev svelte`,
		url: `${isCI ? demoUrl : 'http://localhost:3001'}/svelte/samples/`,
	},
].filter(envFramework ? (framework) => framework.name === envFramework : () => true);

const envBrowser = process.env.BROWSER?.toLowerCase();
const devicesToTest = [devices['Desktop Chrome'], devices['Desktop Firefox'], devices['Desktop Safari']].filter(
	envBrowser ? (browser) => browser.defaultBrowserType === envBrowser : () => true
);

const includesDemo = !envFramework || envFramework === 'demo';

const projects: PlaywrightTestConfig['projects'] = includesDemo
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

const config: PlaywrightTestConfig = {
	testDir: 'e2e',
	testMatch: '*e2e-spec.ts',
	retries: 0,
	reporter: [['list'], ['html', {open: 'never'}]],
	forbidOnly: isCI,
	use: {
		trace: 'retain-on-failure',
		video: 'on',
	},
	projects,
	webServer: frameworks.map((framework) => ({
		command: framework.command,
		url: framework.url,
		reuseExistingServer: true,
	})),
};
export default config;
