import path from 'path';

export const alias: Record<string, string> = {
	'@agnos-ui/core': path.join(__dirname, './core/lib'),
	'@agnos-ui/react': path.join(__dirname, './react/lib'),
	'@agnos-ui/svelte': path.join(__dirname, './svelte/lib'),
	'@agnos-ui/angular': path.join(__dirname, './angular/lib/src/public-api'),
	'@agnos-ui/common': path.join(__dirname, './common'),
};
