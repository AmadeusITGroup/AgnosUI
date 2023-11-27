import {AlertPO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';
import {AlertDemoPO} from '../demo-po/alert.po';

test.describe(`Alert tests`, () => {
	test(`Config alert`, async ({page}) => {
		const alertDemoPO = new AlertDemoPO(page);
		const alertPO = new AlertPO(page, 0);

		await page.goto('#/alert/config');
		await alertDemoPO.locatorRoot.waitFor();

		await expect(alertPO.locatorRoot).toHaveClass(/alert-success/);
		await expect(alertPO.locatorRoot).toHaveClass(/alert-dismissible/);

		await alertPO.locatorCloseButton.click();

		await alertPO.locatorRoot.waitFor({state: 'hidden'});

		await alertDemoPO.locatorDismissibleInput.click();
		await alertDemoPO.locatorTypeSelect.selectOption('danger');
		await alertDemoPO.locatorShowAlertButton.click();

		await expect(alertPO.locatorRoot).toHaveClass(/alert-danger/);
		await expect(alertPO.locatorRoot).not.toHaveClass(/alert-dismissible/);
		await expect(alertPO.locatorCloseButton).toHaveCount(0);
	});

	test(`Dynamic alert with the service`, async ({page}) => {
		const alertDemoPO = new AlertDemoPO(page);
		const alertPO = new AlertPO(page, 2);

		await page.goto('#/alert/dynamic');
		await alertDemoPO.locatorRoot.waitFor();
		await expect(alertDemoPO.locatorAlertCountLabel).toContainText('0');

		await alertDemoPO.locatorAddErrorButton.click();
		await alertDemoPO.locatorAddInfoButton.click();
		await alertDemoPO.locatorAddWarningButton.click();

		await expect(alertDemoPO.locatorAlertCountLabel).toContainText('3');

		await alertPO.locatorCloseButton.click();
		await expect(alertPO.locatorCloseButton).toHaveCount(0);
		await expect(alertDemoPO.locatorAlertCountLabel).toContainText('2');
	});
});
