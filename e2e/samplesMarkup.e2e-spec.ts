import {test, expect} from '@playwright/test';
import {htmlSnapshot} from './htmlSnapshot';
import {globSync} from 'glob';
import path from 'path';

test.describe.parallel(`Samples markup consistency check`, () => {
	const allRoutes = globSync('**/*.route.svelte', {cwd: path.join(__dirname, '../svelte/demo/samples')}).map(
		(route) => `${route.replace(/\.route\.svelte$/, '').toLowerCase()}`
	);
	for (const route of allRoutes) {
		test(`${route} should have a consistent markup`, async ({page}) => {
			test.skip(route === 'pagination/pagination', 'FIXME: sample to be made consistent');
			await page.goto(`#/${route}`);
			await page.waitForSelector('.fade', {state: 'detached'}); // wait for fade transitions to be finished
			expect(await htmlSnapshot(page.locator('body'))).toMatchSnapshot(`${route}.html`);
		});
	}
});
