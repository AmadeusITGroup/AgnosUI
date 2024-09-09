import path from 'path';

export const alias: Record<string, string> = {
	'@agnos-ui/core': path.join(__dirname, './core/src'),
	'@agnos-ui/react-headless/components': path.join(__dirname, './react/headless/src/generated/components'),
	'@agnos-ui/react-headless': path.join(__dirname, './react/headless/src'),
	'@agnos-ui/react-bootstrap/components': path.join(__dirname, './react/bootstrap/src/components'),
	'@agnos-ui/react-bootstrap': path.join(__dirname, './react/bootstrap/src'),
	'@agnos-ui/svelte-headless/components': path.join(__dirname, './svelte/headless/src/generated/components'),
	'@agnos-ui/svelte-headless': path.join(__dirname, './svelte/headless/src'),
	'@agnos-ui/svelte-bootstrap/components': path.join(__dirname, './svelte/bootstrap/src/components'),
	'@agnos-ui/svelte-bootstrap': path.join(__dirname, './svelte/bootstrap/src'),
	'@agnos-ui/angular-headless': path.join(__dirname, './angular/headless/src/public-api'),
	'@agnos-ui/angular-bootstrap': path.join(__dirname, './angular/bootstrap/src/public-api'),
	'@agnos-ui/core-bootstrap': path.join(__dirname, './core-bootstrap/src'),
	'@agnos-ui/common': path.join(__dirname, './common'),
};
