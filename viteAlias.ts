import path from 'path';

export const alias: Record<string, string> = {
	'@agnos-ui/core': path.join(__dirname, './core/src'),
	'@agnos-ui/react-headless': path.join(__dirname, './react/headless/src'),
	'@agnos-ui/react': path.join(__dirname, './react/lib/src'),
	'@agnos-ui/svelte-headless': path.join(__dirname, './svelte/headless/src'),
	'@agnos-ui/svelte': path.join(__dirname, './svelte/lib/src'),
	'@agnos-ui/angular-headless': path.join(__dirname, './angular/headless/src/public-api'),
	'@agnos-ui/angular': path.join(__dirname, './angular/lib/src/public-api'),
	'@agnos-ui/common': path.join(__dirname, './common'),
};
