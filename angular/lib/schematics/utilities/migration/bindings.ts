import type {TmplAstElement, TmplAstNode, TmplAstTemplate} from '@angular/compiler';
import type {Update} from './update';
import {replaceAt} from './tree-traversal';

/** Contains a parsed binding node's standardized data. */
export interface Binding {
	/** The actual compiler ast binding node. */
	node: TmplAstNode;
	/** The type of binding this node is. */
	type: BindingType;
	/** The name of the property, attribute, or event. */
	name: string;
	/** The event handler or property/attribute value. */
	value: string;
	bindingStartCharacter: string;
	bindingEndCharacter: string;
}

/** Describes the different types of bindings we care about. */
export const enum BindingType {
	INPUT,
	OUTPUT,
	ATTRIBUTE,
	TWO_WAY_BINDING,
}

/** Returns the two-way bindings based on the given input & output bindings. */
function getTwoWayBindings(inputs: Binding[], outputs: Binding[]): Binding[] {
	return inputs
		.filter((input) => outputs.some((output) => output.name === input.name))
		.map((input) => ({...input, type: BindingType.TWO_WAY_BINDING, bindingStartCharacter: '[(', bindingEndCharacter: ')]'}));
}

/** Returns all of the property, attribute, event, or two-way bindings on the given node. */
export function getBindings(node: TmplAstElement | TmplAstTemplate): Binding[] {
	const allInputs = getInputs(node);
	const allOutputs = getOutputs(node);
	const attributes = getAttributes(node);
	const twoWayBindings = getTwoWayBindings(allInputs, allOutputs);

	// Remove the inputs & outputs that are two-way bindings.

	const inputs = allInputs.filter((input) => !twoWayBindings.some((binding) => binding.name === input.name));
	const outputs = allOutputs.filter((output) => !twoWayBindings.some((binding) => binding.name === output.name));

	return inputs
		.concat(outputs)
		.concat(attributes)
		.concat(twoWayBindings)
		.sort((bindA, bindB) => bindA.node.sourceSpan.start.offset - bindB.node.sourceSpan.start.offset);
}

/** Returns the output bindings on the given node. */
function getOutputs(node: TmplAstElement | TmplAstTemplate): Binding[] {
	return node.outputs.map((output) => ({
		node: output,
		type: BindingType.OUTPUT,
		name: node.sourceSpan.start.file.content.slice(output.keySpan.start.offset, output.keySpan.end.offset),
		value: node.sourceSpan.start.file.content.slice(output.handlerSpan.start.offset, output.handlerSpan.end.offset),
		bindingStartCharacter: '(',
		bindingEndCharacter: ')',
	}));
}

/** Returns the input bindings on the given node. */
export function getInputs(node: TmplAstElement | TmplAstTemplate): Binding[] {
	return node.inputs.map((input) => ({
		node: input,
		type: BindingType.INPUT,
		name: node.sourceSpan.start.file.content.slice(input.keySpan.start.offset, input.keySpan.end.offset),
		value: node.sourceSpan.start.file.content.slice(input.value.sourceSpan.start, input.value.sourceSpan.end),
		bindingStartCharacter: '[',
		bindingEndCharacter: ']',
	}));
}

/** Returns the attributes on the given node. */
export function getAttributes(node: TmplAstElement | TmplAstTemplate): Binding[] {
	return node.attributes.map((attribute) => ({
		node: attribute,
		type: BindingType.ATTRIBUTE,
		name: attribute.name,
		value: attribute.value,
		bindingStartCharacter: '',
		bindingEndCharacter: '',
	}));
}

export function getBindingUpdates(node: TmplAstElement | TmplAstTemplate, bindingRenameMap: Record<string, string>): Update[] {
	return getBindings(node)
		.filter((binding) => !!bindingRenameMap[binding.name])
		.map((binding) => ({
			offset: binding.node.sourceSpan.start.offset,
			updateFn: (html: string) =>
				replaceAt(
					html,
					binding.node.sourceSpan.start.offset,
					(binding.bindingStartCharacter + binding.name + binding.bindingEndCharacter).length,
					binding.bindingStartCharacter + bindingRenameMap[binding.name] + binding.bindingEndCharacter,
				),
		}));
}
