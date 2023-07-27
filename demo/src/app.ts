export function getTitle(title: string, frameworkName = '') {
	return `AgnosUI - ${title}` + (frameworkName ? ` for ${frameworkName}` : '');
}

export function getWidgetDescription(name: string, frameworkName = '') {
	return `${name} widget of AgnosUI` + (frameworkName ? ` for ${frameworkName}` : '');
}

/**
 * Split all the lines of a text, so that it can be easily used in a loop
 * @param text text to split
 */
export function textToLines(text: string) {
	return text.replaceAll('\r', '').split('\n\n');
}

const arrowFunctionRegExp = /^\([^(]*\)[^=]*=>/;
const functionRegExp = /^function/;
const slotRegExp = /^Slot/;
export function normalizedType(type: string) {
	return arrowFunctionRegExp.test(type) || functionRegExp.test(type) ? 'function' : slotRegExp.test(type) ? 'slot' : type;
}
