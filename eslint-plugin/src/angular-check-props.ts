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

const validAlias = (name: string) => `au${name.substring(0, 1).toUpperCase()}${name.substring(1)}`;

type transformedInputType = 'Number' | 'Boolean';
const getTransformedInputType: (
	type: Type,
	node: TSESTree.Node,
	context: Readonly<TSESLint.RuleContext<any, any>>,
) => transformedInputType | undefined = (type, node, context) => {
	const typeAsString = typeToString(type, node, context);
	if (typeAsString === 'boolean | undefined') {
		return 'Boolean';
	}
	if (typeAsString === 'number | undefined') {
		return 'Number';
	}
	return undefined;
};

const transformedInputValidMetadata = (alias: string, type: transformedInputType | undefined) => {
	const transform = type === 'Boolean' ? 'auBooleanAttribute' : 'auNumberAttribute';
	return `{alias: '${alias}'${type ? `, transform: ${transform}` : ''}}`;
};

const reportMissingInputProp = (node: TSESTree.Node, name: string, prop: PropInfo, context: Readonly<TSESLint.RuleContext<'missingProp', any>>) => {
	const inputType = getTransformedInputType(prop.type, node, context);
	const alias = validAlias(name);
	const metadata = transformedInputValidMetadata(alias, inputType);
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
				`${doc}readonly ${name} = input${inputType ? '' : `<${typeToString(prop.type, node, context).replace(' | undefined', '')}>`}(undefined, ${metadata});\n\n${indentation}`,
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
			const outputType = typeToString(prop.type, node, context);
			yield fixer.insertTextBefore(
				node,
				`${doc}readonly ${name} = output${outputType === 'void' ? '' : `<${outputType}>`}({alias: '${validAlias(name)}'});\n\n${indentation}`,
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
	prop: PropInfo,
	context: Readonly<TSESLint.RuleContext<'invalidPropType', any>>,
) => {
	const inputType = getTransformedInputType(prop.type, node, context);
	const alias = validAlias(name);
	const metadata = transformedInputValidMetadata(alias, inputType);
	const expectedType = typeToString(prop.type, node, context).replace(' | undefined', '');
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name,
			type: 'input',
			foundType: typeToString(foundType, node, context).replace(' | undefined', ''),
			expectedType,
		},
		fix(fixer) {
			return fixer.replaceText(
				node,
				`readonly ${name} = input${inputType ? '' : `<${typeToString(prop.type, node, context).replace(' | undefined', '')}>`}(undefined, ${metadata});`,
			);
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
	const expectedType = typeToString(info.type, node, context);
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name,
			type: 'output',
			foundType: `output<${foundType ? typeToString(foundType, node, context) : undefined}>`,
			expectedType: `output<${expectedType}>`,
		},
		fix(fixer) {
			const newValue = `output${expectedType === 'void' ? '' : `<${expectedType}>`}({alias: '${validAlias(name)}'})`;
			if (node.value) {
				return fixer.replaceText(node.value, newValue);
			} else {
				return fixer.insertTextAfter(node.key, ` = ${newValue}`);
			}
		},
	});
};

const reportInvalidInputArguments = <T extends transformedInputType | undefined>(
	type: T,
	node: TSESTree.PropertyDefinition,
	name: string,
	prop: PropInfo,
	context: Readonly<TSESLint.RuleContext<`inputInvalidArgs`, any>>,
) => {
	const inputType = getTransformedInputType(prop.type, node, context);
	const alias = validAlias(name);
	const metadata = transformedInputValidMetadata(alias, type);
	context.report({
		node,
		messageId: `inputInvalidArgs`,
		data: {
			name,
			metadata,
		},
		fix(fixer) {
			return fixer.replaceText(
				node,
				`readonly ${name} = input${inputType ? '' : `<${typeToString(prop.type, node, context).replace(' | undefined', '')}>`}(undefined, ${metadata});`,
			);
		},
	});
};

const reportInvalidAlias = (
	node: TSESTree.PropertyDefinition,
	name: string,
	info: PropInfo,
	context: Readonly<TSESLint.RuleContext<'invalidAlias', any>>,
) => {
	const alias = validAlias(name);
	const expectedType = typeToString(info.type, node, context);
	context.report({
		node,
		messageId: 'invalidAlias',
		data: {
			name,
			type: info.type,
			alias,
		},
		fix(fixer) {
			const newValue = `output${expectedType === 'void' ? '' : `<${expectedType}>`}({alias: '${alias}'})`;
			if (node.value) {
				return fixer.replaceText(node.value, newValue);
			} else {
				return fixer.insertTextAfter(node.key, ` = ${newValue}`);
			}
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
			const commentsBefore = context.sourceCode
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
				context.sourceCode.getLastToken(eventInEventsObject.body)!,
				addIndentation(`\nthis.${name}.emit(${eventInEventsObject.params[0].name});`, indentation),
				context,
			);
		}
		return fixer.replaceText(eventInEventsObject, arrowFunction);
	}
	const propText = `\n${prop.widgetProp}: ${arrowFunction},`;
	if (eventsObject) {
		const indentation = getChildIndentation(eventsObject.properties[0], eventsObject, context);
		return fixer.insertTextAfter(context.sourceCode.getFirstToken(eventsObject)!, addIndentation(propText, indentation));
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
				if (
					node.superClass?.type === TSESTree.AST_NODE_TYPES.Identifier &&
					node.superClass.name === 'BaseWidgetDirective' &&
					isAngularComponent(node)
				) {
					const content = node.body.body;
					const constructor = node.body.body.find(
						(member) => member.type === TSESTree.AST_NODE_TYPES.MethodDefinition && member.kind === 'constructor',
					) as TSESTree.MethodDefinition | undefined;
					if (!constructor || constructor.value.type === TSESTree.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) return;

					const widgetNode = (
						(
							constructor.value.body.body.find(
								(member) =>
									member.type === TSESTree.AST_NODE_TYPES.ExpressionStatement &&
									member.expression.type === TSESTree.AST_NODE_TYPES.CallExpression &&
									member.expression.callee.type === TSESTree.AST_NODE_TYPES.Super,
							) as TSESTree.ExpressionStatement
						).expression as TSESTree.CallExpression
					).arguments[0] as TSESTree.Expression;
					const widgetInfo = widgetNode ? getInfoFromWidgetNode(widgetNode, context) : undefined;
					if (widgetNode && widgetInfo) {
						const eventsObject = extractEventsObject(widgetNode);
						for (const classMember of content) {
							if (!isNonStaticPropertyDefinition(classMember)) continue;
							const name = ASTUtils.getPropertyName(classMember);
							if (!name) continue;
							if (
								classMember.type !== TSESTree.AST_NODE_TYPES.PropertyDefinition ||
								classMember.value?.type !== TSESTree.AST_NODE_TYPES.CallExpression ||
								classMember.value.callee.type !== TSESTree.AST_NODE_TYPES.Identifier
							)
								continue;
							if (classMember.value.callee.name === 'input') {
								const inputInfo = widgetInfo.props.get(name);
								if (inputInfo) {
									widgetInfo.props.delete(name);
									const nodeType = getNodeType(classMember, context) as any;
									if (
										(nodeType.target?.symbol?.name != 'InputSignal' && nodeType.target?.symbol?.name != 'InputSignalWithTransform') ||
										!nodeType.typeArguments?.length ||
										!isSameType(nodeType.typeArguments[0], inputInfo.type, context, true)
									) {
										reportInvalidInputPropType(classMember, name, nodeType.typeArguments[0], inputInfo, context);
									}
									const nodeComment = getNodeDocumentation(classMember.key, context);
									if (!isSameDoc(nodeComment, inputInfo.doc)) {
										reportNonMatchingPropDoc(classMember, name, 'input', inputInfo, context);
									}
									const inputArguments = classMember.value.arguments;
									const inputValidAlias = validAlias(name);
									const inputType = getTransformedInputType(inputInfo.type, node, context);
									if (
										inputArguments.length !== 2 ||
										inputArguments[1].type !== TSESTree.AST_NODE_TYPES.ObjectExpression ||
										!inputArguments[1].properties.some(
											(prop) =>
												prop.type === TSESTree.AST_NODE_TYPES.Property &&
												prop.key.type === TSESTree.AST_NODE_TYPES.Identifier &&
												prop.key.name === 'alias' &&
												prop.value.type === TSESTree.AST_NODE_TYPES.Literal &&
												prop.value.value === inputValidAlias,
										) ||
										(inputType &&
											!inputArguments[1].properties.some(
												(prop) =>
													prop.type === TSESTree.AST_NODE_TYPES.Property &&
													prop.key.type === TSESTree.AST_NODE_TYPES.Identifier &&
													prop.key.name === 'transform' &&
													prop.value.type === TSESTree.AST_NODE_TYPES.Identifier &&
													prop.value.name === (inputType === 'Boolean' ? 'auBooleanAttribute' : 'auNumberAttribute'),
											))
									) {
										reportInvalidInputArguments(inputType, classMember, name, inputInfo, context);
									}
								} else {
									reportExtraProp(classMember, name, 'input', context);
								}
							}
							if (classMember.value.callee.name === 'output') {
								const outputInfo = widgetInfo.events.get(name);
								if (outputInfo) {
									widgetInfo.events.delete(name);
									const nodeType = getNodeType(classMember, context) as TypeReference;
									if (
										nodeType.target?.symbol?.name != 'OutputEmitterRef' ||
										nodeType.typeArguments?.length !== 1 ||
										!isSameType(nodeType.typeArguments[0], outputInfo.type, context)
									) {
										reportInvalidOutputPropType(classMember, name, (nodeType as any).typeArguments?.[0], outputInfo, context);
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
									const outputArguments = classMember.value.arguments;
									if (
										!outputArguments.length ||
										outputArguments[0].type !== TSESTree.AST_NODE_TYPES.ObjectExpression ||
										!outputArguments[0].properties.some(
											(prop) =>
												prop.type === TSESTree.AST_NODE_TYPES.Property &&
												prop.key.type === TSESTree.AST_NODE_TYPES.Identifier &&
												prop.key.name === 'alias' &&
												prop.value.type === TSESTree.AST_NODE_TYPES.Literal &&
												prop.value.value === outputValidAlias,
										)
									) {
										reportInvalidAlias(classMember, name, outputInfo, context);
									}
								} else {
									reportExtraProp(classMember, name, 'output', context);
								}
							}
						}
						for (const [name, info] of widgetInfo.props) {
							reportMissingInputProp(constructor, name, info, context);
						}
						for (const [name, info] of widgetInfo.events) {
							reportMissingOutputProp(constructor, name, info, eventsObject, context);
						}
					}
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI props in angular components.',
		},
		fixable: 'code',
		messages: {
			extraProp: 'Extra {{ type }} "{{ name }}" not present in the API.',
			invalidAlias: 'No proper alias for output "{{ name }}": expected \'{{ alias }}\'.',
			inputInvalidArgs: 'No proper arguments for input "{{ name }}": expected \'(undefined, {{ metadata }})\'.',
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
