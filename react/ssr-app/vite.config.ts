import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {alias} from '../../viteAlias';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	plugins: [react()],
	resolve: {
		alias: config.mode === 'production' ? {} : alias,
	},
}));
