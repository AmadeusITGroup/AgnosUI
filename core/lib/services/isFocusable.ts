const isInertOrInvisible = (element: HTMLElement) => {
	let curElement: HTMLElement | null = element;
	while (curElement) {
		const style = getComputedStyle(curElement);
		if (curElement.inert || curElement.hidden || style.display === 'none' || style.visibility === 'hidden') {
			return true;
		}
		curElement = curElement.parentElement;
	}
	return false;
};

const checkNotDisabled = (element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement | HTMLFieldSetElement): boolean => {
	if (element.disabled) {
		return false;
	}
	const parentFieldset = element.parentElement?.closest('fieldset');
	return parentFieldset ? checkNotDisabled(parentFieldset) : true;
};
const isFocusableOtherTags = (element: HTMLElement) => element.isContentEditable || !!element.hasAttribute('tabindex');

const isFocusableByTagName: Record<string, (element: any) => boolean> = {
	INPUT: (element: HTMLInputElement) => element.type !== 'hidden' && checkNotDisabled(element),
	SELECT: checkNotDisabled,
	TEXTAREA: checkNotDisabled,
	BUTTON: checkNotDisabled,
	A: (element: HTMLAnchorElement) => !!element.href || isFocusableOtherTags(element),
};

/**
 * Returns true if the given HTML element is programmatically focusable.
 * Warning: this is a best-effort approximation of whether the element is really focusable.
 * It may not handle all use cases accurately.
 *
 * @param element - element to test
 * @returns true if the element is programmatically focusable.
 */
export const isFocusable = (element: HTMLElement) =>
	!isInertOrInvisible(element) && (isFocusableByTagName[element.tagName] ?? isFocusableOtherTags)(element);
