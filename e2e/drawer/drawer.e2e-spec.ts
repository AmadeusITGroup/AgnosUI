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

	test(`Drawer should allow body scrolling when option is enabled`, async ({page}) => {
		const drawerDemoPO = new DrawerDemoPO(page);
		const drawerPO = new DrawerPO(page, 0);

		await page.goto('#/drawer/body');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		// no bodyscrolling and has backdrop
		await drawerPO.waitLoaded();
		await expect(drawerDemoPO.locatorBodyScrollToggle).toBeHidden();
		await expect(drawerDemoPO.locatorDummyButton).toBeHidden();
		await drawerPO.locatorBackdrop.click();
		await expect(drawerPO.locatorRoot).toBeHidden();

		// no bodyscrolling and has no backdrop
		await drawerDemoPO.locatorBackdropToggle.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await drawerPO.waitLoaded();
		await expect(drawerDemoPO.locatorBodyScrollToggle).toBeHidden();
		await expect(drawerDemoPO.locatorDummyButton).toBeHidden();
		await expect(drawerPO.locatorBackdrop).toBeHidden();
		await drawerPO.locatorCloseButton.click();
		await expect(drawerPO.locatorRoot).toBeHidden();

		// has bodyscrolling and has backdrop
		await drawerDemoPO.locatorBodyScrollToggle.click();
		await drawerDemoPO.locatorBackdropToggle.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await drawerPO.waitLoaded();
		await expect(drawerDemoPO.locatorBodyScrollToggle).toBeVisible();
		await expect(drawerDemoPO.locatorDummyButton).toBeVisible();
		await drawerPO.locatorBackdrop.click();
		await expect(drawerPO.locatorRoot).toBeHidden();

		// has bodyscrolling and has no backdrop
		await drawerDemoPO.locatorBackdropToggle.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await drawerPO.waitLoaded();
		await expect(drawerDemoPO.locatorBodyScrollToggle).toBeVisible();
		await expect(drawerDemoPO.locatorDummyButton).toBeVisible();
		await expect(drawerPO.locatorBackdrop).toBeHidden();
		await drawerPO.locatorCloseButton.click();
	});

	test(`Drawer should be resizable and save the new size`, async ({page, browserName}) => {
		if (browserName === 'firefox') {
			// Firefox does not support drag and drop properly
			// TODO: remove when firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521 is fixed
			return;
		}
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

		await expect(drawerPO.locatorContainer).toHaveAttribute('style', 'width: 100%; height: 150px;');

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
