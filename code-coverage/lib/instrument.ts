import {parse, transformFromAstSync, type PluginItem} from '@babel/core';
import {dirname} from 'path';
import {type CallExpression} from '@babel/types';

const excludedAngularCalls = ['input', 'output', 'viewChild', 'viewChildren', 'contentChild', 'contentChildren'];

// TODO: support for svelte files
const supportedExtensionsRegExp = /\.(tsx?|jsx?)$/;
export const canInstrument = (fileName: string) => !fileName.includes('\x00') && supportedExtensionsRegExp.test(fileName);

function ignoreCallExpression(callExpression: CallExpression): boolean {
	if (callExpression.callee.type === 'MemberExpression') {
		return (
			callExpression.callee.object.type === 'Identifier' &&
			excludedAngularCalls.includes(callExpression.callee.object.name) &&
			callExpression.callee.property.type === 'Identifier' &&
			callExpression.callee.property.name === 'required'
		);
	}
	if (callExpression.callee.type === 'Identifier') {
		return excludedAngularCalls.includes(callExpression.callee.name);
	}
	return false;
}

function ignoreSomeAngular(): PluginItem {
	return {
		visitor: {
			ClassProperty(path) {
				if (path.node.value?.type === 'CallExpression' && ignoreCallExpression(path.node.value)) {
					if (!path.node.leadingComments) {
						path.node.leadingComments = [];
					}
					path.node.leadingComments.push({
						type: 'CommentBlock',
						value: ' istanbul ignore next ',
					});
				}
			},
		},
	};
}

export const instrumentFile = (code: string, filename: string) => {
	console.log('Instrumenting for coverage: ', filename);
	const parsedFile = parse(code, {
		plugins: [
			['@babel/plugin-syntax-decorators', {version: 'legacy'}],
			[
				'@babel/plugin-syntax-typescript',
				{
					isTSX: filename.endsWith('.tsx'),
				},
			],
		],
	});
	if (!parsedFile) {
		return code;
	}
	const transformedAst = transformFromAstSync(parsedFile, code, {plugins: [ignoreSomeAngular()], ast: true})?.ast;
	if (!transformedAst) {
		return code;
	}
	const result = transformFromAstSync(transformedAst, code, {
		filename,
		plugins: [
			[
				'babel-plugin-istanbul',
				{
					cwd: dirname(filename),
					exclude: [],
				},
			],
		],
	});
	if (result?.code) {
		return `// @ts-nocheck\n${result.code}`;
	}
	return code;
};
