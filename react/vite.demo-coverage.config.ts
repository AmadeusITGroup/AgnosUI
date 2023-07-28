import type {UserConfig, UserConfigFn} from 'vite';
import {defineConfig, mergeConfig} from 'vite';
import configBuilder from './vite.demo.config';
import istanbul from 'vite-plugin-istanbul';
import * as path from 'path';

export default defineConfig((config) => {
	const demoConfig = (configBuilder as UserConfigFn)(config) as UserConfig;
	return mergeConfig(demoConfig, {
		plugins: [
			istanbul({
				cwd: path.join(__dirname, '/..'),
				include: ['react/lib/*', 'core/lib/*'],
				exclude: ['node_modules', 'test/'],
				forceBuildInstrument: true,
			}),
		],
	});
});
