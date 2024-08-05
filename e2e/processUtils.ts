import type {SpawnOptions} from 'child_process';
import {spawn} from 'child_process';
import type {Readable} from 'stream';
import stripAnsi from 'strip-ansi';

export interface Logger {
	log: (...messages: string[]) => void;
}

export const isURLReady = async (url: string, signal: AbortSignal) => {
	const abortController = new AbortController();
	const listener = () => abortController.abort();
	signal.addEventListener('abort', listener);
	try {
		const res = await fetch(url, {signal: abortController.signal});
		await res.body?.cancel();
		return res.ok;
	} catch (_) {
		return false;
	} finally {
		signal.removeEventListener('abort', listener);
	}
};

const collectOutput = (prefix: string, stream: Readable, logger: Logger) => {
	let data = '';
	const prependPrefix = (line: string) => `${prefix}${line}`;
	stream.on('data', (chunk) => {
		data += stripAnsi(chunk.toString('utf8'));
		const lines = data.split('\n');
		data = lines.pop()!;
		logger.log(...lines.map(prependPrefix));
	});
	stream.on('end', () => {
		if (data) {
			logger.log(prependPrefix(data));
			data = '';
		}
	});
};

export const runProcess = (processName: string, command: string[], abortSignal: AbortSignal, logger: Logger, options?: SpawnOptions) =>
	new Promise<void>((resolve, reject) => {
		if (abortSignal.aborted) throw new Error('Aborted');
		const isWindows = process.platform === 'win32';
		const proc = spawn(command[0], command.slice(1), {
			shell: isWindows,
			stdio: 'pipe',
			...options,
			detached: !isWindows,
		});
		const prefix = `[${proc.pid}] `;
		logger.log(`${prefix}${processName} started with command: ${command.join(' ')}`);
		collectOutput(prefix, proc.stdout!, logger);
		collectOutput(prefix, proc.stderr!, logger);
		const onAbort = () => {
			if (proc.pid != null) {
				if (process.platform === 'win32') {
					spawn('taskkill', ['/pid', `${proc.pid}`, '/t', '/f'], {stdio: 'inherit'});
				} else if (proc.pid != null) {
					process.kill(-proc.pid, 'SIGINT');
				}
			}
		};
		abortSignal.addEventListener('abort', onAbort);
		proc
			.on('close', (code, signal) => {
				logger.log(`${prefix}${processName} exited with ${code != null ? `code ${code}` : `signal ${signal}`}`);
				abortSignal.removeEventListener('abort', onAbort);
				if (code === 0) {
					resolve();
				} else {
					reject(new Error(`${processName} failed with code ${code}`));
				}
			})
			.on('error', (error) => {
				logger.log(`${prefix}${processName} failed to start: ${error}`);
			});
	});

export const runAndWaitForURL = async (
	processName: string,
	command: string[],
	abortSignal: AbortSignal,
	logger: Logger,
	urlToCheck: string,
	ready: (url: string) => Promise<void>,
	options?: SpawnOptions,
) => {
	let processExited = false;
	const processExit = runProcess(processName, command, abortSignal, logger, options).finally(() => {
		processExited = true;
	});
	await Promise.race([
		processExit,
		(async () => {
			let urlReady = false;
			while (!urlReady && !abortSignal.aborted && !processExited) {
				urlReady = await isURLReady(urlToCheck, abortSignal);
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
			if (urlReady) {
				logger.log(`${processName} is ready`);
				await ready(urlToCheck);
			}
		})(),
	]);
	await processExit;
};
