const {writeFileSync, cpSync, existsSync} = require('fs');
const path = require('path');

let [, , sourceFolder, outputFolder, repositoryDirectory] = process.argv;

sourceFolder = path.resolve(sourceFolder);
outputFolder = path.resolve(outputFolder);
repositoryDirectory = repositoryDirectory != null ? path.resolve(repositoryDirectory) : sourceFolder;

const rootPath = path.join(__dirname, '..');
const rootPackage = require('../package.json');

const sourcePackage = require(path.join(sourceFolder, 'package.json'));

const pkg = {
	...sourcePackage,
};

const packageName = sourcePackage.name;
const directory = path.posix.relative(rootPath, repositoryDirectory);
const frameworkName = directory.split('/')[0];
const isCore = frameworkName === 'core';
const isHeadless = isCore || packageName.endsWith('-headless');

for (const field of ['homepage', 'bugs', 'license', 'repository']) {
	pkg[field] = rootPackage[field];
}

if (!pkg.keywords) {
	pkg.keywords = [];
}
if (isHeadless) {
	pkg.keywords.unshift('headless');
}
if (!isCore) {
	pkg.keywords.unshift(frameworkName);
}
pkg.keywords.push(...rootPackage.keywords);
pkg.repository.directory = directory;
delete pkg.private;
delete pkg.scripts;
delete pkg.devDependencies;

const cleanObjDistPrefix = (obj, ...keys) => {
	for (const key of keys) {
		if (obj[key]?.startsWith('./dist/')) {
			obj[key] = '.' + obj[key].substring(6);
		}
	}
};
cleanObjDistPrefix(pkg, 'main');
cleanObjDistPrefix(pkg, 'module');
cleanObjDistPrefix(pkg, 'types');
if (pkg.exports) {
	for (const key of Object.keys(pkg.exports)) {
		const pkgExport = pkg.exports[key];
		cleanObjDistPrefix(pkgExport, 'types', 'default', 'svelte', 'esm', 'esm2022');
	}
}

const packageJsonOutputFile = path.join(outputFolder, 'package.json');
console.log(`Writing ${packageJsonOutputFile}`);
writeFileSync(packageJsonOutputFile, JSON.stringify(pkg, null, '\t'));

// Copy README.md from repositoryDirectory
const readmeOutputFile = path.join(outputFolder, 'README.md');
const readmeSourceFile = path.join(repositoryDirectory, 'README.md');
console.log(`Copying ${readmeSourceFile} to ${readmeOutputFile}`);
cpSync(readmeSourceFile, readmeOutputFile);
