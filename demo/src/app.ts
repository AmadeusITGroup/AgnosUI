const textToLinesRegex = /\r/g;

export function getTitle(title: string, frameworkName = '', packageType = '') {
	return `${title} - ${frameworkName ? `${frameworkName.slice(0, 1).toUpperCase() + frameworkName.slice(1)}${packageType ? ` ${packageType.slice(0, 1).toUpperCase() + packageType.slice(1)}` : ''} - ` : ''}AgnosUI`;
}

/**
 * Split all the lines of a text, so that it can be easily used in a loop
 * @param text text to split
 */
export function textToLines(text: string) {
	return text.replace(textToLinesRegex, '').split('\n\n');
}

const arrowFunctionRegExp = /^\([^(]*\)[^=]*=>/;
const functionRegExp = /^function/;
const slotRegExp = /^Slot/;
export function normalizedType(type: string) {
	return arrowFunctionRegExp.test(type) || functionRegExp.test(type) ? 'function' : slotRegExp.test(type) ? 'slot' : type;
}
