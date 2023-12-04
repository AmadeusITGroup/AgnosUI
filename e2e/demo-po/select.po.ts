import {BasePO} from '@agnos-ui/base-po';
import {SelectPO} from '@agnos-ui/page-objects';
import type {Page} from '@playwright/test';

export class SelectDemoPO extends BasePO {
	getComponentSelector(): string {
		return 'div.demo-select-config';
	}

	get locatorFilterTextInput() {
		return this.locatorRoot.getByLabel('Default filterText:');
	}

	get locatorResetFilterTextButton() {
		return this.locatorRoot.getByText('Reset widget filterText');
	}
}

export async function typeAndSelect(page: Page, text: string) {
	const selectPO = new SelectPO(page);
	await selectPO.locatorInput.fill(text);
	await selectPO.locatorMenu.waitFor();
	await selectPO.locatorMenuItems.nth(0).click();
	await selectPO.locatorBadges.nth(0).waitFor();
}
