import {BasePO} from '@agnos-ui/base-po';
import type {Page, Locator} from '@playwright/test';

export class DrawerDemoPO extends BasePO {
	private readonly locators = {
		toggleDrawerButtonName: 'Open Drawer',
		positionSelect: 'select#drawerPlacement',
		backdropToggle: 'Backdrop',
		bodyScrollToggle: 'Body scrolling',
		dummyButton: 'ScrollToMe',
	};

	override getComponentSelector(): string {
		return '.container';
	}

	get locatorToggleDrawerButton(): Locator {
		return this._page.getByRole('button', {name: this.locators.toggleDrawerButtonName});
	}

	get locatorDummyButton(): Locator {
		return this._page.getByRole('button', {name: this.locators.dummyButton});
	}

	get locatorPositionSelect(): Locator {
		return this.locatorRoot.locator(this.locators.positionSelect);
	}

	get locatorBackdropToggle(): Locator {
		return this._page.getByRole('switch', {name: this.locators.backdropToggle});
	}

	get locatorBodyScrollToggle(): Locator {
		return this._page.getByRole('switch', {name: this.locators.bodyScrollToggle});
	}
}

export const openDemoDrawer = async (page: Page) => {
	const drawerDemoPO = new DrawerDemoPO(page);
	await drawerDemoPO.locatorToggleDrawerButton.click();
};
