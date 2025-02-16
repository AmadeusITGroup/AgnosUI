import {defineConfig} from 'vitest/config';
import {alias} from '../../viteAlias';

import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
	plugins: [angular()],
	test: {
		globals: true,
		alias,
		browser: {
			enabled: true,
			provider: 'playwright',
			headless: true,
			api: {
				host: '127.0.0.1',
			},
			screenshotFailures: false,
			instances: [
				{
					browser: 'chromium',
				},
			],
		},
		setupFiles: ['./headless/test.ts'],
		include: ['./**/*.spec.ts'],
		coverage: {
			provider: 'custom',
			customProviderModule: '@agnos-ui/code-coverage/vitestProvider',
		},
	},
	optimizeDeps: {
		include: ['@angular/compiler'],
	},
});
