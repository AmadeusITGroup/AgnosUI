/**
 * This file is a helper to run any combination of framework / browser for e2e (only a single framework or a single browser can be selected)
 *
 * For example:
 *
 * - `npm run e2e` : run the whole test suite
 * - `npm run e2e angular` : run the tests for angular
 * - `npm run e2e angular firefox` : run the tests for angular, on firefox
 * - `npm run e2e angular firefox select` : run the tests for angular, on firefox, filtered on spec files containing `select`
 */

import {execSync as exec} from 'child_process';
import path from 'path';

const [, , ...args] = process.argv;

const projects = ['main', 'singlebrowser', 'demo', 'ssr'];
const frameworks = ['angular', 'react', 'svelte'];
const browsers = ['chromium', 'firefox', 'webkit'];
const selectedProjects = new Set();
const selectedFrameworks = new Set();
const selectedBrowsers = new Set();

let includeCoverage = false;
let usePreview = false;
const restArgs = [];
for (let i = 0; i < args.length; i++) {
	const arg = args[i];
	if (projects.indexOf(arg) > -1) {
		selectedProjects.add(arg);
	} else if (frameworks.indexOf(arg) > -1) {
		selectedFrameworks.add(arg);
	} else if (browsers.indexOf(arg) > -1) {
		selectedBrowsers.add(arg);
	} else if (arg === '--coverage') {
		includeCoverage = true;
	} else if (arg === '--preview') {
		usePreview = true;
	} else {
		restArgs.push(arg);
	}
}
if (includeCoverage) {
	process.env.COVERAGE = 'true';
}
if (usePreview) {
	process.env.PREVIEW = 'true';
}

const cmd = [];
if (selectedProjects.size > 0) {
	process.env.PROJECT = [...selectedProjects].join(',');
	console.log(`Selected project(s): ${process.env.PROJECT}`);
}
if (selectedFrameworks.size > 0) {
	process.env.FRAMEWORK = [...selectedFrameworks].join(',');
	console.log(`Selected framework(s): ${process.env.FRAMEWORK}`);
}
if (selectedBrowsers.size > 0) {
	process.env.BROWSER = [...selectedBrowsers].join(',');
	console.log(`Selected browser(s): ${process.env.BROWSER}`);
}

cmd.push(`npx playwright test ${restArgs.join(' ')}`);

const strCommand = cmd.join(' ');
console.log(strCommand);
try {
	exec(strCommand, {
		cwd: path.join(import.meta.dirname, '..'),
		stdio: [0, 1, 2],
	});
} catch (e) {
	// Hide node internal error
	process.exit(-1);
}
