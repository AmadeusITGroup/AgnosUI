/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {RatingTemplateMigrator} from './components/rating/rating-template';
import {AccordionTemplateMigrator} from './components/accordion/accordion-template';
import {AlertTemplateMigrator} from './components/alert/alert-template';
import {ProgressbarTemplateMigrator} from './components/progressbar/progressbar-template';
import {PaginationTemplateMigrator} from './components/pagination/pagination-template';
import type {ComponentMigrator} from '../../utilities/migration';

export const COMPONENTS = ['accordion', 'alert', 'pagination', 'progressbar', 'rating'];

/** Contains the migrators to migrate a single component. */
export const MIGRATORS: ComponentMigrator[] = [
	{
		component: 'accordion',
		template: new AccordionTemplateMigrator(),
		importMapping: {
			NgbAccordionModule: 'AgnosUIAngularModule',
		},
		wontTouch: ['NgbAccordionConfig'],
	},
	{
		component: 'alert',
		template: new AlertTemplateMigrator(),
		importMapping: {
			NgbAlert: 'AlertComponent',
			NgbAlertModule: 'AgnosUIAngularModule',
		},
		wontTouch: ['NgbAlertConfig'],
	},
	{
		component: 'pagination',
		template: new PaginationTemplateMigrator(),
		importMapping: {
			NgbPagination: 'PaginationComponent',
			NgbPaginationModule: 'AgnosUIAngularModule',
		},
		wontTouch: ['NgbPaginationConfig'],
	},
	{
		component: 'progressbar',
		template: new ProgressbarTemplateMigrator(),
		importMapping: {
			NgbProgressbar: 'ProgressbarComponent',
			NgbProgressbarModule: 'AgnosUIAngularModule',
		},
		wontTouch: ['NgbProgressbarConfig'],
	},
	{
		component: 'rating',
		template: new RatingTemplateMigrator(),
		importMapping: {
			NgbRating: 'RatingComponent',
			NgbRatingModule: 'AgnosUIAngularModule',
		},
		wontTouch: ['NgbRatingConfig'],
	},
];
