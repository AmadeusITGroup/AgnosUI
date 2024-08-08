import {randomUUID} from 'crypto';
import express from 'express';
import type {Server} from 'http';
import type {AddressInfo} from 'net';
import {join} from 'path';
import type {Logger} from './processUtils';
import {isURLReady, runAndWaitForURL, runProcess} from './processUtils';
import type {Frameworks, Project, SimpleSampleInfo} from './types';

interface RequestBody {
	project?: Project;
	framework?: Frameworks;
	sampleKey?: string;
	sampleInfo?: SimpleSampleInfo;
}

const isPreview = process.env.PREVIEW === 'true';
const includeCoverage = process.env.COVERAGE === 'true';
const coverageSuffix = includeCoverage ? ':coverage' : '';
const previewOrDev = isPreview ? 'preview' : 'dev';

interface RunnableOperation {
	getLogs: () => string;
	ensureReady: () => void | Promise<void>;
	ensureExited: () => void | Promise<void>;
	shared: boolean;
}

interface RunnableServer extends RunnableOperation {
	url: string | undefined; // url can be undefined until the server is ready
}

interface StaticServerConfig<T extends string> {
	serverKey: T;
	command: string[];
	url: string;
	urlReadyPath: string;
}

const createRunnableOperation = (
	fn: (abortSignal: AbortSignal, logger: Logger, ready: () => Promise<void>) => Promise<void>,
	shared: boolean,
): RunnableOperation => {
	const abortController = new AbortController();
	const abortSignal = abortController.signal;
	let exitPromise: Promise<void> | undefined;
	let readyPromiseResolve: undefined | (() => void);
	let readyPromiseReject: undefined | ((error: any) => void);
	const readyPromise = new Promise<void>((resolve, reject) => {
		readyPromiseResolve = resolve;
		readyPromiseReject = reject;
	});
	let logs = '';
	const logger = {
		log: (...messages: string[]) => {
			const allMessages = messages.join('\n');
			logs += allMessages + '\n';
			console.log(allMessages);
		},
	};
	return {
		getLogs: () => logs,
		ensureReady: async () => {
			if (!exitPromise && !abortSignal.aborted) {
				exitPromise = (async () => {
					try {
						await fn(abortSignal, logger, async () => {
							if (!abortSignal.aborted) {
								if (!readyPromiseResolve) {
									throw new Error('ready called multiple times');
								}
								readyPromiseResolve();
								readyPromiseResolve = undefined;
								readyPromiseReject = undefined;
								await new Promise((resolve) => {
									abortSignal.addEventListener('abort', resolve);
								});
							}
						});
						readyPromiseResolve?.();
					} catch (error) {
						readyPromiseReject?.(error);
						readyPromiseResolve = undefined;
						readyPromiseReject = undefined;
					}
				})();
			}
			await readyPromise;
		},
		ensureExited: async () => {
			abortController.abort();
			try {
				await exitPromise;
			} catch (_) {
				// ignore errors
			}
		},
		shared,
	};
};

const createRunnableServer = (
	fn: (useUrl: (url: string) => Promise<void>, abortSignal: AbortSignal, logger: Logger) => Promise<void>,
	shared: boolean,
): RunnableServer => {
	const runnableOperation = createRunnableOperation(async (abortSignal, logger, ready) => {
		let missingCallToReady = true;
		await fn(
			async (url) => {
				missingCallToReady = false;
				res.url = url;
				await ready();
			},
			abortSignal,
			logger,
		);
		if (missingCallToReady) {
			throw new Error('Server exited before being ready');
		}
	}, shared);
	const res: RunnableServer = {
		...runnableOperation,
		url: undefined,
	};
	return res;
};

const createStaticServer = <T extends string>({serverKey, command, url, urlReadyPath}: StaticServerConfig<T>): RunnableServer =>
	createRunnableServer(async (useUrl, abortSignal, logger) => {
		const urlToCheck = `${url}${urlReadyPath}`;
		if (await isURLReady(urlToCheck, abortSignal)) {
			// server is already running
			logger.log(`Reusing existing server ${serverKey}`);
			return await useUrl(url);
		}
		if (abortSignal.aborted) {
			return;
		}
		await runAndWaitForURL(`Server ${serverKey}`, command, abortSignal, logger, urlToCheck, () => useUrl(url));
	}, true);

const createStaticServers = <T extends string[]>(
	...servers: {[K in keyof T]: StaticServerConfig<T[K]>}
): {[K in number & keyof T as T[K]]: RunnableServer} => {
	const res: any = {};
	for (const server of servers) {
		res[server.serverKey] = createStaticServer(server);
	}
	return res;
};

const createStackblitzBuild = (verdaccioServer: RunnableServer) => {
	let useStackblitz: (typeof import('./stackblitz'))['useStackblitz'] | undefined;
	const stackblitzServers = new Set<RunnableServer>();
	const stackblitzBuild = createRunnableOperation(async (abortSignal, logger, ready) => {
		await runProcess('Stackblitz build', ['npm', 'run', 'build'], abortSignal, logger, {
			cwd: join(import.meta.dirname, '../demo/stackblitz'),
		});
		let cleanTempFolder;
		({useStackblitz, cleanTempFolder} = await import('./stackblitz'));
		await ready();
		await cleanTempFolder();
	}, true);
	const ensureReady = async () => {
		await Promise.all([stackblitzBuild.ensureReady(), verdaccioServer.ensureReady()]);
	};
	const ensureExited = async () => {
		await Promise.all([...stackblitzServers].map((server) => server.ensureExited()));
		await stackblitzBuild.ensureExited();
	};
	return {
		...stackblitzBuild,
		ensureReady,
		ensureExited,
		createStackblitzServer: ({framework, sampleKey}: Required<Pick<RequestBody, 'framework' | 'sampleKey'>>) => {
			const server = createRunnableServer(async (useUrl, abortSignal, logger) => {
				stackblitzServers.add(server);
				try {
					await ensureReady();
					await useStackblitz!(framework, sampleKey, verdaccioServer.url!, useUrl, abortSignal, logger);
				} finally {
					stackblitzServers.delete(server);
				}
			}, false);
			return server;
		},
	};
};

export default async () => {
	const staticServers = createStaticServers(
		{
			serverKey: 'angularDemoDevBootstrap',
			command: ['npm', 'run', '-w', 'angular/demo', `dev:bootstrap${coverageSuffix}`],
			url: 'http://localhost:4200',
			urlReadyPath: '/angular/samples/bootstrap/',
		},
		{
			serverKey: 'angularDemoDevDaisyui',
			command: ['npm', 'run', '-w', 'angular/demo', `dev:daisyui${coverageSuffix}`],
			url: 'http://localhost:4201',
			urlReadyPath: '/angular/samples/daisyui/',
		},
		{
			serverKey: 'reactDemoDev',
			command: ['npm', 'run', '-w', 'react/demo', `dev${coverageSuffix}`],
			url: 'http://localhost:3000',
			urlReadyPath: '/react/samples/bootstrap/',
		},
		{
			serverKey: 'svelteDemoDev',
			command: ['npm', 'run', '-w', 'svelte/demo', `dev${coverageSuffix}`],
			url: 'http://localhost:3001',
			urlReadyPath: '/svelte/samples/bootstrap/',
		},
		{
			serverKey: 'demoSite',
			command: ['npm', 'run', '-w', 'demo', `${previewOrDev}${coverageSuffix}`],
			url: 'http://localhost:4000',
			urlReadyPath: '/',
		},
		{
			serverKey: 'angularSSR',
			command: ['npm', 'run', '-w', 'angular/ssr-app', previewOrDev],
			url: 'http://localhost:5000',
			urlReadyPath: '/',
		},
		{
			serverKey: 'reactSSR',
			command: ['npm', 'run', '-w', 'react/ssr-app', previewOrDev],
			url: 'http://localhost:5001',
			urlReadyPath: '/',
		},
		{
			serverKey: 'svelteSSR',
			command: ['npm', 'run', '-w', 'svelte/ssr-app', previewOrDev],
			url: 'http://localhost:5002',
			urlReadyPath: '/',
		},
		{
			serverKey: 'verdaccio',
			command: ['npm', 'run', '-w', 'verdaccio', 'verdaccio-server'],
			url: 'http://localhost:4873',
			urlReadyPath: '/',
		},
	);

	const stackblitzBuild = createStackblitzBuild(staticServers.verdaccio);

	const getRequiredOperationsAndURL = ({project, framework, sampleKey, sampleInfo}: RequestBody) => {
		let server: RunnableServer | undefined;
		let urlPath: string | undefined; // base URL to return, relative to server
		const requiredOperations = new Set<RunnableOperation>();
		switch (project) {
			case 'singlebrowser':
			case 'main': {
				urlPath = '/';
				if (framework) {
					if (sampleInfo) {
						urlPath = `/${framework}/samples/${sampleInfo.style}/#/${sampleInfo.componentName.toLowerCase()}/${sampleInfo.sampleName.toLowerCase()}`;
					} else {
						urlPath = `/${framework}/samples/bootstrap/`;
					}
				}
				if (isPreview) {
					server = staticServers.demoSite;
				} else {
					switch (framework) {
						case 'angular':
							if (sampleInfo?.style === 'daisyui') {
								server = staticServers.angularDemoDevDaisyui;
							} else {
								server = staticServers.angularDemoDevBootstrap;
							}
							break;
						case 'react':
							server = staticServers.reactDemoDev;
							break;
						case 'svelte':
							server = staticServers.svelteDemoDev;
							break;
					}
				}
				break;
			}
			case 'demo':
				server = staticServers.demoSite;
				if (!isPreview) {
					requiredOperations.add(staticServers.angularDemoDevBootstrap);
					requiredOperations.add(staticServers.angularDemoDevDaisyui);
					requiredOperations.add(staticServers.reactDemoDev);
					requiredOperations.add(staticServers.svelteDemoDev);
				}
				urlPath = '/';
				break;
			case 'ssr':
				if (framework) {
					server = staticServers[`${framework}SSR`];
					urlPath = '/';
				}
				break;
			case 'stackblitz':
				if (framework && sampleKey && sampleInfo) {
					requiredOperations.add(stackblitzBuild);
					requiredOperations.add(staticServers.verdaccio);
					server = stackblitzBuild.createStackblitzServer({framework, sampleKey});
					urlPath = `/#/${sampleInfo.componentName.toLowerCase()}/${sampleInfo.sampleName.toLowerCase()}`;
				}
				break;
		}
		if (server) {
			requiredOperations.add(server);
		}
		return {requiredOperations, server, urlPath};
	};

	const runningOperations = new Set<RunnableOperation>();
	const stopOperationsIds = new Map<string, RunnableOperation[]>();

	const stopOperations = async (id: string) => {
		const operations = stopOperationsIds.get(id);
		if (operations) {
			stopOperationsIds.delete(id);
			await Promise.all(
				operations.map(async (operation) => {
					await operation.ensureExited();
					runningOperations.delete(operation);
				}),
			);
		}
		return [];
	};

	const app = express();
	app.use(express.json());

	app.post('/', async (req, res) => {
		let deleteId: string | undefined;
		let unsharedOperations: RunnableOperation[] | undefined;
		try {
			const {requiredOperations, server, urlPath} = getRequiredOperationsAndURL(req.body);
			unsharedOperations = [...requiredOperations].filter((operation) => !operation.shared);
			if (unsharedOperations.length > 0) {
				deleteId = randomUUID();
				stopOperationsIds.set(deleteId, unsharedOperations);
			}
			await Promise.all(
				[...requiredOperations].map(async (operation) => {
					runningOperations.add(operation);
					await operation.ensureReady();
				}),
			);
			res.json({
				url: urlPath ? new URL(urlPath, server?.url).href : undefined,
				deleteURL: deleteId ? `/${deleteId}` : undefined,
			});
		} catch (error: any) {
			res.status(500).json({error: `${error}`, logs: unsharedOperations?.map((operation) => operation.getLogs())});
			if (deleteId) {
				await stopOperations(deleteId);
			}
		}
	});

	app.delete('/:deleteId', async (req, res) => {
		try {
			await stopOperations(req.params.deleteId);
			res.json({});
		} catch (error: any) {
			res.status(500).json({error: `${error}`});
		}
	});

	const server = await new Promise<Server>((resolve, reject) => {
		const server = app.listen(0, '127.0.0.1', () => resolve(server)).on('error', reject);
	});
	const port = (server.address() as AddressInfo).port;
	const serverManagerURL = `http://127.0.0.1:${port}`;
	process.env.SERVER_MANAGER_URL = serverManagerURL;
	console.log(`Server manager was started on ${serverManagerURL}`);
	return async () => {
		console.log('Closing server manager...');
		await new Promise((resolve) => {
			server.close(resolve);
			server.closeAllConnections();
		});
		await Promise.all(
			[...runningOperations.values()].map(async (server) => {
				await server.ensureExited();
			}),
		);
		console.log('Server manager closed');
	};
};
