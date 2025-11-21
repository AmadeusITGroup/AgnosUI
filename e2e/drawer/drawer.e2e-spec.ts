import {DrawerPO} from '@agnos-ui/page-objects';
import {assign} from 'common/utils';
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
		await expect(drawerPO.locatorBackdrop).toBeVisible();
		await expect(drawerDemoPO.locatorRoot).toHaveAttribute('inert');
		await drawerPO.locatorBackdrop.click();
		await expect(drawerPO.locatorRoot).toBeHidden();

		// no bodyscrolling and has no backdrop
		await drawerDemoPO.locatorBackdropToggle.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await drawerPO.waitLoaded();
		await expect(drawerPO.locatorBackdrop).toBeHidden();
		await expect(drawerDemoPO.locatorRoot).toHaveAttribute('inert');
		await drawerPO.locatorCloseButton.click();
		await expect(drawerPO.locatorRoot).toBeHidden();

		// has bodyscrolling and has backdrop
		await drawerDemoPO.locatorBodyScrollToggle.click();
		await drawerDemoPO.locatorBackdropToggle.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await drawerPO.waitLoaded();
		await expect(drawerPO.locatorBackdrop).toBeVisible();
		await expect(drawerDemoPO.locatorRoot).not.toHaveAttribute('inert');
		await drawerPO.locatorBackdrop.click();
		await expect(drawerPO.locatorRoot).toBeHidden();

		// has bodyscrolling and has no backdrop
		await drawerDemoPO.locatorBackdropToggle.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await drawerPO.waitLoaded();
		await expect(drawerPO.locatorBackdrop).toBeHidden();
		await expect(drawerDemoPO.locatorRoot).not.toHaveAttribute('inert');
		await drawerPO.locatorCloseButton.click();
	});

	test(`Drawer should be resizable and save the new size`, async ({page}) => {
		const drawerDemoPO = new DrawerDemoPO(page);
		const drawerPO = new DrawerPO(page, 0);

		await page.goto('#/drawer/position');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		const expectedVariables = {
			'--bs-drawer-size': '',
			'--bs-drawer-size-min': '',
			'--bs-drawer-size-max': '',
		};
		const expectedBoundingBox = {x: 0, y: 0, width: 200, height: 720};

		expect(await drawerPO.statePosition()).toStrictEqual(expectedVariables);
		await expect.poll(async () => await drawerPO.locatorRoot.boundingBox()).toStrictEqual(expectedBoundingBox);

		let mousePos = await drawerPO.hoverOnSplitter();
		await page.mouse.down();
		await page.mouse.move(500, 200);
		await page.mouse.up();

		await expect
			.poll(async () => await drawerPO.locatorRoot.boundingBox())
			.toStrictEqual(assign(expectedBoundingBox, {width: expectedBoundingBox.width + 500 - mousePos.x}));
		expect(await drawerPO.statePosition()).toStrictEqual(assign(expectedVariables, {'--bs-drawer-size': `${expectedBoundingBox.width}px`}));

		await drawerPO.locatorBackdrop.click();

		await drawerDemoPO.locatorToggleDrawerButton.click();

		// the width should be kept after reopening
		await expect.poll(async () => await drawerPO.locatorRoot.boundingBox()).toStrictEqual(expectedBoundingBox);
		expect(await drawerPO.statePosition()).toStrictEqual(expectedVariables);

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorPositionSelect.selectOption('block-start');
		await drawerDemoPO.locatorToggleDrawerButton.click();

		await expect
			.poll(async () => await drawerPO.locatorRoot.boundingBox())
			.toStrictEqual(
				assign(expectedBoundingBox, {
					width: 1280,
					height: 500,
				}),
			);
		expect(await drawerPO.statePosition()).toStrictEqual(assign(expectedVariables, {'--bs-drawer-size': '500px'}));

		mousePos = await drawerPO.hoverOnSplitter();
		await page.mouse.down();
		await page.mouse.move(100, 300);
		await page.mouse.up();

		await expect
			.poll(async () => await drawerPO.locatorRoot.boundingBox())
			.toStrictEqual(assign(expectedBoundingBox, {height: expectedBoundingBox.height + 300 - mousePos.y}));
		expect(await drawerPO.statePosition()).toStrictEqual(assign(expectedVariables, {'--bs-drawer-size': '300px'}));

		await drawerPO.locatorBackdrop.click();
		await drawerDemoPO.locatorToggleDrawerButton.click();

		// the height should be kept after reopening
		await expect.poll(async () => await drawerPO.locatorRoot.boundingBox()).toStrictEqual(expectedBoundingBox);
		expect(await drawerPO.statePosition()).toStrictEqual(expectedVariables);
	});
});
