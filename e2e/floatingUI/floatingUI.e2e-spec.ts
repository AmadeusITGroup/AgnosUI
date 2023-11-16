import {expect, getTest} from '../fixture';
import {FloatingUIDemoPO} from '../demo-po/floatingUI.po';

const test = getTest();
test.describe(`FloatingUI tests`, () => {
	test.beforeEach(async ({page}) => {
		await page.goto('#/floatingui/floatingui');
	});

	test('Basic test', async ({page}) => {
		const demoPO = new FloatingUIDemoPO(page);
		await expect(demoPO.locatorPopover).toBeVisible();
		await demoPO.locatorTogglePopoverButton.click();
		expect(demoPO.locatorPopover).not.toBeVisible();
		await demoPO.locatorTogglePopoverButton.click();
		await expect(demoPO.locatorPopover).toBeVisible();
		expect(await demoPO.locatorPopover.boundingBox()).toEqual({x: 211, y: 32, width: 250, height: 55});
		expect(await demoPO.locatorPopoverArrow.boundingBox()).toEqual({x: 328, y: 87, width: 16, height: 8});
		await demoPO.setScrollPosition(326, 538);
		await expect(demoPO.locatorPopover).not.toBeVisible(); // button hidden at the top
		await demoPO.setScrollPosition(326, 537); // just one pixel of the button is visible at the top
		await expect(demoPO.locatorPopover).toBeVisible();
		expect(await demoPO.locatorPopover.boundingBox()).toEqual({x: 211, y: 28, width: 250, height: 55});
		expect(await demoPO.locatorPopoverArrow.boundingBox()).toEqual({x: 328, y: 20, width: 16, height: 8});
		await demoPO.setScrollPosition(650, 420);
		await expect(demoPO.locatorPopover).not.toBeVisible(); // button hidden on the left
		await demoPO.setScrollPosition(649, 420); // just one pixel of the button is visible on the left
		await expect(demoPO.locatorPopover).toBeVisible();
		expect(await demoPO.locatorPopover.boundingBox()).toEqual({x: 98, y: 88.5, width: 250, height: 55});
		expect(await demoPO.locatorPopoverArrow.boundingBox()).toEqual({x: 90, y: 108, width: 8, height: 16});
	});
});
