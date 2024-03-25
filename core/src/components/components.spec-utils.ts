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
