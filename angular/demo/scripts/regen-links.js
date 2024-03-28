import {glob} from 'glob';
import path from 'path';
import {writeFile, mkdir, rm} from 'fs/promises';

const __dirname = import.meta.dirname;

const pathRegExp = /\\/g;
export function normalizePath(str) {
	return str.replace(pathRegExp, '/');
}

async function generateLinks(project) {
	const files = (
		await glob('**/*.route.ts', {
			cwd: path.join(__dirname, `../${project}/src/app/samples`),
			nodir: true,
		})
	).map((file) => normalizePath(file.slice(0, -9)));
	files.sort();

	const content = `
	import type {Route} from '@angular/router';
	export const LINKS = ${JSON.stringify(files.map((file) => file.toLowerCase()))};
	const importAndNotify = async (importFn: () => Promise<any>) => {
		const comp = await importFn();
		if (window.parent) {
			window.parent.postMessage({type: 'sampleload'});
		}
		return comp;
	}
	export const SAMPLE_ROUTES: Route[] = [${files.map(
		(file) => `{path: '${file.toLowerCase()}', loadComponent: () => importAndNotify(() => import('../samples/${file}.route'))}`,
	)}];
	`;

	const generatedFolder = path.join(__dirname, `../${project}/src/app/generated`);

	await rm(generatedFolder, {recursive: true, force: true});
	await mkdir(generatedFolder);
	await writeFile(path.join(generatedFolder, 'samples.route.ts'), content);
}

await generateLinks('bootstrap');
await generateLinks('daisyui');
