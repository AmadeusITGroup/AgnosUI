/** @type import("syncpack").RcFile */
module.exports = {
	source: ['package.json', '*/package.json', '*/{lib,headless}/package.json', 'demo/src/lib/stackblitz/*/package.json'],
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
			pinVersion: '0.0.0',
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
		{
			label: 'Use glob 10.3.6 until https://github.com/isaacs/node-glob/issues/557 is solved',
			range: '',
			packages: ['**'],
			dependencies: ['glob'],
		},
	],
};
