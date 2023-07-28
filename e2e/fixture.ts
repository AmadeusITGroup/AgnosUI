import type {Page} from '@playwright/test';
import {test as base} from '@playwright/test';
import {promises as fs} from 'fs';
import path from 'path';
import {v4 as uuidv4} from 'uuid';

async function afterEach({page}: {page: Page}) {
	const coverage: string = await page.evaluate(() => {
		return JSON.stringify((window as any).__coverage__);
	});
	if (coverage) {
		await fs.writeFile(path.join(__dirname, '.nyc_output', `${uuidv4()}.json`), coverage);
	}
}
export {expect} from '@playwright/test';
export function getTest() {
	const test = base.extend({});
	test.afterEach(afterEach);
	return test;
}
