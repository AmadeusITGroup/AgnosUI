/** @type import("syncpack").RcFile */
module.exports = {
	source: ['package.json', '*/package.json', 'demo/src/lib/stackblitz/*/package.json', 'angular/lib/package.json'],
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
	],
	semverGroups: [
		{
			range: '~',
			dependencies: ['typescript'],
			packages: ['**'],
		},
		{
			range: '',
			dependencies: ['@amadeus-it-group/tansu', '@agnos-ui/*'],
			packages: ['**'],
		},
	],
};
