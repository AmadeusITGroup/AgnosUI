import {SchematicsException, type Rule, type SchematicContext, type Tree} from '@angular-devkit/schematics';

import type {WorkspacePath} from '@angular/cdk/schematics';
import {DevkitFileSystem, getWorkspaceConfigGracefully, getTargetTsconfigPath, UpdateProject} from '@angular/cdk/schematics';
import type {ComponentMigrator} from './migration-data';
import {TemplateMigration} from './template-migration';
import {TypescriptMigration} from './typescript-migration';

export interface Schema {
	/**
	 * The dependency we are trying to migrate component(s) from
	 */
	depPkg: string;
	/**
	 * Name of the project where AgnosUI library should be installed
	 */
	project: string;
	/**
	 * components to migrate
	 */
	components: string[];
}

function getComponentsToMigrate(requested: string[], all: string[]): Set<string> {
	if (requested.includes('all')) {
		return new Set<string>(all);
	} else {
		return new Set<string>(requested);
	}
}

export function runMigrations(
	depPkg: string,
	context: SchematicContext,
	fileSystem: DevkitFileSystem,
	tsconfigPath: WorkspacePath,
	migrators: ComponentMigrator[],
	analyzedFiles: Set<WorkspacePath>,
	additionalStylesheetPaths: string[],
): boolean {
	const program = UpdateProject.createProgramFromTsconfig(tsconfigPath, fileSystem);
	const project = new UpdateProject(context, program, fileSystem, analyzedFiles, context.logger);
	return !project.migrate([TemplateMigration, TypescriptMigration], null, {depPkg, components: migrators}, additionalStylesheetPaths).hasFailures;
}

export function getMigrationRule(options: Schema, components: string[], migrators: ComponentMigrator[]): Rule {
	return async (tree: Tree, context: SchematicContext) => {
		if (options.components?.length && options.project) {
			const logger = context.logger;
			const workspace = await getWorkspaceConfigGracefully(tree);
			if (workspace === null) {
				logger.error('Could not find workspace configuration file.');
				return;
			}
			const fileSystem = new DevkitFileSystem(tree);
			const analyzedFiles = new Set<WorkspacePath>();
			const componentsToMigrate = getComponentsToMigrate(options.components, components);
			const filteredMigrators = [...migrators.filter((m) => componentsToMigrate.has(m.component))];
			let success = true;
			logger.info(`Migrating components:\n${[...componentsToMigrate].join('\n')}`);

			const project = workspace.projects.get(options.project)!;
			const tsconfigPaths = [getTargetTsconfigPath(project, 'build'), getTargetTsconfigPath(project, 'test')].filter((p): p is WorkspacePath => !!p);

			if (!tsconfigPaths.length) {
				throw new SchematicsException(
					`Skipping migration for project ${options.project}. Unable to determine 'tsconfig.json' file in workspace config.`,
				);
			}
			for (const tsconfigPath of tsconfigPaths) {
				success &&= runMigrations(options.depPkg, context, fileSystem, tsconfigPath, filteredMigrators, analyzedFiles, []);
			}

			// Commit all recorded edits in the update recorder. We apply the edits after all
			// migrations ran because otherwise offsets in the TypeScript program would be
			// shifted and individual migrations could no longer update the same source file.
			fileSystem.commitEdits();

			if (!success) {
				logger.error('Unable to migrate project. See errors above.');
			} else {
				logger.info('Successfully migrated the project. Please check the updated files for any TODO comment.');
			}
		}
	};
}
