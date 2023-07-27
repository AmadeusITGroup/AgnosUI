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

	locatorShowAlertButton(): Locator {
		return this.locatorRoot.locator(this.locators.showAlertButton);
	}

	locatorDismissibleInput(): Locator {
		return this.locatorRoot.locator(this.locators.dismissibleInput);
	}

	locatorTypeSelect(): Locator {
		return this.locatorRoot.locator(this.locators.typeSelect);
	}

	locatorAddErrorButton(): Locator {
		return this.locatorRoot.locator(this.locators.addError);
	}

	locatorAddInfoButton(): Locator {
		return this.locatorRoot.locator(this.locators.addInfo);
	}

	locatorAddWarningButton(): Locator {
		return this.locatorRoot.locator(this.locators.addWarning);
	}

	locatorAlertCountLabel(): Locator {
		return this.locatorRoot.locator(this.locators.alertCount);
	}
}
