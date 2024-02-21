import {SelectPO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';
import {analyze, switchTheme} from '../utils';

test.describe('Accessibility', () => {
	test('Opened select', async ({page, browserName}) => {
		if (browserName === 'chromium') {
			await page.goto('#/select/default');
			const selectPO = new SelectPO(page);
			const locatorInput = selectPO.locatorInput;
			await locatorInput.fill('a');
			await locatorInput.press('Enter');
			await expect.poll(async () => (await selectPO.state()).badges.length).toBeGreaterThan(0);
			await selectPO.locatorMenu.waitFor();

			expect((await analyze(page, page.url())).violations).toEqual([]);

			await switchTheme(page, 'dark');
			expect((await analyze(page, page.url())).violations).toEqual([]);
		}
	});
});
