import {expect, test} from '../fixture';
import {ModalDefaultDemoModalPO, ModalDemoPO, ModalStackDemoModalPO} from '../demo-po/modal.po';
import {ModalPO} from '@agnos-ui/page-objects';
import {assign} from 'common/utils';
import type {PromiseValue} from 'e2e/utils';

type State = PromiseValue<ReturnType<ModalPO['state']>>;

test.describe.parallel(`Modal tests`, () => {
	test(`Default modal`, async ({page}) => {
		const modalDemoPO = new ModalDemoPO(page);
		const modalPO = new ModalDefaultDemoModalPO(page, 0);
		const expectedState: State = {
			rootClasses: ['d-block', 'fade', 'modal', 'show'],
			header: 'Save changes',
			title: 'Save changes',
			body: 'Do you want to save your changes?',
			footer: 'Yes\nNo',
			closeButton: 'Close',
		};
		await page.goto('#/modal/default');
		await modalDemoPO.locatorRoot.waitFor();
		await test.step('open modal and click on close', async () => {
			await modalDemoPO.locatorLaunchDemoModalButton.click();
			expect(await modalPO.state()).toStrictEqual(expectedState);
			await modalPO.locatorCloseButton.click();
			await modalPO.locatorRoot.waitFor({state: 'hidden'});
			await expect(modalDemoPO.locatorMessage).toContainText('You clicked on the close button.');
		});
		await test.step('open modal and click on yes', async () => {
			await modalDemoPO.locatorLaunchDemoModalButton.click();
			expect(await modalPO.state()).toStrictEqual(expectedState);
			await modalPO.locatorYesButton.click();
			await modalPO.locatorRoot.waitFor({state: 'hidden'});
			await expect(modalDemoPO.locatorMessage).toContainText('You answered the question with "Yes".');
		});
		await test.step('open modal and click on no', async () => {
			await modalDemoPO.locatorLaunchDemoModalButton.click();
			expect(await modalPO.state()).toStrictEqual(expectedState);
			await modalPO.locatorNoButton.click();
			await modalPO.locatorRoot.waitFor({state: 'hidden'});
			await expect(modalDemoPO.locatorMessage).toContainText('You answered the question with "No".');
		});
		await test.step('open modal and click on backdrop', async () => {
			await modalDemoPO.locatorLaunchDemoModalButton.click();
			expect(await modalPO.state()).toStrictEqual(expectedState);
			await modalPO.locatorRoot.click();
			await modalPO.locatorRoot.waitFor({state: 'hidden'});
			await expect(modalDemoPO.locatorMessage).toContainText('You clicked outside the modal.');
		});
	});

	test(`Component modal`, async ({page}) => {
		const modalDemoPO = new ModalDemoPO(page);
		const modalPO = new ModalPO(page, 0);
		const expectedState: State = {
			rootClasses: ['d-block', 'fade', 'modal', 'show'],
			header: 'Hi there!',
			title: 'Hi there!',
			body: `Hello, World!

Close`,
			footer: undefined,
			closeButton: 'Close',
		};
		await page.goto('#/modal/component');
		await modalDemoPO.locatorRoot.waitFor();
		await modalDemoPO.locatorLaunchDemoModalButton.click();
		expect(await modalPO.state()).toStrictEqual(expectedState);
	});

	test(`Modal stack`, async ({page}) => {
		const modalDemoPO = new ModalDemoPO(page);
		const modalPO = new ModalStackDemoModalPO(page, 0);
		const otherModalPO = new ModalStackDemoModalPO(modalPO.locatorRoot);
		await page.goto('#/modal/stack');
		await modalDemoPO.locatorRoot.waitFor();
		await modalDemoPO.locatorLaunchDemoModalButton.click();
		await modalPO.locatorDisableBackdropButton.click();
		await expect(modalPO.locatorBackdrop).toBeHidden();
		await modalPO.locatorEnableBackdropButton.click();
		await modalPO.locatorBackdrop.waitFor();
		await modalPO.locatorRoot.waitFor();
		await modalPO.locatorLaunchOtherModalButton.click();
		await otherModalPO.waitLoaded();
		await otherModalPO.locatorDisableBackdropButton.click();
		await expect(otherModalPO.locatorBackdrop).toBeHidden();
		await otherModalPO.locatorEnableBackdropButton.click();
		await otherModalPO.locatorBackdrop.waitFor();
		await otherModalPO.locatorCloseButton.click();
		await expect(otherModalPO.locatorRoot).toBeHidden();
		await modalPO.locatorCloseButton.click();
		await expect(modalPO.locatorRoot).toBeHidden();
	});

	test.describe.parallel(`Modal customizability`, () => {
		const getExpectedState = (): State => ({
			rootClasses: ['d-block', 'fade', 'modal', 'show'],
			header: undefined,
			title: undefined,
			body: 'Body',
			footer: undefined,
			closeButton: undefined,
		});

		test(`Modal with only body`, async ({page}) => {
			const modalPO = new ModalPO(page, 0);
			await page.goto('#/modal/playground#{"props":{"visible":true,"children":"Body"}}');
			expect(await modalPO.state()).toStrictEqual(getExpectedState());
		});

		test(`Modal with body and footer`, async ({page}) => {
			const modalPO = new ModalPO(page, 0);
			await page.goto('#/modal/playground#{"props":{"visible":true,"children":"Body","footer":"Footer"}}');
			expect(await modalPO.state()).toStrictEqual(
				assign(getExpectedState(), {
					footer: 'Footer',
				}),
			);
		});

		test(`Modal with body, footer and title`, async ({page}) => {
			const modalPO = new ModalPO(page, 0);
			await page.goto('#/modal/playground#{"props":{"visible":true,"children":"Body","footer":"Footer","title":"Title"}}');
			expect(await modalPO.state()).toStrictEqual(
				assign(getExpectedState(), {
					title: 'Title',
					header: 'Title',
					footer: 'Footer',
					closeButton: 'Close',
				}),
			);
		});

		test(`Modal with body, footer and title without close button`, async ({page}) => {
			const modalPO = new ModalPO(page, 0);
			await page.goto('#/modal/playground#{"props":{"visible":true,"children":"Body","footer":"Footer","title":"Title","closeButton":false}}');
			expect(await modalPO.state()).toStrictEqual(
				assign(getExpectedState(), {
					title: 'Title',
					header: 'Title',
					footer: 'Footer',
					closeButton: undefined,
				}),
			);
		});

		test(`Modal with body, footer and title replaced by header`, async ({page}) => {
			const modalPO = new ModalPO(page, 0);
			await page.goto(
				'#/modal/playground#{"props":{"visible":true,"children":"Body","footer":"Footer","closeButton":true,"header":"Header","title":"Title"}}',
			);
			expect(await modalPO.state()).toStrictEqual(
				assign(getExpectedState(), {
					title: undefined,
					header: 'Header',
					footer: 'Footer',
					closeButton: undefined,
				}),
			);
		});
	});
});
