const {spawnSync} = require('child_process');
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

const extraArgs = process.argv.slice(2);
const extraArgsStr = extraArgs.join(' ');
let failures = 0;
for (const directory of directories) {
	console.log(`[${directory}] npm publish --access=public ${extraArgsStr}`);
	const result = spawnSync('npm', ['publish', '--access=public', ...extraArgs], {
		stdio: 'inherit',
		cwd: join(__dirname, '..', directory),
	});
	if (result.error || result.status !== 0) {
		failures++;
	}
}
if (failures > 0) {
	throw new Error(`npm publish failed for ${failures} packages`);
} else {
	console.log('npm publish succeeded for all packages');
}
