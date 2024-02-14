import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import App from './app/App';

import '@agnos-ui/style-bootstrap/scss/agnosui.scss';

const componentRegExp = /samples\/([^/]*)\/([^/]*).route.tsx/;
function replacePattern(components: Record<string, any>) {
	const directComponents: Record<string, any> = {};
	for (const [key, component] of Object.entries(components)) {
		const matches = key.match(componentRegExp);
		if (matches) {
			directComponents[`${matches[1]}/${matches[2]}`.toLowerCase()] = component;
		}
	}
	return directComponents;
}
const components = replacePattern(import.meta.glob('./app/samples/*/*.route.tsx', {import: 'default'}));

const lazyLinks = async () => {
	const Links = (await import('./app/Links')).default;
	return {
		Component: () => Links({links: Object.keys(components)}),
	};
};

const router = createHashRouter([
	{
		path: '/',
		lazy: lazyLinks,
	},
	{
		path: '*',
		element: <App />,
		children: [
			{path: '', lazy: lazyLinks},
			...Object.entries(components).map(([path, component]) => ({
				path,
				lazy: async () => {
					const Component = await component();
					if (window.parent) {
						window.parent.postMessage({type: 'sampleload'});
					}
					return {Component};
				},
			})),
			{
				path: '*',
				lazy: async () => ({Component: ((await import('./app/Page404')) as any).default}),
			},
		],
	},
]);

window.addEventListener('storage', (event) => {
	if (event.key === 'theme') {
		if (event.newValue) {
			document.documentElement.setAttribute('data-bs-theme', event.newValue);
		}
	}
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className="container p-3">
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>,
);
