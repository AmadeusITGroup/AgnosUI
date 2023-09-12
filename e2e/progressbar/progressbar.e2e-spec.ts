import {ProgressbarPO} from '@agnos-ui/page-objects';
import {expect, getTest} from '../fixture';
import {ProgressbarDemoPO} from 'e2e/demo-po/progressbar.po';

const test = getTest();
test.describe(`Progressbar tests`, () => {
	test(`Default progressbar`, async ({page}) => {
		const progressbarDemoPO = new ProgressbarDemoPO(page);
		const progressbarPO = new ProgressbarPO(page, 3);

		await page.goto('#/progressbar/default');
		await progressbarDemoPO.locatorRoot.waitFor();

		expect(await progressbarPO.locatorRoot.getAttribute('aria-valuenow')).toBe('80');
		expect(await progressbarPO.locatorInnerBar.getAttribute('class')).toContain('text-bg-warning');
	});

	test(`Simple customization progressbar`, async ({page}) => {
		const progressbarDemoPO = new ProgressbarDemoPO(page);

		await page.goto('#/progressbar/striped');
		await progressbarDemoPO.locatorRoot.waitFor();

		const customMinMaxBar = new ProgressbarPO(page, 0);
		const animatedBar = new ProgressbarPO(page, 1);
		const heightBar = new ProgressbarPO(page, 2);

		expect(await customMinMaxBar.locatorRoot.getAttribute('aria-label')).toBe('Step 4 out of 5');
		expect(await customMinMaxBar.locatorRoot.getAttribute('aria-valuemax')).toBe('5');
		expect(await customMinMaxBar.locatorInnerBar.innerText()).toBe('Step 4 out of 5');

		expect(await animatedBar.locatorInnerBar.getAttribute('class')).toContain('progress-bar-animated');

		expect(await heightBar.locatorOuterBar).toHaveCSS('height', '24px');
	});
});
