import {ToastDemoPO} from '../demo-po/toast.po';
import {ToastPO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';

test.describe(`Toast tests`, () => {
	test(`Dynamic toast`, async ({page}) => {
		const toastDemoPO = new ToastDemoPO(page);
		const toastPO = new ToastPO(page, 0);

		await page.goto('#/toast/dynamic');
		await toastDemoPO.locatorRoot.waitFor();

		await toastDemoPO.locatorPositionSelect.selectOption('middleCenter');
		await toastDemoPO.locatorAddToastButton.click();

		await expect(toastDemoPO.locatorToastContainer).toHaveClass(/top-50/);
		await expect(toastDemoPO.locatorToastContainer).toHaveClass(/start-50/);
		await expect(toastDemoPO.locatorToastContainer).toHaveClass(/translate-middle/);

		await expect(toastDemoPO.locatorToastCountLabel).toContainText('1');

		await toastPO.locatorCloseButton.click();

		await expect(toastDemoPO.locatorToastCountLabel).toContainText('0');

		await toastDemoPO.locatorPositionSelect.selectOption('topLeft');
		await toastDemoPO.locatorAddToastButton.click();

		await expect(toastDemoPO.locatorToastContainer).toHaveClass(/top-0/);
		await expect(toastDemoPO.locatorToastContainer).toHaveClass(/start-0/);

		await expect(toastDemoPO.locatorToastCountLabel).toContainText('1');
	});
});
