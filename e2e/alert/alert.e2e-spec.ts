import {AlertPO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';
import {AlertDemoPO} from '../demo-po/alert.po';
import {assign} from 'common/utils';
import type {PromiseValue} from 'e2e/utils';

type State = PromiseValue<ReturnType<AlertPO['state']>>;

test.describe(`Alert tests`, () => {
	test(`Config alert`, async ({page}) => {
		const alertDemoPO = new AlertDemoPO(page);
		const alertPO = new AlertPO(page, 0);

		await page.goto('#/alert/config');
		await alertDemoPO.locatorRoot.waitFor();

		const expectedState: State = {
			rootClasses: ['alert', 'alert-dismissible', 'alert-success', 'au-alert', 'fade', 'show'],
			body: `Well done!Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.Whenever you need to, be sure to use margin utilities to keep things nice and tidy.`,
			closeButton: 'Close',
		};
		expect(await alertPO.state()).toStrictEqual(expectedState);

		await alertPO.locatorCloseButton.click();

		await alertPO.locatorRoot.waitFor({state: 'hidden'});
		await alertDemoPO.locatorDismissibleInput.click();

		await alertDemoPO.locatorTypeSelect.selectOption('danger');
		await alertDemoPO.locatorShowAlertButton.click();

		expect(await alertPO.state()).toStrictEqual(
			assign(expectedState, {
				rootClasses: ['alert', 'alert-danger', 'au-alert', 'fade', 'show'],
				closeButton: undefined,
			}),
		);
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
