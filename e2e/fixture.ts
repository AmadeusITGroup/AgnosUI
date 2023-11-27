import reportCoverage from '@agnos-ui/code-coverage/reportCoverage';
import {test as base} from '@playwright/test';

export {expect} from '@playwright/test';

export type FixtureOptions = {
	framework?: string;
	coverage: void;
};

export const test = base.extend<FixtureOptions>({
	framework: [undefined, {option: true}],
	coverage: [
		async ({page, browserName}, use) => {
			await use();
			const coverage: string = await page.evaluate(() => {
				return JSON.stringify((window as any).__coverage__);
			});
			if (coverage && browserName === 'chromium') {
				reportCoverage(__dirname, coverage);
			}
		},
		{auto: true},
	],
});
