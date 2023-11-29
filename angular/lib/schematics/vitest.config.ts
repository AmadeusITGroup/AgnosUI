import {defineConfig} from 'vitest/config';
import {alias} from '../../../viteAlias';

export default defineConfig({
	test: {
		alias,
		globalSetup: 'scripts/setup-schematics-test.js',
		include: ['lib/schematics/**/*.spec.ts'],
		environment: 'happy-dom',
	},
});
