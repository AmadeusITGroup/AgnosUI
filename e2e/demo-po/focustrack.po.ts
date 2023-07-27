import {BasePO} from '@agnos-ui/base-po';

interface ActiveElement {
	tagName: string;
	id?: string;
}

export class FocusTrackPO extends BasePO {
	getComponentSelector(): string {
		return 'div.demo-focustrack';
	}

	/**
	 * Focusable input on the demo page
	 */
	get locatorFocusableInput() {
		return this.locatorRoot.locator('#focusableInput');
	}

	/**
	 * Second focusable input on the demo page
	 */
	get locatorFocusableInput2() {
		return this.locatorRoot.locator('#focusableInput2');
	}

	/**
	 * Focusable input on the demo page
	 */
	get locatorDisabledInput() {
		return this.locatorRoot.locator('#disabledInput');
	}

	/**
	 * Textarea containing the activeElements history
	 */
	get locatorTextareaHistory() {
		return this.locatorRoot.locator('#activeElementHistory');
	}

	async getState(): Promise<{activeElements: ActiveElement[]; isInContainer: boolean}> {
		return await this.locatorRoot.evaluate((root) => {
			return {
				activeElements: JSON.parse((root.querySelector('#activeElementHistory') as HTMLTextAreaElement).value),
				isInContainer: (root.querySelector('#containerHasFocus') as HTMLInputElement).checked,
			};
		});
	}
}
