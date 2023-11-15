import type {Page} from '@playwright/test';
import {NavManagerLinePO, NavManagerPO} from '../demo-po/navmanager.po';
import {expect, getTest} from '../fixture';

const test = getTest();
for (const sample of ['navmanager', 'navmanagerwithselector']) {
	test.describe(sample, () => {
		test.beforeEach(async ({page}) => {
			await page.goto(`#/navmanager/${sample}`);
		});

		const getCaretPosition = async (page: Page) =>
			page.evaluate(() => {
				const activeElement = document.activeElement;
				return activeElement instanceof HTMLInputElement && activeElement.selectionStart != null && activeElement.selectionEnd != null
					? [activeElement.selectionStart, activeElement.selectionEnd]
					: null;
			});

		const useCases = [
			{
				name: 'LTR',
				forwardKey: 'ArrowRight',
				backwardKey: 'ArrowLeft',
				getLocator: (navManagerPO: NavManagerPO) => navManagerPO.locatorLTRLine,
				keyPresses: 5,
			},
			{
				name: 'RTL',
				forwardKey: 'ArrowLeft',
				backwardKey: 'ArrowRight',
				getLocator: (navManagerPO: NavManagerPO) => navManagerPO.locatorRTLLine,
				keyPresses: 4,
			},
		];

		for (const {name, backwardKey, forwardKey, getLocator, keyPresses} of useCases) {
			test(name, async ({page}) => {
				const navManagerPO = new NavManagerPO(page);
				const navManagerLine = new NavManagerLinePO(getLocator(navManagerPO));
				await navManagerLine.waitLoaded();

				const items = await navManagerLine.items();
				let currentItem = items[0];
				const value = await currentItem.inputValue();
				await currentItem.selectText();
				await expect.poll(() => getCaretPosition(page)).toEqual([0, value.length]);
				await page.keyboard.press(backwardKey);
				await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
				await page.keyboard.press(backwardKey);
				await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);

				await test.step('forward', async () => {
					for (let i = 0; i < keyPresses; i++) {
						await page.keyboard.press(forwardKey);
					}
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(forwardKey);
					currentItem = items[1];
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(forwardKey);
					currentItem = items[2];
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(forwardKey);
					currentItem = items[4];
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
					for (let i = 0; i < keyPresses; i++) {
						await page.keyboard.press(forwardKey);
					}
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
				});

				await page.keyboard.press(forwardKey);
				await expect(currentItem).toBeFocused();
				await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);

				await test.step('backward', async () => {
					for (let i = 0; i < keyPresses; i++) {
						await page.keyboard.press(backwardKey);
					}
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
					await page.keyboard.press(backwardKey);
					currentItem = items[2];
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(backwardKey);
					currentItem = items[1];
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(backwardKey);
					currentItem = items[0];
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
					await expect(currentItem).toBeFocused();
					for (let i = 0; i < keyPresses; i++) {
						await page.keyboard.press(backwardKey);
					}
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
				});

				await test.step('fast forward', async () => {
					await page.keyboard.press('End');
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
					await expect(currentItem).toBeFocused();
					await page.keyboard.press('End');
					currentItem = items[4];
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
				});

				await test.step('fast backward', async () => {
					await page.keyboard.press('Home');
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
					await expect(currentItem).toBeFocused();
					await page.keyboard.press('Home');
					currentItem = items[0];
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
				});
			});
		}
	});
}
