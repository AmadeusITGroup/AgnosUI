const {valid} = require('semver');
const {join} = require('path');
const {writeFileSync, readFileSync} = require('fs');

const setVersion = (version) => {
	if (!version || version.startsWith('v') || !valid(version)) {
		throw new Error(`Invalid version number: ${version}`);
	}
	const directories = [
		'core',
		'style-bootstrap',
		'svelte/headless',
		'svelte/lib',
		'react/headless',
		'react/lib',
		'angular/headless',
		'angular/lib',
		'base-po',
		'page-objects',
	];

	const processDependencies = (dependencies) => {
		if (dependencies) {
			for (const name of Object.keys(dependencies)) {
				if (name.startsWith('@agnos-ui/')) {
					dependencies[name] = version;
				}
			}
		}
	};

	for (const curDirectory of directories) {
		const packageFile = join(__dirname, '..', curDirectory, 'package.json');
		const content = JSON.parse(readFileSync(packageFile, 'utf8'));
		content.version = version;
		processDependencies(content.dependencies);
		writeFileSync(packageFile, JSON.stringify(content, null, '\t') + '\n');
	}
};

setVersion(process.argv[2]);
