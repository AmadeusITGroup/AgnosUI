import type {Routes} from '@angular/router';
import {links, LinksComponent} from './links.component';

const context = import.meta.webpackContext?.('./', {
	regExp: /[^/]*\.route\.ts$/,
});

const componentRegExp = /samples\/([^/]*)\/([^/]*).route\.ts$/;
function replacePattern(webpackContext: __WebpackModuleApi.RequireContext) {
	const directComponents: Record<string, any> = {};
	const keys = webpackContext.keys();
	for (const key of keys) {
		const matches = key.match(componentRegExp);
		if (matches) {
			directComponents[`${matches[1]}/${matches[2]}`.toLowerCase()] = key;
		}
	}
	return directComponents;
}
const components = replacePattern(context!);

export const ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: LinksComponent,
		providers: [{provide: links, useValue: Object.keys(components)}],
	},
	...Object.entries(components).map(([path, component]) => {
		return {path, loadComponent: async () => (await context!(component)).default};
	}),
];
