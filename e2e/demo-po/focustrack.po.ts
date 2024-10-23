import {BasePO} from '@agnos-ui/base-po';

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
	get locatorOtherFocusableInput() {
		return this.locatorRoot.locator('#otherFocusableInput');
	}

	/**
	 * Focusable input on the demo page
	 */
	get locatorDisabledInput() {
		return this.locatorRoot.locator('#disabledInput');
	}

	async getState(): Promise<{activeElements: string[]; isInContainer: boolean}> {
		return await this.locatorRoot.evaluate((root) => {
			return {
				activeElements: [...root.querySelectorAll('li')].map((el) => el.textContent!.trim()),
				isInContainer: (root.querySelector('#containerHasFocus') as HTMLInputElement).checked,
			};
		});
	}
}
