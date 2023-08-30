import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./**/*.spec.ts'],
		coverage: {
			reporter: [['text'], ['json'], ['html'], ['lcov', {projectRoot: '..'}]],
			exclude: ['**/*.spec.ts', '**/__mocks__/**'],
		},
		environment: 'happy-dom',
	},
});
