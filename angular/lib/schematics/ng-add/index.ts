import type {Tree} from '@angular-devkit/schematics';
import {SchematicsException, type Rule} from '@angular-devkit/schematics';
import {readWorkspace} from '@schematics/angular/utility';
import {applyToUpdateRecorder} from '@schematics/angular/utility/change';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';

import type {Schema} from './schema';
import {getPackageJsonDependency} from '../utilities/dependencies';
import {addImportToModule, getAppModulePath, isStandaloneApp} from '@angular/cdk/schematics';
import * as ts from 'typescript';

export function ngAdd(options: Schema): Rule {
	return async (tree: Tree, context) => {
		const {project} = options;
		const workspace = await readWorkspace(tree);
		const projectWorkspace = workspace.projects.get(project);
		if (!projectWorkspace) {
			throw new SchematicsException(`Unable to find project '${project}' in the workspace`);
		}
		// check if ng-bootstrap is present as dependency, if it is launch the migration task
		let isNgBootstrapPresent = !!getPackageJsonDependency(tree, '@ng-bootstrap/ng-bootstrap', './package.json');
		if (!isNgBootstrapPresent && projectWorkspace.root && tree.exists(`${projectWorkspace.root}/package.json`)) {
			isNgBootstrapPresent = !!getPackageJsonDependency(tree, '@ng-bootstrap/ng-bootstrap', './package.json');
		}
		if (isNgBootstrapPresent) {
			context.logger.info('The project uses ng-bootstrap. Launching ng-bootstrap migration...');
			context.addTask(new RunSchematicTask('migrate-from-ng-bootstrap', options));
		}
		const buildTarget = projectWorkspace.targets.get('build');
		if (!buildTarget) {
			throw new SchematicsException(`Project target "build" not found.`);
		}
		const targetOptions = buildTarget.options as Record<string, string>;
		const mainFilePath = buildTarget.builder === '@angular-devkit/build-angular:application' ? targetOptions['browser'] : targetOptions['main'];
		if (mainFilePath && !isStandaloneApp(tree, mainFilePath)) {
			const modulePath = getAppModulePath(tree, mainFilePath);
			const moduleSource = ts.createSourceFile(modulePath, tree.readText(modulePath), ts.ScriptTarget.Latest, true);
			const changes = addImportToModule(moduleSource, modulePath, 'AgnosUIAngularModule', '@agnos-ui/angular');
			const recorder = tree.beginUpdate(modulePath);
			applyToUpdateRecorder(recorder, changes);
			tree.commitUpdate(recorder);
		}
		context.logger.info('AgnosUI Angular requires bootstrap styles, please make sure you include them into your project: https://getbootstrap.com/');
	};
}
