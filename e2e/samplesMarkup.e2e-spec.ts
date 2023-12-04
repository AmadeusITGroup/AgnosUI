import type {Page} from '@playwright/test';
import {expect, test} from './fixture';
import {globSync} from 'glob';
import path from 'path';
import {openDemoModal} from './demo-po/modal.po';
import {typeAndSelect} from './demo-po/select.po';
import {htmlSnapshot} from './htmlSnapshot';
import {normalizePath} from './utils';

test.describe.parallel(`Samples markup consistency check`, () => {
	const allRoutes = globSync('**/*.route.svelte', {cwd: path.join(__dirname, '../svelte/demo/samples')}).map(
		(route) =>
			`${normalizePath(route)
				.replace(/\.route\.svelte$/, '')
				.toLowerCase()}`,
	);

	const routesExtraHash: Record<string, string> = {
		'modal/playground': '#{"props":{"visible":true,"slotDefault":"Dialog content","slotTitle":"Dialog"}}',
	};

	const routesExtraAction: Record<string, (page: Page) => Promise<void>> = {
		'modal/default': openDemoModal,
		'modal/stack': openDemoModal,
		'select/basic': (page: Page) => typeAndSelect(page, 'a'),
	};

	for (const route of allRoutes) {
		test(`${route} should have a consistent markup`, async ({page}) => {
			await page.goto(`#/${route}${routesExtraHash[route] ?? ''}`);
			await expect.poll(async () => (await page.locator('#root').innerHTML()).trim().length).toBeGreaterThan(0);
			await routesExtraAction[route]?.(page);
			await page.waitForSelector('.fade', {state: 'detached'}); // wait for fade transitions to be finished
			expect(await htmlSnapshot(page.locator('body'))).toMatchSnapshot(`${route}.html`);
		});
	}
});
