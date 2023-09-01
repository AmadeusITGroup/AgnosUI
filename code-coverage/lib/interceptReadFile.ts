import fs from 'fs';
import util from 'util';
import {normalize} from 'path';
import {fileURLToPath} from 'url';
import {instrumentFile, canInstrument} from './instrument';
import {filter} from './filter';
import {intercept} from './interceptSwitch';

const postProcessReadFile = (filePath: string | URL, code: string | Buffer) => {
	if (typeof filePath === 'object') {
		filePath = fileURLToPath(filePath);
	}
	const normalizedFilePath = normalize(filePath);
	if (intercept() && canInstrument(normalizedFilePath) && filter(normalizedFilePath)) {
		const isBuffer = Buffer.isBuffer(code);
		if (isBuffer) {
			code = code.toString('utf8');
		}
		try {
			code = instrumentFile(code as string, normalizedFilePath);
		} catch (error) {
			console.log(`Error while instrumenting ${normalizedFilePath}:`, error);
			throw error;
		}
		if (isBuffer) {
			code = Buffer.from(code, 'utf8');
		}
	}
	return code;
};

// override readFileSync to provide instrumented files:
const trueReadFileSync = fs.readFileSync;
fs.readFileSync = (...args) => {
	return postProcessReadFile(args[0] as string | URL, trueReadFileSync(...args)) as any;
};

// override fs.promises.readFile to provide instrumented files:
const truePromisesReadFile = fs.promises.readFile;
fs.promises.readFile = async (...args) => {
	return postProcessReadFile(args[0] as string | URL, await truePromisesReadFile(...args)) as any;
};

// override readFile to provide instrumented files:
const trueReadFile = fs.readFile;
const newReadFile = (...args: Parameters<typeof trueReadFile>) => {
	const cbIndex = args.length - 1;
	const trueCb = args[cbIndex] as any;
	args[cbIndex] = (err: any, result: any) => {
		if (err) {
			trueCb(err, result);
		} else {
			trueCb(err, postProcessReadFile(args[0] as string | URL, result));
		}
	};
	trueReadFile(...args);
};
(newReadFile as any)[util.promisify.custom] = fs.promises.readFile;
fs.readFile = newReadFile as any;
