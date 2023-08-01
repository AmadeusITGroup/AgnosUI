import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./**/*.spec.ts'],
		coverage: {
			reporter: [['text'], ['json'], ['html'], ['lcov', {projectRoot: '..'}]],
			exclude: ['**/*.spec.ts', '**/__mocks__/**'],
			lines: 99.5,
			statements: 99.5,
			branches: 97.7,
			functions: 99.3,
		},
		environment: 'happy-dom',
	},
});
