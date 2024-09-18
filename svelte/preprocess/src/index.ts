import MagicString from 'magic-string';
import type {PreprocessorGroup} from 'svelte/compiler';
import {parse} from 'svelte/compiler';

export const directivesPreprocess = (): PreprocessorGroup => {
	return {
		name: 'AgnosUI',
		markup: ({content, filename}) => {
			const varPrefix = '__AgnosUISveltePreprocess__';
			if (
				content.includes(varPrefix) // avoids double processing
			) {
				return;
			}
			const str = new MagicString(content, {filename});
			const parsedCode = parse(content, {filename});
			const requiredImports = new Set<string>();

			const extractValue = (attribute: any) => {
				const res: string[] = [];
				const value = attribute.value;
				for (const part of value) {
					if (part.type === 'Text') {
						res.push(JSON.stringify(part.data));
					} else if (part.type === 'MustacheTag') {
						res.push(`(${content.substring(part.expression.start, part.expression.end)})`);
					} else {
						throw new Error(`Unexpected part type: ${part.type}`);
					}
				}
				return res.join('+');
			};

			const processItem = (item: any) => {
				const actionAttributes = [];
				const classAttributes = [];
				if (item.attributes) {
					for (const attribute of item.attributes) {
						if (attribute.type === 'Action') {
							actionAttributes.push(attribute);
						} else if (attribute.type === 'Attribute' && attribute.name === 'class') {
							classAttributes.push(attribute);
						}
					}
					if (actionAttributes.length > 0) {
						const end = item.attributes[item.attributes.length - 1].end;
						let first = true;
						str.appendRight(end, ` {...${varPrefix}BROWSER ? {} : ${varPrefix}ssrAttributes(`);
						requiredImports.add('ssrAttributes');
						for (const attribute of actionAttributes) {
							if (first) {
								first = false;
							} else {
								str.appendRight(end, `, `);
							}
							if (attribute.expression) {
								str.appendRight(end, `[${attribute.name}, ${content.substring(attribute.expression.start, attribute.expression.end)}]`);
							} else {
								str.appendRight(end, attribute.name);
							}
						}

						for (const attribute of classAttributes) {
							const value = extractValue(attribute);
							str.overwrite(attribute.start, attribute.end, `use:${varPrefix}classDirective={${value}}`);
							str.appendRight(end, `, [${varPrefix}classDirective, ${value}]`);
							requiredImports.add('classDirective');
						}

						str.appendRight(end, `)}`);
					}
				}
				item.children?.forEach(processItem);
				// if/else blocks
				item.else?.children?.forEach(processItem);
				// await/then/catch blocks
				item.pending?.children?.forEach(processItem);
				item.then?.children?.forEach(processItem);
				item.catch?.children?.forEach(processItem);
			};

			processItem(parsedCode.html);
			if (requiredImports.size > 0) {
				const importStatement = `\nimport {${[...requiredImports].map((importName) => `${importName} as ${varPrefix}${importName}`).join(', ')}} from '@agnos-ui/svelte-headless/utils/directive';\nimport {BROWSER as ${varPrefix}BROWSER} from 'esm-env';\n`;
				const moduleOrInstance = parsedCode.module ?? parsedCode.instance;
				if (moduleOrInstance) {
					const start = content.indexOf('>', moduleOrInstance.start) + 1;
					str.prependLeft(start, importStatement);
				} else {
					str.prepend(`<script>${importStatement}</script>\n`);
				}
			}

			return {
				code: str.toString(),
				map: str.generateMap(),
			};
		},
	};
};
