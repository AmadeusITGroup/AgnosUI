import {ProgressbarPO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';
import {ProgressbarDemoPO} from 'e2e/demo-po/progressbar.po';

test.describe(`Progressbar tests`, () => {
	test(`Default progressbar`, async ({page}) => {
		const progressbarDemoPO = new ProgressbarDemoPO(page);
		const progressbarPO = new ProgressbarPO(page, 3);

		await page.goto('#/progressbar/default');
		await progressbarDemoPO.locatorRoot.waitFor();

		await expect
			.poll(() => progressbarPO.state())
			.toStrictEqual({
				ariaLabel: 'Progressbar',
				ariaValueMax: '100',
				ariaValueMin: '0',
				ariaValueNow: '80',
				ariaValueText: null,
				innerClasses: ['progress-bar', 'text-bg-warning'],
				innerWidth: '80%',
				label: '80%',
				outerHeight: '',
			});
	});

	test(`Simple customization progressbar`, async ({page}) => {
		const progressbarDemoPO = new ProgressbarDemoPO(page);

		await page.goto('#/progressbar/simplecustom');
		await progressbarDemoPO.locatorRoot.waitFor();

		const progressbarPO0 = new ProgressbarPO(page, 0);
		await expect
			.poll(() => progressbarPO0.state())
			.toStrictEqual({
				ariaLabel: 'Progressbar',
				ariaValueMax: '5',
				ariaValueMin: '1',
				ariaValueNow: '4',
				ariaValueText: 'Step 4 out of 5',
				innerClasses: ['progress-bar'],
				innerWidth: '75%',
				label: 'Step 4 out of 5',
				outerHeight: '',
			});
		const progressbarPO1 = new ProgressbarPO(page, 1);
		await expect
			.poll(() => progressbarPO1.state())
			.toStrictEqual({
				ariaLabel: 'Progressbar',
				ariaValueMax: '100',
				ariaValueMin: '0',
				ariaValueNow: '63',
				ariaValueText: null,
				innerClasses: ['progress-bar', 'progress-bar-animated', 'progress-bar-striped', 'text-bg-info'],
				innerWidth: '63%',
				label: '',
				outerHeight: '',
			});
		const progressbarPO2 = new ProgressbarPO(page, 2);
		await expect
			.poll(() => progressbarPO2.state())
			.toStrictEqual({
				ariaLabel: 'Progressbar',
				ariaValueMax: '100',
				ariaValueMin: '0',
				ariaValueNow: '47',
				ariaValueText: null,
				innerClasses: ['progress-bar'],
				innerWidth: '47%',
				label: '',
				outerHeight: '1.5rem',
			});
	});
});
