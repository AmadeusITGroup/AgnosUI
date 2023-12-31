import NYC from 'nyc';
import {promises as fs} from 'fs';
import path from 'path';
import {skipIntercept} from './interceptSwitch';
import {rootFolder} from './filter';

export default async (baseDir: string) => {
	console.log('Cleaning up coverage folders...');
	const nycDir = path.join(baseDir, '.nyc_output');
	const reportDir = path.join(baseDir, 'coverage');
	await fs.rm(nycDir, {recursive: true, force: true});
	await fs.mkdir(nycDir);
	await fs.rm(reportDir, {recursive: true, force: true});
	await fs.mkdir(reportDir);
	console.log('Coverage setup ready !');
	const nycInstance = new NYC({
		cwd: rootFolder,
		tempDirectory: nycDir,
		reportDir,
		reporter: ['lcov', 'json', 'text-summary'],
		extension: ['.ts', '.tsx', '.svelte'],
	});
	return async () => {
		console.log('Saving coverage report...');
		const files = await fs.readdir(nycDir);
		if (files.length) {
			await skipIntercept(() => nycInstance.report());
			console.log('Coverage report saved !');
		} else {
			console.log('No coverage computed.');
		}
	};
};
