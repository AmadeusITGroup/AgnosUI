import {ResizeObserverDemoPO} from 'e2e/demo-po/resizeObserver.po';
import {expect, test} from '../fixture';

test.describe(`Resize Observer demo tests`, () => {
	test.beforeEach(async ({page}) => {
		await page.goto('#/resizeobserver/resizeobserver');
	});

	test('Textarea should dynamically change classses applied when resized', async ({page}) => {
		const demoPO = new ResizeObserverDemoPO(page);
		// no class attribute at init
		await expect.poll(async () => await demoPO.locatorTextarea.getAttribute('class')).not.toContain('fontsize');

		// class added
		await demoPO.locatorIncreaseHeight.click();
		await expect.poll(async () => await demoPO.locatorTextarea.getAttribute('class')).toContain('fontsize');

		// class attribute is empty
		await demoPO.locatorDecreaseHeight.click();
		await expect.poll(async () => await demoPO.locatorTextarea.getAttribute('class')).not.toContain('fontsize');
	});

	test('The label containing the text area height should be updated when textarea resized', async ({page}) => {
		const demoPO = new ResizeObserverDemoPO(page);
		// initial size label text number < 200
		await expect.poll(async () => +(await demoPO.locatorLabelHeight.textContent())!).toBeLessThan(200);

		// label text number > 200
		await demoPO.locatorIncreaseHeight.click();
		await expect.poll(async () => +(await demoPO.locatorLabelHeight.textContent())!).toBeGreaterThan(200);

		// label text number < 200
		await demoPO.locatorDecreaseHeight.click();
		await expect.poll(async () => +(await demoPO.locatorLabelHeight.textContent())!).toBeLessThan(200);
	});
});
