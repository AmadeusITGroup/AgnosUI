import type {TSESLint} from '@typescript-eslint/utils';
import {ESLintUtils, TSESTree} from '@typescript-eslint/utils';
import type {AST as SvelteAST} from 'svelte-eslint-parser';
import type {Type} from 'typescript';
import {SignatureKind} from 'typescript';
import {isSameType, typeToString} from './ast-utils';

interface EventInfo {
	readonly propBinding: string;
	readonly type: Type;
	readonly widgetProp: string;
}

interface BindableInfo {
	readonly node: TSESTree.Node;
	readonly name: string;
	readonly type: Type;
}

const isContextModuleScript = (node: SvelteAST.SvelteScriptElement) =>
	node.startTag.attributes.some(
		(attr) =>
			attr.type === 'SvelteAttribute' &&
			attr.key.name === 'context' &&
			attr.value.length === 1 &&
			attr.value[0].type === 'SvelteLiteral' &&
			attr.value[0].value === 'module',
	);

const isBindingAssignment = (node: TSESTree.Node, propName: string): boolean =>
	node.type === TSESTree.AST_NODE_TYPES.AssignmentExpression &&
	node.operator === '=' &&
	node.left.type === TSESTree.AST_NODE_TYPES.Identifier &&
	node.left.name === propName;

const findBindingAssignment = (functionNode: TSESTree.Node, propName: string): TSESTree.Node | undefined => {
	if (functionNode.type !== TSESTree.AST_NODE_TYPES.ArrowFunctionExpression && functionNode.type !== TSESTree.AST_NODE_TYPES.FunctionExpression) {
		return undefined;
	}
	const body = functionNode.body;
	if (body.type === TSESTree.AST_NODE_TYPES.BlockStatement) {
		return body.body.find((stmt) => stmt.type === TSESTree.AST_NODE_TYPES.ExpressionStatement && isBindingAssignment(stmt.expression, propName));
	}
	return isBindingAssignment(body, propName) ? body : undefined;
};

const extractBindableEvents = (
	callNode: TSESTree.CallExpression,
	context: Readonly<TSESLint.RuleContext<MessageIds, Options>>,
): Map<string, EventInfo> => {
	const parserServices = ESLintUtils.getParserServices(context);
	const checker = parserServices.program.getTypeChecker();
	const events = new Map<string, EventInfo>();

	const factoryArg = callNode.arguments[0];
	if (!factoryArg) return events;

	const factoryTsNode = parserServices.esTreeNodeToTSNodeMap.get(factoryArg);
	const factoryType = checker.getTypeAtLocation(factoryTsNode);
	const callSigs = factoryType.getCallSignatures();
	if (callSigs.length === 0) return events;

	const returnType = callSigs[0].getReturnType();
	const patchSymbol = returnType.getProperty('patch');
	if (!patchSymbol) return events;

	const patchType = checker.getTypeOfSymbolAtLocation(patchSymbol, factoryTsNode);
	const patchSigs = checker.getSignaturesOfType(patchType, SignatureKind.Call);
	if (patchSigs.length === 0) return events;

	const patchParam = patchSigs[0].getParameters()[0];
	if (!patchParam) return events;

	const patchParamType = checker.getTypeOfSymbolAtLocation(patchParam, factoryTsNode);
	for (const sym of patchParamType.getProperties()) {
		const symName = sym.getName();
		if (symName.startsWith('on') && symName.endsWith('Change')) {
			const propPart = symName.slice(2, -6);
			const bindingName = propPart.charAt(0).toLowerCase() + propPart.slice(1);
			let eventParamType = checker.getVoidType();
			const symType = checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(sym, factoryTsNode));
			const eventSigs = checker.getSignaturesOfType(symType, SignatureKind.Call);
			if (eventSigs.length > 0 && eventSigs[0].getParameters().length > 0) {
				eventParamType = checker.getTypeOfSymbolAtLocation(eventSigs[0].getParameters()[0], factoryTsNode);
			}
			events.set(bindingName, {propBinding: bindingName, type: eventParamType, widgetProp: symName});
		}
	}
	return events;
};

const extractEventsHandlers = (callNode: TSESTree.CallExpression): {node: TSESTree.ObjectExpression; handlers: Map<string, TSESTree.Node>} | null => {
	const optionsArg = callNode.arguments[1];
	if (optionsArg?.type !== TSESTree.AST_NODE_TYPES.ObjectExpression) return null;

	for (const prop of optionsArg.properties) {
		if (prop.type === TSESTree.AST_NODE_TYPES.Property && prop.key.type === TSESTree.AST_NODE_TYPES.Identifier && prop.key.name === 'events') {
			if (prop.value.type === TSESTree.AST_NODE_TYPES.ObjectExpression) {
				const handlers = new Map<string, TSESTree.Node>();
				for (const eventProp of prop.value.properties) {
					if (eventProp.type === TSESTree.AST_NODE_TYPES.Property && eventProp.key.type === TSESTree.AST_NODE_TYPES.Identifier) {
						handlers.set(eventProp.key.name, eventProp.value);
					}
				}
				return {node: prop.value, handlers};
			}
		}
	}
	return null;
};

const extractBindables = (
	propsNode: TSESTree.VariableDeclarator,
	context: Readonly<TSESLint.RuleContext<MessageIds, Options>>,
): Map<string, BindableInfo> => {
	const bindables = new Map<string, BindableInfo>();
	if (propsNode.id.type !== TSESTree.AST_NODE_TYPES.ObjectPattern || !propsNode.init) return bindables;

	const parserServices = ESLintUtils.getParserServices(context);
	const checker = parserServices.program.getTypeChecker();

	const propsCallTsNode = parserServices.esTreeNodeToTSNodeMap.get(propsNode.init);
	const propsType = checker.getTypeAtLocation(propsCallTsNode);

	for (const prop of propsNode.id.properties) {
		if (prop.type !== TSESTree.AST_NODE_TYPES.Property || prop.key.type !== TSESTree.AST_NODE_TYPES.Identifier) continue;

		const name = prop.key.name;
		const valueNode = prop.value;

		if (valueNode.type === TSESTree.AST_NODE_TYPES.AssignmentPattern) {
			const right = valueNode.right;
			if (
				right.type === TSESTree.AST_NODE_TYPES.CallExpression &&
				right.callee.type === TSESTree.AST_NODE_TYPES.Identifier &&
				right.callee.name === '$bindable'
			) {
				const propSymbol = propsType.getProperty(name);
				const type = propSymbol ? checker.getTypeOfSymbol(propSymbol) : checker.getAnyType();
				bindables.set(name, {node: prop, name, type});
			}
		}
	}
	return bindables;
};

type MessageIds = 'extraBindable' | 'invalidBindableType' | 'missingBindable' | 'missingEventHandler' | 'missingBindingAssignment';
type Options = [];

export const svelteCheckPropsRule = ESLintUtils.RuleCreator.withoutDocs<Options, MessageIds>({
	create(context) {
		let inContextModule = false;
		let scriptScope: TSESLint.Scope.Scope | undefined;
		let propsNode: TSESTree.VariableDeclarator | undefined;
		let widgetCallNode: TSESTree.CallExpression | undefined;

		return {
			SvelteScriptElement(node: SvelteAST.SvelteScriptElement) {
				scriptScope = context.sourceCode.getScope(node as any);
				inContextModule = isContextModuleScript(node);
			},
			'SvelteScriptElement:exit'() {
				inContextModule = false;
			},
			VariableDeclarator(node) {
				if (inContextModule || context.sourceCode.getScope(node) !== scriptScope) return;

				if (
					node.init?.type === TSESTree.AST_NODE_TYPES.CallExpression &&
					node.init.callee.type === TSESTree.AST_NODE_TYPES.Identifier &&
					node.init.callee.name === '$props'
				) {
					propsNode = node;
				}

				if (
					node.init?.type === TSESTree.AST_NODE_TYPES.CallExpression &&
					node.init.callee.type === TSESTree.AST_NODE_TYPES.Identifier &&
					node.init.callee.name === 'callWidgetFactory'
				) {
					widgetCallNode = node.init;
				}
			},
			'Program:exit'() {
				if (!widgetCallNode || !propsNode) return;

				// Capture in local constants for use in closures (TypeScript narrowing)
				const widgetCall = widgetCallNode;
				const props = propsNode;

				const expectedEvents = extractBindableEvents(widgetCall, context);
				const bindables = extractBindables(props, context);
				const eventsInfo = extractEventsHandlers(widgetCall);
				const checkedBindings = new Set<string>();

				for (const [name, bindable] of bindables) {
					const expectedEvent = expectedEvents.get(name);
					if (!expectedEvent) {
						context.report({
							node: bindable.node,
							messageId: 'extraBindable',
							data: {name},
						});
						continue;
					}
					checkedBindings.add(name);

					if (!isSameType(expectedEvent.type, bindable.type, context, true)) {
						context.report({
							node: bindable.node,
							messageId: 'invalidBindableType',
							data: {
								name,
								expectedType: typeToString(expectedEvent.type, bindable.node, context),
								foundType: typeToString(bindable.type, bindable.node, context),
							},
						});
					}

					const handler = eventsInfo?.handlers.get(expectedEvent.widgetProp);
					if (handler) {
						const assignment = findBindingAssignment(handler, name);
						if (!assignment) {
							context.report({
								node: handler,
								messageId: 'missingBindingAssignment',
								data: {name, widgetProp: expectedEvent.widgetProp},
								fix(fixer) {
									if (
										handler.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression &&
										handler.body.type === TSESTree.AST_NODE_TYPES.BlockStatement &&
										handler.params[0]?.type === TSESTree.AST_NODE_TYPES.Identifier
									) {
										const paramName = handler.params[0].name;
										const lastToken = context.sourceCode.getLastToken(handler.body)!;
										return fixer.insertTextBefore(lastToken, `\t${name} = ${paramName};\n`);
									}
									return null;
								},
							});
						}
					} else {
						context.report({
							node: eventsInfo?.node || widgetCall,
							messageId: 'missingEventHandler',
							data: {name, widgetProp: expectedEvent.widgetProp},
							fix(fixer) {
								const eventHandler = `${expectedEvent.widgetProp}: (value) => {\n\t${name} = value;\n},`;
								if (eventsInfo?.node) {
									const firstToken = context.sourceCode.getFirstToken(eventsInfo.node)!;
									return fixer.insertTextAfter(firstToken, `\n\t${eventHandler}`);
								} else if (widgetCall.arguments.length > 1) {
									const optionsArg = widgetCall.arguments[1];
									if (optionsArg.type === TSESTree.AST_NODE_TYPES.ObjectExpression) {
										if (optionsArg.properties.length > 0) {
											const firstProp = optionsArg.properties[0];
											return fixer.insertTextBefore(firstProp, `events: {\n\t${eventHandler}\n},\n`);
										} else {
											const openBrace = context.sourceCode.getFirstToken(optionsArg)!;
											return fixer.insertTextAfter(openBrace, `\nevents: {\n\t${eventHandler}\n}\n`);
										}
									}
								}
								return null;
							},
						});
					}
				}

				for (const [bindingName, eventInfo] of expectedEvents) {
					if (!checkedBindings.has(bindingName)) {
						context.report({
							node: props.id,
							messageId: 'missingBindable',
							data: {name: bindingName},
							fix(fixer) {
								if (props.id.type !== TSESTree.AST_NODE_TYPES.ObjectPattern) return null;

								const fixes: TSESLint.RuleFix[] = [];
								const propsProperties = props.id.properties;
								if (propsProperties.length === 0) {
									const openBrace = context.sourceCode.getFirstToken(props.id)!;
									fixes.push(fixer.insertTextAfter(openBrace, ` ${bindingName} = $bindable() `));
								} else {
									const lastProp = propsProperties[propsProperties.length - 1];
									if (lastProp.type === TSESTree.AST_NODE_TYPES.RestElement) {
										fixes.push(fixer.insertTextBefore(lastProp, `${bindingName} = $bindable(), `));
									} else {
										fixes.push(fixer.insertTextAfter(lastProp, `, ${bindingName} = $bindable()`));
									}
								}

								const typeAnnotation = props.id.typeAnnotation;
								if (typeAnnotation?.typeAnnotation.type === TSESTree.AST_NODE_TYPES.TSTypeLiteral) {
									const typeLiteral = typeAnnotation.typeAnnotation;
									const typeText = `${bindingName}?: ${typeToString(eventInfo.type, props, context)}`;
									if (typeLiteral.members.length === 0) {
										fixes.push(fixer.replaceText(typeLiteral, `{${typeText}}`));
									} else {
										const firstMember = typeLiteral.members[0];
										fixes.push(fixer.insertTextBefore(firstMember, `${typeText}; `));
									}
								}

								const propsCall = props.init;
								if (
									propsCall?.type === TSESTree.AST_NODE_TYPES.CallExpression &&
									propsCall.typeArguments?.params[0]?.type === TSESTree.AST_NODE_TYPES.TSTypeLiteral
								) {
									const typeLiteral = propsCall.typeArguments.params[0];
									const typeText = `${bindingName}?: ${typeToString(eventInfo.type, props, context)}`;
									if (typeLiteral.members.length === 0) {
										fixes.push(fixer.replaceText(typeLiteral, `{${typeText}}`));
									} else {
										const firstMember = typeLiteral.members[0];
										fixes.push(fixer.insertTextBefore(firstMember, `${typeText}; `));
									}
								}

								return fixes;
							},
						});
					}
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI bindable props in Svelte 5 components.',
		},
		fixable: 'code',
		messages: {
			extraBindable: 'Extra bindable "{{ name }}" not corresponding to a widget event binding.',
			invalidBindableType: 'Invalid type for bindable "{{ name }}": expected {{ expectedType }}, found {{ foundType }}.',
			missingBindable: 'Missing bindable "{{ name }}" for widget event binding.',
			missingEventHandler: 'Missing event handler "{{ widgetProp }}" for bindable "{{ name }}".',
			missingBindingAssignment: 'Missing assignment to "{{ name }}" in "{{ widgetProp }}" handler.',
		},
		type: 'problem',
		schema: [],
	},
	defaultOptions: [],
});
