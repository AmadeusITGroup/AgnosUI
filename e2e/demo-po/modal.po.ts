import {ModalPO} from '@agnos-ui/page-objects';
import {BasePO} from '@agnos-ui/base-po';
import type {Page} from '@playwright/test';

export class ModalDemoPO extends BasePO {
	getComponentSelector(): string {
		return '.container';
	}

	locatorLaunchDemoModalButton() {
		return this.locatorRoot.getByText('Launch demo modal');
	}

	locatorMessage() {
		return this.locatorRoot.getByTestId('message');
	}
}

export class ModalStackDemoModalPO extends ModalPO {
	locatorLaunchOtherModalButton() {
		return this.locatorRoot.getByText('Launch other modal');
	}

	locatorEnableBackdropButton() {
		return this.locatorRoot.getByText('Enable backdrop');
	}

	locatorDisableBackdropButton() {
		return this.locatorRoot.getByText('Disable backdrop');
	}
}

export class ModalDefaultDemoModalPO extends ModalPO {
	locatorYesButton() {
		return this.locatorFooter().getByText('Yes');
	}

	locatorNoButton() {
		return this.locatorFooter().getByText('No');
	}
}

export const openDemoModal = async (page: Page) => {
	const modalDemoPO = new ModalDemoPO(page);
	await modalDemoPO.locatorLaunchDemoModalButton().click();
};
