import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./test/**/*.spec.ts'],
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
		setupFiles: ['test/setup.ts'],
		testTimeout: 40_000,
	},
});
