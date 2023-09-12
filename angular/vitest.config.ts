import {defineConfig} from 'vitest/config';
import {alias} from '../viteAlias';

export default defineConfig({
	test: {
		alias,
		setupFiles: ['headless/src/test.ts'],
		include: ['./**/*.spec.ts'],
		coverage: {
			provider: 'custom',
			customProviderModule: '@agnos-ui/code-coverage/vitestProvider',
		},
		environment: 'happy-dom',
	},
});
