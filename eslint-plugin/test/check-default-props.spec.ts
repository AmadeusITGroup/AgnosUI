import type {InvalidTestCase} from '@typescript-eslint/rule-tester';
import {RuleTester} from '@typescript-eslint/rule-tester';
import type {TSESLint} from '@typescript-eslint/utils';
import {checkDefaultPropsRule} from '../src/check-default-props';
import eslintParser from '@typescript-eslint/parser';

RuleTester.describe('check-default-propss', () => {
	const ruleTester = new RuleTester({
		languageOptions: {
			parser: eslintParser,
			parserOptions: {
				project: './tsconfig.test.json',
				tsconfigRootDir: __dirname,
			},
		},
	});

	type MessageIds<T extends TSESLint.RuleModule<any, any>> = T extends TSESLint.RuleModule<infer U, any> ? U : never;

	const invalid: InvalidTestCase<MessageIds<typeof checkDefaultPropsRule>, []>[] = [
		{
			code: `
export interface MyType {
	a: number;
}
export function getMyWidgetDefaultConfig(): MyType {
	return {a: 1};
}`,
			output: `
export interface MyType {
	/**
	 *
	 * @defaultValue \`1\`
	 */
	a: number;
}
export function getMyWidgetDefaultConfig(): MyType {
	return {a: 1};
}`,
			errors: [
				{
					messageId: 'missingDefaultValue',
					data: {
						propName: 'a',
						defaultValue: '1',
					},
				},
			],
		},
		{
			code: `
export interface MyType {
	/**
	 * Very useful property
	 */
	a: number;
}
export function getMyWidgetDefaultConfig(): MyType {
	return {a: 2};
}`,
			output: `
export interface MyType {
	/**
	 * Very useful property
	 *
	 * @defaultValue \`2\`
	 */
	a: number;
}
export function getMyWidgetDefaultConfig(): MyType {
	return {a: 2};
}`,
			errors: [
				{
					messageId: 'missingDefaultValue',
					data: {
						propName: 'a',
						defaultValue: '2',
					},
				},
			],
		},
		{
			code: `
export interface MyType {
	/**
	 * Very useful property
	 *
	 * @defaultValue \`2\`
	 */
	a: number;
}
const defValues = {a: 3};
export function getMyWidgetDefaultConfig(): MyType {
	return defValues;
}`,
			output: `
export interface MyType {
	/**
	 * Very useful property
	 *
	 * @defaultValue \`3\`
	 */
	a: number;
}
const defValues = {a: 3};
export function getMyWidgetDefaultConfig(): MyType {
	return defValues;
}`,
			errors: [
				{
					messageId: 'incorrectDefaultValue',
					data: {
						propName: 'a',
						foundValue: '2',
						defaultValue: '3',
					},
				},
			],
		},
		{
			code: `
export interface MyType {
	/**
	 * Very useful property
	 *
	 * @defaultValue \`2\`
	 */
	a: number | undefined;
}
const defValues = {a: undefined};
export function getMyWidgetDefaultConfig(): MyType {
	return defValues;
}`,
			output: `
export interface MyType {
	/**
	 * Very useful property
	 */
	a: number | undefined;
}
const defValues = {a: undefined};
export function getMyWidgetDefaultConfig(): MyType {
	return defValues;
}`,
			errors: [
				{
					messageId: 'expectedNoDefaultValue',
					data: {
						propName: 'a',
					},
				},
			],
		},
		{
			code: `
export interface MyType1 {
	/**
	 * My super property
	 */
	propA: any;
}
export interface MyType2 extends MyType1 {}
function myOtherFn() {
	return {
		propA: 'myDefaultValue'
	} as any;
}
const myFn = () => ({...myOtherFn()});

export function getMyWidgetDefaultConfig(): MyType2 {
	return myFn();
}
`,
			output: `
export interface MyType1 {
	/**
	 * My super property
	 *
	 * @defaultValue \`'myDefaultValue'\`
	 */
	propA: any;
}
export interface MyType2 extends MyType1 {}
function myOtherFn() {
	return {
		propA: 'myDefaultValue'
	} as any;
}
const myFn = () => ({...myOtherFn()});

export function getMyWidgetDefaultConfig(): MyType2 {
	return myFn();
}
`,
			errors: [
				{
					messageId: 'missingDefaultValue',
					data: {
						propName: 'propA',
						defaultValue: "'myDefaultValue'",
					},
				},
			],
		},
		{
			code: `
export interface MyType {
	/**
	 * My mysterious property
	 */
	mysteriousProp: any;
}
export function getMyWidgetDefaultConfig(): MyType {
	return window.myConfig;
}
`,
			errors: [{messageId: 'staticAnalysisError', data: {error: 'unexpected kind of expression'}}],
		},
		{
			code: `
export interface MyType {
	/**
	 * My mysterious property
	 */
	mysteriousProp: any;
}
export function getMyWidgetDefaultConfig(): MyType {
	return {[window.myProp]: 'myValue'};
}
`,

			errors: [{messageId: 'staticAnalysisError', data: {error: 'unexpected kind of property'}}],
		},
		{
			code: `
export interface MyType {
	/**
	 * My mysterious property
	 */
	mysteriousProp: any;
}
export function getMyWidgetDefaultConfig(): MyType {
	if (window.something) {
		return {mysteriousProp: 'myValue1'};
	}
	return {mysteriousProp: 'myValue2'};
}
`,

			errors: [{messageId: 'staticAnalysisError', data: {error: 'unexpected kind of function'}}],
		},
	];

	ruleTester.run('check-default-props', checkDefaultPropsRule, {
		valid: [
			{
				code: '',
			},
			...invalid
				.filter(({output}) => !!output)
				.map(({output}) => ({
					code: Array.isArray(output!) ? output.join('') : output!,
				})),
		],
		invalid,
	});
});
