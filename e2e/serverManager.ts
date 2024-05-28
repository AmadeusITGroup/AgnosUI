import {spawn} from 'child_process';
import express from 'express';
import type {Server} from 'http';
import type {AddressInfo} from 'net';
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
const allServers = {
	angularDemoDevBootstrap: {
		command: ['npm', 'run', '-w', 'angular/demo', `dev:bootstrap${coverageSuffix}`],
		url: 'http://localhost:4200',
		urlReadyPath: '/angular/samples/bootstrap/',
	},
	angularDemoDevDaisyui: {
		command: ['npm', 'run', '-w', 'angular/demo', `dev:daisyui${coverageSuffix}`],
		url: 'http://localhost:4201',
		urlReadyPath: '/angular/samples/daisyui/',
	},
	reactDemoDev: {
		command: ['npm', 'run', '-w', 'react/demo', `dev${coverageSuffix}`],
		url: 'http://localhost:3000',
		urlReadyPath: '/react/samples/bootstrap/',
	},
	svelteDemoDev: {
		command: ['npm', 'run', '-w', 'svelte/demo', `dev${coverageSuffix}`],
		url: 'http://localhost:3001',
		urlReadyPath: '/svelte/samples/bootstrap/',
	},
	demoSite: {
		command: ['npm', 'run', '-w', 'demo', `${previewOrDev}${coverageSuffix}`],
		url: 'http://localhost:4000',
		urlReadyPath: '/',
	},
	angularSSR: {
		command: ['npm', 'run', '-w', 'angular/ssr-app', previewOrDev],
		url: 'http://localhost:5000',
		urlReadyPath: '/',
	},
	reactSSR: {
		command: ['npm', 'run', '-w', 'react/ssr-app', previewOrDev],
		url: 'http://localhost:5001',
		urlReadyPath: '/',
	},
	svelteSSR: {
		command: ['npm', 'run', '-w', 'svelte/ssr-app', previewOrDev],
		url: 'http://localhost:5002',
		urlReadyPath: '/',
	},
};
type ServerKey = keyof typeof allServers;

const getNeededServersAndURL = ({project, framework, sampleInfo}: RequestBody) => {
	let url: string | undefined;
	const servers: ServerKey[] = [];
	switch (project) {
		case 'singlebrowser':
		case 'main': {
			let urlPath = '/';
			if (framework) {
				if (sampleInfo) {
					urlPath = `/${framework}/samples/${sampleInfo.style}/#/${sampleInfo.componentName.toLowerCase()}/${sampleInfo.sampleName.toLowerCase()}`;
				} else {
					urlPath = `/${framework}/samples/bootstrap/`;
				}
			}
			if (isPreview) {
				servers.push('demoSite');
			} else {
				switch (framework) {
					case 'angular':
						if (sampleInfo?.style === 'daisyui') {
							servers.push('angularDemoDevDaisyui');
						} else {
							servers.push('angularDemoDevBootstrap');
						}
						break;
					case 'react':
						servers.push('reactDemoDev');
						break;
					case 'svelte':
						servers.push('svelteDemoDev');
						break;
				}
			}
			url = `${allServers[servers[0]].url}${urlPath}`;
			break;
		}
		case 'demo':
			servers.push('demoSite');
			if (!isPreview) {
				servers.push('angularDemoDevBootstrap', 'angularDemoDevDaisyui', 'reactDemoDev', 'svelteDemoDev');
			}
			url = allServers.demoSite.url;
			break;
		case 'ssr':
			if (framework) {
				const server: ServerKey = `${framework}SSR`;
				servers.push(server);
				url = allServers[server].url;
			}
			break;
	}
	return {servers, url};
};

const isURLReady = async (url: string, signal: AbortSignal) => {
	const abortController = new AbortController();
	const listener = () => abortController.abort();
	signal.addEventListener('abort', listener);
	try {
		const res = await fetch(url, {signal: abortController.signal});
		await res.body?.cancel();
		return res.ok;
	} catch (error) {
		return false;
	} finally {
		signal.removeEventListener('abort', listener);
	}
};

const startServer = async (serverKey: ServerKey, abortSignal: AbortSignal) => {
	const serverInfo = allServers[serverKey];
	const url = `${serverInfo.url}${serverInfo.urlReadyPath}`;
	if (await isURLReady(url, abortSignal)) {
		// server is already running
		console.log(`Reusing existing server ${serverKey}`);
		return;
	}
	if (abortSignal.aborted) {
		return;
	}
	console.log(`Starting server ${serverKey}`);
	const isWindows = process.platform === 'win32';
	let processExited = false;
	const proc = spawn(serverInfo.command[0], serverInfo.command.slice(1), {
		shell: isWindows,
		stdio: 'inherit',
		detached: !isWindows,
	});

	const onAbort = () => {
		if (proc.pid != null) {
			if (isWindows) {
				spawn('taskkill', ['/pid', `${proc.pid}`, '/t', '/f'], {stdio: 'inherit'});
			} else if (proc.pid != null) {
				process.kill(-proc.pid, 'SIGINT');
			}
		}
	};

	abortSignal.addEventListener('abort', onAbort);

	const procClose = new Promise<void>((resolve) =>
		proc.on('close', (code, signal) => {
			processExited = true;
			abortSignal.removeEventListener('abort', onAbort);
			console.error(`Server ${serverKey} exited with ${code ? `code ${code}` : `signal ${signal}`}`);
			resolve();
		}),
	);

	proc.on('error', (error) => {
		console.error(`Failed to start server ${serverKey}: ${error}`);
	});
	let urlReady = false;
	while (!urlReady && !abortSignal.aborted) {
		if (processExited) {
			throw new Error(`Server ${serverKey} exited before being ready`);
		}
		urlReady = await isURLReady(url, abortSignal);
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
	console.log(`Server ${serverKey} is ready`);
	return {
		exited: procClose,
	};
};

export default async () => {
	const serversStatus = new Map<ServerKey, Promise<void | {exited: Promise<void>}>>();
	const abortController = new AbortController();

	const ensureServerRuns = async (serverKey: ServerKey) => {
		let status = serversStatus.get(serverKey);
		if (!status) {
			status = startServer(serverKey, abortController.signal);
			serversStatus.set(serverKey, status);
		}
		await status;
	};

	const app = express();
	app.use(express.json());

	app.post('/', async (req, res) => {
		try {
			const {servers, url} = getNeededServersAndURL(req.body);
			await Promise.all(servers.map(ensureServerRuns));
			res.json({url});
		} catch (error) {
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
		abortController.abort();
		console.log('Closing server manager...');
		await new Promise((resolve) => {
			server.close(resolve);
			server.closeAllConnections();
		});
		await Promise.all([...serversStatus.values()].map(async (status) => await (await status)?.exited));
		console.log('Server manager closed');
	};
};
