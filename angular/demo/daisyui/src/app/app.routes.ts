import type {Routes} from '@angular/router';
import {links} from './links';
import {LINKS, SAMPLE_ROUTES} from './generated/samples.route';

export const ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./links.component'),
		providers: [{provide: links, useValue: LINKS}],
	},
	...SAMPLE_ROUTES,
];
