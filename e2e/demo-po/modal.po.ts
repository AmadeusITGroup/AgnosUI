import {ModalPO} from '@agnos-ui/page-objects';
import {BasePO} from '@agnos-ui/base-po';
import type {Page} from '@playwright/test';

export class ModalDemoPO extends BasePO {
	getComponentSelector(): string {
		return '.container';
	}

	get locatorLaunchDemoModalButton() {
		return this.locatorRoot.getByText('Launch demo modal');
	}

	get locatorMessage() {
		return this.locatorRoot.getByTestId('message');
	}
}

export class ModalStackDemoModalPO extends ModalPO {
	get locatorLaunchOtherModalButton() {
		return this.locatorRoot.getByText('Launch other modal');
	}

	get locatorEnableBackdropButton() {
		return this.locatorRoot.getByText('Enable backdrop');
	}

	get locatorDisableBackdropButton() {
		return this.locatorRoot.getByText('Disable backdrop');
	}
}

export class ModalDefaultDemoModalPO extends ModalPO {
	get locatorYesButton() {
		return this.locatorFooter.getByText('Yes');
	}

	get locatorNoButton() {
		return this.locatorFooter.getByText('No');
	}
}

export const openDemoModal = async (page: Page) => {
	const modalDemoPO = new ModalDemoPO(page);
	await modalDemoPO.locatorLaunchDemoModalButton.click();
};

export const openDaisyUIDemoModal = async (page: Page) => {
	await page.getByText('Open modal').click();
};
