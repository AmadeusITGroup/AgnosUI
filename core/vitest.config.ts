import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			name: 'chromium',
			provider: 'playwright',
			headless: true,
			api: {
				host: '127.0.0.1',
			},
			screenshotFailures: false,
		},
		include: ['./**/*.spec.ts'],
		coverage: {
			provider: 'custom',
			customProviderModule: '@agnos-ui/code-coverage/vitestProvider',
		},
	},
});
