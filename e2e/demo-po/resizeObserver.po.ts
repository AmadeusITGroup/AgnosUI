import {BasePO} from '@agnos-ui/base-po';

export class ResizeObserverDemoPO extends BasePO {
	getComponentSelector(): string {
		return 'div.demo-resize-observer';
	}

	/**
	 * Resizable textarea in demo page
	 */
	get locatorTextarea() {
		return this.locatorRoot.locator('#resizable');
	}

	/**
	 * Increase height button ind emo page
	 */
	get locatorIncreaseHeight() {
		return this.locatorRoot.locator('#increaseHeight');
	}

	/**
	 * Decrease height button ind emo page
	 */
	get locatorDecreaseHeight() {
		return this.locatorRoot.locator('#decreaseHeight');
	}

	/**
	 * The text displaying the height of the textarea
	 */
	get locatorLabelHeight() {
		return this.locatorRoot.locator('#dynamic-height');
	}
}
