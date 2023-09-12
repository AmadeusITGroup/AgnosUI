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
