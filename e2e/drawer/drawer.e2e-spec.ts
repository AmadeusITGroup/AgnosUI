import {DrawerPO} from '@agnos-ui/page-objects';
import {DrawerDemoPO} from '../demo-po/drawer.po';
import {expect, test} from '../fixture';

test.describe(`Drawer tests`, () => {
	test(`Basic drawer`, async ({page}) => {
		const drawerDemoPO = new DrawerDemoPO(page);
		const drawerPO = new DrawerPO(page, 0);

		await page.goto('#/drawer/basic');

		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorBackdrop).toBeVisible();

		await drawerPO.locatorBackdrop.click();

		await expect(drawerPO.locatorBackdrop).toBeHidden();
	});

	test(`Drawer positions`, async ({page}) => {
		const drawerDemoPO = new DrawerDemoPO(page);
		const drawerPO = new DrawerPO(page, 0);

		await page.goto('#/drawer/position');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorRoot).toHaveClass(/inline-start/);

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorPositionSelect.selectOption('inline-end');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorRoot).toHaveClass(/inline-end/);

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorPositionSelect.selectOption('block-start');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorRoot).toHaveClass(/block-start/);

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorPositionSelect.selectOption('block-end');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorRoot).toHaveClass(/block-end/);
	});

	// firefox does not support drag and drop properly
	test.skip(`Drawer should be resizable and save the new size`, async ({page}) => {
		const drawerDemoPO = new DrawerDemoPO(page);
		const drawerPO = new DrawerPO(page, 0);

		await page.goto('#/drawer/position');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 200px; height: 100%;');

		const splitterLocator = drawerPO.locatorSplitter;
		await splitterLocator.hover();
		await page.mouse.down();
		await page.mouse.move(500, 200);
		await page.mouse.up();

		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 500px; height: 100%;');

		await drawerPO.locatorBackdrop.click();

		await drawerDemoPO.locatorToggleDrawerButton.click();

		// the width should be kept after reopening
		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 500px; height: 100%;');

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorPositionSelect.selectOption('block-start');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 100%; height: 200px;');

		await splitterLocator.hover();
		await page.mouse.down();
		await page.mouse.move(100, 300);
		await page.mouse.up();

		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 100%; height: 304px;');

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		// the height should be kept after reopening
		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 100%; height: 304px;');
	});
});
