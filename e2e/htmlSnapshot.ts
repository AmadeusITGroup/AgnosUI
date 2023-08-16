import type {Locator} from '@playwright/test';

export type HTMLAttribute = {name: string; value: string};
export type HTMLNode =
	| null
	| string
	| {
			tagName: string;
			childNodes: HTMLNode[];
			attributes: HTMLAttribute[];
	  };

export const htmlStructure = (locator: Locator): Promise<HTMLNode> =>
	locator.evaluate((element) => {
		const isElement = (node: Node): node is Element => node.nodeType === node.ELEMENT_NODE;
		const isInput = (node: Element): node is HTMLInputElement => node.tagName === 'INPUT';
		const isTextArea = (node: Element): node is HTMLTextAreaElement => node.tagName === 'TEXTAREA';
		const recFn = (node: Node) => {
			if (!isElement(node)) {
				if (node.nodeType === node.TEXT_NODE) {
					return node.nodeValue;
				}
				// Note: ignore comments
				return null;
			}
			const tagName = node.tagName.toLowerCase();
			const childNodes: HTMLNode[] = [];
			if (isTextArea(node)) {
				// only keep the actual current value of the textarea instead of the real attribute
				childNodes.push(node.value);
			} else {
				for (const child of node.childNodes) {
					const value = recFn(child);
					if (value != null) {
						childNodes.push(value);
					}
				}
			}
			const attributes: HTMLAttribute[] = [];
			const isNodeInput = isInput(node);
			const isNodeCheckbox = isNodeInput && node.getAttribute('type')?.toLowerCase() === 'checkbox';
			const isNodeInputNotCheckbox = isNodeInput && !isNodeCheckbox;
			// only keep the actual current value of the input in attributes instead of the real attribute
			// that only contains the initial value and may be present or not depending on the framework
			if (isNodeCheckbox) {
				attributes.push({name: 'checked', value: `${node.checked}`});
			} else if (isNodeInput) {
				attributes.push({name: 'value', value: node.value});
			}
			for (const {name, value} of node.attributes) {
				if ((isNodeCheckbox && name === 'checked') || (isNodeInputNotCheckbox && name === 'value')) {
					continue;
				}
				attributes.push({name, value});
			}
			return {tagName, childNodes, attributes};
		};
		return recFn(element);
	});

const cleanChildNodes = (childNodes: HTMLNode[]) => {
	childNodes = [...childNodes];
	const result: HTMLNode[] = [];
	while (childNodes.length) {
		let newValue = childNodes.shift();
		if (!newValue) continue;
		if (typeof newValue === 'string') {
			const previousValue = result[result.length - 1];
			if (typeof previousValue === 'string') {
				result.pop();
				newValue = previousValue + newValue;
			}
		} else if (newValue.tagName === '') {
			// only keep descendants
			childNodes.unshift(...newValue.childNodes);
			continue;
		}
		result.push(newValue);
	}
	return removeWhiteSpace(result);
};

const removeWhiteSpace = (childNodes: HTMLNode[]) =>
	childNodes.map((item) => (typeof item === 'string' ? item.replace(/\s+/g, ' ').trim() : item)).filter((item) => !!item);

const compare = (a: number | string, b: number | string) => (a < b ? -1 : a > b ? 1 : 0);
const compareName = ({name: a}: {name: string}, {name: b}: {name: string}) => compare(a, b);

const spaceRegExp = /\s+/;
const excludeClassRegExp = /^(s|svelte|ng)-/;
const excludeAttrRegExp = /^(ng-|_ng|slot$|au)/;
const attrExceptions = ['autocapitalize', 'autocomplete', 'autocorrect'];

const excludeAttrSet = new Set([
	'slot', // slot shouldn't be kept in the DOM by svelte, cf https://github.com/sveltejs/svelte/issues/8621

	// The following attributes are used in our Angular components:
	// FIXME (to discuss): do not use anymore the host element in AgnosUI Angular components
	// so that we can filter it out (as it is done in au-alert, au-modal, and au-pagination in tagReplacements)
	// and then remove the following list of attributes
	'arialabel', // note: this should not be confused with the standard Aria attribute aria-label (which should not be removed)
	'arialabelledby', // note: this should not be confused with the standard Aria attribute aria-labelledby (which should not be removed)
	'classname',
]);

const removeTagsAndDescendants = new Set(['script', 'router-outlet']);
const tagReplacements = new Map([
	['app-root', 'div'],
	['au-alert', ''],
	['au-modal', ''],
	['au-rating', 'div'],
	['au-select', 'div'],
	['ng-component', ''],
]);
const filterTagName = (tagName: string) => {
	const mapResult = tagReplacements.get(tagName);
	if (mapResult != null) {
		return mapResult;
	}
	if (tagName.startsWith('app-')) {
		return '';
	}
	return tagName;
};

export const filterHtmlStructure = (node: HTMLNode): HTMLNode => {
	// only keep what we want to compare
	if (!node || typeof node === 'string') {
		return node;
	}
	let {tagName, attributes, childNodes} = node;
	if (removeTagsAndDescendants.has(tagName)) {
		return null;
	}
	tagName = filterTagName(tagName);
	if (tagName == '') {
		attributes = [];
	}
	attributes = attributes
		.filter(({name, value}) => !(excludeAttrSet.has(name) || (excludeAttrRegExp.test(name) && !attrExceptions.includes(name))))
		.map(({name, value}) => {
			if (name === 'class') {
				value = value
					.trim()
					.split(spaceRegExp)
					.filter((className) => !excludeClassRegExp.test(className))
					.sort()
					.join(' ');
			}
			return {name, value};
		})
		.sort(compareName);
	childNodes = cleanChildNodes(childNodes.map(filterHtmlStructure));
	return {
		tagName,
		attributes,
		childNodes,
	};
};

export const htmlSnapshot = async (locator: Locator) => {
	const res: string[] = [];
	const recFn = (node: HTMLNode, level = '') => {
		if (node && typeof node === 'object') {
			const {tagName, attributes, childNodes} = node;
			const hasAttributes = attributes.length > 0;
			const hasChildNodes = childNodes.length > 0;
			res.push(`${level}<${tagName}${hasAttributes ? '' : hasChildNodes ? '>' : ' />'}`);
			if (hasAttributes) {
				for (const {name, value} of attributes) {
					res.push(`${level} ${name}=${JSON.stringify(value)}`);
				}
				res.push(`${level}${hasChildNodes ? '>' : '/>'}`);
			}
			if (hasChildNodes) {
				for (const child of childNodes) {
					recFn(child, `${level}\t`);
				}
				res.push(`${level}</${tagName}>`);
			}
		} else {
			res.push(level + JSON.stringify(node));
		}
	};
	recFn(filterHtmlStructure(await htmlStructure(locator)));
	return res.join('\n');
};
