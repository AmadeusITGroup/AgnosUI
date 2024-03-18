const {spawn} = require('child_process');
const {join} = require('path');

const directories = [
	'core/dist',
	'style-bootstrap',
	'svelte/headless/dist',
	'svelte/lib/dist',
	'react/headless/dist',
	'react/lib/dist',
	'angular/headless/dist',
	'angular/lib/dist',
	'base-po',
	'page-objects',
];

const processEndPromise = (proc) =>
	new Promise((resolve, reject) => proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`process exited with code ${code}`)))));
exports.processEndPromise = processEndPromise;

const publish = async (extraArgs = []) => {
	const extraArgsStr = extraArgs.join(' ');
	let failures = 0;
	for (const directory of directories) {
		console.log(`[${directory}] npm publish --access=public ${extraArgsStr}`);
		try {
			const proc = spawn('npm', ['publish', '--access=public', ...extraArgs], {
				stdio: 'inherit',
				shell: process.platform == 'win32',
				cwd: join(__dirname, '..', directory),
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
exports.publish = publish;

if (require.main === module) {
	publish(process.argv.slice(2)).catch((error) => {
		console.error(error);
		process.exit(1);
	});
}
