import type {TSESLint} from '@typescript-eslint/utils';
import {ASTUtils, ESLintUtils, TSESTree} from '@typescript-eslint/utils';
import type {CallWithObjectArg, EventInfo, PropInfo} from './ast-utils';
import {
	addIndentation,
	createDocWithIndentation,
	extractWidgetPatchProperties,
	getChildIndentation,
	getIndentation,
	getInfoFromWidgetNode,
	getNodeDocumentation,
	getNodeType,
	insertNewLineBefore as insertLineBefore,
	isCallWithObjectArg,
	isSameDoc,
} from './ast-utils';

const findDecorator = ({decorators}: {decorators?: TSESTree.Decorator[]}, decoratorName: string) =>
	decorators?.find(({expression}) => {
		if (
			expression.type === TSESTree.AST_NODE_TYPES.CallExpression &&
			expression.callee.type === TSESTree.AST_NODE_TYPES.Identifier &&
			expression.callee.name === decoratorName
		) {
			return true;
		}
		return false;
	});

const isAngularComponent = (node: TSESTree.ClassDeclaration) => !!findDecorator(node, 'Component') || !!findDecorator(node, 'Directive');

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

const isWidgetPatch = (node: TSESTree.Node): node is TSESTree.ExpressionStatement & {expression: CallWithObjectArg} =>
	node.type === TSESTree.AST_NODE_TYPES.ExpressionStatement &&
	isThisDotXDotYCallExpression(node.expression, '_widget', 'patch') &&
	isCallWithObjectArg(node.expression);

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
			return fixer.insertTextBefore(node, `${doc}@Input() ${name}: ${prop.type};\n\n${indentation}`);
		},
	});
};

const reportMissingOutputProp = (
	node: TSESTree.Node,
	name: string,
	prop: EventInfo,
	classBody: TSESTree.ClassBody,
	widgetPatch: ReturnType<typeof findEventWidgetPatch>,
	context: Readonly<TSESLint.RuleContext<'missingProp', any>>
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
			yield fixer.insertTextBefore(node, `${doc}@Output() ${name} = new EventEmitter<${prop.type}>();\n\n${indentation}`);
			const eventInApiPatch = widgetPatch?.properties.get(prop.widgetProp);
			const emitInFunction = eventInApiPatch ? findCallToEventEmitter(eventInApiPatch, name) : null;
			if (!emitInFunction) {
				yield fixOutputEmit(fixer, name, prop, classBody, widgetPatch?.node, eventInApiPatch, context);
			}
		},
	});
};

const reportInvalidInputPropType = (
	node: TSESTree.PropertyDefinition,
	name: string,
	foundType: string,
	info: PropInfo,
	context: Readonly<TSESLint.RuleContext<'invalidPropType', any>>
) => {
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name,
			type: 'input',
			foundType,
			expectedType: info.type,
		},
		fix(fixer) {
			const typeAnnotation = node.typeAnnotation;
			const typeText = `: ${info.type}`;
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
	foundType: string,
	expectedType: string,
	info: PropInfo,
	context: Readonly<TSESLint.RuleContext<'invalidPropType', any>>
) => {
	context.report({
		node,
		messageId: 'invalidPropType',
		data: {
			name,
			type: 'output',
			foundType,
			expectedType,
		},
		fix(fixer) {
			const newValue = `new EventEmitter<${info.type}>()`;
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
	context: Readonly<TSESLint.RuleContext<'nonMatchingPropDoc', any>>
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

const findEventWidgetPatch = (classDeclaration: TSESTree.ClassDeclaration) => {
	const constructor = classDeclaration.body.body.find(ASTUtils.isConstructor);
	if (constructor) {
		const widgetPatch = constructor.value.body?.body.find(isWidgetPatch);
		if (widgetPatch) {
			return extractWidgetPatchProperties(widgetPatch.expression);
		}
	}
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
};

const fixOutputEmit = (
	fixer: TSESLint.RuleFixer,
	name: string,
	prop: EventInfo,
	classBody: TSESTree.ClassBody,
	widgetPatchArgNode: TSESTree.ObjectExpression | undefined,
	eventInWidgetPatch: TSESTree.Node | undefined,
	context: Readonly<TSESLint.RuleContext<any, any>>
) => {
	const arrowFunction = `(event) => this.${name}.emit(event)`;
	if (eventInWidgetPatch) {
		if (
			eventInWidgetPatch.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression &&
			eventInWidgetPatch.body.type === TSESTree.AST_NODE_TYPES.BlockStatement &&
			eventInWidgetPatch.params[0]?.type === TSESTree.AST_NODE_TYPES.Identifier
		) {
			const indentation = getChildIndentation(eventInWidgetPatch.body.body[0], eventInWidgetPatch.body, context);
			return insertLineBefore(
				fixer,
				context.getSourceCode().getLastToken(eventInWidgetPatch.body)!,
				addIndentation(`\nthis.${name}.emit(${eventInWidgetPatch.params[0].name});`, indentation),
				context
			);
		}
		return fixer.replaceText(eventInWidgetPatch, arrowFunction);
	}
	const propText = `\n${prop.widgetProp}: ${arrowFunction},`;
	if (widgetPatchArgNode) {
		const indentation = getChildIndentation(widgetPatchArgNode.properties[0], widgetPatchArgNode, context);
		return fixer.insertTextAfter(context.getSourceCode().getFirstToken(widgetPatchArgNode)!, addIndentation(propText, indentation));
	}
	const constructor = classBody.body.find(ASTUtils.isConstructor);
	const widgetPatchCall = `\nthis._widget.patch({${addIndentation(propText, '\t')}\n});`;
	if (constructor) {
		const indentation = getChildIndentation(constructor.value.body?.body[0], constructor, context);
		return insertLineBefore(
			fixer,
			context.getSourceCode().getLastToken(constructor.value.body!)!,
			addIndentation(widgetPatchCall, indentation),
			context
		);
	}
	const constructorText = `\nconstructor() {${addIndentation(widgetPatchCall, '\t')}\n}`;
	const indentation = getChildIndentation(classBody.body[classBody.body.length - 1], classBody, context);
	return insertLineBefore(fixer, context.getSourceCode().getLastToken(classBody)!, addIndentation(constructorText, indentation), context);
};

const reportMissingOutputEmit = (
	node: TSESTree.Node,
	name: string,
	prop: EventInfo,
	classBody: TSESTree.ClassBody,
	widgetPatchArgNode: TSESTree.ObjectExpression | undefined,
	eventInApiPatch: TSESTree.Node | undefined,
	context: Readonly<TSESLint.RuleContext<'missingOutputEmit', any>>
) => {
	context.report({
		node,
		messageId: 'missingOutputEmit',
		data: {
			name,
			widgetProp: prop.widgetProp,
		},
		fix(fixer) {
			return fixOutputEmit(fixer, name, prop, classBody, widgetPatchArgNode, eventInApiPatch, context);
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
						const widgetPatch = findEventWidgetPatch(node);
						for (const classMember of content) {
							if (!isNonStaticPropertyDefinition(classMember)) continue;
							const name = ASTUtils.getPropertyName(classMember);
							if (!name) continue;
							if (findDecorator(classMember, 'Input')) {
								const inputInfo = widgetInfo.props.get(name);
								if (inputInfo) {
									widgetInfo.props.delete(name);
									const nodeType = getNodeType(classMember, context);
									if (nodeType !== inputInfo.type) {
										reportInvalidInputPropType(classMember, name, nodeType, inputInfo, context);
									}
									const nodeComment = getNodeDocumentation(classMember.key, context);
									if (!isSameDoc(nodeComment, inputInfo.doc)) {
										reportNonMatchingPropDoc(classMember, name, 'input', inputInfo, context);
									}
								} else {
									reportExtraProp(classMember, name, 'input', context);
								}
							}
							if (findDecorator(classMember, 'Output')) {
								const outputInfo = widgetInfo.events.get(name);
								if (outputInfo) {
									widgetInfo.events.delete(name);
									const nodeType = getNodeType(classMember, context);
									const expectedNodeType = `EventEmitter<${outputInfo.type}>`;
									if (nodeType !== expectedNodeType) {
										reportInvalidOutputPropType(classMember, name, nodeType, expectedNodeType, outputInfo, context);
									}
									const nodeComment = getNodeDocumentation(classMember.key, context);
									if (!isSameDoc(nodeComment, outputInfo.doc)) {
										reportNonMatchingPropDoc(classMember, name, 'output', outputInfo, context);
									}
									const eventInApiPatch = widgetPatch?.properties.get(outputInfo.widgetProp);
									const emitInFunction = eventInApiPatch ? findCallToEventEmitter(eventInApiPatch, name) : null;
									if (!emitInFunction) {
										reportMissingOutputEmit(classMember, name, outputInfo, node.body, widgetPatch?.node, eventInApiPatch, context);
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
							reportMissingOutputProp(widgetNode, name, info, node.body, widgetPatch, context);
						}
					}
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI props in angular components.',
			recommended: 'error',
		},
		fixable: 'code',
		messages: {
			extraProp: 'Extra {{ type }} "{{ name }}" not present in the API.',
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
