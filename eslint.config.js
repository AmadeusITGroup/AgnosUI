// @ts-check

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vitest from '@vitest/eslint-plugin';
import playwright from 'eslint-plugin-playwright';
import agnosUi from '@agnos-ui/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import react from 'eslint-plugin-react';
import svelteParser from 'svelte-eslint-parser';
import angular from 'angular-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
	// global ignores
	{
		ignores: [
			'**/node_modules',
			'**/dist',
			'**/.angular',
			'**/coverage/',
			'**/playwright-report/',
			'**/test-results/',
			'**/.svelte-kit/',
			'demo/vite-env.d.ts',
			'demo/src/app.d.ts',
			'eslint-plugin/test/file.svelte',
			'verdaccio/storage',
			'**/.wireit',
			'svelte/preprocess/test/files/transformed',
			'**/*.gen.ts',
			'**/generated/',
			'eslint.config.js',
			'.prettierrc.js',
			'.syncpackrc.js',
		],
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},

	eslintConfigPrettier,
	{
		...playwright.configs['flat/recommended'],
		files: ['e2e/**'],
		rules: {
			...playwright.configs['flat/recommended'].rules,
			'playwright/no-conditional-in-test': 'off',
			'playwright/expect-expect': 'error',
		},
	},
	{
		files: ['**/*.spec.ts'],
		ignores: ['e2e/**'],
		plugins: {
			vitest,
		},
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/expect-expect': [
				'error',
				{
					assertFunctionNames: ['expect*'],
				},
			],
			'vitest/valid-title': [
				'error',
				{
					allowArguments: true,
				},
			],
			'vitest/valid-expect': ['off'],
		},
	},
	{
		files: ['**/*.{js,jsx,ts,tsx,svelte}'],
		extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
		plugins: {
			'@agnos-ui': agnosUi,
		},
		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'prefer-const': [
				'error',
				{
					destructuring: 'all',
				},
			],
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/unbound-method': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowInterfaces: 'with-single-extends',
				},
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					disallowTypeAnnotations: false,
				},
			],
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: false,
				},
			],
		},
	},
	// files using node apis
	{
		files: ['**/scripts/**/*.js', '**/tailwind.config.js', 'verdaccio/publish.js', 'react/ssr-app/server.js', '**/svelte.config.js'],

		languageOptions: {
			globals: {
				...globals.node,
			},
		},

		rules: {
			'@typescript-eslint/no-var-requires': 'off',
		},
	},
	// angular
	{
		files: ['angular/**/*.ts'],
		extends: [...angular.configs.tsRecommended],
		processor: angular.processInlineTemplates,
		rules: {
			'@angular-eslint/no-host-metadata-property': 'off',
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case',
				},
			],
		},
	},
	{
		files: ['angular/**/*.component.ts', 'angular/**/*.directive.ts'],
		rules: {
			'@angular-eslint/prefer-on-push-component-change-detection': 'error',
		},
	},
	{
		files: ['angular/headless/src/**/*.ts'],
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'au',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'au',
					style: 'camelCase',
				},
			],
			'@angular-eslint/no-input-rename': 'off',
			'@angular-eslint/no-output-rename': 'off',
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/core'],
			'@agnos-ui/angular-check-props': 'error',
		},
	},
	{
		files: ['angular/bootstrap/src/**/*.ts'],
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'au',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'au',
					style: 'camelCase',
				},
			],
			'@angular-eslint/no-output-rename': 'off',
			'@angular-eslint/no-input-rename': 'off',
			'@agnos-ui/angular-check-props': 'error',
		},
	},
	{
		files: ['angular/**/*.html'],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		rules: {
			'@angular-eslint/template/elements-content': 'off',
			'@angular-eslint/template/prefer-self-closing-tags': 'error',
		},
	},
	// react
	{
		...react.configs.flat.recommended,
		files: ['react/**/*.{tsx,jsx}'],
	},
	{
		...react.configs.flat['jsx-runtime'],
		files: ['react/**/*.{tsx,jsx}'],
	},
	{
		plugins: {
			['react-hooks']: reactHooks,
		},
		rules: reactHooks.configs.recommended.rules,
		files: ['react/**/*.{tsx,jsx}'],
	},
	{
		files: ['react/headless/src/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/core'],
		},
	},
	{
		files: ['react/bootstrap/src/**', 'react/demo/src/daisyui/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/react-headless'],
		},
	},
	{
		files: ['react/demo/src/bootstrap/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/react-bootstrap'],
		},
	},
	// svelte
	...eslintPluginSvelte.configs['flat/prettier'].map((config) => ({
		...config,
		files: ['demo/**/*.svelte', 'svelte/**/*.svelte'],
	})),
	{
		files: ['**/*.svelte'],
		rules: {
			'prefer-const': ['off'],
		},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		files: ['svelte/headless/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/core'],
		},
	},
	{
		files: ['svelte/bootstrap/**', 'svelte/demo/src/daisyui/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/svelte-headless'],
		},
	},
	{
		files: ['svelte/demo/src/bootstrap/**', 'svelte/demo/src/daisyui/**'],
		rules: {
			'svelte/no-at-html-tags': 'off',
		},
	},
	{
		files: ['svelte/demo/src/bootstrap/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/svelte-bootstrap'],
		},
	},
	{
		files: ['svelte/demo/src/bootstrap/samples/focustrack/Focustrack.route.svelte'],
		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
	// jsdoc,
	{
		files: ['{core,core-bootstrap}/src/**/*.{ts,tsx}', '{angular,react,svelte}/{headless,bootstrap}/src/**/*.{ts,tsx}'],
		ignores: ['**/*.spec.ts', 'angular/bootstrap/src/**/*.component.ts'],
		plugins: {
			jsdoc,
		},
		rules: {
			...jsdoc.configs['flat/recommended-typescript-error'].rules,
			'jsdoc/tag-lines': 'off',
			'jsdoc/check-tag-names': [
				'error',
				{
					definedTags: ['remarks', 'defaultValue'],
				},
			],
			'jsdoc/require-jsdoc': [
				'error',
				{
					publicOnly: true,
					contexts: [
						'TSInterfaceDeclaration > TSInterfaceBody > TSPropertySignature',
						'TSInterfaceDeclaration > TSInterfaceBody > TSMethodSignature',
						'TSTypeAliasDeclaration > TSTypeLiteral > TSPropertySignature',
						'TSTypeAliasDeclaration > TSTypeLiteral > TSMethodSignature',
						'TSInterfaceDeclaration',
						'TSTypeAliasDeclaration',
					],
					require: {
						FunctionExpression: true,
						ArrowFunctionExpression: true,
						FunctionDeclaration: true,
						MethodDefinition: true,
					},
					checkConstructors: false,
				},
			],
			'jsdoc/require-template': ['error'],
		},
	},
	// demo
	{
		files: ['demo/src/**'],
		rules: {
			'@agnos-ui/check-replace-imports': ['error', '@agnos-ui/svelte-bootstrap'],
		},
	},
	{
		files: ['demo/src/service-worker.ts'],
		languageOptions: {
			parserOptions: {
				project: 'demo/tsconfig.sw.json',
				projectService: false,
			},
		},
	},
);
