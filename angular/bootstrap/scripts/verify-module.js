import {glob} from 'glob';
import path from 'path';
import {readFile} from 'fs/promises';

const __dirname = import.meta.dirname;

const pathRegExp = /\\/g;
function normalizePath(str) {
	return str.replace(pathRegExp, '/');
}

const COMPONENTS_FOLDER = path.join(__dirname, '../src/components');

const files = (
	await glob('**/*.component.ts', {
		cwd: COMPONENTS_FOLDER,
		nodir: true,
	})
).map((file) => normalizePath(path.join(COMPONENTS_FOLDER, file)));

const stuffToExportRegex = /(@Directive|@Component)\({[\S\s]+?}\)\s*export class ([a-zA-Z]*)/g;

const classesToExport = [];
for (const file of files) {
	const content = await readFile(file, {encoding: 'utf-8'});
	const matches = [...content.matchAll(stuffToExportRegex)];
	for (const match of matches) {
		classesToExport.push(match[2]);
	}
}

const angularModuleContent = await readFile(normalizePath(path.join(__dirname, '../src/agnos-ui-angular.module.ts')), {encoding: 'utf-8'});
const componentsFromAngularModule = new Set(
	angularModuleContent
		.replace('// [content-placeholder]', '')
		.match(/const components = \[([^\]]+)\];/)[1]
		.split(',')
		.map((component) => component.trim())
		.filter((component) => !!component),
);

const defaultSlotRegex = /^[a-zA-Z]*Default[a-zA-Z]*Slots?Component$/;
const missingComponents = classesToExport.filter(
	(classToExport) => !componentsFromAngularModule.has(classToExport) && !classToExport.match(defaultSlotRegex),
);

if (missingComponents.length) {
	console.error(`ERROR ! The following Angular components / directives are not exported in the main angular module: ${missingComponents.join(', ')}`);
	process.exit(1);
}
