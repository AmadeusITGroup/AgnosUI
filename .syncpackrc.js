/** @type import("syncpack").RcFile */
module.exports = {
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
