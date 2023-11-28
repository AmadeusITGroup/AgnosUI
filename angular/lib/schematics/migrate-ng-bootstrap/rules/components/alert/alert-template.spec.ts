import type {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TEMPLATE_FILE, createNewTestApp, createNewTestRunner, migrateComponents} from '../test-setup-helper';
import {describe, expect, test, beforeEach} from 'vitest';

describe('alert template migration', () => {
	let runner: SchematicTestRunner;
	let cliAppTree: UnitTestTree;

	async function runMigrationTest(oldFileContent: string, newFileContent: string) {
		cliAppTree.overwrite(TEMPLATE_FILE, oldFileContent);
		const tree = await migrateComponents(['alert'], runner, cliAppTree);
		expect(tree.readContent(TEMPLATE_FILE)).toBe(newFileContent);
	}

	beforeEach(async () => {
		runner = createNewTestRunner();
		cliAppTree = await createNewTestApp(runner);
	});

	test('should update basic alert', async () => {
		await runMigrationTest(`<ngb-alert>Message</ngb-alert>`, `<span auAlert>Message</span>`);
	});

	test('should update alert inputs', async () => {
		await runMigrationTest(
			`<ngb-alert [animation]="false" [dismissible]="false" type="success">Message</ngb-alert>`,
			`<span auAlert [auAnimation]="false" [auDismissible]="false" auType="success">Message</span>`,
		);
	});

	test('should update alert outputs', async () => {
		await runMigrationTest(`<ngb-alert (closed)="closed=true">Message</ngb-alert>`, `<span auAlert (auHidden)="closed=true">Message</span>`);
	});
});
