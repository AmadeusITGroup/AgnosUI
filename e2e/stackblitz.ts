import {mkdir, mkdtemp, readdir, rm, writeFile} from 'fs/promises';
import type {AddressInfo} from 'net';
import {tmpdir} from 'os';
import {createServer} from 'net';
import {dirname, join} from 'path';
import {createBaseFrameworkProcessors, prepareStackblitzProject, samples} from '../demo/stackblitz/index';
import pkg from '../package.json' assert {type: 'json'};
import type {FixtureOptions} from './fixture';
import type {Logger} from './processUtils';
import {runAndWaitForURL, runProcess} from './processUtils';

const version = pkg.version;
let tempFolder: string;
let npmCache: string;

const frameworkProcessors = createBaseFrameworkProcessors();

const initTempFolder = async () => {
	tempFolder = await mkdtemp(join(tmpdir(), 'agnosui-stackblitz-tests-'));
	await mkdir(tempFolder, {recursive: true});
	npmCache = join(tempFolder, '.npmcache');
};
let initTempFolderPromise: Promise<void> | undefined;

export const cleanTempFolder = async () => {
	if (initTempFolderPromise) {
		initTempFolderPromise = undefined;
		console.log(`Cleaning temp folder ${tempFolder}`);
		await rm(tempFolder, {recursive: true, force: true});
	}
};

const getFreePort = async () => {
	const server = createServer();
	return await new Promise<number>((resolve, reject) =>
		server.on('error', reject).listen(0, '127.0.0.1', () => {
			const port = (server.address() as AddressInfo).port;
			server.close(() => resolve(port));
		}),
	);
};

const freePoolFolders: string[] = [];
let counter = 0;

const getPoolFolder = async () => {
	if (freePoolFolders.length === 0) {
		if (!initTempFolderPromise) {
			initTempFolderPromise = initTempFolder();
		}
		await initTempFolderPromise;
		await mkdir(npmCache, {recursive: true});
		counter++;
		const folder = join(tempFolder, `stackblitz-${counter}`);
		await mkdir(folder);
		return folder;
	}
	return freePoolFolders.shift()!;
};

export const useStackblitz = async (
	framework: NonNullable<FixtureOptions['framework']>,
	sampleKey: NonNullable<FixtureOptions['sampleKey']>,
	verdaccioUrl: string,
	use: (url: string) => Promise<void>,
	abortSignal: AbortSignal,
	logger: Logger,
) => {
	const sample = samples[sampleKey];
	if (!sample) {
		throw new Error(`Sample ${sampleKey} not found`);
	}
	const {project} = await prepareStackblitzProject(sample, framework, frameworkProcessors);
	if (abortSignal.aborted) return;
	const folder = await getPoolFolder();
	try {
		logger.log(`Creating stackblitz project for ${framework} ${sampleKey} in ${folder}`);
		await writeFile(join(folder, '.npmrc'), `@agnos-ui:registry=${verdaccioUrl}\n`);
		let packageJson: any;
		for (let [filePath, fileContent] of Object.entries(project.files)) {
			if (filePath === 'package.json') {
				packageJson = JSON.parse(fileContent);
				packageJson.devDependencies[`@agnos-ui/${framework}-${sample.style === 'bootstrap' ? 'bootstrap' : 'headless'}`] = version;
				if (framework === 'svelte') {
					packageJson.devDependencies['@agnos-ui/svelte-preprocess'] = version;
				}
				fileContent = JSON.stringify(packageJson, null, '\t');
			}
			const fullFilePath = join(folder, filePath);
			await mkdir(dirname(fullFilePath), {recursive: true});
			await writeFile(fullFilePath, fileContent);
		}

		await runProcess(
			`Installation of ${framework} ${sampleKey} dependencies`,
			['npm', 'install', '--prefer-offline', '--no-audit'],
			abortSignal,
			logger,
			{
				cwd: folder,
				env: {...process.env, NPM_CONFIG_CACHE: npmCache},
			},
		);

		await runProcess(`Checking build of ${framework} ${sampleKey}`, ['npm', 'run', 'build'], abortSignal, logger, {cwd: folder});

		const startCommand = packageJson.scripts.preview ? ['npm', 'run', 'preview'] : ['npm', 'run', 'start'];
		const port = await getFreePort();
		const url = `http://localhost:${port}/`;
		startCommand.push('--', `--port=${port}`);

		await runAndWaitForURL(`Server for ${framework} ${sampleKey}`, startCommand, abortSignal, logger, url, use, {cwd: folder});
	} finally {
		const files = await readdir(folder);
		await Promise.all(files.filter((file) => file !== 'node_modules').map((file) => rm(join(folder, file), {recursive: true})));
		freePoolFolders.push(folder);
	}
};
