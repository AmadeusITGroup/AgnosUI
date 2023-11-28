import type {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TEMPLATE_FILE, createNewTestApp, createNewTestRunner, migrateComponents} from '../test-setup-helper';
import {describe, expect, test, beforeEach} from 'vitest';

describe('progressbar template migration', () => {
	let runner: SchematicTestRunner;
	let cliAppTree: UnitTestTree;

	async function runMigrationTest(oldFileContent: string, newFileContent: string) {
		cliAppTree.overwrite(TEMPLATE_FILE, oldFileContent);
		const tree = await migrateComponents(['progressbar'], runner, cliAppTree);
		expect(tree.readContent(TEMPLATE_FILE)).toBe(newFileContent);
	}

	beforeEach(async () => {
		runner = createNewTestRunner();
		cliAppTree = await createNewTestApp(runner);
	});

	test('should update basic progressbar', async () => {
		await runMigrationTest(`<ngb-progressbar [value]="25"></ngb-progressbar>`, `<span auProgressbar [auValue]="25"></span>`);
	});

	test('should handle self-closed progressbar', async () => {
		await runMigrationTest(`<ngb-progressbar [value]="25"/>`, `<span auProgressbar [auValue]="25"></span>`);
	});

	test('should update progressbar inputs', async () => {
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [animated]="false" ariaLabel="aria label" height="20px" [max]="5" [striped]="true"/>`,
			`<span auProgressbar [auValue]="25" [auAnimated]="false" auAriaLabel="aria label" auHeight="20px" [auMax]="5" [auStriped]="true"></span>`,
		);
	});

	test('should update progressbar showValue', async () => {
		await runMigrationTest(`<ngb-progressbar [value]="25" [showValue]="false"/>`, `<span auProgressbar [auValue]="25" ></span>`);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [showValue]="true"></ngb-progressbar>`,
			`<span auProgressbar #progressbar [auValue]="25" >{{progressbar.state().percentage}}%</span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [showValue]="true"/>`,
			`<span auProgressbar #progressbar [auValue]="25" >{{progressbar.state().percentage}}%</span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [showValue]="true"/><ngb-progressbar [value]="25" [showValue]="true"/>`,
			`<span auProgressbar #progressbar1 [auValue]="25" >{{progressbar1.state().percentage}}%</span><span auProgressbar #progressbar [auValue]="25" >{{progressbar.state().percentage}}%</span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [showValue]="true" #ref/>`,
			`<span auProgressbar [auValue]="25"  #ref>{{ref.state().percentage}}%</span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [showValue]="true" #ref=""/>`,
			`<span auProgressbar [auValue]="25"  #ref="">{{ref.state().percentage}}%</span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [showValue]="true" #ref #refToDirective="aDirective" aDirective/>`,
			`<span auProgressbar [auValue]="25"  #ref #refToDirective="aDirective" aDirective>{{ref.state().percentage}}%</span>`,
		);
	});

	test('should update progressbar type and textType when easily possible', async () => {
		await runMigrationTest(
			`<ngb-progressbar [value]="25" type="success"/>`,
			`<span auProgressbar auClassName="text-bg-success" [auValue]="25" ></span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" textType="success" type="warning"/>`,
			`<span auProgressbar auClassName="bg-warning text-success" [auValue]="25"  ></span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" textType="success"/>`,
			`<span auProgressbar auClassName=" text-success" [auValue]="25" ></span>`,
		);
	});

	test('should leave a comment when type and textType cannot be migrated', async () => {
		await runMigrationTest(
			`<ngb-progressbar [value]="25" [type]="{{type}}"/>`,
			`<!-- TODO could not migrate type/textType input. please migrate manually using auClassName --><span auProgressbar [auValue]="25" [type]="{{type}}"></span>`,
		);
		await runMigrationTest(
			`<ngb-progressbar [value]="25" textType="{{textType}}"/>`,
			`<!-- TODO could not migrate type/textType input. please migrate manually using auClassName --><span auProgressbar [auValue]="25" textType="{{textType}}"></span>`,
		);
	});
});
