import type {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TEMPLATE_FILE, createNewTestApp, createNewTestRunner, migrateComponents} from '../test-setup-helper';
import {describe, expect, test, beforeEach} from 'vitest';

describe('accordion template migration', () => {
	let runner: SchematicTestRunner;
	let cliAppTree: UnitTestTree;

	async function runMigrationTest(oldFileContent: string, newFileContent: string) {
		cliAppTree.overwrite(TEMPLATE_FILE, oldFileContent);
		const tree = await migrateComponents(['accordion'], runner, cliAppTree);
		expect(tree.readContent(TEMPLATE_FILE)).toBe(newFileContent);
	}

	beforeEach(async () => {
		runner = createNewTestRunner();
		cliAppTree = await createNewTestApp(runner);
	});

	test('should update accordion main directive', async () => {
		await runMigrationTest(`<div ngbAccordion></div>`, `<div auAccordion></div>`);
	});

	test('should update accordion main directive inputs', async () => {
		await runMigrationTest(
			`<div ngbAccordion [animation]="false" [closeOthers]="false" [destroyOnHide]="false"></div>`,
			`<div auAccordion [auItemAnimation]="false" [auCloseOthers]="false" [auItemDestroyOnHide]="false"></div>`,
		);
	});

	test('should update accordion main directive outputs', async () => {
		await runMigrationTest(
			`<div ngbAccordion (shown)="onShown($event)" (hidden)="onHidden($event)"></div>`,
			`<div auAccordion (auShown)="onShown($event)" (auHidden)="onHidden($event)"></div>`,
		);
	});

	test('should update accordion item', async () => {
		await runMigrationTest(`<div ngbAccordionItem></div>`, `<div auAccordionItem></div>`);
	});

	test('should update accordion item and set id if present', async () => {
		await runMigrationTest(`<div ngbAccordionItem="1"></div>`, `<div auAccordionItem auItemId="1"></div>`);
		await runMigrationTest(`<div [ngbAccordionItem]="'1'"></div>`, `<div auAccordionItem [auItemId]="'1'"></div>`);
	});

	test('should update accordion item inputs', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem [collapsed]="false" [destroyOnHide]="false" [disabled]="true"></div>`,
			`<div auAccordionItem [auItemVisible]="true" [auItemDestroyOnHide]="false" [auItemDisabled]="true"></div>`,
		);
	});

	test('should update collapsed to auItemVisible as best as we can', async () => {
		await runMigrationTest(`<div ngbAccordionItem [collapsed]="false"></div>`, `<div auAccordionItem [auItemVisible]="true"></div>`);
		await runMigrationTest(`<div ngbAccordionItem [collapsed]="true"></div>`, `<div auAccordionItem [auItemVisible]="false"></div>`);
		await runMigrationTest(`<div ngbAccordionItem [collapsed]="collapsed"></div>`, `<div auAccordionItem [auItemVisible]="!(collapsed)"></div>`);
	});

	test('should update accordion item outputs', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem (shown)="onShown()" (hidden)="onHidden()"></div>`,
			`<div auAccordionItem (auItemShown)="onShown()" (auItemHidden)="onHidden()"></div>`,
		);
	});

	test('should update basic accordion item header', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><h2 ngbAccordionHeader><button ngbAccordionButton>Header</button></h2></div>`,
			`<div auAccordionItem auSlotItemHeader="Header"></div>`,
		);
		await runMigrationTest(
			`<div ngbAccordionItem><h2 ngbAccordionHeader><button ngbAccordionButton>{{header}}</button></h2></div>`,
			`<div auAccordionItem auSlotItemHeader="{{header}}"></div>`,
		);
		await runMigrationTest(
			`<div ngbAccordionItem><h3 ngbAccordionHeader><button ngbAccordionButton>Header</button></h3></div>`,
			`<div auAccordionItem auItemHeadingTag="h3" auSlotItemHeader="Header"></div>`,
		);
	});

	test('should update accordion item header as template if child is not text', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><h2 ngbAccordionHeader><button ngbAccordionButton><span class="header-span">Header</span></button></h2></div>`,
			`<div auAccordionItem><ng-template auAccordionItemHeader><span class="header-span">Header</span></ng-template></div>`,
		);
	});

	test('should report header class as auAccordionItem input', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><h2 ngbAccordionHeader class="custom-header"><button ngbAccordionButton>Header</button></h2></div>`,
			`<div auAccordionItem auItemHeaderClass="custom-header" auSlotItemHeader="Header"></div>`,
		);
	});

	test('should leave a comment if it does not find the expected structure inside ngbAccordionHeader', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><h2 ngbAccordionHeader class="custom-header"><button ngbAccordionToggle class="btn btn-link">Toggle first</button></h2></div>`,
			`<div auAccordionItem><!-- TODO could not migrate accordion header, please handle manually --><h2 ngbAccordionHeader class="custom-header"><button ngbAccordionToggle class="btn btn-link">Toggle first</button></h2></div>`,
		);
	});

	test('should update accordion item body', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody><ng-template>Body</ng-template></div></div></div>`,
			`<div auAccordionItem><ng-template auAccordionItemBody>Body</ng-template></div>`,
		);
	});

	test('should update accordion item body even if there is no ng-template (supported by ng-bootstrap, while not recommended)', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody>Body</div></div></div>`,
			`<div auAccordionItem><ng-template auAccordionItemBody>Body</ng-template></div>`,
		);
	});

	test('should use auSlotItemBody if the body was provided as a template', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody><ng-template [ngTemplateOutlet]="bodyTemplate"></ng-template></div></div></div>`,
			`<div auAccordionItem [auSlotItemBody]="bodyTemplate"></div>`,
		);
	});

	test('should leave a comment if it does not find the expected structure inside ngbAccordionCollapse', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><div ngbAccordionCollapse>Body</div></div>`,
			`<div auAccordionItem><div ngbAccordionCollapse><!-- TODO could not migrate accordion body, please handle manually -->Body</div></div>`,
		);
	});

	test('should update successfully the full basic use-case', async () => {
		await runMigrationTest(
			`<div ngbAccordionItem>
	<h2 ngbAccordionHeader class="custom-header">
		<button ngbAccordionButton>{{headerA}} {{headerB}}</button>
	</h2>
	<div ngbAccordionCollapse>
		<div ngbAccordionBody>
			<ng-template>Body</ng-template>
		</div>
	</div>
</div>`,
			`<div auAccordionItem auItemHeaderClass="custom-header" auSlotItemHeader="{{headerA}} {{headerB}}">
	
	<ng-template auAccordionItemBody>Body</ng-template>
</div>`,
		);
	});

	test('should update the references', async () => {
		await runMigrationTest(
			`<div ngbAccordion #acc="ngbAccordion"><div ngbAccordionItem #item="ngbAccordionItem"></div></div>`,
			`<div auAccordion #acc="auAccordion"><div auAccordionItem #item="auAccordionItem"></div></div>`,
		);
	});

	test(`should be albe to update embedded accordion`, async () => {
		await runMigrationTest(
			`<div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody><ng-template><div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody><ng-template>Body</ng-template></div></div></div></ng-template></div></div></div>`,
			`<div auAccordionItem><ng-template auAccordionItemBody><div auAccordionItem><ng-template auAccordionItemBody>Body</ng-template></div></ng-template></div>`,
		);
		await runMigrationTest(
			`<div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody><div ngbAccordionItem><div ngbAccordionCollapse><div ngbAccordionBody>Body</div></div></div></div></div></div>`,
			`<div auAccordionItem><ng-template auAccordionItemBody><div auAccordionItem><ng-template auAccordionItemBody>Body</ng-template></div></ng-template></div>`,
		);
	});
});
