import {exec as execAsync} from 'child_process';
import {readFile, writeFile} from 'fs/promises';
import {promisify} from 'util';
import {join} from 'path';

const exec = promisify(execAsync);

const version = process.argv[2];

const updateDependency = (devDependencies, key, version) => {
	if (version) {
		devDependencies[key] = version;
	} else {
		delete devDependencies[key];
	}
};

for (const framework of ['angular', 'react', 'svelte']) {
	for (const cssFwk of ['bootstrap', 'daisyui']) {
		const folder = join(import.meta.dirname, `../src/lib/stackblitz/${framework}-${cssFwk}`);
		const packageFile = join(folder, 'package.json');
		const content = JSON.parse(await readFile(packageFile, 'utf8'));
		updateDependency(content.devDependencies, `@agnos-ui/${framework}-${cssFwk === 'bootstrap' ? 'bootstrap' : 'headless'}`, version);
		if (framework === 'svelte') {
			updateDependency(content.devDependencies, '@agnos-ui/svelte-preprocess', version);
		}
		await writeFile(packageFile, JSON.stringify(content, null, '\t') + '\n');
		await exec(`npm install --package-lock-only --prefix ${folder}`);
	}
}
