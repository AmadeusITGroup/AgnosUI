import type {UserConfig, UserConfigFn} from 'vite';
import {defineConfig, mergeConfig} from 'vite';
import codeCoverageInstrument from '@agnos-ui/code-coverage/vitePlugin';
import configBuilder from './vite.config';
import {alias} from '../../viteAlias';

export default defineConfig((config) => {
	const demoConfig = (configBuilder as UserConfigFn)(config) as UserConfig;
	return mergeConfig(demoConfig, {
		resolve: {alias},
		plugins: [codeCoverageInstrument()],
	});
});
