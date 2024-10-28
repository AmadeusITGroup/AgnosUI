import path from 'path';
import ts from 'typescript';
import type {Node} from 'typescript';
import {readdir, writeFile} from 'fs/promises';

/**
 * #######################################################
 * #### Generator of bootstrap component type exports ####
 * #######################################################
 *
 * This script takes a framework as input and parses through all components in the package core-bootstrap
 * to generate type exports in the package ${framework}/bootstrap.
 */

const root = path.resolve(import.meta.dirname, '../..');
const coreBootstrapComponents = path.join(root, 'core-bootstrap/src/components');

const framework = process.argv[2];

const program = ts.createProgram([path.join(root, 'core-bootstrap/src/index.ts')], {
	baseUrl: root,
	paths: {
		'@agnos-ui/core': ['./core/src'],
		'@agnos-ui/core/*': ['./core/src/*'],
	},
});
const typeChecker = program.getTypeChecker();

const hardCodedImports: Record<string, string> = {
	WidgetFactory: '@agnos-ui/core/types',
	PropsConfig: '@agnos-ui/core/types',
	ConfigValidator: '@agnos-ui/core/types',
};

/**
 * Utility method to resolve all used types from some provided typescript code.
 *
 * @param nodes the typescript source code nodes
 * @returns the map to import used types
 */
function getTypesImportsMap(nodes: Node[], excludedNames: Set<string>) {
	const importsByModule = new Map<string, string[]>();
	const processedNames = new Set<string>(excludedNames);

	function visit(node: Node) {
		if (ts.isIdentifier(node)) {
			const name = node.text;
			if (!processedNames.has(name)) {
				let symbol = typeChecker.getSymbolAtLocation(node);
				let moduleSpecifier: string | undefined;
				while (symbol && symbol.flags & ts.SymbolFlags.Alias && !(symbol.declarations?.[0] && ts.isImportSpecifier(symbol.declarations?.[0]))) {
					symbol = typeChecker.getImmediateAliasedSymbol(symbol);
				}
				const declaration = symbol?.declarations?.[0];
				if (declaration && ts.isImportSpecifier(declaration) && ts.isStringLiteral(declaration.parent.parent.parent.moduleSpecifier)) {
					moduleSpecifier = declaration.parent.parent.parent.moduleSpecifier.text;
					if (moduleSpecifier.startsWith('.')) {
						const modulePath = path.relative(root, path.dirname(declaration.getSourceFile().fileName)).split(path.sep);
						if (modulePath[0] !== 'core-bootstrap' && modulePath[0] !== 'core') {
							throw new Error('Unexpected import path: ' + moduleSpecifier + ' in ' + declaration.getSourceFile().fileName);
						}
						modulePath[0] = `@agnos-ui/${modulePath[0]}`;
						modulePath.splice(1, 1); // remove src
						moduleSpecifier = path.posix.join(modulePath.join('/'), moduleSpecifier);
					}
				} else if (Object.hasOwn(hardCodedImports, name)) {
					moduleSpecifier = hardCodedImports[name];
				}
				if (moduleSpecifier) {
					moduleSpecifier = moduleSpecifier.replace(/^@agnos-ui\/core\//, `@agnos-ui/${framework}-headless/`);
					// small exception for Angular, as we do not have subpath exports yet
					if (moduleSpecifier.startsWith('@agnos-ui/angular-headless/')) {
						moduleSpecifier = '@agnos-ui/angular-headless';
					}
					processedNames.add(name);
					let importsArray = importsByModule.get(moduleSpecifier);
					if (!importsArray) {
						importsArray = [];
						importsByModule.set(moduleSpecifier, importsArray);
					}
					importsArray.push(name);
				}
			}
		}
		ts.forEachChild(node, visit);
	}
	nodes.forEach(visit);
	return importsByModule;
}

const componentsProps: [string, string, number][] = [];

const components = await readdir(coreBootstrapComponents);
for (const component of components) {
	const sourceFile = program.getSourceFile(path.join(coreBootstrapComponents, `${component}/${component}.ts`))!;
	const sourceFileSymbol = typeChecker.getSymbolAtLocation(sourceFile)!;

	// The first stage of the generator is determining what we need to export.
	// We take all type aliases or interface exports from the file
	// core-bootstrap/src/components/${component}/${component}.ts and filter out Extra or Common ones.
	const exportsList = typeChecker.getExportsOfModule(sourceFileSymbol);
	const coreImports: string[] = [];
	let exports = '';
	const exportedNodes: Node[] = [];
	const exportNames = new Set<string>();
	for (const bootstrapExport of exportsList.filter(
		(btsExport) =>
			!btsExport.name.endsWith('CommonPropsAndState') &&
			!btsExport.name.endsWith('ExtraProps') &&
			!btsExport.name.startsWith('Common') &&
			!btsExport.name.startsWith('Extra'),
	)) {
		exportNames.add(bootstrapExport.name);
		const node = bootstrapExport.getDeclarations()![0];
		if (ts.isTypeAliasDeclaration(node) || (ts.isInterfaceDeclaration(node) && bootstrapExport.name.endsWith('Context'))) {
			// type aliases
			// and interfaces whose name ends with "Context"
			// are copied as defined
			exports += node.getFullText() + '\n\n';
			exportedNodes.push(node);
		} else if (ts.isInterfaceDeclaration(node)) {
			// interfaces are resolved to obtain a *flattened* version
			exports += `${node
				.getChildren()
				.filter(ts.isJSDoc)
				.map((jsDoc) => jsDoc.getText())
				.join('\n')}\n`;
			exports += `export interface ${bootstrapExport.name}${node.typeParameters?.length ? `<${node.typeParameters.map((typeParam) => typeParam.getText()).join(', ')}>` : ''} {\n`;
			exportedNodes.push(...(node.typeParameters ?? []));
			for (const property of typeChecker.getTypeAtLocation(node).getProperties()) {
				const propertyDeclaration = property.getDeclarations()![0];
				exports += `\t${propertyDeclaration.getFullText()}\n`;
				exportedNodes.push(propertyDeclaration);
			}
			exports += `}\n\n`;
			if (bootstrapExport.name === `${component.slice(0, 1).toUpperCase()}${component.slice(1)}Props`) {
				componentsProps.push([component, bootstrapExport.name, node.typeParameters?.length ?? 0]);
			}
		} else if (ts.isFunctionDeclaration(node) || (ts.isVariableDeclaration(node) && node.parent.flags & ts.NodeFlags.Const)) {
			const name = bootstrapExport.name;
			const docNode = ts.isVariableDeclaration(node) ? node.parent.parent : node;
			const doc = docNode.getSourceFile().text.substring(docNode.getFullStart(), docNode.getStart());
			coreImports.push(name);
			const exportType = typeChecker.getTypeOfSymbol(bootstrapExport);
			const exportTypeString = typeChecker.typeToString(exportType, undefined, ts.TypeFormatFlags.NoTruncation);
			exportedNodes.push(typeChecker.typeToTypeNode(exportType, undefined, ts.NodeBuilderFlags.NoTruncation)!);
			exports += `${doc}const export_${name}: ${exportTypeString} = ${name} as any;\nexport {export_${name} as ${name}};\n\n`;
		}
	}
	const mapImportsByModule = getTypesImportsMap(exportedNodes, exportNames);

	let imports = '';
	if (coreImports.length > 0) {
		imports += `import {${coreImports.join(', ')}} from '@agnos-ui/core-bootstrap/components/${component}';\n`;
	}
	for (const [importFile, importNames] of mapImportsByModule.entries()) {
		imports += `import type {${importNames.join(', ')}} from '${importFile}';\n`;
	}
	await writeFile(path.join(root, `${framework}/bootstrap/src/components/${component}/${component}.gen.ts`), imports + '\n' + exports);
}

// Finally, we generate and export the WidgetsConfig in `@agnos-ui/${framework}-bootstrap/src/config.gen.ts`
await writeFile(
	path.join(root, `${framework}/bootstrap/src/config.gen.ts`),
	componentsProps.map((componentProps) => `import type {${componentProps[1]}} from './components/${componentProps[0]}';`).join('\n') +
		'\n\n' +
		`export type WidgetsConfig = {\n` +
		componentsProps
			.map(
				(componentProps) =>
					`\t/**\n\t * the ${componentProps[0]} widget config\n\t */\n\t` +
					`${componentProps[0]}: ${componentProps[1]}${componentProps[2] > 0 ? `<${'any, '.repeat(componentProps[2]).slice(0, -2)}>` : ''};`,
			)
			.join(`\n`) +
		'\n}\n',
);
