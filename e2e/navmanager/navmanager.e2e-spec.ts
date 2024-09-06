import type {Page} from '@playwright/test';
import {NavManagerLinePO, NavManagerPO} from '../demo-po/navmanager.po';
import {expect, test} from '../fixture';

for (const sample of ['navmanager', 'navmanagerwithselector']) {
	// eslint-disable-next-line playwright/valid-title
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
			// eslint-disable-next-line playwright/valid-title
			test(name, async ({page, browserName}) => {
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

				if (process.platform === 'darwin' && browserName === 'firefox' && backwardKey === 'ArrowRight') {
					// Firefox has a bug with RTL on Mac: Meta+ArrowLeft and Meta+ArrowRight are swapped
					// skip this test in this case
					return;
				}
				const useMeta = process.platform === 'darwin' && browserName != 'chromium';
				const fastForwardKey = useMeta ? `Meta+${forwardKey}` : 'End';
				await test.step(`fast forward (${fastForwardKey})`, async () => {
					await page.keyboard.press(fastForwardKey);
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(fastForwardKey);
					currentItem = items[4];
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([value.length, value.length]);
				});

				const fastBackwardKey = useMeta ? `Meta+${backwardKey}` : 'Home';
				await test.step(`fast backward (${fastBackwardKey})`, async () => {
					await page.keyboard.press(fastBackwardKey);
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
					await expect(currentItem).toBeFocused();
					await page.keyboard.press(fastBackwardKey);
					currentItem = items[0];
					await expect(currentItem).toBeFocused();
					await expect.poll(() => getCaretPosition(page)).toEqual([0, 0]);
				});
			});
		}
	});
}
