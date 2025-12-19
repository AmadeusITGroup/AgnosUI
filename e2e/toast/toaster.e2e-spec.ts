import {ToasterPO} from '@agnos-ui/page-objects';
import {ToasterDemoPO} from '../demo-po/toaster.po';
import {expect, test} from '../fixture';
import {assign} from 'common/utils';

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
		const toastPO = toasterPO.poToast();
		const firstToastPO = toasterPO.poToast(0);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorAddToastButton.click();
		await expect(toastPO.locatorRoot).toHaveCount(1);
		await expect(firstToastPO.locatorCloseButton).toBeHidden();

		await toasterDemoPO.locatorDismissibleButton.click();
		await toasterDemoPO.locatorAddToastButton.click();
		await expect(toastPO.locatorRoot).toHaveCount(2);
		await expect(firstToastPO.locatorCloseButton).toBeVisible();
	});
	test(`Toaster duration should set the auto hide to the correct ms`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);
		const toastPO = toasterPO.poToast();

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('500');
		await toasterDemoPO.locatorAddToastButton.click();
		const toastLocator = toastPO.locatorRoot;
		await expect(toastLocator).toHaveCount(1);
		await expect(toastLocator).toBeVisible();
		await expect(toastLocator).toHaveCount(0);
	});
	test(`Toaster duration 0 makes toasts dismissible by default`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);
		const toastPO = toasterPO.poToast();
		const firstToastPO = toasterPO.poToast(0);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('0');
		await expect(toasterDemoPO.locatorDismissibleButton).toBeChecked();
		await toasterDemoPO.locatorAddToastButton.click();
		await expect(toastPO.locatorRoot).toHaveCount(1);
		await expect(firstToastPO.locatorCloseButton).toBeVisible();
	});
	test(`Toaster limit displays a max of toasts in a given time`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);
		const toastPO = toasterPO.poToast();
		const firstToastPO = toasterPO.poToast(0);

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorLimitInput.fill('2');

		await toasterDemoPO.locatorAddToastButton.click();
		await toasterDemoPO.locatorAddToastButton.click();

		await expect(toastPO.locatorRoot).toHaveCount(2);
		const expectedState = {
			rootClasses: ['au-toast', 'fade', 'show', 'toast'],
			body: 'Simple toast 1',
			header: 'I am header',
			closeButton: undefined,
		};
		expect(await firstToastPO.state()).toStrictEqual(expectedState);
		// Only 2 toasts should be visible
		await toasterDemoPO.locatorAddToastButton.click();

		await expect
			.poll(async () => await firstToastPO.state())
			.toStrictEqual(
				assign(expectedState, {
					body: 'Simple toast 2',
				}),
			);
		await expect(toastPO.locatorRoot).toHaveCount(2);
	});
	test(`Toaster pause on hover should pause the auto hide on hover`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);
		const toastPO = toasterPO.poToast();

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('200');
		await toasterDemoPO.locatorPauseOnHoverButton.click();
		await toasterDemoPO.locatorAddToastButton.click();

		await expect(toastPO.locatorRoot).toHaveCount(1);
		const firstToastLocator = toasterPO.poToast(0).locatorRoot;
		await expect(firstToastLocator).toBeVisible();
		await firstToastLocator.hover();

		// Exceptionally having a timeout here, to ensure that the locator does not disapear after the defined duration, when the toast is hovered
		// eslint-disable-next-line playwright/no-wait-for-timeout
		await page.waitForTimeout(300);
		await expect(firstToastLocator).toBeVisible();

		await toasterDemoPO.locatorAddToastButton.hover();
		await expect(toastPO.locatorRoot).toHaveCount(0);
	});
	test(`Toaster close all should close all toasts`, async ({page}) => {
		const toasterDemoPO = new ToasterDemoPO(page);
		const toasterPO = new ToasterPO(page);
		const toastPO = toasterPO.poToast();

		await page.goto('#/toast/toaster');
		await toasterDemoPO.locatorRoot.waitFor();

		await toasterDemoPO.locatorDurationInput.fill('0');
		await toasterDemoPO.locatorCloseAllButton.click();

		await toasterDemoPO.locatorAddToastButton.click();
		await toasterDemoPO.locatorAddToastButton.click();

		await expect(toastPO.locatorRoot).toHaveCount(2);

		await expect(toasterPO.locatorCloseButton).toBeVisible();
		await toasterPO.locatorCloseButton.click();
		await expect(toastPO.locatorRoot).toHaveCount(0);
	});
});
