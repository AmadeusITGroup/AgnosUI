import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';

export const alertSelectors = {
	rootComponent: '.alert',
	closeButton: '.btn-close',
};

export class AlertPO extends BasePO {
	selectors = structuredClone(alertSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorCloseButton(): Locator {
		return this.locatorRoot.locator(this.selectors.closeButton);
	}
}
