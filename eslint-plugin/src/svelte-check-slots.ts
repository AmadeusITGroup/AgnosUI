import type {TSESLint} from '@typescript-eslint/utils';
import {ESLintUtils} from '@typescript-eslint/utils';
import type {AST as SvelteAST} from 'svelte-eslint-parser';
import type {Type} from 'typescript';
import {addIndentation, getIndentation} from './ast-utils';

const keepAttributes = ['slotContent', 'props'];

const toSlotName = (propName: string) => (propName.startsWith('slot') ? `${propName[4].toLowerCase()}${propName.substring(5)}` : null);

const getAttributeNode = (node: SvelteAST.SvelteElement, attrName: string) => {
	for (const attr of node.startTag.attributes) {
		if (attr.type === 'SvelteAttribute') {
			if (attr.key.name === attrName) {
				return attr;
			}
		}
	}
	return null;
};

const extractKeptAttributes = (node: SvelteAST.SvelteElement, sourceText: string) => {
	let res = '';
	keepAttributes.forEach((attrName) => {
		const attr = getAttributeNode(node, attrName);
		if (attr) {
			res += ` ${sourceText.substring(...attr.range)}`;
		}
	});
	return res;
};

const getAttributeValue = (node: SvelteAST.SvelteElement, attrName: string) => {
	const attr = getAttributeNode(node, attrName);
	if (attr?.value.length === 1 && attr.value[0].type === 'SvelteMustacheTag') {
		return attr.value[0].expression;
	}
	return null;
};

const extractSlotParams = (slotType: Type) => {
	const params: string[] = [];
	if (slotType.aliasSymbol?.name === 'SlotContent') {
		const props = slotType.aliasTypeArguments?.[0]?.getProperties() ?? [];
		for (const prop of props) {
			params.push(prop.name);
		}
		params.sort();
	}
	return params;
};

const sortSlots = ({slot: slot1}: {slot: string}, {slot: slot2}: {slot: string}) => {
	if (slot1 === slot2) {
		return 0;
	}
	if (slot1 === 'default') {
		// put default slot first
		return -1;
	}
	if (slot2 === 'default') {
		// put default slot first
		return 1;
	}
	return slot1 < slot2 ? -1 : 1;
};

const extractExpectedSlotsList = (node: SvelteAST.SvelteElement, context: Readonly<TSESLint.RuleContext<any, any>>) => {
	const res: {slot: string; params: string[]}[] = [];
	const props = getAttributeValue(node, 'props');
	if (!props) {
		return res;
	}
	const parserServices = ESLintUtils.getParserServices(context);
	const checker = parserServices.program.getTypeChecker();
	const propsTsNode = parserServices.esTreeNodeToTSNodeMap.get(props as any);
	const stateSymbol = checker.getTypeAtLocation(propsTsNode).getProperty('state');
	if (!stateSymbol) {
		return res;
	}
	const stateSymbolType = checker.getTypeOfSymbolAtLocation(stateSymbol, propsTsNode).getProperties();
	for (const property of stateSymbolType) {
		const propName = property.name;
		const slot = toSlotName(propName);
		if (slot) {
			const slotType = checker.getTypeOfSymbolAtLocation(property, propsTsNode);
			res.push({slot, params: extractSlotParams(slotType)});
		}
	}
	res.sort(sortSlots);
	return res;
};

const extractSlotName = (node: SvelteAST.SvelteElement) => {
	const slotContent = getAttributeValue(node, 'slotContent');
	if (slotContent?.type === 'MemberExpression' && slotContent.property.type === 'Identifier') {
		return toSlotName(slotContent.property.name);
	}
	if (slotContent?.type === 'Identifier') {
		const match = /^\$(.*)\$$/.exec(slotContent.name);
		return toSlotName(match?.[1] ?? '');
	}
	return null;
};

const buildNodeText = (slotAttributes: string, slotName: string, slotsList: ReturnType<typeof extractExpectedSlotsList>) => {
	const slotNameArg = slotName === 'default' ? '' : ` name=${JSON.stringify(slotName)}`;
	let output = `<Slot${slotAttributes} let:component let:props>\n\t<svelte:fragment slot="slot" let:props><slot${slotNameArg} {...props} /></svelte:fragment>\n`;
	if (slotsList.length > 0) {
		output += `\t<svelte:component this={component} {...props}>\n`;
		for (const {slot, params} of slotsList) {
			let defParam = '';
			let useParam = '';
			for (const param of params) {
				defParam += ` let:${param}`;
				useParam += ` {${param}}`;
			}
			if (slot === 'default') {
				output += `\t\t<svelte:fragment${defParam}><slot${useParam} /></svelte:fragment>\n`;
			} else {
				const strSlot = JSON.stringify(slot);
				output += `\t\t<svelte:fragment slot=${strSlot}${defParam}><slot name=${strSlot}${useParam} /></svelte:fragment>\n`;
			}
		}
		output += `\t</svelte:component>\n`;
	} else {
		output += `\t<svelte:component this={component} {...props} />\n`;
	}
	output += `</Slot>`;
	return output;
};

const whiteSpace = /\s+/g;
const spaceBetweenTags = />\s+</g;
const whiteSpaceBeforeEndTag = /\s+>/g;
const removeSpaces = (text: string) => {
	text = text.replace(whiteSpace, ' ');
	text = text.replace(spaceBetweenTags, '><');
	text = text.replace(whiteSpaceBeforeEndTag, '>');
	return text;
};

const isSameCode = (text1: string, text2: string) => {
	return removeSpaces(text1) === removeSpaces(text2);
};

export const svelteCheckSlotsRule = ESLintUtils.RuleCreator.withoutDocs({
	create(context) {
		return {
			SvelteElement(node: SvelteAST.SvelteElement) {
				if (node.kind === 'component' && node.name.type === 'Identifier' && node.name.name === 'Slot') {
					const sourceText = context.sourceCode.text;
					const nodeText = sourceText.substring(...node.range);
					const slotName = extractSlotName(node);
					if (slotName) {
						const expectedSlotsList = extractExpectedSlotsList(node, context);
						const attributes = extractKeptAttributes(node, sourceText);
						let expectedNodeText = buildNodeText(attributes, slotName, expectedSlotsList);
						if (!isSameCode(nodeText, expectedNodeText)) {
							expectedNodeText = addIndentation(expectedNodeText, getIndentation(node, context));
							context.report({
								messageId: 'nonMatchingSlotContent',
								data: {slotName},
								node: node as any,
								fix: (fixer) => fixer.replaceText(node as any, expectedNodeText),
							});
						}
					} else {
						context.report({
							messageId: 'couldNotFindSlotName',
							node: node as any,
						});
					}
				}
			},
		};
	},
	meta: {
		docs: {
			description: 'Check AgnosUI calls to Slot in svelte components.',
			recommended: 'recommended',
		},
		fixable: 'code',
		messages: {
			nonMatchingSlotContent: 'The {{slotName}} slot content does not match the expectation.',
			couldNotFindSlotName: 'The name of the slot could not be detected.',
		},
		type: 'problem',
		schema: [],
	},
	defaultOptions: [],
});
