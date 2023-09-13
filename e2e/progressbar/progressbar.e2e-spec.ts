import {ProgressbarPO} from '@agnos-ui/page-objects';
import {expect, getTest} from '../fixture';
import {ProgressbarDemoPO} from 'e2e/demo-po/progressbar.po';

interface State {
	ariaLabel: string | null;
	ariaValueNow: string | null;
	ariaValueMin: string | null;
	ariaValueMax: string | null;
	ariaValueText: string | null;
	label: string | null | undefined;
	innerClasses: string[];
}

const test = getTest();
async function getState(progressbarPO: ProgressbarPO): Promise<State> {
	return progressbarPO.locatorRoot.evaluate((rootNode: HTMLElement) => {
		const innerBar = rootNode.querySelector('.progress-bar');
		return {
			ariaLabel: rootNode.getAttribute('aria-label'),
			ariaValueNow: rootNode.getAttribute('aria-valuenow'),
			ariaValueMin: rootNode.getAttribute('aria-valuemin'),
			ariaValueMax: rootNode.getAttribute('aria-valuemax'),
			ariaValueText: rootNode.getAttribute('aria-valuetext'),
			label: innerBar?.textContent?.trim(),
			innerClasses: innerBar?.className?.trim()?.split(' ')?.sort() ?? [],
		};
	});
}

test.describe(`Progressbar tests`, () => {
	test(`Default progressbar`, async ({page}) => {
		const progressbarDemoPO = new ProgressbarDemoPO(page);
		const progressbarPO = new ProgressbarPO(page, 3);

		await page.goto('#/progressbar/default');
		await progressbarDemoPO.locatorRoot.waitFor();

		expect(await getState(progressbarPO)).toStrictEqual({
			ariaLabel: 'Progressbar',
			ariaValueMax: '100',
			ariaValueMin: '0',
			ariaValueNow: '80',
			ariaValueText: null,
			innerClasses: ['progress-bar', 'text-bg-warning'],
			label: '80%',
		});
	});

	test(`Simple customization progressbar`, async ({page}) => {
		const progressbarDemoPO = new ProgressbarDemoPO(page);

		await page.goto('#/progressbar/striped');
		await progressbarDemoPO.locatorRoot.waitFor();

		const heightBar = new ProgressbarPO(page, 2);

		expect(await getState(new ProgressbarPO(page, 0))).toStrictEqual({
			ariaLabel: 'Progressbar',
			ariaValueMax: '5',
			ariaValueMin: '1',
			ariaValueNow: '4',
			ariaValueText: 'Step 4 out of 5',
			innerClasses: ['progress-bar'],
			label: 'Step 4 out of 5',
		});
		expect(await getState(new ProgressbarPO(page, 1))).toStrictEqual({
			ariaLabel: 'Progressbar',
			ariaValueMax: '100',
			ariaValueMin: '0',
			ariaValueNow: '63',
			ariaValueText: null,
			innerClasses: ['progress-bar', 'progress-bar-animated', 'progress-bar-striped', 'text-bg-info'],
			label: '',
		});
		expect(await getState(heightBar)).toStrictEqual({
			ariaLabel: 'Progressbar',
			ariaValueMax: '100',
			ariaValueMin: '0',
			ariaValueNow: '47',
			ariaValueText: null,
			innerClasses: ['progress-bar'],
			label: '',
		});
		expect(heightBar.locatorOuterBar).toHaveCSS('height', '24px');
	});
});
