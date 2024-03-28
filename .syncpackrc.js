import rootPkg from './package.json' with {type: 'json'};

/** @type import("syncpack").RcFile */
export default {
	source: ['package.json', '*/package.json', '*/{demo,lib,headless,ssr-app}/package.json', 'demo/src/lib/stackblitz/*/package.json'],
	indent: '\t',
	semverRange: '^',
	versionGroups: [
		{
			label: "Use '*' under 'peerDependencies' everywhere",
			packages: ['**'],
			dependencies: ['**'],
			dependencyTypes: ['peer'],
			pinVersion: '*',
		},
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
			dependencies: ['typescript', 'zone.js', '@angular/*', '@angular-eslint/*', '@angular-devkit/build-angular', 'ng-packagr'],
			packages: ['**'],
		},
		{
			range: '',
			dependencies: ['@amadeus-it-group/tansu', '@agnos-ui/*'],
			packages: ['**'],
		},
	],
	sortPackages: false,
	sortAz: ['bin', 'contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions'],
	sortExports: [],
	formatRepository: false,
};
