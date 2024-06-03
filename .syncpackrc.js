import rootPkg from './package.json' with {type: 'json'};

/** @type import("syncpack").RcFile */
export default {
	source: [
		'package.json',
		'*/package.json',
		'*/{demo,bootstrap,headless,ssr-app}/package.json',
		'demo/src/lib/stackblitz/*/package.json',
		'svelte/preprocess/package.json',
	],
	indent: '\t',
	semverRange: '^',
	versionGroups: [
		{
			label: 'Use 0.0.0 for local packages',
			packages: ['**'],
			dependencies: ['**'],
			dependencyTypes: ['local'],
			pinVersion: rootPkg.version,
		},
	],
	semverGroups: [
		{
			range: '~',
			dependencies: ['typescript', 'zone.js'],
			packages: ['**'],
		},
		{
			range: '',
			dependencies: ['@agnos-ui/*'],
			packages: ['**'],
		},
	],
	sortPackages: false,
	sortAz: ['bin', 'contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions'],
	sortExports: [],
	formatRepository: false,
};
