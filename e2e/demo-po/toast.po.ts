import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class ToastDemoPO extends BasePO {
	private readonly locators = {
		addToastButton: '.addToast',
		positionSelect: 'select[id=positionSelect]',
		toastContainer: 'div.toast-container',
	};

	getComponentSelector(): string {
		return '.container';
	}

	get locatorAddToastButton(): Locator {
		return this.locatorRoot.locator(this.locators.addToastButton);
	}

	get locatorPositionSelect(): Locator {
		return this.locatorRoot.locator(this.locators.positionSelect);
	}

	locatorToastContainer(index: number): Locator {
		return this.locatorRoot.locator(this.locators.toastContainer).nth(index);
	}
}
