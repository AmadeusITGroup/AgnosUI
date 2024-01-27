import {glob} from 'glob';
import path from 'path';
import {fileURLToPath} from 'url';
import {writeFile, mkdir, rm} from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathRegExp = /\\/g;
export function normalizePath(str) {
	return str.replace(pathRegExp, '/');
}

const files = (
	await glob('**/*.route.ts', {
		cwd: path.join(__dirname, '../src/app/samples'),
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

await rm(path.join(__dirname, '../src/app/generated'), {recursive: true, force: true});
await mkdir(path.join(__dirname, '../src/app/generated'));
await writeFile(path.join(__dirname, '../src/app/generated/samples.route.ts'), content);
