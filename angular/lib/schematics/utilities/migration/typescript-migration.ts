import {Migration} from '@angular/cdk/schematics';
import type {SchematicContext} from '@angular-devkit/schematics';
import type {MigrationData} from './migration-data';
import * as ts from 'typescript';
import type {Replacement} from './typescript-migrator';
import {ImportMigrator} from './import-migrator';

export class TypescriptMigration extends Migration<MigrationData, SchematicContext> {
	enabled = true;

	override visitNode(node: ts.Node) {
		if (ts.isSourceFile(node)) {
			const migrators = this.upgradeData.components.filter((m) => m.typescript).map((m) => m.typescript!);
			const replacements: Replacement[] = [];
			migrators.forEach((m) => {
				try {
					replacements.push(...m.getReplacements(node, this.typeChecker));
				} catch (error: any) {
					this.logger.error(`${error}`);
					if (error instanceof Error) {
						this.logger.error(`${error.stack}`);
					}
					this.logger.warn(`Failed to process typescript: ${node.fileName} (see error above).`);
				}
			});
			const componentMigratorsWithImportMapping = this.upgradeData.components.filter((m) => m.importMapping);
			if (componentMigratorsWithImportMapping.length) {
				let importMapping: Record<string, string> = {};
				const wontTouch = new Set<string>();
				componentMigratorsWithImportMapping.forEach((m) => {
					importMapping = {
						...importMapping,
						...m.importMapping,
					};
					m.wontTouch?.forEach(wontTouch.add, wontTouch);
				});
				try {
					replacements.push(...new ImportMigrator(this.upgradeData.depPkg, importMapping, wontTouch).getReplacements(node, this.typeChecker));
				} catch (error: any) {
					this.logger.error(`${error}`);
					if (error instanceof Error) {
						this.logger.error(`${error.stack}`);
					}
					this.logger.warn(`Failed to process typescript: ${node.fileName} (see error above).`);
				}
			}
			const filePath = this.fileSystem.resolve(node.fileName);
			const fileRecorder = this.fileSystem.edit(filePath);
			replacements.sort(([a], [b]) => b - a);
			replacements.forEach(([offset, width, replacementTxt]) => {
				fileRecorder.remove(offset, width).insertRight(offset, replacementTxt);
			});
		}
	}
}
