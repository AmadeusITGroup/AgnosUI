import {ToastPO} from '@agnos-ui/page-objects';
import {ToastDemoPO} from '../demo-po/toast.po';
import {expect, test} from '../fixture';

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<ToastPO['state']>>;

test.describe(`Toast tests`, () => {
	test(`Dynamic toast should apply proper position`, async ({page}) => {
		const toastDemoPO = new ToastDemoPO(page);

		await page.goto('#/toast/dynamic');
		await toastDemoPO.locatorRoot.waitFor();

		await toastDemoPO.locatorPositionSelect.selectOption('middleCenter');
		await toastDemoPO.locatorAddToastButton.click();

		const middleCenterContainer = toastDemoPO.locatorToastContainer(4);
		await expect(middleCenterContainer).toHaveClass(/top-50/);
		await expect(middleCenterContainer).toHaveClass(/start-50/);
		await expect(middleCenterContainer).toHaveClass(/translate-middle/);

		await toastDemoPO.locatorPositionSelect.selectOption('topLeft');
		await toastDemoPO.locatorAddToastButton.click();

		const topLeftContainer = toastDemoPO.locatorToastContainer(0);
		await expect(topLeftContainer).toHaveClass(/top-0/);
		await expect(topLeftContainer).toHaveClass(/start-0/);
	});

	test(`Toast without header`, async ({page}) => {
		const toastDemoPO = new ToastDemoPO(page);
		await page.goto('#/toast/playground#{"props":{"slotDefault":"This is a toast","autoHide":false,"className":"text-bg-primary"}}');
		await toastDemoPO.locatorRoot.waitFor();
		const toastPO = new ToastPO(page);

		const expectedState: State = {
			rootClasses: ['au-toast', 'd-flex', 'fade', 'show', 'text-bg-primary', 'toast', 'toast-dismissible'],
			body: 'This is a toast',
			header: undefined,
			closeButton: 'Close',
		};

		await expect.poll(() => toastPO.state()).toEqual(expectedState);
		await toastPO.locatorCloseButton.click();
		await toastPO.locatorRoot.waitFor({state: 'hidden'});
	});

	test(`Toast with header and without close button`, async ({page}) => {
		const toastDemoPO = new ToastDemoPO(page);
		await page.goto(
			'#/toast/playground#{"props":{"slotDefault":"This is a toast","autoHide":false,"className":"text-bg-primary", "slotHeader": "Header", "dismissible": false}}',
		);
		await toastDemoPO.locatorRoot.waitFor();
		const toastPO = new ToastPO(page);

		const expectedState: State = {
			rootClasses: ['au-toast', 'fade', 'show', 'text-bg-primary', 'toast'],
			body: 'This is a toast',
			header: 'Header',
			closeButton: undefined,
		};

		await expect.poll(() => toastPO.state()).toEqual(expectedState);
		await expect(toastPO.locatorCloseButton).toHaveCount(0);
	});
});
