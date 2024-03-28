import {validate} from 'compare-versions';
import {join} from 'path';
import {writeFileSync, readFileSync} from 'fs';
import {globSync} from 'glob';
import {source} from '../.syncpackrc.js';

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

	const packageFiles = globSync(source, {cwd: join(import.meta.dirname, '..')});
	for (const packageFile of packageFiles) {
		console.log(`Setting version in ${packageFile}`);
		const content = JSON.parse(readFileSync(packageFile, 'utf8'));
		content.version = version;
		processDependencies(content.dependencies);
		writeFileSync(packageFile, JSON.stringify(content, null, '\t') + '\n');
	}
};

setVersion(process.argv[2]);
