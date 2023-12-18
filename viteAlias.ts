import path from 'path';

export const alias: Array<{find: string | RegExp; replacement: string}> = [
	{find: /^@agnos-ui\/core\/components\/(.*)$/, replacement: path.join(__dirname, './core/src/components') + '/$1/$1.ts'},
	{find: '@agnos-ui/core', replacement: path.join(__dirname, './core/src')},
	{find: /^@agnos-ui\/react-headless\/components\/(.*)$/, replacement: path.join(__dirname, './react/headless/src/components') + '/$1/$1.ts'},
	{find: /^@agnos-ui\/react-headless\/services\/(.*)$/, replacement: path.join(__dirname, './react/headless/src/generated/services') + '/$1.ts'},
	{find: '@agnos-ui/react-headless', replacement: path.join(__dirname, './react/headless/src')},
	{find: /^@agnos-ui\/react\/components\/(.*)$/, replacement: path.join(__dirname, './react/lib/src/components') + '/$1/$1.tsx'},
	{find: '@agnos-ui/react', replacement: path.join(__dirname, './react/lib/src/generated')},
	{find: /^@agnos-ui\/svelte-headless\/components\/(.*)$/, replacement: path.join(__dirname, './svelte/headless/src/components') + '/$1/$1.ts'},
	{find: /^@agnos-ui\/svelte-headless\/services\/(.*)$/, replacement: path.join(__dirname, './svelte/headless/src/generated/services') + '/$1.ts'},
	{find: '@agnos-ui/svelte-headless', replacement: path.join(__dirname, './svelte/headless/src')},
	{find: /^@agnos-ui\/svelte\/components\/(.*)$/, replacement: path.join(__dirname, './svelte/lib/src/components') + '/$1'},
	{find: '@agnos-ui/svelte', replacement: path.join(__dirname, './svelte/lib/src/generated')},
	{find: '@agnos-ui/common', replacement: path.join(__dirname, './common')},
];
