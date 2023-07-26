import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./**/*.spec.ts'],
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html', 'lcov'],
			exclude: ['**/*.spec.ts', '**/__mocks__/**'],
		},
		environment: 'happy-dom',
	},
});
