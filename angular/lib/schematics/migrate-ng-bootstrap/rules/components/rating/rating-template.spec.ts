import type {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TEMPLATE_FILE, createNewTestApp, createNewTestRunner, migrateComponents} from '../test-setup-helper';
import {describe, expect, test, beforeEach} from 'vitest';

describe('rating template migration', () => {
	let runner: SchematicTestRunner;
	let cliAppTree: UnitTestTree;

	async function runMigrationTest(oldFileContent: string, newFileContent: string) {
		cliAppTree.overwrite(TEMPLATE_FILE, oldFileContent);
		const tree = await migrateComponents(['rating'], runner, cliAppTree);
		expect(tree.readContent(TEMPLATE_FILE)).toBe(newFileContent);
	}

	beforeEach(async () => {
		runner = createNewTestRunner();
		cliAppTree = await createNewTestApp(runner);
	});

	test('should update basic rating', async () => {
		await runMigrationTest(`<ngb-rating></ngb-rating>`, `<div [auRating]></div>`);
	});

	test('should add an end tag if the rating component was self-closed', async () => {
		await runMigrationTest(`<ngb-rating/>`, `<div [auRating]></div>`);
	});

	test('should add auRating if only the output was present', async () => {
		await runMigrationTest(
			`<ngb-rating (rateChange)="updateRating($event)"></ngb-rating>`,
			`<div [auRating] (auRatingChange)="updateRating($event)"></div>`,
		);
	});

	test('should update rate input if only input is present', async () => {
		await runMigrationTest(`<ngb-rating [rate]="2"></ngb-rating>`, `<div [auRating]="2"></div>`);
	});

	test('should update double-binding rate', async () => {
		await runMigrationTest(`<ngb-rating [(rate)]="rate"></ngb-rating>`, `<div [(auRating)]="rate"></div>`);
	});

	test(`should update inputs and outputs`, async () => {
		await runMigrationTest(
			`<ngb-rating [(rate)]="selected" (hover)="hovered=$event" (leave)="hovered=0" [readonly]="readonly" [ariaValueText]="ariaValueFn"></ngb-rating>`,
			`<div [(auRating)]="selected" (auHover)="hovered=$event" (auLeave)="hovered=0" [auReadonly]="readonly" [auAriaValueTextFn]="ariaValueFn"></div>`,
		);
	});

	test(`should update starTemplate`, async () => {
		await runMigrationTest(
			`<ng-template #t></ng-template><ngb-rating [(rate)]="selected" [starTemplate]="t"/>`,
			`<ng-template #t></ng-template><div [(auRating)]="selected" [auSlotStar]="t"></div>`,
		);
	});

	test(`should add auRatingStar to the first child ng-template found`, async () => {
		await runMigrationTest(
			`<ngb-rating><ng-template><span class="star"></span></ng-template></ngb-rating>`,
			`<div [auRating]><!-- TODO customizing the rating star requires the import of RatingStarDirective, please check your component / module --><ng-template auRatingStar><span class="star"></span></ng-template></div>`,
		);
	});
});
