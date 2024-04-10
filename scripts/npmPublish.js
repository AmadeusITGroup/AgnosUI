import {spawn} from 'child_process';
import {join} from 'path';
import {fileURLToPath} from 'url';

const directories = [
	'core/dist',
	'core-bootstrap/dist',
	'svelte/headless/dist',
	'svelte/bootstrap/dist',
	'react/headless/dist',
	'react/bootstrap/dist',
	'angular/headless/dist',
	'angular/bootstrap/dist',
	'base-po',
	'page-objects',
];

export const processEndPromise = (proc) =>
	new Promise((resolve, reject) => proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`process exited with code ${code}`)))));

export const publish = async (extraArgs = []) => {
	const extraArgsStr = extraArgs.join(' ');
	let failures = 0;
	for (const directory of directories) {
		console.log(`[${directory}] npm publish --access=public ${extraArgsStr}`);
		try {
			const proc = spawn('npm', ['publish', '--access=public', ...extraArgs], {
				stdio: 'inherit',
				shell: process.platform == 'win32',
				cwd: join(import.meta.dirname, '..', directory),
			});
			await processEndPromise(proc);
		} catch (error) {
			failures++;
		}
	}
	if (failures > 0) {
		throw new Error(`npm publish failed for ${failures} packages`);
	} else {
		console.log('npm publish succeeded for all packages');
	}
};

if (fileURLToPath(import.meta.url) === process.argv[1]) {
	publish(process.argv.slice(2)).catch((error) => {
		console.error(error);
		process.exit(1);
	});
}
