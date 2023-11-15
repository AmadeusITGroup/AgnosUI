import type {InvalidTestCase} from '@typescript-eslint/rule-tester';
import {RuleTester} from '@typescript-eslint/rule-tester';
import type {TSESLint} from '@typescript-eslint/utils';
import {afterAll, describe, test} from 'vitest';
import {angularCheckPropsRule} from '../src/angular-check-props';

RuleTester.describe = describe;
RuleTester.it = test;
RuleTester.afterAll = afterAll;

describe('angular-check-props', () => {
	const codeTemplate = (classContent: string, widgetProps: string, events = '{}') =>
		`import { Component, EventEmitter } from "@angular/core";\ninterface MyWidgetProps {\n${widgetProps}\n}\ninterface MyWidget {\n\tpatch(props: Partial<MyWidgetProps>): void\n}\nconst callWidgetFactory: (config: any) => MyWidget;\n@Component({})\nclass MyComponent {\n${classContent}\n\t_widget = callWidgetFactory({events: ${events}});\n}`;

	const ruleTester = new RuleTester({
		parser: require.resolve('@typescript-eslint/parser'),
		parserOptions: {
			project: './tsconfig.test.json',
			tsconfigRootDir: __dirname,
		},
	});
	type MessageIds<T extends TSESLint.RuleModule<any, any>> = T extends TSESLint.RuleModule<infer U, any> ? U : never;

	const invalid: InvalidTestCase<MessageIds<typeof angularCheckPropsRule>, []>[] = [
		{
			code: codeTemplate('@Input() someInput;', ''),
			errors: [{messageId: 'extraProp', data: {type: 'input', name: 'someInput'}}],
			output: codeTemplate('', ''),
		},
		{
			code: codeTemplate('@Output() someOutput = new EventEmitter<boolean>();', ''),
			errors: [{messageId: 'extraProp', data: {type: 'output', name: 'someOutput'}}],
			output: codeTemplate('', ''),
		},
		{
			code: codeTemplate('', 'myProp: string;'),
			errors: [{messageId: 'missingProp', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\t@Input('auMyProp') myProp: string | undefined;\n", 'myProp: string;'),
		},
		{
			code: codeTemplate('', 'myProp: boolean;'),
			errors: [{messageId: 'missingProp', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\t@Input({alias: 'auMyProp', transform: auBooleanAttribute}) myProp: boolean | undefined;\n", 'myProp: boolean;'),
		},
		{
			code: codeTemplate('', 'myProp: number;'),
			errors: [{messageId: 'missingProp', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\t@Input({alias: 'auMyProp', transform: auNumberAttribute}) myProp: number | undefined;\n", 'myProp: number;'),
		},
		{
			code: codeTemplate('', 'onMyEvent(value: number): void;'),
			errors: [{messageId: 'missingProp', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\tonMyEvent: (event) => this.myEvent.emit(event),}',
			),
		},
		{
			code: codeTemplate('', 'onMyEvent(value: number): void;', '{\n\t\t\tonMyEvent: undefined,\n\t\t}'),
			errors: [{messageId: 'missingProp', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate("\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n", 'onMyEvent(value: number): void;'),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\tonMyEvent: (event) => this.myEvent.emit(event),}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tsomethingElse: null\n\t\t}',
			),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t\tsomethingElse: null\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: undefined,\n\t\t}',
			),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (param) => {\n\t\t\t\tsomethingElse();\n\t\t\t},\n\t\t}',
			),
			errors: [{messageId: 'missingOutputEmit', data: {name: 'myEvent', widgetProp: 'onMyEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (param) => {\n\t\t\t\tsomethingElse();\n\t\t\t\n\t\t\t\tthis.myEvent.emit(param);\n\t\t\t},\n\t\t}',
			),
		},
		{
			code: codeTemplate("\n\t@Input({alias: 'auMyProp', transform: auBooleanAttribute}) myProp: boolean;\n", 'myProp: boolean;'),
			errors: [{messageId: 'invalidPropType', data: {type: 'input', name: 'myProp', expectedType: 'boolean | undefined', foundType: 'boolean'}}],
			output: codeTemplate("\n\t@Input({alias: 'auMyProp', transform: auBooleanAttribute}) myProp: boolean | undefined;\n", 'myProp: boolean;'),
		},
		{
			code: codeTemplate("\n\t@Input('auMyProp') myProp: number | undefined;\n", 'myProp: RegExp;'),
			errors: [
				{messageId: 'invalidPropType', data: {type: 'input', name: 'myProp', expectedType: 'RegExp | undefined', foundType: 'number | undefined'}},
			],
			output: codeTemplate("\n\t@Input('auMyProp') myProp: RegExp | undefined;\n", 'myProp: RegExp;'),
		},
		{
			code: codeTemplate('\n\t@Input() myProp: string | undefined;\n', 'myProp: string;'),
			errors: [{messageId: 'invalidAlias', data: {name: 'myProp', type: 'input', alias: 'auMyProp'}}],
			output: codeTemplate("\n\t@Input('auMyProp') myProp: string | undefined;\n", 'myProp: string;'),
		},
		{
			code: codeTemplate('\n\t@Input() myProp: boolean | undefined;\n', 'myProp: boolean;'),
			errors: [{messageId: 'invalidBooleanMeta', data: {name: 'myProp', metadata: "{alias: 'auMyProp', transform: auBooleanAttribute}"}}],
			output: codeTemplate("\n\t@Input({alias: 'auMyProp', transform: auBooleanAttribute}) myProp: boolean | undefined;\n", 'myProp: boolean;'),
		},
		{
			code: codeTemplate('\n\t@Input() myProp: number | undefined;\n', 'myProp: number;'),
			errors: [{messageId: 'invalidNumberMeta', data: {name: 'myProp', metadata: "{alias: 'auMyProp', transform: auNumberAttribute}"}}],
			output: codeTemplate("\n\t@Input({alias: 'auMyProp', transform: auNumberAttribute}) myProp: number | undefined;\n", 'myProp: number;'),
		},
		{
			code: codeTemplate(
				'\n\t@Output() myEvent = new EventEmitter<string>();\n',
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'invalidAlias', data: {name: 'myEvent', type: 'output', alias: 'auMyEvent'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<string>();\n",
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [
				{
					messageId: 'invalidPropType',
					data: {type: 'output', name: 'myEvent', expectedType: 'EventEmitter<string>', foundType: 'EventEmitter<number>'},
				},
			],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<string>();\n",
				'onMyEvent(value: string): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'onMyEvent(): void;',
				'{\n\t\t\tonMyEvent: () => this.myEvent.emit(),\n\t\t}',
			),
			errors: [
				{
					messageId: 'invalidPropType',
					data: {type: 'output', name: 'myEvent', expectedType: 'EventEmitter<void>', foundType: 'EventEmitter<number>'},
				},
			],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<void>();\n",
				'onMyEvent(): void;',
				'{\n\t\t\tonMyEvent: () => this.myEvent.emit(),\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter();\n",
				'onMyEvent(value: string | number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [
				{
					messageId: 'invalidPropType',
					data: {type: 'output', name: 'myEvent', expectedType: 'EventEmitter<string | number>', foundType: 'EventEmitter<any>'},
				},
			],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<string | number>();\n",
				'onMyEvent(value: string | number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent;\n",
				'onMyEvent(value: Date): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'invalidPropType', data: {type: 'output', name: 'myEvent', expectedType: 'EventEmitter<Date>', foundType: 'any'}}],
			output: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<Date>();\n",
				'onMyEvent(value: Date): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate("\n\t@Input('auMyProp') myProp: string | undefined;\n", '/** mypropdoc */\nmyProp: string;'),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate("\n\t/**\n\t * mypropdoc\n\t */\n\t@Input('auMyProp') myProp: string | undefined;\n", '/** mypropdoc */\nmyProp: string;'),
		},
		{
			code: codeTemplate(
				"\n\t/**\n\t * mywrongpropdoc\n\t */\n\t@Input('auMyProp') myProp: string | undefined;\n",
				'/** myrightpropdoc */\nmyProp: string;',
			),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'input', name: 'myProp'}}],
			output: codeTemplate(
				"\n\t\n\t/**\n\t * myrightpropdoc\n\t */\n\t@Input('auMyProp') myProp: string | undefined;\n",
				'/** myrightpropdoc */\nmyProp: string;',
			),
		},
		{
			code: codeTemplate(
				"\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'/** myeventdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\t/**\n\t * myeventdoc\n\t */\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'/** myeventdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
		{
			code: codeTemplate(
				"\n\t/**\n\t * myeventwrongdoc\n\t */\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'/** myeventrightdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
			errors: [{messageId: 'nonMatchingPropDoc', data: {type: 'output', name: 'myEvent'}}],
			output: codeTemplate(
				"\n\t\n\t/**\n\t * myeventrightdoc\n\t */\n\t@Output('auMyEvent') myEvent = new EventEmitter<number>();\n",
				'/** myeventrightdoc */\nonMyEvent(value: number): void;',
				'{\n\t\t\tonMyEvent: (event) => this.myEvent.emit(event),\n\t\t}',
			),
		},
	];

	ruleTester.run('angular-check-props', angularCheckPropsRule, {
		valid: [
			{
				code: '',
			},
			{
				code: `import { Component } from "@angular/core";\n@Component({})\nclass MyComponent {}`,
			},
			{
				code: `import { Component } from "@angular/core";\n@Component({})\nclass MyComponent {_widget = {};}`,
			},
			{
				code: `import { Component } from "@angular/core";\n@Component({})\nclass MyComponent {_widget = {patch(){}};}`,
			},
			{
				code: codeTemplate('', ''),
			},
			{
				code: `import {a} from 'something';\n${codeTemplate('[`some${a}`] = new EventEmitter<string>();', '')}`,
			},
			...invalid
				.filter(({output}) => !!output)
				.map(({output}) => ({
					code: output!,
				})),
		],
		invalid,
	});
});
