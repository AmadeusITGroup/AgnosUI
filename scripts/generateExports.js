import {dirname, join, relative} from 'path';
import {existsSync, promises} from 'fs';
import {glob} from 'glob';
import os from 'os';

const __dirname = import.meta.dirname;

const pathRegExp = /\\/g;
const normalizePath = (str) => str.replace(pathRegExp, '/');

const parallel = Math.ceil(os.cpus().length / 2);

const worker = async (tasks, initialIndex) => {
	let i = initialIndex;
	while (i < tasks.length) {
		await tasks[i]();
		i += parallel;
	}
};

const mkdirIfNotExists = async (generationFolder, file) => {
	const fileDir = dirname(join(generationFolder, file));
	if (!existsSync(fileDir)) {
		await promises.mkdir(fileDir, {recursive: true});
	}
};

const generateExports = async (destination, source, dependencyPkg) => {
	if (!destination) {
		throw new Error('No destination folder provided');
	}
	if (!source) {
		throw new Error('No source folder provided');
	}
	if (!dependencyPkg) {
		throw new Error('No dependencyPkg provided');
	}
	const destFolder = join(__dirname, '..', destination, 'src');
	const generationFolder = join(destFolder, 'generated');
	await promises.rm(generationFolder, {recursive: true, force: true});
	const sourceFolder = join(__dirname, '..', source, 'src');

	const generationMap = new Map();

	const addGenerationFile = async (file, isDest = false) => {
		const importSubPath = file.slice(0, file.lastIndexOf('.'));
		generationMap.set(importSubPath, {import: importSubPath, isDest});
		await mkdirIfNotExists(generationFolder, file);
	};

	// first we go through all files in the source source folder
	const srcFiles = (
		await glob(`{generated/**,services,services/transitions,utils,.}/*.{ts,tsx}`, {
			cwd: sourceFolder,
			ignore: ['**/*.d.ts', '**/*.spec.ts', 'index.ts'],
		})
	).map(normalizePath);
	for (const srcFile of srcFiles) {
		// removing a potential generated/ prefix, as the lib will go through the generated folder of the headless
		const file = srcFile.startsWith('generated/') ? srcFile.substring(10) : srcFile;
		await addGenerationFile(file);
	}

	// then we check if there is any override present in the destination source folder
	const destFiles = (
		await glob(`{services,services/transitions,utils,.}/*.{ts,tsx}`, {
			cwd: destFolder,
			ignore: ['**/*.spec.ts', 'index.ts'],
		})
	).map(normalizePath);
	for (const destFile of destFiles) {
		await addGenerationFile(destFile, true);
	}

	const generationInfos = [...generationMap.values()];
	const tasks = generationInfos.map((generationInfo) => () => {
		const path = join(generationFolder, generationInfo.import) + '.ts';
		const importPrefix = generationInfo.isDest ? './' + normalizePath(relative(dirname(path), destFolder)) : dependencyPkg;
		return promises.writeFile(path, `export * from '${importPrefix}/${generationInfo.import}';`);
	});
	// final task, the index in the generation folder that will reference all the generated files
	tasks.push(() =>
		promises.writeFile(
			join(generationFolder, 'index.ts'),
			generationInfos.map((generationInfo) => {
				return `export * from './${generationInfo.import}';\n`;
			}),
		),
	);

	await Promise.all(
		Array(parallel)
			.fill(0)
			.map((_val, i) => worker(tasks, i)),
	);
};

generateExports(process.argv[2], process.argv[3], process.argv[4]);
