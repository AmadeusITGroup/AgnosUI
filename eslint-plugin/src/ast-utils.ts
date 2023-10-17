import type {TSESLint} from '@typescript-eslint/utils';
import {ASTUtils, ESLintUtils, TSESTree} from '@typescript-eslint/utils';
import type {AST as SvelteAST} from 'svelte-eslint-parser';
import type ts from 'typescript';
import {SignatureKind} from 'typescript';

export interface EventInfo {
	doc: string;
	propBinding: string | undefined;
	type: string;
	widgetProp: string;
}

export interface PropInfo {
	doc: string;
	type: string;
}

export const docFromSymbol = (symbol: ts.Symbol, checker: ts.TypeChecker) => {
	return symbol
		.getDocumentationComment(checker)
		.map((item, index, array) => {
			switch (item.kind) {
				// remove links when copying as they can cause issues:
				case 'link':
					return '';
				case 'linkName':
					return array[index + 1]?.kind === 'linkText' ? '' : item.text;
				default:
					return item.text;
			}
		})
		.join('');
};

const spaceRegExp = /\s+/g;
export const isSameDoc = (docA: string, docB: string) => {
	return docA.trim().replace(spaceRegExp, ' ') === docB.trim().replace(spaceRegExp, ' ');
};

const everythingAfterNonSpaceRegExp = /\S.*$/;
export const getIndentation = (node: TSESTree.Node | TSESTree.Token | SvelteAST.SvelteNode, context: Readonly<TSESLint.RuleContext<any, any>>) => {
	const position = node.range[0];
	const column = node.loc.start.column;
	const text = context.getSourceCode().text;
	const indentation = text.substring(position - column, position).replace(everythingAfterNonSpaceRegExp, '');
	return indentation;
};

export const getChildIndentation = (
	child: TSESTree.Node | TSESTree.Token | undefined,
	parent: TSESTree.Node | TSESTree.Token,
	context: Readonly<TSESLint.RuleContext<any, any>>
) => (child ? getIndentation(child, context) : `${getIndentation(parent, context)}\t`);

const newLine = /\r?\n\r?/g;
export const createDocWithIndentation = (doc: string, indentation: string) => {
	doc = doc.trim();
	if (!doc) return '';
	return `/**\n${indentation} * ${doc.replace(newLine, `\n${indentation} * `)}\n${indentation} */\n${indentation}`;
};

export const addIndentation = (code: string, indentation: string) => code.replace(newLine, `\n${indentation}`);

export const insertNewLineBefore = (
	fixer: TSESLint.RuleFixer,
	token: TSESTree.Node | TSESTree.Token,
	text: string,
	context: Readonly<TSESLint.RuleContext<any, any>>
) => {
	const tokenIndentation = getIndentation(token, context);
	return fixer.insertTextBefore(token, `${text}\n${tokenIndentation}`);
};

export type CallWithObjectArg = TSESTree.CallExpression & {arguments: [TSESTree.ObjectExpression]};

export const isCallWithObjectArg = (node: TSESTree.Node | null | undefined): node is CallWithObjectArg =>
	node?.type === TSESTree.AST_NODE_TYPES.CallExpression &&
	node.arguments.length === 1 &&
	node.arguments[0].type === TSESTree.AST_NODE_TYPES.ObjectExpression;

export const extractEventsObject = (callWidgetFactoryNode: TSESTree.Expression | null | undefined) => {
	if (!isCallWithObjectArg(callWidgetFactoryNode)) {
		return;
	}
	const arg = callWidgetFactoryNode.arguments[0];
	const events = (
		arg.properties.find((node) => node.type === TSESTree.AST_NODE_TYPES.Property && ASTUtils.getPropertyName(node) === 'events') as
			| undefined
			| TSESTree.Property
	)?.value;
	if (events?.type !== TSESTree.AST_NODE_TYPES.ObjectExpression) {
		return;
	}
	const properties = new Map<string, TSESTree.Node>();
	for (const item of events.properties) {
		if (item.type === TSESTree.AST_NODE_TYPES.Property) {
			const propertyName = ASTUtils.getPropertyName(item);
			if (propertyName) {
				properties.set(propertyName, item.value);
			}
		}
	}
	return {properties, node: events};
};

export const getInfoFromWidgetNode = (widgetNode: TSESTree.Node, context: Readonly<TSESLint.RuleContext<any, any>>) => {
	const parserServices = ESLintUtils.getParserServices(context);
	const checker = parserServices.program.getTypeChecker();
	const widgetTSNode = parserServices.esTreeNodeToTSNodeMap.get(widgetNode);
	const patchSymbol = checker.getTypeAtLocation(widgetTSNode).getProperty('patch');
	if (!patchSymbol) return null;
	const patchSymbolType = checker.getTypeOfSymbolAtLocation(patchSymbol, widgetTSNode);
	const patchParamSymbol = checker.getSignaturesOfType(patchSymbolType, SignatureKind.Call)[0]?.getParameters()?.[0];
	if (!patchParamSymbol) return null;
	const patchParamType = checker.getTypeOfSymbolAtLocation(patchParamSymbol, widgetTSNode);
	const events = new Map<string, EventInfo>();
	const props = new Map<string, PropInfo>();
	const bindings: string[] = [];
	for (const symbol of patchParamType.getProperties()) {
		const name = symbol.getName();
		const doc = docFromSymbol(symbol, checker);
		let tsType = checker.getTypeOfSymbolAtLocation(symbol, widgetTSNode);
		if (name.startsWith('on')) {
			const eventName = `${name[2].toLowerCase()}${name.slice(3)}`;
			const binding = name.endsWith('Change');
			const propBinding = binding ? eventName.substring(0, eventName.length - 6) : undefined;
			let type = 'void';
			tsType = checker.getNonNullableType(tsType);
			const eventParamSymbol = checker.getSignaturesOfType(tsType, SignatureKind.Call)[0]?.getParameters()?.[0];
			if (eventParamSymbol) {
				tsType = checker.getTypeOfSymbolAtLocation(eventParamSymbol, widgetTSNode);
				type = checker.typeToString(tsType, widgetTSNode);
			}
			events.set(eventName, {doc, propBinding, type, widgetProp: name});
			if (propBinding) {
				bindings.push(propBinding);
			}
		} else {
			const type = checker.typeToString(tsType, widgetTSNode);
			props.set(name, {doc, type});
		}
	}
	return {
		bindings,
		props,
		events,
	};
};

export const getNodeType = (node: TSESTree.Node, context: Readonly<TSESLint.RuleContext<any, any>>) => {
	const parserServices = ESLintUtils.getParserServices(context);
	const checker = parserServices.program.getTypeChecker();
	const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
	const nodeType = checker.getTypeAtLocation(tsNode);
	return checker.typeToString(nodeType, tsNode);
};

export const getNodeDocumentation = (node: TSESTree.Node, context: Readonly<TSESLint.RuleContext<any, any>>) => {
	const parserServices = ESLintUtils.getParserServices(context);
	const checker = parserServices.program.getTypeChecker();
	const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
	const symbol = checker.getSymbolAtLocation(tsNode)!;
	return docFromSymbol(symbol, checker);
};
