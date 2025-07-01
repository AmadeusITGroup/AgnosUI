import {ToasterPO} from '@agnos-ui/page-objects';
import {ToasterDemoPO} from '../demo-po/toaster.po';
import {expect, test} from '../fixture';

test.describe(`Toaster tests`, () => {
	test(`Toaster position should set the right classes on the container`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorPositionSelect.selectOption('middleCenter');

		const middleCenterContainer = toasterDemoPO.locatorToasterContainer();
		await expect(middleCenterContainer).toContainClass('top-50');
		await expect(middleCenterContainer).toContainClass('start-50');
		await expect(middleCenterContainer).toContainClass('translate-middle');

		await toasterDemoPO.locatorPositionSelect.selectOption('topLeft');

		const topLeftContainer = toasterDemoPO.locatorToasterContainer();
		await expect(topLeftContainer).toContainClass('top-0');
		await expect(topLeftContainer).toContainClass('start-0');
	});
	test(`Toaster dismissible should display close buttons on the toasts`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorAddToastButton.click();
		await expect((await toasterPO.toastPOs())[0].locatorCloseButton).toBeHidden();

		await toasterDemoPO.locatorDismissibleButton.click();
		await toasterDemoPO.locatorAddToastButton.click();
		await expect((await toasterPO.toastPOs())[0].locatorCloseButton).toBeVisible();
	});
	test(`Toaster duration should set the auto hide to the correct ms`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('500');
		await toasterDemoPO.locatorAddToastButton.click();
		await expect.poll(async () => (await toasterPO.toastPOs()).length).toBe(1);
		const toast = (await toasterPO.toastPOs())[0].locatorRoot;
		await expect(toast).toBeVisible();
		await expect(toast).toHaveCount(0, {timeout: 1000});
	});
	test(`Toaster duration 0 makes toasts dismissible by default`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('0');
		await expect(toasterDemoPO.locatorDismissibleButton).toBeChecked();
		await toasterDemoPO.locatorAddToastButton.click();
		await expect((await toasterPO.toastPOs())[0].locatorCloseButton).toBeVisible();
	});
	test(`Toaster limit displays a max of toasts in a given time`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorLimitInput.fill('2');

		await toasterDemoPO.locatorAddToastButton.click();
		await toasterDemoPO.locatorAddToastButton.click();
		// Only 2 toasts should be visible
		await toasterDemoPO.locatorAddToastButton.click();

		expect(await toasterPO.toastPOs()).toHaveLength(2);
	});
	test(`Toaster pause on hover should pause the auto hide on hover`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('500');
		await toasterDemoPO.locatorPauseOnHoverButton.click();
		await toasterDemoPO.locatorAddToastButton.click();

		await expect.poll(async () => (await toasterPO.toastPOs()).length).toBe(1);
		const toast = (await toasterPO.toastPOs())[0].locatorRoot;
		await expect(toast).toBeVisible();
		await toast.hover();
		await expect(toast).toBeVisible({timeout: 1000});
		await toasterDemoPO.locatorAddToastButton.hover();
		await expect(toast).toBeHidden({timeout: 1000});
	});
	test(`Toaster close all should close all toasts`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorCloseAllButton.click();

		await toasterDemoPO.locatorAddToastButton.click();
		await toasterDemoPO.locatorAddToastButton.click();

		await expect(toasterPO.locatorCloseButton).toBeVisible();
	});
});
