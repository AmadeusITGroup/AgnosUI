import {expect, test} from '@playwright/test';
import {ModalDefaultDemoModalPO, ModalDemoPO, ModalStackDemoModalPO} from '../demo-po/modal.po';

test.describe.parallel(`Modal tests`, () => {
	test(`Default modal`, async ({page}) => {
		const modalDemoPO = new ModalDemoPO(page);
		const modalPO = new ModalDefaultDemoModalPO(page, 0);
		await page.goto('#/modal/default');
		await modalDemoPO.locatorRoot.waitFor();
		await modalDemoPO.locatorLaunchDemoModalButton().click();
		expect(modalPO.locatorTitle()).toContainText('Save changes');
		expect(modalPO.locatorBody()).toContainText('Do you want to save your changes?');
		await modalPO.locatorCloseButton().click();
		await modalPO.locatorRoot.waitFor({state: 'hidden'});
		await expect(modalDemoPO.locatorMessage()).toContainText('You clicked on the close button');
		await modalDemoPO.locatorLaunchDemoModalButton().click();
		expect(modalPO.locatorTitle()).toContainText('Save changes');
		expect(modalPO.locatorBody()).toContainText('Do you want to save your changes?');
		await modalPO.locatorYesButton().click();
		await modalPO.locatorRoot.waitFor({state: 'hidden'});
		await expect(modalDemoPO.locatorMessage()).toContainText('You answered the question with "Yes"');
		await modalDemoPO.locatorLaunchDemoModalButton().click();
		expect(modalPO.locatorTitle()).toContainText('Save changes');
		expect(modalPO.locatorBody()).toContainText('Do you want to save your changes?');
		await modalPO.locatorNoButton().click();
		await modalPO.locatorRoot.waitFor({state: 'hidden'});
		await expect(modalDemoPO.locatorMessage()).toContainText('You answered the question with "No"');
	});

	test(`Modal stack`, async ({page}) => {
		const modalDemoPO = new ModalDemoPO(page);
		const modalPO = new ModalStackDemoModalPO(page, 0);
		const otherModalPO = new ModalStackDemoModalPO(modalPO.locatorRoot);
		await page.goto('#/modal/stack');
		await modalDemoPO.locatorRoot.waitFor();
		await modalDemoPO.locatorLaunchDemoModalButton().click();
		await modalPO.locatorDisableBackdropButton().click();
		await modalPO.locatorBackdrop().waitFor({state: 'hidden'});
		await modalPO.locatorEnableBackdropButton().click();
		await modalPO.locatorBackdrop().waitFor();
		await modalPO.locatorRoot.waitFor();
		await modalPO.locatorLaunchOtherModalButton().click();
		await otherModalPO.waitLoaded();
		await otherModalPO.locatorDisableBackdropButton().click();
		await otherModalPO.locatorBackdrop().waitFor({state: 'hidden'});
		await otherModalPO.locatorEnableBackdropButton().click();
		await otherModalPO.locatorBackdrop().waitFor();
		await otherModalPO.locatorCloseButton().click();
		await otherModalPO.locatorRoot.waitFor({state: 'hidden'});
		await modalPO.locatorCloseButton().click();
		await modalPO.locatorRoot.waitFor({state: 'hidden'});
	});
});
