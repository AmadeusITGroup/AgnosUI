import type {UnitTestTree} from '@angular-devkit/schematics/testing';
import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import * as path from 'path';

const SRC = path.join('projects', 'agnosui', 'src');
export const TEMPLATE_FILE = path.join(SRC, 'app', 'app.component.html');
export const COMPONENT_FILE = path.join(SRC, 'app', 'app.component.ts');
const TS_CONFIG = path.join(SRC, 'tsconfig.app.json');

export function createNewTestRunner(): SchematicTestRunner {
	return new SchematicTestRunner('@agnos-ui/angular', path.join(__dirname, 'collection.json'));
}

export async function createNewTestApp(runner: SchematicTestRunner): Promise<UnitTestTree> {
	const workspaceTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', {
		name: 'workspace',
		version: '16.1.4',
		newProjectRoot: 'projects',
	});
	return runner.runExternalSchematic('@schematics/angular', 'application', {name: 'agnosui'}, workspaceTree);
}

export async function migrateComponents(components: string[], runner: SchematicTestRunner, tree: UnitTestTree): Promise<UnitTestTree> {
	return runner.runSchematic('migrate-from-ng-bootstrap', {tsconfig: TS_CONFIG, components, project: 'agnosui'}, tree);
}
