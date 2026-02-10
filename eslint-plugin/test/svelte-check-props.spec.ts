import type {InvalidTestCase} from '@typescript-eslint/rule-tester';
import {RuleTester} from '@typescript-eslint/rule-tester';
import {afterAll, describe, test} from 'vitest';
import {svelteCheckPropsRule} from '../src/svelte-check-props';
import svelteParser from 'svelte-eslint-parser';
import eslintPluginSvelte from 'eslint-plugin-svelte';

RuleTester.describe = describe;
RuleTester.it = test;
RuleTester.afterAll = afterAll;

describe('svelte-check-props', () => {
	// Utility helpers
	const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
	const toEventName = (prop: string) => `on${capitalize(prop)}Change`;

	// Event handler generators
	const eventHandler = (prop: string, param = 'value', extraCode = '') => `{${toEventName(prop)}: (${param}) => { ${extraCode}${prop} = ${param}; }}`;

	const eventHandlerArrow = (prop: string, param = 'value') => `{${toEventName(prop)}: (${param}) => ${prop} = ${param}}`;

	// Expected output from the ESLint fixer
	const fixedEventHandler = (prop: string, param = 'value') =>
		['{', `\t${toEventName(prop)}: (${param}) => {`, `\t${prop} = ${param};`, '},}'].join('\n');

	// Widget props definitions
	const WIDGET_PROPS = {
		someProp: 'someProp: string; onSomePropChange: (event: string) => void;',
		somePropNumber: 'someProp: number; onSomePropChange: (event: number) => void;',
		rating: 'rating: number; onRatingChange: (event: number) => void;',
	};

	// Generates a complete Svelte component template with module/instance scripts
	const codeTemplate = (propsType: string, propsDestructure: string, widgetProps: string, events = '{}') => `<script lang="ts" context="module">
interface MyWidgetProps {
${widgetProps}
}
interface MyWidget {
	patch(props: Partial<MyWidgetProps>): void;
	api: {};
	directives: {};
	state: {};
}
const createWidget: () => MyWidget;
const callWidgetFactory: <W>(factory: () => W, options: any) => W;
declare function $props<T>(): T;
declare function $bindable<T>(val?: T): T;
</script><script lang="ts">
let {${propsDestructure}...props}: ${propsType} = $props<${propsType}>();
const widget = callWidgetFactory(createWidget, {
	get props() { return props; },
	events: ${events},
});
</script>`;

	const ruleTester = new RuleTester({
		plugins: {svelte: eslintPluginSvelte},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				project: './tsconfig.test.json',
				tsconfigRootDir: __dirname,
				extraFileExtensions: ['.svelte'],
			},
		},
	});

	const invalid: InvalidTestCase<
		'extraBindable' | 'missingBindable' | 'invalidBindableType' | 'missingEventHandler' | 'missingBindingAssignment',
		[]
	>[] = [
		{
			name: 'reports extraBindable when $bindable has no corresponding widget event',
			filename: 'file.svelte',
			code: codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', ''),
			errors: [{messageId: 'extraBindable', data: {name: 'someProp'}}],
		},
		{
			name: 'reports missingBindable when widget has onChange but component lacks $bindable',
			filename: 'file.svelte',
			code: codeTemplate('{}', '', WIDGET_PROPS.someProp),
			errors: [{messageId: 'missingBindable', data: {name: 'someProp'}}],
			output: [
				codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', WIDGET_PROPS.someProp),
				codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', WIDGET_PROPS.someProp, fixedEventHandler('someProp')),
			],
		},
		{
			name: 'reports invalidBindableType when bindable type mismatches widget prop type',
			filename: 'file.svelte',
			code: codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', WIDGET_PROPS.somePropNumber, eventHandler('someProp')),
			errors: [{messageId: 'invalidBindableType', data: {name: 'someProp', expectedType: 'number', foundType: 'string | undefined'}}],
		},
		{
			name: 'reports missingEventHandler when bindable exists but events object lacks handler',
			filename: 'file.svelte',
			code: codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', WIDGET_PROPS.someProp),
			errors: [{messageId: 'missingEventHandler', data: {name: 'someProp', widgetProp: 'onSomePropChange'}}],
			output: codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', WIDGET_PROPS.someProp, fixedEventHandler('someProp')),
		},
		{
			name: 'reports missingBindingAssignment when handler exists but lacks assignment to bindable',
			filename: 'file.svelte',
			code: codeTemplate(
				'{someProp?: string}',
				'someProp = $bindable(), ',
				WIDGET_PROPS.someProp,
				'{onSomePropChange: (event) => { console.log(event); }}',
			),
			errors: [{messageId: 'missingBindingAssignment', data: {name: 'someProp', widgetProp: 'onSomePropChange'}}],
			output: codeTemplate(
				'{someProp?: string}',
				'someProp = $bindable(), ',
				WIDGET_PROPS.someProp,
				'{onSomePropChange: (event) => { console.log(event); \tsomeProp = event;\n}}',
			),
		},
	];

	const valid = [
		{
			name: 'passes with empty code',
			filename: 'file.svelte',
			code: '',
		},
		{
			name: 'passes when no widget factory call exists',
			filename: 'file.svelte',
			code: '<script lang="ts">let {x = $bindable(), ...props} = $props();</script>',
		},
		{
			name: 'passes when widget has no bindable props',
			filename: 'file.svelte',
			code: codeTemplate('{}', '', ''),
		},
		{
			name: 'passes when bindable has matching event handler with block body assignment',
			filename: 'file.svelte',
			code: codeTemplate('{someProp?: string}', 'someProp = $bindable(), ', WIDGET_PROPS.someProp, eventHandler('someProp')),
		},
		{
			name: 'passes when bindable has matching event handler with arrow expression assignment',
			filename: 'file.svelte',
			code: codeTemplate('{rating?: number}', 'rating = $bindable(), ', WIDGET_PROPS.rating, eventHandlerArrow('rating')),
		},
		{
			name: 'passes with multiple bindables each having correct handlers',
			filename: 'file.svelte',
			code: codeTemplate(
				'{someProp?: string; rating?: number}',
				'someProp = $bindable(), rating = $bindable(), ',
				`${WIDGET_PROPS.someProp} ${WIDGET_PROPS.rating}`,
				'{onSomePropChange: (event) => { someProp = event; }, onRatingChange: (value) => rating = value}',
			),
		},
		{
			name: 'passes when bindable has default value',
			filename: 'file.svelte',
			code: codeTemplate('{someProp?: string}', "someProp = $bindable('default'), ", WIDGET_PROPS.someProp, eventHandler('someProp')),
		},
	];

	ruleTester.run('svelte-check-props', svelteCheckPropsRule, {
		valid,
		invalid,
	});
});
