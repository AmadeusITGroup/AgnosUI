import type {TSESLint} from '@typescript-eslint/utils';
import {ASTUtils, ESLintUtils, TSESTree} from '@typescript-eslint/utils';
import type {Type, TypeReference} from 'typescript';
import type {EventInfo, PropInfo} from './ast-utils';
import {
	addIndentation,
	createDocWithIndentation,
	extractEventsObject,
	getChildIndentation,
	getIndentation,
	getInfoFromWidgetNode,
	getNodeDocumentation,
	getNodeType,
	insertNewLineBefore as insertLineBefore,
	isSameDoc,
	isSameType,
	typeToString,
} from './ast-utils';

const getDecorator = ({decorators}: {decorators?: TSESTree.Decorator[]}, decoratorName: string) =>
	decorators?.find(
		({expression}) =>
			expression.type === TSESTree.AST_NODE_TYPES.CallExpression &&
			expression.callee.type === TSESTree.AST_NODE_TYPES.Identifier &&
			expression.callee.name === decoratorName,
	);

const findDecorator = ({decorators}: {decorators?: TSESTree.Decorator[]}, decoratorName: string) => !!getDecorator({decorators}, decoratorName);

const isAngularComponent = (node: TSESTree.ClassDeclaration) => findDecorator(node, 'Component') || findDecorator(node, 'Directive');

const isNonStaticPropertyDefinition = (node: TSESTree.Node): node is TSESTree.PropertyDefinition =>
	node.type === TSESTree.AST_NODE_TYPES.PropertyDefinition && !node.static;

const isFieldWithName =
	(name: string) =>
	(node: TSESTree.Node): node is TSESTree.PropertyDefinition =>
		isNonStaticPropertyDefinition(node) && ASTUtils.getPropertyName(node) === name;

const isThisDotXDotYCallExpression = (node: TSESTree.Node, x: string, y: string): node is TSESTree.CallExpression =>
	node.type === TSESTree.AST_NODE_TYPES.CallExpression &&
	node.callee.type === TSESTree.AST_NODE_TYPES.MemberExpression &&
	node.callee.object.type === TSESTree.AST_NODE_TYPES.MemberExpression &&
	node.callee.object.object.type === TSESTree.AST_NODE_TYPES.ThisExpression &&
	ASTUtils.getPropertyName(node.callee.object) === x &&
	ASTUtils.getPropertyName(node.callee) === y;

const reportExtraProp = (node: TSESTree.Node, name: string, type: 'input' | 'output', context: Readonly<TSESLint.RuleContext<'extraProp', any>>) => {
	context.report({
		node,
		messageId: 'extraProp',
		data: {
			name,
			type,
		},
		fix(fixer) {
			return fixer.remove(node);
		},
	});
};

const reportMissingInputProp = (node: TSESTree.Node, name: string, prop: PropInfo, context: Readonly<TSESLint.RuleContext<'missingProp', any>>) => {
	context.report({
		node,
		messageId: 'missingProp',
		data: {
			name,
			type: 'input',
		},
		fix(fixer) {
			const indentation = getIndentation(node, context);
			const doc = createDocWithIndentation(prop.doc, indentation);
			return fixer.insertTextBefore(
				node,
				`${doc}@Input('${validAlias(name)}') ${name}: ${typeToString(prop.type, node, context)};\n\n${indentation}`,
			);
		},
	});
};

const reportMissingOutputProp = (
	node: TSESTree.Node,
	name: string,
	prop: EventInfo,
	eventsObject: ReturnType<typeof extractEventsObject>,
	context: Readonly<TSESLint.RuleContext<'missingProp', any>>,
) => {
	context.report({
		node,
		messageId: 'missingProp',
		data: {
			name,
			type: 'output',
		},
		*fix(fixer) {
			const indentation = getIndentation(node, context);
			const doc = createDocWithIndentation(prop.doc, indentation);
			yield fixer.insertTextBefore(
				node,
				`${doc}@Output('${validAlias(name)}') ${name} = new EventEmitter<${typeToString(prop.type, node, context)}>();\n\n${indentation}`,
			);
			const eventInApiPatch = eventsObject?.properties.get(prop.widgetProp);
			const emitInFunction = eventInApiPatch ? findCallToEventEmitter(eventInApiPatch, name) : null;
			if (!emitInFunction) {
				const res = fixOutputEmit(fixer, name, prop, eventsObject?.node, eventInApiPatch, context);
				if (res) {
					yield res;
				}
			}
		},
	});
};

const reportInvalidInputPropType = (
	node: TSESTree.PropertyDefinition,
	name: string,
	foundType: Type,
	info: PropInfo,
	context: Readonly<TSESLint.RuleContext<'invalidPropType', any>>,
) => {
	const expectedType = typeToString(info.type, node, context);
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name,
			type: 'input',
			foundType: typeToString(foundType, node, context),
			expectedType,
		},
		fix(fixer) {
			const typeAnnotation = node.typeAnnotation;
			const typeText = `: ${expectedType}`;
			if (typeAnnotation) {
				return fixer.replaceText(typeAnnotation, typeText);
			} else {
				return fixer.insertTextAfter(node.key, typeText);
			}
		},
	});
};

const reportInvalidOutputPropType = (
	node: TSESTree.PropertyDefinition,
	name: string,
	foundType: Type,
	info: PropInfo,
	context: Readonly<TSESLint.RuleContext<'invalidPropType', any>>,
) => {
	const expectedType = `EventEmitter<${typeToString(info.type, node, context)}>`;
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name,
			type: 'output',
			foundType: typeToString(foundType, node, context),
			expectedType,
		},
		fix(fixer) {
			const newValue = `new ${expectedType}()`;
			if (node.value) {
				return fixer.replaceText(node.value, newValue);
			} else {
				return fixer.insertTextAfter(node.key, ` = ${newValue}`);
			}
		},
	});
};

const validAlias = (name: string) => `au${name.substring(0, 1).toUpperCase()}${name.substring(1)}`;

const reportInvalidAlias = (
	node: TSESTree.PropertyDefinition,
	name: string,
	type: 'input' | 'output',
	alias: string,
	context: Readonly<TSESLint.RuleContext<'noValidAlias', any>>,
) => {
	context.report({
		node,
		messageId: 'noValidAlias',
		data: {
			name,
			type,
			alias,
		},
		*fix(fixer) {
			const decoratorName = type.substring(0, 1).toUpperCase() + type.substring(1);
			const decorator = getDecorator(node, decoratorName)!;
			yield fixer.remove(decorator);
			yield fixer.insertTextBefore(node, `@${decoratorName}('${alias}')`);
		},
	});
};

const reportNonMatchingPropDoc = (
	node: TSESTree.PropertyDefinition,
	name: string,
	type: 'input' | 'output',
	prop: PropInfo,
	context: Readonly<TSESLint.RuleContext<'nonMatchingPropDoc', any>>,
) => {
	context.report({
		node,
		messageId: 'nonMatchingPropDoc',
		data: {
			name,
			type,
		},
		*fix(fixer) {
			const commentsBefore = context
				.getSourceCode()
				.getCommentsBefore(node)
				.filter((comment) => comment.type === TSESTree.AST_TOKEN_TYPES.Block && comment.value.startsWith('*'));
			for (const comment of commentsBefore) {
				yield fixer.remove(comment);
			}
			const indentation = getIndentation(node, context);
			const doc = createDocWithIndentation(prop.doc, indentation);
			yield fixer.insertTextBefore(node, doc);
		},
	});
};

const isEventEmitterNextExpressionStatement = (outputName: string) => (node: TSESTree.Node) =>
	node.type === TSESTree.AST_NODE_TYPES.ExpressionStatement && isThisDotXDotYCallExpression(node.expression, outputName, 'emit');

const findCallToEventEmitter = (functionNode: TSESTree.Node, outputName: string) => {
	const body = functionNode.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression ? functionNode.body : undefined;
	if (body) {
		if (body.type === TSESTree.AST_NODE_TYPES.BlockStatement) {
			return body.body.find(isEventEmitterNextExpressionStatement(outputName));
		} else if (isThisDotXDotYCallExpression(body, outputName, 'emit')) {
			return body;
		}
	}
	return undefined;
};

const fixOutputEmit = (
	fixer: TSESLint.RuleFixer,
	name: string,
	prop: EventInfo,
	eventsObject: TSESTree.ObjectExpression | undefined,
	eventInEventsObject: TSESTree.Node | undefined,
	context: Readonly<TSESLint.RuleContext<any, any>>,
) => {
	const arrowFunction = `(event) => this.${name}.emit(event)`;
	if (eventInEventsObject) {
		if (
			eventInEventsObject.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression &&
			eventInEventsObject.body.type === TSESTree.AST_NODE_TYPES.BlockStatement &&
			eventInEventsObject.params[0]?.type === TSESTree.AST_NODE_TYPES.Identifier
		) {
			const indentation = getChildIndentation(eventInEventsObject.body.body[0], eventInEventsObject.body, context);
			return insertLineBefore(
				fixer,
				context.getSourceCode().getLastToken(eventInEventsObject.body)!,
				addIndentation(`\nthis.${name}.emit(${eventInEventsObject.params[0].name});`, indentation),
				context,
			);
		}
		return fixer.replaceText(eventInEventsObject, arrowFunction);
	}
	const propText = `\n${prop.widgetProp}: ${arrowFunction},`;
	if (eventsObject) {
		const indentation = getChildIndentation(eventsObject.properties[0], eventsObject, context);
		return fixer.insertTextAfter(context.getSourceCode().getFirstToken(eventsObject)!, addIndentation(propText, indentation));
	}
	return null;
};

const reportMissingOutputEmit = (
	node: TSESTree.Node,
	name: string,
	prop: EventInfo,
	eventsObject: TSESTree.ObjectExpression | undefined,
	eventInEventsObject: TSESTree.Node | undefined,
	context: Readonly<TSESLint.RuleContext<'missingOutputEmit', any>>,
) => {
	context.report({
		node,
		messageId: 'missingOutputEmit',
		data: {
			name,
			widgetProp: prop.widgetProp,
		},
		fix(fixer) {
			return fixOutputEmit(fixer, name, prop, eventsObject, eventInEventsObject, context);
		},
	});
};

export const angularCheckPropsRule = ESLintUtils.RuleCreator.withoutDocs({
	create(context) {
		return {
			ClassDeclaration(node) {
				if (isAngularComponent(node)) {
					const content = node.body.body;
					const widgetNode = content.find(isFieldWithName('_widget'));
					const widgetInfo = widgetNode ? getInfoFromWidgetNode(widgetNode, context) : undefined;
					if (widgetNode && widgetInfo) {
						const eventsObject = extractEventsObject(widgetNode.value);
						for (const classMember of content) {
							if (!isNonStaticPropertyDefinition(classMember)) continue;
							const name = ASTUtils.getPropertyName(classMember);
							if (!name) continue;
							if (findDecorator(classMember, 'Input')) {
								const inputInfo = widgetInfo.props.get(name);
								if (inputInfo) {
									widgetInfo.props.delete(name);
									const nodeType = getNodeType(classMember, context);
									if (!isSameType(nodeType, inputInfo.type, context)) {
										reportInvalidInputPropType(classMember, name, nodeType, inputInfo, context);
									}
									const nodeComment = getNodeDocumentation(classMember.key, context);
									if (!isSameDoc(nodeComment, inputInfo.doc)) {
										reportNonMatchingPropDoc(classMember, name, 'input', inputInfo, context);
									}
									const decoratorArguments = (getDecorator(classMember, 'Input')!.expression as TSESTree.CallExpression).arguments;
									const inputValidAlias = validAlias(name);
									if (!decoratorArguments.length || decoratorArguments[0].type !== 'Literal' || decoratorArguments[0].value !== inputValidAlias) {
										reportInvalidAlias(classMember, name, 'input', inputValidAlias, context);
									}
								} else {
									reportExtraProp(classMember, name, 'input', context);
								}
							}
							if (findDecorator(classMember, 'Output')) {
								const outputInfo = widgetInfo.events.get(name);
								if (outputInfo) {
									widgetInfo.events.delete(name);
									const nodeType = getNodeType(classMember, context) as TypeReference;
									if (
										nodeType.target?.symbol?.name != 'EventEmitter' ||
										nodeType.typeArguments?.length !== 1 ||
										!isSameType(nodeType.typeArguments![0], outputInfo.type, context)
									) {
										reportInvalidOutputPropType(classMember, name, nodeType, outputInfo, context);
									}
									const nodeComment = getNodeDocumentation(classMember.key, context);
									if (!isSameDoc(nodeComment, outputInfo.doc)) {
										reportNonMatchingPropDoc(classMember, name, 'output', outputInfo, context);
									}
									const eventInEventsObject = eventsObject?.properties.get(outputInfo.widgetProp);
									const emitInFunction = eventInEventsObject ? findCallToEventEmitter(eventInEventsObject, name) : null;
									if (!emitInFunction) {
										reportMissingOutputEmit(classMember, name, outputInfo, eventsObject?.node, eventInEventsObject, context);
									}
									const outputValidAlias = validAlias(name);
									const decoratorArguments = (getDecorator(classMember, 'Output')!.expression as TSESTree.CallExpression).arguments;
									if (!decoratorArguments.length || decoratorArguments[0].type !== 'Literal' || decoratorArguments[0].value !== outputValidAlias) {
										reportInvalidAlias(classMember, name, 'output', outputValidAlias, context);
									}
								} else {
									reportExtraProp(classMember, name, 'output', context);
								}
							}
						}
						for (const [name, info] of widgetInfo.props) {
							reportMissingInputProp(widgetNode, name, info, context);
						}
						for (const [name, info] of widgetInfo.events) {
							reportMissingOutputProp(widgetNode, name, info, eventsObject, context);
						}
					}
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI props in angular components.',
			recommended: 'recommended',
		},
		fixable: 'code',
		messages: {
			extraProp: 'Extra {{ type }} "{{ name }}" not present in the API.',
			noValidAlias: 'No proper alias for {{ type }} "{{ name }}": expected \'{{ alias }}\'.',
			invalidPropType: 'Invalid type for {{ type }} "{{ name }}": expected {{ expectedType }}, found {{ foundType }}.',
			nonMatchingPropDoc: 'Documentation for {{ type }} "{{ name }}" does not match the API documentation.',
			missingProp: 'Missing {{ type }} "{{ name }}" which is present in the API.',
			missingOutputEmit:
				'Could not find call to this.{{name}}.emit in {{ widgetProp }} listener registered with this._widget.patch in the class constructor.',
		},
		type: 'problem',
		schema: [],
	},
	defaultOptions: [],
});
