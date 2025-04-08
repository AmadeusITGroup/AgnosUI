import type {InvalidTestCase} from '@typescript-eslint/rule-tester';
import {RuleTester} from '@typescript-eslint/rule-tester';
import type {TSESLint} from '@typescript-eslint/utils';

import {angularCheckPropsRule} from '../src/angular-check-props';
import eslintParser from '@typescript-eslint/parser';

RuleTester.describe('angular-check-props', () => {
	const codeTemplate = (classContent: string, widgetProps: string, events = '{}') =>
		`import { Component, input, output } from "@angular/core";\nfunction auBooleanAttribute(value: unknown): boolean | undefined {return false;}\nfunction auNumberAttribute(value: unknown): number | undefined {return false;}\nimport type {BaseWidgetDirective} from "@agnos-ui/angular-headless";\ninterface MyWidgetProps {\n${widgetProps}\n}\ninterface MyWidget {\n\tpatch(props: Partial<MyWidgetProps>): void\n}\nconst callWidgetFactory: (factory: any, config: any) => MyWidget;\n@Component({})\nclass MyComponent extends BaseWidgetDirective<any>{\n${classContent}\n\tconstructor(){super(callWidgetFactory(() => {}, {events: ${events}}));}\n}`;

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

	const invalid: InvalidTestCase<MessageIds<typeof angularCheckPropsRule>, []>[] = [
		{
			name: 'extra input',
			code: codeTemplate('someInput = input();', ''),
			errors: [{messageId: 'extraProp', data: {type: 'input', name: 'someInput'}}],
			output: codeTemplate('', ''),
		},
		{
			name: 'extra output',
			code: codeTemplate('someOutput = output<boolean>();', ''),
			errors: [{messageId: 'extraProp', data: {type: 'output', name: 'someOutput'}}],
			output: codeTemplate('', ''),
		},
		{
			name: 'missing string input',
			code: codeTemplate('', 'myProp: string;'),
			errors: [{messageId: 'missingProp', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n", 'myProp: string;'),
		},
		{
			name: 'missing boolean input',
			code: codeTemplate('', 'myProp: boolean;'),
			errors: [{messageId: 'missingProp', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\treadonly myProp = input(undefined, {alias: 'auMyProp', transform: auBooleanAttribute});\n", 'myProp: boolean;'),
		},
		{
			name: 'missing number input',
			code: codeTemplate('', 'myProp: number;'),
			errors: [{messageId: 'missingProp', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\treadonly myProp = input(undefined, {alias: 'auMyProp', transform: auNumberAttribute});\n", 'myProp: number;'),
		},
		{
			name: 'missing number output',
			code: codeTemplate('', 'onMyEvent(value: number): void;'),
			errors: [{messageId: 'missingProp', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\tonMyEvent: (event) => this.myEvent.emit(event),}',
			),
		},
		{
			name: 'missing void output',
			code: codeTemplate('', 'onMyEvent(): void;'),
			errors: [{messageId: 'missingProp', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output({alias: 'auMyEvent'});\n",
				'onMyEvent(): void;',
				'{\n\t\tonMyEvent: (event) => this.myEvent.emit(event),}',
			),
		},
		{
			name: 'missing number output',
			code: codeTemplate('', 'onMyEvent(value: number): void;', '{\n\t\t\tonMyEvent: undefined,\n\t\t}'),
			errors: [{messageId: 'missingProp', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'missing output emit',
			code: codeTemplate("\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n", 'onMyEvent(value: number): void;'),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\tonMyEvent: (event) => this.myEvent.emit(event),}',
			),
		},
		{
			name: 'another missing output emit',
			code: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tsomethingElse: null\n\t\t}',
			),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t\tsomethingElse: null\n\t\t}',
			),
		},
		{
			name: 'yet another missing output emit',
			code: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: undefined,\n\t\t}',
			),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'yet yet another missing output emit',
			code: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (param) => {\n\t\t\t\tsomethingElse();\n\t\t\t},\n\t\t}',
			),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (param) => {\n\t\t\t\tsomethingElse();\n\t\t\t\n\t\t\t\tthis.myEvent.emit(param);\n\t\t\t},\n\t\t}',
			),
		},
		{
			name: 'invalid prop type',
			code: codeTemplate("\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n", 'myProp: RegExp;'),
			errors: [{messageId: 'invalidPropType', data: {type: 'input', name: 'myProp', expectedType: 'RegExp', foundType: 'string'}}],
			output: codeTemplate("\n\treadonly myProp = input<RegExp>(undefined, {alias: 'auMyProp'});\n", 'myProp: RegExp;'),
		},
		{
			name: 'missing alias',
			code: codeTemplate('\n\treadonly myProp = input<string>();\n', 'myProp: string;'),
			errors: [{messageId: 'inputInvalidArgs', data: {name: 'myProp', metadata: "{alias: 'auMyProp'}"}}],
			output: codeTemplate("\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n", 'myProp: string;'),
		},
		{
			name: 'missing boolean transform',
			code: codeTemplate("\n\treadonly myProp = input<boolean>(undefined, {alias: 'auMyProp'});\n", 'myProp: boolean;'),
			errors: [{messageId: 'inputInvalidArgs', data: {name: 'myProp', metadata: "{alias: 'auMyProp', transform: auBooleanAttribute}"}}],
			output: codeTemplate("\n\treadonly myProp = input(undefined, {alias: 'auMyProp', transform: auBooleanAttribute});\n", 'myProp: boolean;'),
		},
		{
			name: 'missing number transform',
			code: codeTemplate("\n\treadonly myProp = input<number>(undefined, {alias: 'auMyProp'});\n", 'myProp: number;'),
			errors: [{messageId: 'inputInvalidArgs', data: {name: 'myProp', metadata: "{alias: 'auMyProp', transform: auNumberAttribute}"}}],
			output: codeTemplate("\n\treadonly myProp = input(undefined, {alias: 'auMyProp', transform: auNumberAttribute});\n", 'myProp: number;'),
		},
		{
			name: 'missing output alias',
			code: codeTemplate(
				'\n\treadonly myEvent = output<string>();\n',
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'invalidAlias', data: {name: 'myEvent', type: 'output', alias: 'auMyEvent'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<string>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'invalid output type',
			code: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [
				{
					messageId: 'invalidPropType',
					data: {type: 'output', name: 'myEvent', expectedType: 'output<string>', foundType: 'output<number>'},
				},
			],
			output: codeTemplate(
				"\n\treadonly myEvent = output<string>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'invalid void output type',
			code: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'onMyEvent(): void;',
				'{\n\t\t\tonMyEvent: () => this.myEvent.emit(),\n\t\t}',
			),
			errors: [
				{
					messageId: 'invalidPropType',
					data: {type: 'output', name: 'myEvent', expectedType: 'output<void>', foundType: 'output<number>'},
				},
			],
			output: codeTemplate(
				"\n\treadonly myEvent = output({alias: 'auMyEvent'});\n",
				'onMyEvent(): void;',
				'{\n\t\t\tonMyEvent: () => this.myEvent.emit(),\n\t\t}',
			),
		},
		{
			name: 'invalid string or number output type',
			code: codeTemplate(
				"\n\treadonly myEvent = output({alias: 'auMyEvent'});\n",
				'onMyEvent(value: string | number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [
				{
					messageId: 'invalidPropType',
					data: {type: 'output', name: 'myEvent', expectedType: 'output<string | number>', foundType: 'output<void>'},
				},
			],
			output: codeTemplate(
				"\n\treadonly myEvent = output<string | number>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: string | number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'invalid date output type',
			code: codeTemplate(
				"\n\treadonly myEvent = output<string>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: Date): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'invalidPropType', data: {type: 'output', name: 'myEvent', expectedType: 'output<Date>', foundType: 'output<string>'}}],
			output: codeTemplate(
				"\n\treadonly myEvent = output<Date>({alias: 'auMyEvent'});\n",
				'onMyEvent(value: Date): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'missing input jsdoc',
			code: codeTemplate("\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n", '/** mypropdoc */\nmyProp: string;'),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate(
				"\n\t/**\n\t * mypropdoc\n\t */\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n",
				'/** mypropdoc */\nmyProp: string;',
			),
		},
		{
			name: 'invalid input jsdoc',
			code: codeTemplate(
				"\n\t/**\n\t * mywrongpropdoc\n\t */\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n",
				'/** myrightpropdoc */\nmyProp: string;',
			),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate(
				"\n\t\n\t/**\n\t * myrightpropdoc\n\t */\n\treadonly myProp = input<string>(undefined, {alias: 'auMyProp'});\n",
				'/** myrightpropdoc */\nmyProp: string;',
			),
		},
		{
			name: 'missing output jsdoc',
			code: codeTemplate(
				"\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'/** myeventdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\t/**\n\t * myeventdoc\n\t */\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'/** myeventdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			name: 'invalid output jsdoc',
			code: codeTemplate(
				"\n\t/**\n\t * myeventwrongdoc\n\t */\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'/** myeventrightdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\t\n\t/**\n\t * myeventrightdoc\n\t */\n\treadonly myEvent = output<number>({alias: 'auMyEvent'});\n",
				'/** myeventrightdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
	];

	ruleTester.run('angular-check-props', angularCheckPropsRule, {
		valid: [
			{
				name: 'empty code',
				code: '',
			},
			{
				name: 'empty component',
				code: `import { Component } from "@angular/core";\n@Component({})\nclass MyComponent {}`,
			},
			{
				name: 'component with no props',
				code: codeTemplate('', ''),
			},
			{
				name: 'component with no props and extra output',
				code: `import {a} from 'something';\n${codeTemplate('[`some${a}`] = output<string>();', '')}`,
			},
			...invalid
				.filter(({output}) => !!output)
				.map(({output, name}) => ({
					code: Array.isArray(output!) ? output.join('') : output!,
					name: `fix: ${name}`,
				})),
		],
		invalid,
	});
});
