import type {Replacement} from './typescript-migrator';
import {TypescriptMigrator} from './typescript-migrator';
import * as ts from 'typescript';
import {EOL} from 'os';

export class ImportMigrator extends TypescriptMigrator {
	constructor(
		private depPkg: string,
		private readonly importMapping: Record<string, string>,
		private readonly wontTouch: Set<string>,
	) {
		super();
	}

	override getReplacements(node: ts.SourceFile, typeChecker: ts.TypeChecker): Replacement[] {
		const {importSpecifiersToNewNames, identifiersToImportSpecifiers, replacements} = this.findImportsToMigrate(node);
		return [...replacements, ...this.renameReferences(node, identifiersToImportSpecifiers, importSpecifiersToNewNames, typeChecker)];
	}

	/** Finds the imported symbols in a file that need to be migrated. */
	private findImportsToMigrate(sourceFile: ts.SourceFile) {
		const importSpecifiersToNewNames = new Map<ts.ImportSpecifier, string>();
		const identifiersToImportSpecifiers = new Map<string, ts.ImportSpecifier>();
		const replacements: Replacement[] = [];

		for (const statement of sourceFile.statements) {
			if (
				ts.isImportDeclaration(statement) &&
				ts.isStringLiteral(statement.moduleSpecifier) &&
				statement.importClause?.namedBindings &&
				ts.isNamedImports(statement.importClause.namedBindings) &&
				this.depPkg === statement.moduleSpecifier.text
			) {
				const quoteStyle = statement.moduleSpecifier.getText()[0];
				const removeFullStatement = statement.importClause.namedBindings.elements.every(
					(element) => !!this.importMapping[(element.propertyName || element.name).text],
				);

				const ratingBindings: ts.ImportSpecifier[] = [];

				const bindingsToDelete: number[] = [];
				let includesWontTouch = false;

				statement.importClause.namedBindings.elements.forEach((element, index) => {
					const oldName = (element.propertyName || element.name).text;
					if (this.importMapping[oldName]) {
						importSpecifiersToNewNames.set(element, this.importMapping[oldName]);
						// Skip aliased imports since they only need to be renamed in the import declaration.
						if (!element.propertyName) {
							identifiersToImportSpecifiers.set(oldName, element);
						}
						bindingsToDelete.push(index);
						ratingBindings.push(element);
					}
					if (this.wontTouch.has(oldName)) {
						includesWontTouch = true;
					}
				});
				const statementNamedBindings = statement.importClause.namedBindings.elements;
				if (bindingsToDelete.length && !removeFullStatement) {
					let index = 0;
					if (bindingsToDelete[0] === 0) {
						index = 1;
						while (index < bindingsToDelete.length && bindingsToDelete[index] === index) {
							index++;
						}
						replacements.push([
							statementNamedBindings[0].getStart(),
							statementNamedBindings[bindingsToDelete[index - 1] + 1].getStart() - statementNamedBindings[0].getStart(),
							'',
						]);
					}
					while (index < bindingsToDelete.length) {
						replacements.push([
							statementNamedBindings[bindingsToDelete[index] - 1].getEnd(),
							statementNamedBindings[bindingsToDelete[index]].getEnd() - statementNamedBindings[bindingsToDelete[index] - 1].getEnd(),
							'',
						]);
						index++;
					}
				}

				if (ratingBindings.length) {
					let bindingReplacements = ratingBindings.map((binding) =>
						binding.propertyName
							? `${this.importMapping[binding.propertyName.text]} as ${binding.name.text}`
							: `${this.importMapping[binding.name.text]}`,
					);
					bindingReplacements = bindingReplacements.filter((replacement, index) => bindingReplacements.indexOf(replacement) === index);
					replacements.push([
						statement.getStart(),
						removeFullStatement ? statement.getFullWidth() : 0,
						`import { ${bindingReplacements.join(', ')} } from ${quoteStyle}@agnos-ui/angular${quoteStyle};${EOL}` +
							(includesWontTouch ? `// TODO manual migration required for leftover imports${EOL}` : ''),
					]);
				}
			}
		}

		return {importSpecifiersToNewNames, identifiersToImportSpecifiers, replacements};
	}

	/** Renames all of the references to imported symbols. */
	private renameReferences(
		sourceFile: ts.SourceFile,
		identifiersToImportSpecifiers: Map<string, ts.ImportSpecifier>,
		importSpecifiersToNewNames: Map<ts.ImportSpecifier, string>,
		typeChecker: ts.TypeChecker,
	): Replacement[] {
		if (importSpecifiersToNewNames.size === 0) {
			return [];
		}

		const replacements: Replacement[] = [];
		const walk = (node: ts.Node) => {
			// Imports are handled separately.
			if (ts.isImportDeclaration(node)) {
				return;
			}

			if (ts.isIdentifier(node)) {
				const specifier = identifiersToImportSpecifiers.get(node.text);

				if (specifier && this._isReferenceToImport(node, specifier, typeChecker)) {
					replacements.push([node.getStart(), node.getWidth(), importSpecifiersToNewNames.get(specifier)!]);
				}
			}

			node.forEachChild(walk);
		};
		sourceFile.forEachChild(walk);
		return replacements;
	}

	private _isReferenceToImport(node: ts.Identifier, importSpecifier: ts.ImportSpecifier, typeChecker: ts.TypeChecker): boolean {
		if ((importSpecifier.propertyName || importSpecifier.name).text !== node.text) {
			return false;
		}

		const nodeSymbol = typeChecker.getTypeAtLocation(node).getSymbol();
		const importSymbol = typeChecker.getTypeAtLocation(importSpecifier).getSymbol();

		// This can happen for type references.
		if (!nodeSymbol && !importSymbol) {
			return typeChecker.getSymbolAtLocation(node)?.declarations?.[0] === importSpecifier;
		}

		return !!(nodeSymbol?.declarations?.[0] && importSymbol?.declarations?.[0]) && nodeSymbol.declarations[0] === importSymbol.declarations[0];
	}
}
