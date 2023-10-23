import reportCoverage from '@agnos-ui/code-coverage/reportCoverage';
import type {Page, TestInfo} from '@playwright/test';
import {test as base} from '@playwright/test';

async function afterEach({page}: {page: Page}, testInfo: TestInfo) {
	const coverage: string = await page.evaluate(() => {
		return JSON.stringify((window as any).__coverage__);
	});
	if (coverage && testInfo.project.name.endsWith(':chromium')) {
		reportCoverage(__dirname, coverage);
	}
}
export {expect} from '@playwright/test';

export type FixtureOptions = {
	framework?: string;
};

export function getTest() {
	const test = base.extend<FixtureOptions>({
		framework: [undefined, {option: true}],
	});
	test.afterEach(afterEach);
	return test;
}
