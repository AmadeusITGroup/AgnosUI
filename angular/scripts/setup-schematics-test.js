const runAll = require('npm-run-all');

export async function setup() {
	await runAll('build:schematics');
}
