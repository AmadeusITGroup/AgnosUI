import {writeFileSync, cpSync, mkdirSync, readFileSync} from 'fs';
import path from 'path';

let [, , sourceFolder, outputFolder] = process.argv;

sourceFolder = path.resolve(sourceFolder);
outputFolder = path.resolve(outputFolder);

const rootPath = path.join(import.meta.dirname, '..');
const rootPackage = JSON.parse(readFileSync(path.join(rootPath, 'package.json'), {encoding: 'utf-8'}));

const sourcePackage = JSON.parse(readFileSync(path.join(sourceFolder, 'package.json'), {encoding: 'utf-8'}));

const pkg = {
	...sourcePackage,
};

const packageName = sourcePackage.name;
const directory = path.posix.relative(rootPath, sourceFolder);
const frameworkName = packageName.split('/')?.[1].split('-')?.[0];
const isFramework = !!frameworkName && frameworkName !== 'core';
const isBootstrap = packageName.endsWith('-bootstrap');

for (const field of ['homepage', 'bugs', 'license', 'repository']) {
	pkg[field] = rootPackage[field];
}

if (!pkg.keywords) {
	pkg.keywords = [];
}
if (!isFramework) {
	pkg.keywords.unshift('headless');
}
if (isBootstrap) {
	pkg.keywords.unshift('bootstrap');
}
if (isFramework) {
	pkg.keywords.unshift(frameworkName);
}
pkg.keywords.push(...rootPackage.keywords);
pkg.repository.directory = directory;
delete pkg.private;
delete pkg.scripts;
delete pkg.wireit;
delete pkg.devDependencies;

const cleanObjDistPrefix = (obj, ...keys) => {
	for (const key of keys) {
		if (obj[key]?.startsWith('./dist/')) {
			obj[key] = '.' + obj[key].substring(6);
		}
		if (obj[key]?.startsWith('./src/')) {
			obj[key] = '.' + obj[key].substring(5);
		}
	}
};
cleanObjDistPrefix(pkg, 'main');
cleanObjDistPrefix(pkg, 'module');
cleanObjDistPrefix(pkg, 'types');
if (pkg.exports) {
	for (const key of Object.keys(pkg.exports)) {
		const pkgExport = pkg.exports[key];
		cleanObjDistPrefix(pkgExport, 'types', 'default', 'svelte', 'esm', 'esm2022', 'require');
	}
}

mkdirSync(outputFolder, {recursive: true});

const packageJsonOutputFile = path.join(outputFolder, 'package.json');
console.log(`Writing ${packageJsonOutputFile}`);
writeFileSync(packageJsonOutputFile, JSON.stringify(pkg, null, '\t'));

// Copy README.md from sourceFolder
const readmeOutputFile = path.join(outputFolder, 'README.md');
const readmeSourceFile = path.join(sourceFolder, 'README.md');
console.log(`Copying ${readmeSourceFile} to ${readmeOutputFile}`);
cpSync(readmeSourceFile, readmeOutputFile);
