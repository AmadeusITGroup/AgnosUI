import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class ToasterDemoPO extends BasePO {
	private readonly locators = {
		addToastButton: '.btn-primary',
		positionSelect: 'select[id=positionSelect]',
		dismissible: 'input[id=dismissible]',
		duration: 'input[id=duration]',
		limitInput: 'input[id=limit]',
		pauseOnHover: 'input[id=pause]',
		closeAll: 'input[id=closeAll]',
		toasterContainer: 'div.au-toaster-container',
	};

	getComponentSelector(): string {
		return '.container';
	}

	get locatorAddToastButton(): Locator {
		return this.locatorRoot.locator(this.locators.addToastButton).getByText('Show toast');
	}

	get locatorAddToastErrorButton(): Locator {
		return this.locatorRoot.locator(this.locators.addToastButton).getByText('Show error toast');
	}

	get locatorPositionSelect(): Locator {
		return this.locatorRoot.locator(this.locators.positionSelect);
	}

	get locatorDismissibleButton(): Locator {
		return this.locatorRoot.locator(this.locators.dismissible);
	}

	get locatorDurationInput(): Locator {
		return this.locatorRoot.locator(this.locators.duration);
	}

	get locatorLimitInput(): Locator {
		return this.locatorRoot.locator(this.locators.limitInput);
	}

	get locatorPauseOnHoverButton(): Locator {
		return this.locatorRoot.locator(this.locators.pauseOnHover);
	}

	get locatorCloseAllButton(): Locator {
		return this.locatorRoot.locator(this.locators.closeAll);
	}

	locatorToasterContainer(): Locator {
		return this.locatorRoot.locator(this.locators.toasterContainer);
	}
}
