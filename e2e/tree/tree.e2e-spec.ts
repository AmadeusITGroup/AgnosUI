import {TreePO} from '@agnos-ui/page-objects';
import {assign} from '../../common/utils';
import {expect, test} from '../fixture';

const defaultExpectedItemState: {[key: string]: string | null}[] = [
	{
		ariaSelected: 'false',
		ariaExpanded: 'true',
	},
	{
		ariaSelected: 'false',
		ariaExpanded: 'false',
	},
	{
		ariaSelected: 'false',
		ariaExpanded: 'false',
	},
];

const defaultExpectedToggleState: {[key: string]: string | null}[] = [
	{
		ariaLabel: 'Toggle Node 1',
	},
	{
		ariaLabel: 'Toggle Node 1.1',
	},
	{
		ariaLabel: 'Toggle Node 1.2',
	},
];

test.describe(`Tree tests`, () => {
	test.describe(`Basic tree`, () => {
		test(`should properly assign aria properties for treeItems`, async ({page}) => {
			const treePO = new TreePO(page, 0);

			await page.goto('#/tree/basic');
			await treePO.locatorRoot.waitFor();

			const expectedItemState = [...defaultExpectedItemState];
			const expectedToggleState = [...defaultExpectedToggleState];

			await expect.poll(async () => await treePO.itemToggleState()).toEqual(expectedToggleState);
			await expect.poll(async () => await treePO.itemContainerState()).toEqual(expectedItemState);

			await (await treePO.locatorItemToggle.all()).at(1)?.click();

			await expect
				.poll(async () => await treePO.itemContainerState())
				.toEqual(
					assign(expectedItemState, [
						{
							ariaSelected: 'false',
							ariaExpanded: 'true',
						},
						{
							ariaSelected: 'false',
							ariaExpanded: 'true', // changed
						},
						{
							ariaSelected: 'false', // new node in dom
							ariaExpanded: null, // new node in dom
						},
						{
							ariaSelected: 'false',
							ariaExpanded: 'false',
						},
					]),
				);
		});

		test(`Keyboard navigation`, async ({page}) => {
			const treePO = new TreePO(page, 0);

			await page.goto('#/tree/basic');
			await treePO.locatorRoot.waitFor();
			await test.step(`should navigate to the end with End key`, async () => {
				await page.keyboard.press('Tab');
				await page.keyboard.press('End');
				await page.keyboard.press('Enter');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false',
									ariaExpanded: 'false',
								},
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false', // new node in dom
									ariaExpanded: null, // new node in dom
								},
							],
						),
					);
			});

			await test.step(`should handle the left key stroke`, async () => {
				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');
				await page.keyboard.press('ArrowLeft');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false',
									ariaExpanded: 'false',
								},
								{
									ariaSelected: 'false',
									ariaExpanded: 'false', // changed
								},
							],
						),
					);

				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');

				await page.keyboard.press('ArrowLeft');
				await page.keyboard.press('ArrowLeft');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'false',
								},
							],
						),
					);

				await expect
					.poll(async () => await treePO.itemToggleState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaLabel: 'Toggle Node 1',
								},
							],
						),
					);
			});

			await test.step(`should handle the right key stroke`, async () => {
				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');
				await page.keyboard.press('ArrowRight');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false', // new node in dom
									ariaExpanded: 'false', // new node in dom
								},
								{
									ariaSelected: 'false', // new node in dom
									ariaExpanded: 'false', // new node in dom
								},
							],
						),
					);

				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');

				await page.keyboard.press('ArrowRight');
				await page.keyboard.press('ArrowRight');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false', // new node in dom
									ariaExpanded: null, // new node in dom
								},
								{
									ariaSelected: 'false',
									ariaExpanded: 'false',
								},
							],
						),
					);

				await expect
					.poll(async () => await treePO.itemToggleState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaLabel: 'Toggle Node 1',
								},
								{
									ariaLabel: 'Toggle Node 1.1',
								},
								{
									ariaLabel: 'Toggle Node 1.2',
								},
							],
						),
					);
			});

			await test.step(`should handle the up key stroke`, async () => {
				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');
				await page.keyboard.press('ArrowUp');
				await page.keyboard.press('Enter');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'false',
								},
							],
						),
					);

				await expect
					.poll(async () => await treePO.itemToggleState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaLabel: 'Toggle Node 1',
								},
							],
						),
					);
			});

			await test.step(`should handle the down key stroke`, async () => {
				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');
				await page.keyboard.press('Enter');
				await page.keyboard.press('ArrowDown');
				await page.keyboard.press('Enter');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'true',
								},
								{
									ariaSelected: 'false', // new node in dom
									ariaExpanded: 'false', // new node in dom
								},
								{
									ariaSelected: 'false', // new node in dom
									ariaExpanded: 'false', // new node in dom
								},
							],
						),
					);

				await expect
					.poll(async () => await treePO.itemToggleState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaLabel: 'Toggle Node 1',
								},
								{
									ariaLabel: 'Toggle Node 1.1', // new node in dom
								},
								{
									ariaLabel: 'Toggle Node 1.2', // new node in dom
								},
							],
						),
					);
			});

			await test.step(`should handle the Home key stroke`, async () => {
				await page.keyboard.press('Tab');
				await page.keyboard.press('Shift+Tab');
				await page.keyboard.press('Home');
				await page.keyboard.press('Enter');

				await expect
					.poll(async () => await treePO.itemContainerState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaSelected: 'false',
									ariaExpanded: 'false',
								},
							],
						),
					);

				await expect
					.poll(async () => await treePO.itemToggleState())
					.toEqual(
						assign(
							[{}],
							[
								{
									ariaLabel: 'Toggle Node 1',
								},
							],
						),
					);
			});
		});
	});
});
