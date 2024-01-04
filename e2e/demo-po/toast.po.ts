import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class ToastDemoPO extends BasePO {
	private readonly locators = {
		addToastButton: '.addToast',
		positionSelect: 'select[id=positionSelect]',
		toastCount: 'div.toastCount',
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

	get locatorToastCountLabel(): Locator {
		return this.locatorRoot.locator(this.locators.toastCount);
	}

	get locatorToastContainer(): Locator {
		return this.locatorRoot.locator(this.locators.toastContainer);
	}
}
