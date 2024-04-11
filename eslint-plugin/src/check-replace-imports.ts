import type {TSESTree} from '@typescript-eslint/utils';
import {AST_NODE_TYPES, ESLintUtils} from '@typescript-eslint/utils';
import {SymbolFlags} from 'typescript';

const checkPackages = new Set<string>([
	'@agnos-ui/core',
	'@agnos-ui/angular-headless',
	'@agnos-ui/angular-bootstrap',
	'@agnos-ui/react-headless',
	'@agnos-ui/react-bootstrap',
	'@agnos-ui/svelte-headless',
	'@agnos-ui/svelte-bootstrap',
]);

const beforeRelevantPathRegExp = /^.*\/dist\//;
const pathSepRegExp = /[\\/]/g;
const componentsRegExp = /(?<=^components\/)[^/]+\//;
const suffixRegExp = /(?:\.d)?\.ts$/;

export const checkReplaceImportsRule = ESLintUtils.RuleCreator.withoutDocs({
	create(context) {
		const [validPackageName] = context.options;
		const nodeToString = (node: TSESTree.Node) => context.sourceCode.text.slice(node.range[0], node.range[1]).trim();
		const processImport = (
			node: TSESTree.ImportDeclaration | TSESTree.ImportExpression | TSESTree.ExportNamedDeclaration | TSESTree.ExportAllDeclaration,
		) => {
			const currentImport = node.source?.type === AST_NODE_TYPES.Literal ? node.source?.value : undefined;
			if (typeof currentImport !== 'string') {
				return;
			}
			const importParts = currentImport.split('/');
			let pkgName = importParts.shift()!;
			if (pkgName.startsWith('@')) {
				pkgName = `${pkgName}/${importParts.shift()}`;
			}
			if (checkPackages.has(pkgName)) {
				const isExport = node.type === AST_NODE_TYPES.ExportNamedDeclaration || node.type === AST_NODE_TYPES.ExportAllDeclaration;
				const importKeyword = isExport ? 'export' : 'import';
				if (importParts.length === 0) {
					let reportMissingSubpath = true;
					const canHaveSpecifiers = node.type === AST_NODE_TYPES.ImportDeclaration || node.type === AST_NODE_TYPES.ExportNamedDeclaration;
					const specifiers = canHaveSpecifiers
						? node.specifiers?.filter((specifier) => specifier.type !== AST_NODE_TYPES.ImportNamespaceSpecifier)
						: undefined;
					if (canHaveSpecifiers && specifiers && specifiers.length > 0) {
						const specifiersByPath = new Map<string, (TSESTree.ImportClause | TSESTree.ExportSpecifier)[]>();
						const parserServices = ESLintUtils.getParserServices(context);
						const checker = parserServices.program.getTypeChecker();
						for (const specifier of specifiers) {
							const tsIdentifier = parserServices.esTreeNodeToTSNodeMap.get(specifier.local);
							let symbol = checker.getSymbolAtLocation(tsIdentifier);
							if (symbol && symbol.flags & SymbolFlags.Alias) {
								symbol = checker.getImmediateAliasedSymbol(symbol);
							}
							const subPath = symbol?.declarations?.[0]
								.getSourceFile()
								?.fileName.replace(pathSepRegExp, '/')
								.replace(beforeRelevantPathRegExp, '')
								.replace(suffixRegExp, '')
								.replace(componentsRegExp, '');
							if (subPath) {
								let specifierForSubPath = specifiersByPath.get(subPath);
								if (!specifierForSubPath) {
									specifierForSubPath = [];
									specifiersByPath.set(subPath, specifierForSubPath);
								}
								specifierForSubPath.push(specifier);
							}
						}
						if (specifiersByPath.size > 1) {
							reportMissingSubpath = false;
							const kind = (node.type === AST_NODE_TYPES.ImportDeclaration ? node.importKind : node.exportKind) === 'type' ? ' type' : '';
							let correctImports = ``;
							for (const [subPath, specifier] of specifiersByPath) {
								correctImports += `${importKeyword}${kind} {${specifier
									.map((specifier) => nodeToString(specifier))
									.join(', ')}} from ${JSON.stringify(`${validPackageName}/${subPath}`)};\n`;
							}
							context.report({
								node,
								messageId: 'incorrectMultipleImport',
								data: {importKeyword, incorrectImport: currentImport, correctImports},
								fix: (fixer) => fixer.replaceText(node, correctImports),
							});
						} else if (specifiersByPath.size === 1) {
							reportMissingSubpath = false;
							importParts.push(specifiersByPath.keys().next().value);
						}
					}
					if (reportMissingSubpath) {
						context.report({
							node,
							messageId: 'missingSubPath',
							data: {importKeyword, incorrectImport: currentImport},
						});
					}
				}
				const correctImport = [validPackageName, ...importParts].join('/');
				if (correctImport !== currentImport) {
					context.report({
						node: node.source!,
						messageId: 'incorrectSingleImport',
						data: {importKeyword, incorrectImport: currentImport, correctImport},
						fix: (fixer) => fixer.replaceText(node.source!, JSON.stringify(correctImport)),
					});
				}
			}
		};

		return {
			ImportDeclaration: processImport,
			ImportExpression: processImport,
			ExportNamedDeclaration: processImport,
			ExportAllDeclaration: processImport,
		};
	},
	meta: {
		docs: {
			description: '',
			recommended: 'recommended',
		},
		fixable: 'code',
		messages: {
			incorrectSingleImport:
				'{{ importKeyword }} from "{{ incorrectImport }}" should be replaced with {{ importKeyword }} from "{{ correctImport }}".',
			incorrectMultipleImport:
				'{{ importKeyword }}s from "{{ incorrectImport }}" should be replaced with the following {{ importKeyword }}s:\n{{ correctImports }}',
			missingSubPath:
				'{{ importKeyword }} from "{{ incorrectImport }}" should include a sub-path inside the package but it could not be determined automatically.',
		},
		type: 'problem',
		schema: [
			{
				type: 'string',
			},
		],
	},
	defaultOptions: ['@agnos-ui/unspecified'] as [string],
});
