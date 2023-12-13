import type {InvalidTestCase} from '@typescript-eslint/rule-tester';
import {RuleTester} from '@typescript-eslint/rule-tester';
import type {TSESLint} from '@typescript-eslint/utils';
import {afterAll, describe, test} from 'vitest';
import {checkReplaceImportsRule} from '../src/check-replace-imports';

RuleTester.describe = describe;
RuleTester.it = test;
RuleTester.afterAll = afterAll;

describe('check-replace-imports', () => {
	const ruleTester = new RuleTester({
		parser: require.resolve('@typescript-eslint/parser'),
		parserOptions: {
			project: './tsconfig.test.json',
			tsconfigRootDir: __dirname,
		},
	});

	type MessageIds<T extends TSESLint.RuleModule<any, any>> = T extends TSESLint.RuleModule<infer U, any> ? U : never;

	const invalid: InvalidTestCase<MessageIds<typeof checkReplaceImportsRule>, [string]>[] = [
		{
			code: 'import {something} from "@agnos-ui/core";',
			errors: [{messageId: 'missingSubPath', data: {importKeyword: 'import', incorrectImport: '@agnos-ui/core'}}],
			options: ['@agnos-ui/core'],
		},
		{
			code: 'const something = import("@agnos-ui/core");',
			errors: [{messageId: 'missingSubPath', data: {importKeyword: 'import', incorrectImport: '@agnos-ui/core'}}],
			options: ['@agnos-ui/core'],
		},
		{
			code: 'export {something} from "@agnos-ui/core";',
			errors: [{messageId: 'missingSubPath', data: {importKeyword: 'export', incorrectImport: '@agnos-ui/core'}}],
			options: ['@agnos-ui/core'],
		},
		{
			code: 'import {something} from "@agnos-ui/core/path";',
			errors: [
				{
					messageId: 'incorrectSingleImport',
					data: {incorrectImport: '@agnos-ui/core/path', correctImport: '@agnos-ui/angular-headless/path', importKeyword: 'import'},
				},
			],
			options: ['@agnos-ui/angular-headless'],
			output: 'import {something} from "@agnos-ui/angular-headless/path";',
		},
		{
			code: 'const something = import("@agnos-ui/core/path");',
			errors: [
				{
					messageId: 'incorrectSingleImport',
					data: {incorrectImport: '@agnos-ui/core/path', correctImport: '@agnos-ui/angular-headless/path', importKeyword: 'import'},
				},
			],
			options: ['@agnos-ui/angular-headless'],
			output: 'const something = import("@agnos-ui/angular-headless/path");',
		},
		{
			code: 'export {something} from "@agnos-ui/core/path";',
			errors: [
				{
					messageId: 'incorrectSingleImport',
					data: {incorrectImport: '@agnos-ui/core/path', correctImport: '@agnos-ui/angular-headless/path', importKeyword: 'export'},
				},
			],
			options: ['@agnos-ui/angular-headless'],
			output: 'export {something} from "@agnos-ui/angular-headless/path";',
		},
	];

	ruleTester.run('check-replace-imports', checkReplaceImportsRule, {
		valid: [
			{
				code: '',
				options: ['@agnos-ui/core'],
			},
			...invalid
				.filter(({output}) => !!output)
				.map(({output, options}) => ({
					code: output!,
					options,
				})),
		],
		invalid,
	});
});
