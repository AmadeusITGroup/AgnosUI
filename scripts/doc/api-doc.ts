import path from 'path';
import ts from 'typescript';

import type {
	Declaration,
	FunctionDeclaration,
	HasType,
	InterfaceDeclaration,
	NamedDeclaration,
	Node,
	SourceFile,
	SymbolDisplayPart,
	Symbol as TSSymbol,
	TypeAliasDeclaration,
} from 'typescript';
import type {
	BaseDeclaration,
	DeclarationDoc,
	InterfaceDeclarationDoc,
	NodePosition,
	ObjectDeclarationDoc,
	PropertyDoc,
	TSDocInfo,
	TypeDeclarationDoc,
} from './types';

const getCharPosition = (sourceFile: SourceFile, position: number) => {
	const {line, character} = sourceFile.getLineAndCharacterOfPosition(position);
	return {
		line: line + 1,
		character: character + 1,
		position,
	};
};

// import * as marked from 'marked';

function displayPartsToHtml(displayParts: SymbolDisplayPart[]): string {
	return displayParts
		.map((item, index, array) => {
			switch (item.kind) {
				// currently remove links
				case 'link':
					return '';
				case 'linkName':
					return array[index + 1]?.kind === 'linkText' ? '' : item.text;
				default:
					return item.text;
			}
		})
		.join('');
	// return marked(displayPartsToString(displayParts), { gfm: true }).trim();
}

const compare = (a: string | number, b: string | number) => (a < b ? -1 : a > b ? 1 : 0);
export const compareName = (a: any, b: any) => compare(a.name, b.name);

const root = path.join(import.meta.dirname, '../..');
function removeRoot(str: string) {
	return path.relative(root, str);
}

const ANGULAR_LIFECYCLE_METHODS = [
	'ngOnInit',
	'ngOnChanges',
	'ngDoCheck',
	'ngOnDestroy',
	'ngAfterContentInit',
	'ngAfterContentChecked',
	'ngAfterViewInit',
	'ngAfterViewChecked',
	'writeValue',
	'registerOnChange',
	'registerOnTouched',
	'setDisabledState',
];

function isAngularLifecycleHook(methodName: string) {
	return ANGULAR_LIFECYCLE_METHODS.includes(methodName);
}

function isInternalMember(symbol: TSSymbol) {
	return symbol.getJsDocTags().some((tag) => tag.name === 'internal');
}

function isPrivate(member: Declaration) {
	return (ts.getCombinedModifierFlags(member) & ts.ModifierFlags.Private) !== 0;
}

const defaultConfigFnregExp = /^get([a-zA-Z]*)DefaultConfig$/;
export function parseDocs(indexFile: string) {
	const program = ts.createProgram([indexFile], {
		baseUrl: path.join(import.meta.dirname, '../..'),
		paths: {
			'@agnos-ui/core': ['./core/src'],
			'@agnos-ui/core/*': ['./core/src/*'],
		},
	});
	const typeChecker = program.getTypeChecker();
	const sourceFile = program.getSourceFile(indexFile)!;
	const sourceFileSymbol = typeChecker.getSymbolAtLocation(sourceFile)!;
	const exportsList = typeChecker.getExportsOfModule(sourceFileSymbol);

	function visitPosition(node: Node): NodePosition {
		const sourceFile = node.getSourceFile();
		const fileName = removeRoot(sourceFile.fileName);
		return {
			fileName,
			start: getCharPosition(sourceFile, node.getStart()),
			end: getCharPosition(sourceFile, node.getEnd()),
		};
	}

	function visitTSDocInfo(symbol: TSSymbol): TSDocInfo {
		const {deprecated, since} = symbol
			.getJsDocTags()
			.filter((el) => ['deprecated', 'since'].includes(el.name))
			.reduce((obj: any, el) => {
				const [version, ...rest] = el.text![0].text.split(' ');
				obj[el.name] = {version, description: rest.join(' ').trim()};
				return obj;
			}, {});
		return {
			name: symbol.name,
			description: displayPartsToHtml(symbol.getDocumentationComment(typeChecker)),
			deprecated,
			since,
		};
	}

	function visitExports(): Record<string, DeclarationDoc> {
		const json: Record<string, DeclarationDoc> = {};
		exportsList.forEach((exportedItem) => {
			if (isInternalMember(exportedItem)) {
				return;
			}
			const name = exportedItem.name;
			if (json[name]) {
				throw new Error(`Name collision for the documentation : ${name}`);
			}
			json[name] = visitExportedItem(exportedItem);
		});

		return json;
	}

	function visitExportedItem(exportedItem: TSSymbol): DeclarationDoc {
		const node = exportedItem.getDeclarations()![0];
		if (ts.isInterfaceDeclaration(node)) {
			return visitInterfaceDeclaration(node, exportedItem);
		} else if (ts.isTypeAliasDeclaration(node)) {
			return visitTypeAliasDeclaration(node, exportedItem);
		} else if (ts.isExportSpecifier(node) && node.parent.parent.moduleSpecifier) {
			const exportedNode = typeChecker.getExportSpecifierLocalTargetSymbol(node)!.getDeclarations()![0];
			if (ts.isInterfaceDeclaration(exportedNode)) {
				return visitInterfaceDeclaration(exportedNode, exportedItem);
			}
			return visitObjectDeclaration(node, exportedItem);
		} else {
			// TODO: class declaration ...
			return visitObjectDeclaration(node, exportedItem);
		}
	}

	function visitBaseDeclaration(node: Declaration, symbol: TSSymbol): BaseDeclaration {
		return {
			...visitTSDocInfo(symbol),
			...visitPosition(node),
		};
	}

	function visitInterfaceDeclaration(node: InterfaceDeclaration, symbol: TSSymbol): InterfaceDeclarationDoc {
		return {
			...visitBaseDeclaration(node, symbol),
			declarationType: 'interface',
			properties: visitProperties(typeChecker.getTypeAtLocation(node).getProperties()),
		};
	}

	function visitTypeAliasDeclaration(node: TypeAliasDeclaration, symbol: TSSymbol): TypeDeclarationDoc {
		return {
			...visitBaseDeclaration(node, symbol),
			declarationType: 'type',
			definition: visitType(node),
		};
	}

	function visitObjectDeclaration(node: Declaration, symbol: TSSymbol): ObjectDeclarationDoc {
		const res: ObjectDeclarationDoc = {
			...visitBaseDeclaration(node, symbol),
			declarationType: 'object',
			type: visitType(node),
		};

		if (ts.isFunctionDeclaration(node) && defaultConfigFnregExp.test(res.name)) {
			res.defaultConfigProperties = visitConfigFunctionDeclaration(node);
		}

		return res;
	}

	function visitConfigFunctionDeclaration(functionDeclaration: FunctionDeclaration): ObjectDeclarationDoc['defaultConfigProperties'] {
		const lastStatement = functionDeclaration.body!.statements.at(-1);
		typeChecker.getSymbolAtLocation(functionDeclaration);
		const docProperties: Record<string, {text: string; type: string}> = {};
		if (ts.isReturnStatement(lastStatement!)) {
			let expression = lastStatement.expression;
			if (ts.isAsExpression(expression!)) {
				expression = expression.expression;
			}
			if (ts.isObjectLiteralExpression(expression!)) {
				for (const spreadAssignment of expression.properties) {
					if (ts.isSpreadAssignment(spreadAssignment)) {
						const spreadExpression = spreadAssignment.expression;
						if (ts.isCallExpression(spreadExpression)) {
							let symbol = typeChecker.getSymbolAtLocation(spreadExpression.expression);
							if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
								symbol = typeChecker.getAliasedSymbol(symbol);
							}
							const declaration = symbol!.getDeclarations()![0];
							if (ts.isImportSpecifier(declaration)) {
								const exportedNode = typeChecker.getExportSpecifierLocalTargetSymbol(declaration.propertyName ?? declaration.name);
								const functionDeclaration = exportedNode!.getDeclarations()![0];
								if (ts.isFunctionDeclaration(functionDeclaration)) {
									for (const [key, val] of Object.entries(visitConfigFunctionDeclaration(functionDeclaration)!)) {
										docProperties[key] = val;
									}
								}
							} else if (ts.isFunctionDeclaration(declaration)) {
								for (const [key, val] of Object.entries(visitConfigFunctionDeclaration(declaration)!)) {
									docProperties[key] = val;
								}
							}
						} else {
							const symbol = typeChecker.getSymbolAtLocation(spreadExpression);
							const declaration = symbol!.getDeclarations()![0];
							if (ts.isVariableDeclaration(declaration)) {
								const initializer = declaration.initializer;
								if (ts.isObjectLiteralExpression(initializer!)) {
									const properties = initializer.properties;
									for (const property of properties) {
										if (ts.isPropertyAssignment(property)) {
											const {name, initializer} = property;
											if (ts.isIdentifier(name)) {
												docProperties[name.text] = {
													text: initializer.getText() === 'noop' ? '() => {}' : initializer.getText(),
													type: visitType(initializer),
												};
											}
										} else {
											throw new Error('Unknow assignement in config');
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if (Object.keys(docProperties).length === 0) {
			throw new Error(`Could not properly compute widget default config from function ${functionDeclaration.name!.getText()}`);
		}
		return docProperties;
	}

	function visitProperties(members: TSSymbol[]) {
		const properties: PropertyDoc[] = [];

		for (const symbol of members) {
			let member;
			if (!symbol.getDeclarations()) {
				// mapped properties have their original declaration in the mapper targets
				const linkedDeclaration = (symbol as any).links.mappedType.mapper.mapper2.targets[0].members.get(symbol.escapedName).getDeclarations()[0];
				if (linkedDeclaration) {
					member = linkedDeclaration;
				} else {
					continue;
				}
			} else {
				member = symbol.getDeclarations()![0];
			}
			// skipping private and internal
			if (isPrivate(member) || isInternalMember(symbol) || isAngularLifecycleHook(symbol.name)) {
				continue;
			}

			properties.push(visitProperty(member));
		}

		properties.sort(compareName);

		return properties;
	}

	function visitProperty(declaration: NamedDeclaration): PropertyDoc {
		return {
			...visitBaseDeclaration(declaration, typeChecker.getSymbolAtLocation(declaration.name!)!),
			type: visitType(declaration),
			defaultValue: ts.isPropertyDeclaration(declaration) ? declaration.initializer?.getText() : undefined,
		};
	}

	function visitType(node: Node) {
		const flags = ts.TypeFormatFlags.InTypeAlias | ts.TypeFormatFlags.NoTruncation;
		if (ts.isFunctionLike(node) && node.name) {
			const symbol = typeChecker.getSymbolAtLocation(node.name)!;
			const res = typeChecker.typeToString(typeChecker.getTypeOfSymbolAtLocation(symbol, node));
			return res;
		}
		if ((node as HasType)?.type && (node as HasType).type!.getText().startsWith('SlotContent<')) {
			return (node as HasType).type!.getText();
		}
		return node ? typeChecker.typeToString(typeChecker.getTypeAtLocation(node), undefined, flags) : 'void';
	}

	return visitExports();
}
