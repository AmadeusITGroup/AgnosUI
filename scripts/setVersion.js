const {validate} = require('compare-versions');
const {join} = require('path');
const {writeFileSync, readFileSync} = require('fs');
const {globSync} = require('glob');
const source = require('../.syncpackrc.js').source;

const setVersion = (version) => {
	if (!version || version.startsWith('v') || !validate(version)) {
		throw new Error(`Invalid version number: ${version}`);
	}

	const processDependencies = (dependencies) => {
		if (dependencies) {
			for (const name of Object.keys(dependencies)) {
				if (name.startsWith('@agnos-ui/')) {
					dependencies[name] = version;
				}
			}
		}
	};

	const packageFiles = globSync(source, {cwd: join(__dirname, '..')});
	for (const packageFile of packageFiles) {
		console.log(`Setting version in ${packageFile}`);
		const content = JSON.parse(readFileSync(packageFile, 'utf8'));
		content.version = version;
		processDependencies(content.dependencies);
		writeFileSync(packageFile, JSON.stringify(content, null, '\t') + '\n');
	}
};

setVersion(process.argv[2]);
