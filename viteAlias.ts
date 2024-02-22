import path from 'path';

export const alias: Record<string, string> = {
	'@agnos-ui/core': path.join(__dirname, './core/src'),
	'@agnos-ui/react-headless/utils': path.join(__dirname, './react/headless/src/generated/utils'),
	'@agnos-ui/react-headless/services': path.join(__dirname, './react/headless/src/generated/services'),
	'@agnos-ui/react-headless': path.join(__dirname, './react/headless/src'),
	'@agnos-ui/react/components': path.join(__dirname, './react/lib/src/components'),
	'@agnos-ui/react': path.join(__dirname, './react/lib/src/generated'),
	'@agnos-ui/svelte-headless/utils': path.join(__dirname, './svelte/headless/src/generated/utils'),
	'@agnos-ui/svelte-headless/services': path.join(__dirname, './svelte/headless/src/generated/services'),
	'@agnos-ui/svelte-headless': path.join(__dirname, './svelte/headless/src'),
	'@agnos-ui/svelte/components': path.join(__dirname, './svelte/lib/src/components'),
	'@agnos-ui/svelte': path.join(__dirname, './svelte/lib/src/generated'),
	'@agnos-ui/angular-headless': path.join(__dirname, './angular/headless/src/public-api'),
	'@agnos-ui/angular': path.join(__dirname, './angular/lib/src/public-api'),
	'@agnos-ui/common': path.join(__dirname, './common'),
};
