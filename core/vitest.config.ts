import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./**/*.spec.ts'],
		coverage: {
			provider: 'custom',
			customProviderModule: '@agnos-ui/code-coverage/vitestProvider',
		},
		environment: 'happy-dom',
	},
});
