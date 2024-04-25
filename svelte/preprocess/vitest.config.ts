import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		include: ['./test/**/*.spec.ts'],
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
});
