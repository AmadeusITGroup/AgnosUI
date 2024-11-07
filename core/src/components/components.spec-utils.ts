import type {Directive} from '../types';

/**
 * Utility method to extract all attributes from a node element
 *
 * @param node the node element
 * @returns the attribute
 */
export function getAttributes(node: HTMLElement) {
	const attributes: Record<string, string> = {};
	for (const {name, value} of [...node.attributes]) {
		attributes[name] = value;
	}
	return attributes;
}

/**
 * Utility method to register a directive to a fake dom element and send an event.
 *
 * @template T - The type of the directive parameters
 * @param directive - the directive to attach
 * @param args - the args of the directive
 * @param sendEvent - the event dispatcher function
 * @param nodeType - the type of the DOM element to create
 * @param destroyAfterEvent - automatically destroy the directive after use
 * @returns the element and the destroy reference
 */
export function attachDirectiveAndSendEvent<T = void>(
	directive: Directive<T>,
	args: T,
	sendEvent: (node: HTMLElement) => void,
	nodeType: string = 'div',
	destroyAfterEvent = true,
): {element: HTMLElement; destroy: void | {destroy?: () => void}} {
	const element = document.createElement(nodeType);
	const destroy = directive(element, args);
	sendEvent(element);
	if (destroyAfterEvent) {
		destroy?.destroy?.();
	}
	return {
		element,
		destroy,
	};
}

/**
 * Utility method to register a directive to a fake button and click on it.
 *
 * @param directive - the directive to attach
 */
export function attachDirectiveAndClick(directive: Directive<void>): void;
/**
 * Utility method to register a directive to a fake button and click on it.
 *
 * @param directive - the directive to attach
 * @param args - the args of the directive
 */
export function attachDirectiveAndClick<T = void>(directive: Directive<T>, args: T): void;

/**
 * Utility method to register a directive to a fake button and click on it.
 *
 * @template T - The type of the directive parameters
 * @param directive - the directive to attach
 * @param args - the args of the directive
 */
export function attachDirectiveAndClick<T = void>(directive: Directive<T>, args?: T) {
	attachDirectiveAndSendEvent(directive, args!, (node) => node.click(), 'button');
}
