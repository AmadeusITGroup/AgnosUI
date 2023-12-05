import type {TSESLint} from '@typescript-eslint/utils';
import {ESLintUtils, TSESTree} from '@typescript-eslint/utils';
import type {AST as SvelteAST} from 'svelte-eslint-parser';
import type {Type} from 'typescript';
import type {EventInfo, PropInfo} from './ast-utils';
import {
	addIndentation,
	extractEventsObject,
	getChildIndentation,
	getIndentation,
	getInfoFromWidgetNode,
	getNodeType,
	insertNewLineBefore,
	isSameType,
	typeToString,
} from './ast-utils';

type ExportLetNode = TSESTree.VariableDeclarator & {
	id: TSESTree.Identifier;
	parent: TSESTree.VariableDeclaration & {parent: TSESTree.ExportNamedDeclaration};
};

const isContextModuleScript = (node: SvelteAST.SvelteScriptElement) => {
	return node.startTag.attributes.some(
		(attribute) =>
			attribute.type === 'SvelteAttribute' &&
			attribute.key.name === 'context' &&
			attribute.value.length === 1 &&
			attribute.value[0].type === 'SvelteLiteral' &&
			attribute.value[0].value === 'module',
	);
};

const followingComma = (node: TSESTree.Node, context: Readonly<TSESLint.RuleContext<any, any>>) => {
	const followingComma = context.getSourceCode().getTokenAfter(node);
	return followingComma?.value === ',' ? followingComma : null;
};

const getStatementNode = (node: any) => {
	while (node && node.parent?.type !== 'SvelteScriptElement') {
		node = node.parent;
	}
	return node;
};

const reportExtraProp = (
	node: ExportLetNode,
	allExtraProps: Map<ExportLetNode, boolean>,
	context: Readonly<TSESLint.RuleContext<'extraProp', any>>,
) => {
	context.report({
		node,
		messageId: 'extraProp',
		data: {
			name: node.id.name,
		},
		fix(fixer) {
			allExtraProps.set(node, true);
			const declarations = node.parent.declarations as ExportLetNode[];
			if (declarations.every((declaration) => allExtraProps.get(declaration))) {
				return fixer.remove(node.parent.parent);
			}
			const range: [number, number] = [...node.range];
			const comma = followingComma(node, context);
			if (comma) {
				// remove until the following comma
				range[1] = comma.range[1];
			}
			const position = declarations.indexOf(node);
			if (position === declarations.length - 1) {
				// last node in the declarations
				for (let i = position - 1; i >= 0; i--) {
					const previousNode = declarations[i];
					// find the last non-removed node:
					if (!allExtraProps.get(previousNode)) {
						const comma = followingComma(previousNode, context);
						if (comma) {
							range[0] = comma.range[0];
						}
						break;
					}
				}
			}
			return fixer.removeRange(range);
		},
	});
};

const reportMissingPropInAPI = (node: TSESTree.Node, name: string, context: Readonly<TSESLint.RuleContext<'missingBoundPropInAPI', any>>) => {
	context.report({
		node,
		messageId: 'missingBoundPropInAPI',
		data: {
			name,
		},
	});
};

const reportMissingProp = (
	node: TSESTree.Node,
	insertPosition: TSESTree.Node,
	name: string,
	prop: PropInfo,
	context: Readonly<TSESLint.RuleContext<'missingBoundProp', any>>,
) => {
	context.report({
		node,
		messageId: 'missingBoundProp',
		data: {
			name,
		},
		fix(fixer) {
			return insertNewLineBefore(fixer, insertPosition, `export let ${name}: ${typeToString(prop.type, node, context)} = undefined;`, context);
		},
	});
};

const reportInvalidPropType = (
	node: ExportLetNode,
	info: PropInfo,
	foundType: Type,
	context: Readonly<TSESLint.RuleContext<'invalidPropType', any>>,
) => {
	const expectedType = typeToString(info.type, node, context);
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name: node.id.name,
			expectedType,
			foundType: typeToString(foundType, node, context),
		},
		fix(fixer) {
			const typeAnnotation = node.id.typeAnnotation;
			const typeText = `: ${expectedType}`;
			if (typeAnnotation) {
				return fixer.replaceText(typeAnnotation, typeText);
			} else {
				return fixer.insertTextAfter(node.id, typeText);
			}
		},
	});
};

const isBindingAssignment = (node: TSESTree.Node, propName: string) =>
	node.type === TSESTree.AST_NODE_TYPES.AssignmentExpression &&
	node.operator === '=' &&
	node.left.type === TSESTree.AST_NODE_TYPES.Identifier &&
	node.left.name === propName;

const isBindingAssignmentStatement = (propName: string) => (node: TSESTree.Node) =>
	node.type === TSESTree.AST_NODE_TYPES.ExpressionStatement && isBindingAssignment(node.expression, propName);

const findBindingAssignment = (functionNode: TSESTree.Node, propName: string) => {
	const body =
		functionNode.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression || functionNode.type === TSESTree.AST_NODE_TYPES.FunctionExpression
			? functionNode.body
			: undefined;
	if (body) {
		if (body.type === TSESTree.AST_NODE_TYPES.BlockStatement) {
			return body.body.find(isBindingAssignmentStatement(propName));
		} else if (isBindingAssignment(body, propName)) {
			return body;
		}
	}
	return undefined;
};

const fixApiPatchEventHandler = (
	fixer: TSESLint.RuleFixer,
	prop: EventInfo,
	widgetStatementNode: TSESTree.Node,
	widgetPatchArgNode: TSESTree.ObjectExpression | undefined,
	eventInApiPatch: TSESTree.Node | undefined,
	bindingAssignment: TSESTree.Node | undefined,
	context: Readonly<TSESLint.RuleContext<any, any>>,
) => {
	const arrowFunction = `(event) => {\n\t${prop.propBinding} = event;\n}`;
	if (eventInApiPatch) {
		if (
			(eventInApiPatch.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression ||
				eventInApiPatch.type === TSESTree.AST_NODE_TYPES.FunctionExpression) &&
			eventInApiPatch.body.type === TSESTree.AST_NODE_TYPES.BlockStatement &&
			eventInApiPatch.params[0]?.type === TSESTree.AST_NODE_TYPES.Identifier
		) {
			let content = '';
			if (prop.propBinding && !bindingAssignment) {
				content += `\n${prop.propBinding} = ${eventInApiPatch.params[0].name};`;
			}
			const indentation = getChildIndentation(eventInApiPatch.body.body[0], eventInApiPatch.body, context);
			return insertNewLineBefore(fixer, context.getSourceCode().getLastToken(eventInApiPatch.body)!, addIndentation(content, indentation), context);
		}
		const indentation = getIndentation(eventInApiPatch, context);
		return fixer.replaceText(eventInApiPatch, addIndentation(arrowFunction, indentation));
	}
	const propText = `\n${prop.widgetProp}: ${arrowFunction},`;
	if (widgetPatchArgNode) {
		const indentation = getChildIndentation(widgetPatchArgNode.properties[0], widgetPatchArgNode, context);
		return fixer.insertTextAfter(context.getSourceCode().getFirstToken(widgetPatchArgNode)!, addIndentation(propText, indentation));
	}
	const widgetPatchCall = `\nwidget.patch({${addIndentation(propText, '\t')}\n});`;
	const indentation = getIndentation(widgetStatementNode, context);
	return fixer.insertTextAfter(widgetStatementNode, addIndentation(widgetPatchCall, indentation));
};

const reportApiPatchEventHandlerIssue = (
	name: string,
	prop: EventInfo,
	widgetStatementNode: TSESTree.Node,
	widgetPatchArgNode: TSESTree.ObjectExpression | undefined,
	eventInWidgetPatch: TSESTree.Node | undefined,
	bindingAssignment: TSESTree.Node | undefined,
	context: Readonly<TSESLint.RuleContext<'missingBindingAssignment', any>>,
) => {
	context.report({
		node: eventInWidgetPatch || widgetPatchArgNode || widgetStatementNode,
		messageId: 'missingBindingAssignment',
		data: {
			name,
			widgetProp: prop.widgetProp,
			propBinding: prop.propBinding,
		},
		fix(fixer) {
			return fixApiPatchEventHandler(fixer, prop, widgetStatementNode, widgetPatchArgNode, eventInWidgetPatch, bindingAssignment, context);
		},
	});
};

export const svelteCheckPropsRule = ESLintUtils.RuleCreator.withoutDocs({
	create(context) {
		let inContextModule = false;
		const exportLetNodes: ExportLetNode[] = [];
		let scriptScope: any;
		let widgetNode: TSESTree.VariableDeclarator | undefined;
		return {
			SvelteScriptElement(node: SvelteAST.SvelteScriptElement) {
				scriptScope = context.getScope();
				inContextModule = isContextModuleScript(node);
			},
			'SvelteScriptElement:exit'(node: SvelteAST.SvelteScriptElement) {
				inContextModule = false;
			},
			VariableDeclarator(node) {
				// only take into account declarations done in the top-most scope (with no upper scope),
				// and not in a context="module" script
				if (inContextModule || context.getScope() !== scriptScope) return;
				if (node.id.type === TSESTree.AST_NODE_TYPES.Identifier) {
					if (node.id.name === 'widget') {
						widgetNode = node;
					}
					if (
						node.parent?.type === TSESTree.AST_NODE_TYPES.VariableDeclaration &&
						node.parent.kind === 'let' &&
						node.parent.parent?.type === TSESTree.AST_NODE_TYPES.ExportNamedDeclaration
					) {
						exportLetNodes.push(node as ExportLetNode);
					}
				}
			},
			'Program:exit'(node) {
				if (widgetNode) {
					const widgetInfo = getInfoFromWidgetNode(widgetNode, context);
					if (widgetInfo) {
						const widgetStatementNode = getStatementNode(widgetNode);
						const bindings = new Set(widgetInfo?.bindings);
						const extraProps = new Map(
							exportLetNodes
								.filter((exportNode) => {
									const name = exportNode.id.name;
									const propInfo = widgetInfo.props.get(name);
									const validProp = propInfo && bindings.delete(name);
									if (validProp) {
										const nodeType = getNodeType(exportNode, context);
										if (!isSameType(propInfo.type, nodeType, context)) {
											reportInvalidPropType(exportNode, propInfo, nodeType, context);
										}
									}
									return !validProp;
								})
								.map((item) => [item, false]),
						);
						for (const [prop] of extraProps) {
							reportExtraProp(prop, extraProps, context);
						}
						for (const binding of bindings) {
							const prop = widgetInfo.props.get(binding);
							if (prop) {
								reportMissingProp(widgetNode, widgetStatementNode, binding, prop, context);
							} else {
								reportMissingPropInAPI(widgetNode, binding, context);
							}
						}
						if (widgetInfo.events.size > 0) {
							const eventsObject = extractEventsObject(widgetNode.init);
							for (const [eventName, eventInfo] of widgetInfo.events) {
								const eventInApiPatch = eventsObject?.properties.get(eventInfo.widgetProp);
								const bindingAssignment =
									eventInApiPatch && eventInfo.propBinding ? findBindingAssignment(eventInApiPatch, eventInfo.propBinding) : undefined;
								if (!bindingAssignment && eventInfo.propBinding) {
									reportApiPatchEventHandlerIssue(
										eventName,
										eventInfo,
										widgetStatementNode,
										eventsObject?.node,
										eventInApiPatch,
										bindingAssignment,
										context,
									);
								}
							}
						}
					}
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI props in svelte components.',
			recommended: 'recommended',
		},
		fixable: 'code',
		messages: {
			extraProp: 'Extra "export let {{ name }}" declaration, not corresponding to a bound property in the API.',
			invalidPropType: 'Invalid type for "export let {{ name }}" declaration: expected {{ expectedType }}, found {{ foundType }}.',
			missingBoundProp: 'Missing "export let {{ name }}" declaration, as it is a bound property in the API.',
			missingBoundPropInAPI: 'Missing property {{ name }} in the API.',
			missingBindingAssignment: 'Could not find assignment to {{ propBinding }} in {{ widgetProp }} listener in call to widget.patch.',
		},
		type: 'problem',
		schema: [],
	},
	defaultOptions: [],
});
