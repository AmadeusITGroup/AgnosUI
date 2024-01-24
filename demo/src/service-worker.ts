/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

import {build, files, prerendered, version} from '$service-worker';

const CACHE_PREFIX = `cache-${self.registration.scope}-`;
const CACHE = `${CACHE_PREFIX}${version}`;

const ASSETS = [...build.map((file) => file.replace(/\/index\.html$/, '/')), ...prerendered, ...files];

const hashRegExp = /[.-]\w{8,}\.\w{2,4}$/;
const hasHash = (asset: string) => hashRegExp.test(asset);

self.addEventListener('install', (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE);
			await Promise.all(
				ASSETS.filter(hasHash).map(async (url) => {
					const response = await caches.match(url);
					if (response?.ok) {
						await cache.put(url, response);
					}
				}),
			);
			await self.skipWaiting();
		})(),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			await self.clients.claim();
			await Promise.all((await caches.keys()).filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE).map((key) => caches.delete(key)));
		})(),
	);
});

self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);
	if (event.request.method === 'GET' && ASSETS.includes(url.pathname)) {
		event.respondWith(
			(async () => {
				const cache = await caches.open(CACHE);
				const response = await cache.match(url.pathname);
				if (response) {
					return response;
				} else {
					await cache.add(url.pathname);
					return (await cache.match(url.pathname))!;
				}
			})(),
		);
	}
});
