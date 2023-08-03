import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./**/*.spec.ts'],
		coverage: {
			reporter: [['text'], ['json'], ['html'], ['lcov', {projectRoot: '..'}]],
			exclude: ['**/*.spec.ts', '**/__mocks__/**'],
			lines: 99,
			statements: 99,
			branches: 97.5,
			functions: 93.7,
		},
		environment: 'happy-dom',
	},
});
