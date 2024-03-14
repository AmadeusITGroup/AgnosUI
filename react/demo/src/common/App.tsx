import {Outlet, RouterProvider, createHashRouter} from 'react-router-dom';

import '@agnos-ui/common/demo.scss';
import '@agnos-ui/common/samples/links.scss';

const App = (props: {components: Record<string, any>}) => {
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
	const components = replacePattern(props.components);
	const lazyLinks = async () => {
		const Links = (await import('../common/Links')).default;
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
			element: <Outlet />,
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
					lazy: async () => ({Component: ((await import('../common/Page404')) as any).default}),
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
