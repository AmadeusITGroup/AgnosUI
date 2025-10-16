import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class DrawerDemoPO extends BasePO {
	private readonly locators = {
		toggleDrawerButtonName: 'Open Drawer',
		positionSelect: 'select#drawerPlacement',
		toastContainer: 'div.toast-container',
	};

	override getComponentSelector(): string {
		return '.container';
	}

	get locatorToggleDrawerButton(): Locator {
		return this._page.getByRole('button', {name: this.locators.toggleDrawerButtonName});
	}

	get locatorPositionSelect(): Locator {
		return this.locatorRoot.locator(this.locators.positionSelect);
	}
}
