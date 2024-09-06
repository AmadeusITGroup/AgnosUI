import path from 'path';
import runAll from 'npm-run-all2';
import {readFile} from 'fs/promises';

async function run() {
	const [, , ...args] = process.argv;

	const root = path.join(import.meta.dirname, '..');
	const allWorkspaces = JSON.parse(await readFile(path.join(root, 'package.json'), {encoding: 'utf-8'})).workspaces;

	const scriptname = args[0];
	if (!scriptname || allWorkspaces.includes(scriptname)) {
		throw new Error('The first arg must be the script name');
	}

	const workspaces = [];
	for (const workspace of allWorkspaces) {
		const pkg = JSON.parse(await readFile(path.join(root, workspace, 'package.json'), {encoding: 'utf-8'}));
		if (pkg.scripts?.[scriptname]) {
			workspaces.push(workspace);
		}
	}

	const commands = [];

	let parallel = true;
	let hasFramework = false;
	const restParams = [];
	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		const workspacesToRun = workspaces.filter((wk) => wk === arg || wk.startsWith(arg + '/'));
		if (workspacesToRun?.length) {
			for (const workspace of workspacesToRun) {
				commands.push(`${scriptname} -w ${workspace}`);
			}
			hasFramework = true;
		} else if (arg === 'serial') {
			parallel = false;
		} else if (i > 0) {
			restParams.push(arg);
		}
	}

	if (!hasFramework) {
		commands.push(...workspaces.map((workspace) => `${scriptname} -w ${workspace}`));
	}

	if (restParams.length) {
		const restParamsStr = ` -- ${restParams.join(' ')}`;
		for (let i = 0; i < commands.length; i++) {
			commands[i] += restParamsStr;
		}
	}

	try {
		console.log('npm scripts : ', commands);
		process.stdin.setMaxListeners(Infinity);
		process.stderr.setMaxListeners(Infinity);
		process.stdout.setMaxListeners(Infinity);
		runAll(commands, {parallel, printName: true, printLabel: true, stdout: process.stdout, stderr: process.stderr, stdin: process.stdin});
	} catch (e) {
		console.log(e);
		process.exit(-1);
	}
}

await run();
