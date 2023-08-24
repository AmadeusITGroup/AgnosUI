import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class AlertDemoPO extends BasePO {
	private readonly locators = {
		showAlertButton: '.showAlert',
		dismissibleInput: '.dismissibleInput',
		typeSelect: 'select[id=typeSelect]',
		addError: 'button.addError',
		addInfo: 'button.addInfo',
		addWarning: 'button.addWarning',
		alertCount: 'div.alertCount',
	};

	getComponentSelector(): string {
		return '.container';
	}

	get locatorShowAlertButton(): Locator {
		return this.locatorRoot.locator(this.locators.showAlertButton);
	}

	get locatorDismissibleInput(): Locator {
		return this.locatorRoot.locator(this.locators.dismissibleInput);
	}

	get locatorTypeSelect(): Locator {
		return this.locatorRoot.locator(this.locators.typeSelect);
	}

	get locatorAddErrorButton(): Locator {
		return this.locatorRoot.locator(this.locators.addError);
	}

	get locatorAddInfoButton(): Locator {
		return this.locatorRoot.locator(this.locators.addInfo);
	}

	get locatorAddWarningButton(): Locator {
		return this.locatorRoot.locator(this.locators.addWarning);
	}

	get locatorAlertCountLabel(): Locator {
		return this.locatorRoot.locator(this.locators.alertCount);
	}
}
