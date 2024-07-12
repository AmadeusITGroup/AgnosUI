import type {TSESTree} from '@typescript-eslint/utils';
import {ESLintUtils} from '@typescript-eslint/utils';
import type {ReportFixFunction} from '@typescript-eslint/utils/ts-eslint';
import ts from 'typescript';
import {addIndentation} from './ast-utils';

const defaultConfigFnregExp = /^get([a-zA-Z]*)DefaultConfig$/;

class ErrorAtNode {
	constructor(
		public node: ts.Node,
		public message: string,
	) {}
}

function evaluateFunctionCall(functionLike: ts.FunctionLikeDeclaration, typeChecker: ts.TypeChecker) {
	const body = functionLike.body;
	if (body) {
		if (ts.isExpression(body)) {
			return evaluateExpression(body, typeChecker);
		}
		if (ts.isBlock(body) && body.statements.length === 1 && ts.isReturnStatement(body.statements[0])) {
			return evaluateExpression(body.statements[0].expression!, typeChecker);
		}
	}
	throw new ErrorAtNode(functionLike, 'unexpected kind of function');
}

function getSymbolDeclaration(node: ts.Node, typeChecker: ts.TypeChecker): ts.Declaration | undefined {
	let symbol = typeChecker.getSymbolAtLocation(node);
	if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
		symbol = typeChecker.getAliasedSymbol(symbol);
	}
	const declaration = symbol?.getDeclarations()?.[0];
	if (declaration) {
		if (ts.isImportSpecifier(declaration)) {
			const exportedNode = typeChecker.getExportSpecifierLocalTargetSymbol(declaration.propertyName ?? declaration.name);
			return exportedNode?.getDeclarations()?.[0];
		}
	}
	return declaration;
}

function evaluateExpression(expression: ts.Expression, typeChecker: ts.TypeChecker): ts.Expression {
	if (ts.isAsExpression(expression) || ts.isParenthesizedExpression(expression)) {
		return evaluateExpression(expression.expression, typeChecker);
	} else if (ts.isCallExpression(expression)) {
		const declaration = getSymbolDeclaration(expression.expression, typeChecker);
		if (declaration) {
			if (ts.isVariableDeclaration(declaration) && declaration.initializer) {
				const fn = evaluateExpression(declaration.initializer, typeChecker);
				if (ts.isFunctionExpression(fn) || ts.isArrowFunction(fn)) {
					return evaluateFunctionCall(fn, typeChecker);
				}
			}
			if (ts.isFunctionDeclaration(declaration)) {
				return evaluateFunctionCall(declaration, typeChecker);
			}
		}
	} else if (ts.isIdentifier(expression)) {
		const declaration = getSymbolDeclaration(expression, typeChecker);
		if (declaration && ts.isVariableDeclaration(declaration) && declaration.initializer) {
			return evaluateExpression(declaration.initializer, typeChecker);
		}
	}
	return expression;
}

function evaluateObjectLitteral(expression: ts.ObjectLiteralExpression, typeChecker: ts.TypeChecker) {
	const res: Record<string, string> = {};
	for (const property of expression.properties) {
		if (ts.isPropertyAssignment(property)) {
			const {name, initializer} = property;
			if (ts.isIdentifier(name)) {
				res[name.text] = initializer.getText() === 'noop' ? '() => {}' : initializer.getText();
				continue;
			}
		} else if (ts.isSpreadAssignment(property)) {
			const expr = evaluateExpression(property.expression, typeChecker);
			if (ts.isObjectLiteralExpression(expr)) {
				Object.assign(res, evaluateObjectLitteral(expr, typeChecker));
				continue;
			}
		}
		throw new ErrorAtNode(property, 'unexpected kind of property');
	}
	return res;
}

function visitFunctionLike(node: ts.FunctionLikeDeclaration, typeChecker: ts.TypeChecker) {
	const expression = evaluateFunctionCall(node, typeChecker);
	if (ts.isObjectLiteralExpression(expression)) {
		return evaluateObjectLitteral(expression, typeChecker);
	}
	throw new ErrorAtNode(expression, 'unexpected kind of expression');
}

const everythingAfterNonSpaceRegExp = /\S.*$/;
const defaultValueRegExp = /@defaultValue[\s\S]*?(?=@\w+|$)/g;
const endingEmptyLinesRegExp = /(\r?\n\s+\*\s*)+$/;

const createFix = (propDeclaration: ts.Declaration, actualDefaultValue: string | undefined): ReportFixFunction =>
	function* (fixer) {
		const sourceFile = propDeclaration.getSourceFile();
		const text = sourceFile.text;
		let propDeclarationStart = propDeclaration.getFullStart();
		const existingComments = ts.getLeadingCommentRanges(text, propDeclarationStart);
		let tsDocComment: ts.CommentRange | undefined;
		let tsDocCommentText = `/**/`;
		let indent = '';
		for (const comment of existingComments ?? []) {
			if (comment.kind === ts.SyntaxKind.MultiLineCommentTrivia) {
				const commentText = text.substring(comment.pos, comment.end);
				if (commentText.startsWith('/**')) {
					const {character: col} = sourceFile.getLineAndCharacterOfPosition(comment.pos);
					indent = text.substring(comment.pos - col, comment.pos).replace(everythingAfterNonSpaceRegExp, '');
					tsDocComment = comment;
					tsDocCommentText = commentText;
					break;
				}
			}
		}
		if (!tsDocComment) {
			propDeclarationStart = propDeclaration.getStart(sourceFile, false);
			const {character: col} = sourceFile.getLineAndCharacterOfPosition(propDeclarationStart);
			indent = text.substring(propDeclarationStart - col, propDeclarationStart).replace(everythingAfterNonSpaceRegExp, '');
		}
		tsDocCommentText = tsDocCommentText.substring(0, tsDocCommentText.length - 1); // removes the ending slash
		tsDocCommentText = tsDocCommentText.replace(defaultValueRegExp, '');
		tsDocCommentText = tsDocCommentText.replace(endingEmptyLinesRegExp, '');
		if (actualDefaultValue) {
			tsDocCommentText = `${tsDocCommentText}\n${indent} *\n${indent} * @defaultValue${actualDefaultValue.includes('\n') ? `\n${indent} * ` : ' '}${addIndentation(actualDefaultValue, `${indent} * `)}\n${indent} */`;
		} else {
			tsDocCommentText = `${tsDocCommentText}\n${indent} */`;
		}
		if (tsDocComment) {
			yield fixer.replaceTextRange([tsDocComment.pos, tsDocComment.end], tsDocCommentText);
		} else {
			yield fixer.insertTextBeforeRange([propDeclarationStart, propDeclarationStart], `${tsDocCommentText}\n${indent}`);
		}
	};

const wrapMarkdown = (value: string) =>
	value.includes('(') || value.includes('\n') || value.length > 25 ? `\`\`\`ts\n${value}\n\`\`\`` : `\`${value}\``;

const markdownRegExp = /^```ts\n([\s\S]*)\n```$|^`(.*)`$/;
const unwrapMarkdown = (value: string) => {
	const match = markdownRegExp.exec(value);
	return match ? (match[1] ?? match[2]) : value;
};

export const checkDefaultPropsRule = ESLintUtils.RuleCreator.withoutDocs({
	create(context) {
		const parserServices = ESLintUtils.getParserServices(context);
		const getNodeToReport = (defaultNode: ts.Node, idealNode?: ts.Node) => {
			const selectedNode = idealNode && idealNode.getSourceFile() === defaultNode.getSourceFile() ? idealNode : defaultNode;
			return parserServices.tsNodeToESTreeNodeMap.get(selectedNode);
		};
		return {
			FunctionDeclaration(getDefaultValueFnNode: TSESTree.FunctionDeclaration) {
				if (defaultConfigFnregExp.test(getDefaultValueFnNode.id?.name ?? '')) {
					const tsNode: ts.FunctionDeclaration = parserServices.esTreeNodeToTSNodeMap.get(getDefaultValueFnNode);
					const typeChecker = parserServices.program.getTypeChecker();
					let info;
					try {
						info = visitFunctionLike(tsNode, typeChecker);
					} catch (error: any) {
						context.report({
							node: getNodeToReport(tsNode, error instanceof ErrorAtNode ? error.node : undefined),
							data: {
								error: error.message ?? `${error}`,
							},
							messageId: 'staticAnalysisError',
						});
						return;
					}
					const returnType = typeChecker.getReturnTypeOfSignature(typeChecker.getSignatureFromDeclaration(tsNode)!);
					returnType.getProperties().forEach((prop) => {
						const name = prop.name;
						const actualDefaultValue = info[name];
						const isUndefined = !actualDefaultValue || actualDefaultValue === 'undefined';
						const expectedDefaultValueLength = isUndefined ? 0 : 1;
						const tsDocActualDefaultValue = isUndefined ? undefined : wrapMarkdown(actualDefaultValue);
						const defaultValueItems = prop.getJsDocTags(typeChecker).filter((tag) => tag.name === 'defaultValue');
						const propDeclaration = prop.getDeclarations()?.[0];
						const node = getNodeToReport(tsNode, propDeclaration);
						const canFix = propDeclaration && node !== getDefaultValueFnNode;
						if (defaultValueItems.length !== expectedDefaultValueLength) {
							if (expectedDefaultValueLength === 0) {
								context.report({
									node,
									messageId: 'expectedNoDefaultValue',
									data: {
										propName: name,
									},
									fix: canFix ? createFix(propDeclaration, tsDocActualDefaultValue) : undefined,
								});
							} else {
								context.report({
									node,
									messageId: 'missingDefaultValue',
									data: {
										propName: name,
										defaultValue: actualDefaultValue,
									},
									fix: canFix ? createFix(propDeclaration, tsDocActualDefaultValue) : undefined,
								});
							}
						} else if (expectedDefaultValueLength > 0) {
							const foundDefaultValueTag =
								defaultValueItems[0].text?.length === 1 && defaultValueItems[0].text?.[0].kind === 'text'
									? defaultValueItems[0].text?.[0].text
									: undefined;
							if (foundDefaultValueTag !== tsDocActualDefaultValue) {
								context.report({
									node,
									messageId: 'incorrectDefaultValue',
									data: {
										propName: name,
										defaultValue: actualDefaultValue,
										foundValue: foundDefaultValueTag ? unwrapMarkdown(foundDefaultValueTag) : 'invalid value',
									},
									fix: canFix ? createFix(propDeclaration, tsDocActualDefaultValue) : undefined,
								});
							}
						}
					});
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI default props in tsdoc.',
			recommended: 'recommended',
		},
		fixable: 'code',
		messages: {
			missingDefaultValue: 'Missing default value in tsdoc for prop {{ propName }} (should be: {{ defaultValue}})',
			expectedNoDefaultValue: 'Expected no default value in tsdoc for prop {{ propName }}',
			incorrectDefaultValue: 'Default value mismatch in tsdoc for prop {{ propName }}, expected {{ defaultValue}}, found {{ foundValue }}',
			staticAnalysisError: 'Could not statically extract default values: {{ error }}',
		},
		type: 'problem',
		schema: [],
	},
	defaultOptions: [],
});
