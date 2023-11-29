import type {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TEMPLATE_FILE, createNewTestApp, createNewTestRunner, migrateComponents} from '../test-setup-helper';
import {describe, expect, test, beforeEach} from 'vitest';

describe('pagination template migration', () => {
	let runner: SchematicTestRunner;
	let cliAppTree: UnitTestTree;

	async function runMigrationTest(oldFileContent: string, newFileContent: string) {
		cliAppTree.overwrite(TEMPLATE_FILE, oldFileContent);
		const tree = await migrateComponents(['pagination'], runner, cliAppTree);
		expect(tree.readContent(TEMPLATE_FILE)).toBe(newFileContent);
	}

	beforeEach(async () => {
		runner = createNewTestRunner();
		cliAppTree = await createNewTestApp(runner);
	});

	test('should update basic pagination', async () => {
		await runMigrationTest(
			`<ngb-pagination [collectionSize]="70" [(page)]="page" aria-label="Default pagination"></ngb-pagination>`,
			`<nav auPagination [auCollectionSize]="70" [(auPage)]="page" aria-label="Default pagination"></nav>`,
		);
	});

	test('should update self-closed pagination', async () => {
		await runMigrationTest(
			`<ngb-pagination [collectionSize]="70" [(page)]="page" aria-label="Default pagination"/>`,
			`<nav auPagination [auCollectionSize]="70" [(auPage)]="page" aria-label="Default pagination"></nav>`,
		);
	});

	test(`should leave a comment if ellipses, rotate or maxSize input was found`, async () => {
		await runMigrationTest(
			`<ngb-pagination [rotate]="true"/>`,
			`<!-- TODO ellipses, rotate and maxSize need to be migrated manually to use auPagesFactory. You may reference the migration guide at https://amadeusitgroup.github.io/AgnosUI/latest/angular/getting-started/migrate-from-ng-bootstrap --><nav auPagination [rotate]="true"></nav>`,
		);
		await runMigrationTest(
			`<ngb-pagination [ellipses]="true"/>`,
			`<!-- TODO ellipses, rotate and maxSize need to be migrated manually to use auPagesFactory. You may reference the migration guide at https://amadeusitgroup.github.io/AgnosUI/latest/angular/getting-started/migrate-from-ng-bootstrap --><nav auPagination [ellipses]="true"></nav>`,
		);
		await runMigrationTest(
			`<ngb-pagination [maxSize]="5"/>`,
			`<!-- TODO ellipses, rotate and maxSize need to be migrated manually to use auPagesFactory. You may reference the migration guide at https://amadeusitgroup.github.io/AgnosUI/latest/angular/getting-started/migrate-from-ng-bootstrap --><nav auPagination [maxSize]="5"></nav>`,
		);
	});

	test('should update pagination child templates', async () => {
		await runMigrationTest(
			`<ngb-pagination>
	<ng-template ngbPaginationPrevious>Prev</ng-template>
	<ng-template ngbPaginationNext>Next</ng-template>
</ngb-pagination>`,
			`<nav auPagination>
	<ng-template auPaginationPrevious>Prev</ng-template>
	<ng-template auPaginationNext>Next</ng-template>
</nav>`,
		);
	});

	test('should update pagination child templates with refs', async () => {
		await runMigrationTest(
			`<ngb-pagination>
	<ng-template ngbPaginationPrevious let-page="currentPage" let-disabled="disabled">Prev</ng-template>
	<ng-template ngbPaginationNumber let-page="currentPage" let-disabled="disabled" let-p>{{ getPageSymbol(p) }}</ng-template>
</ngb-pagination>`,
			`<nav auPagination>
	<ng-template auPaginationPrevious let-page="state.page" let-disabled="state.disabled">Prev</ng-template>
	<ng-template auPaginationNumber let-page="state.page" let-disabled="state.disabled" let-p="displayedPage">{{ getPageSymbol(p) }}</ng-template>
</nav>`,
		);
	});

	test('should update implicit ref, whatever the format', async () => {
		await runMigrationTest(
			`<ngb-pagination><ng-template ngbPaginationNumber let-p>{{ getPageSymbol(p) }}</ng-template></ngb-pagination>`,
			`<nav auPagination><ng-template auPaginationNumber let-p="displayedPage">{{ getPageSymbol(p) }}</ng-template></nav>`,
		);
		await runMigrationTest(
			`<ngb-pagination><ng-template ngbPaginationNumber let-p="">{{ getPageSymbol(p) }}</ng-template></ngb-pagination>`,
			`<nav auPagination><ng-template auPaginationNumber let-p="displayedPage">{{ getPageSymbol(p) }}</ng-template></nav>`,
		);
		await runMigrationTest(
			`<ngb-pagination><ng-template ngbPaginationNumber let-p="$implicit">{{ getPageSymbol(p) }}</ng-template></ngb-pagination>`,
			`<nav auPagination><ng-template auPaginationNumber let-p="displayedPage">{{ getPageSymbol(p) }}</ng-template></nav>`,
		);
	});

	test('should update pages refs', async () => {
		await runMigrationTest(
			`<ngb-pagination><ng-template ngbPaginationPages let-page let-pages="pages" let-disabled="disabled"></ng-template></ngb-pagination>`,
			`<nav auPagination><ng-template auPaginationPages let-page="state.page" let-pages="state.pages" let-disabled="state.disabled"></ng-template></nav>`,
		);
	});
});
