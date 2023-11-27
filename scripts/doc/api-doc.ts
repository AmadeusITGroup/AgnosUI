import path from 'path';
import {
	ModifierFlags,
	createProgram,
	getCombinedModifierFlags,
	isFunctionDeclaration,
	isFunctionLike,
	isIdentifier,
	isInterfaceDeclaration,
	isObjectLiteralExpression,
	isPropertyAssignment,
	isPropertyDeclaration,
	isReturnStatement,
	isSpreadAssignment,
	isTypeAliasDeclaration,
	isVariableDeclaration,
} from 'typescript';

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

const root = path.join(__dirname, '../..');
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
	return (getCombinedModifierFlags(member) & ModifierFlags.Private) !== 0;
}

const defaultConfigFnregExp = /^get([a-zA-Z]*)DefaultConfig$/;
export function parseDocs(indexFile: string) {
	const program = createProgram([indexFile], {});
	const typeChecker = program.getTypeChecker();

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

	function visitExports(fileName: string): Record<string, DeclarationDoc> {
		const sourceFile = program.getSourceFile(fileName)!;
		const sourceFileSymbol = typeChecker.getSymbolAtLocation(sourceFile)!;
		const exportsList = typeChecker.getExportsOfModule(sourceFileSymbol);
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

		if (isInterfaceDeclaration(node)) {
			return visitInterfaceDeclaration(node, exportedItem);
		} else if (isTypeAliasDeclaration(node)) {
			return visitTypeAliasDeclaration(node, exportedItem);
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

		if (isFunctionDeclaration(node) && defaultConfigFnregExp.test(res.name)) {
			res.defaultConfigProperties = visitConfigFunctionDeclaration(node);
		}

		return res;
	}

	function visitConfigFunctionDeclaration(functionDeclaration: FunctionDeclaration): ObjectDeclarationDoc['defaultConfigProperties'] {
		const lastStatement = functionDeclaration.body!.statements.at(-1);
		typeChecker.getSymbolAtLocation(functionDeclaration);
		const docProperties: Record<string, {text: string; type: string}> = {};
		if (isReturnStatement(lastStatement!)) {
			const expression = lastStatement.expression;
			if (isObjectLiteralExpression(expression!)) {
				const spreadAssignment = expression.properties[0];
				if (isSpreadAssignment(spreadAssignment)) {
					const symbol = typeChecker.getSymbolAtLocation(spreadAssignment.expression);
					const declaration = symbol!.getDeclarations()![0];
					if (isVariableDeclaration(declaration)) {
						const initializer = declaration.initializer;
						if (isObjectLiteralExpression(initializer!)) {
							const properties = initializer.properties;
							for (const property of properties) {
								if (isPropertyAssignment(property)) {
									const {name, initializer} = property;
									if (isIdentifier(name)) {
										docProperties[name.text] = {
											text: initializer.getText(),
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
			defaultValue: isPropertyDeclaration(declaration) ? declaration.initializer?.getText() : undefined,
		};
	}

	function visitType(node: Node) {
		if (isFunctionLike(node) && node.name) {
			const symbol = typeChecker.getSymbolAtLocation(node.name)!;
			const res = typeChecker.typeToString(typeChecker.getTypeOfSymbolAtLocation(symbol, node));
			return res;
		}
		if ((node as HasType)?.type) {
			return (node as HasType).type!.getText();
		}
		return node ? typeChecker.typeToString(typeChecker.getTypeAtLocation(node)) : 'void';
	}

	return visitExports(indexFile);
}
