import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from './app/App';
import Links from './app/Links';
import Page404 from './app/Page404';

import './index.css';

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
const components = replacePattern(import.meta.glob('./app/samples/*/*.route.tsx', {eager: true, import: 'default'}));

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className="container p-3">
			<HashRouter>
				<Routes>
					<Route path="/" element={<App />}>
						{Object.entries(components).map(([path, component]) => (
							<Route key={path} path={path} element={React.createElement(component)} />
						))}
						<Route path="/" element={<Links links={Object.keys(components)} />}></Route>
						<Route path="*" element={<Page404 />}></Route>
					</Route>
				</Routes>
			</HashRouter>
		</div>
	</React.StrictMode>
);
