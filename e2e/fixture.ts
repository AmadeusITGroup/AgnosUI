import reportCoverage from '@agnos-ui/code-coverage/reportCoverage';
import {getSamplesList} from '../demo/scripts/listSamples.plugin';
import {test as base} from '@playwright/test';
import type {SampleInfo} from '../demo/src/lib/layout/sample';

export {expect} from '@playwright/test';

export type FixtureOptions = {
	// with option: true
	framework?: string;
	sampleKey?: string;

	// with option: false (default)
	coverage: void;
	sampleInfo?: Pick<SampleInfo, 'componentName' | 'sampleName' | 'style'> & {sampleURL: string};
};

let cachedSamplesList: undefined | ReturnType<typeof getSamplesList>;
export const samplesList = () => {
	if (!cachedSamplesList) {
		cachedSamplesList = getSamplesList();
	}
	return cachedSamplesList;
};

export const test = base.extend<FixtureOptions>({
	framework: [undefined, {option: true}],
	sampleKey: [undefined, {option: true}],
	sampleInfo: async ({sampleKey, baseURL}, use) => {
		let sampleInfo: FixtureOptions['sampleInfo'];
		if (sampleKey && baseURL) {
			const sampleItem = samplesList()[sampleKey];
			if (sampleItem) {
				const sampleURL = new URL(
					sampleItem.style === 'bootstrap'
						? `#/${sampleItem.componentName}/${sampleItem.sampleName}`
						: `../${sampleItem.style}/#/${sampleItem.componentName}/${sampleItem.sampleName}`,
					baseURL,
				).href;
				sampleInfo = {...sampleItem, sampleURL};
			}
		}
		await use(sampleInfo);
	},
	coverage: [
		async ({page, browserName}, use) => {
			await use();
			const coverage: string = await page.evaluate(() => {
				return JSON.stringify((window as any).__coverage__);
			});
			if (coverage && browserName === 'chromium') {
				await reportCoverage(import.meta.dirname, coverage);
			}
		},
		{auto: true},
	],
});
