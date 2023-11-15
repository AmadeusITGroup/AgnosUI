import type {Page} from '@playwright/test';
import {expect, test} from '@playwright/test';
import {globSync} from 'glob';
import path from 'path';
import {openDemoModal} from './demo-po/modal.po';
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
	};

	for (const route of allRoutes) {
		test(`${route} should have a consistent markup`, async ({page}, testInfo) => {
			test.skip(route === 'pagination/pagination', 'FIXME: sample to be made consistent');
			// skipping accordion playground for angular until we handle playground config better for components like accordion
			if (route === 'accordion/playground' && testInfo.project.name.startsWith('angular:')) {
				test.skip();
			}
			// skipping consistency checks for react and svelte for slider
			// if (route.startsWith('slider') && (testInfo.project.name.startsWith('react:') || testInfo.project.name.startsWith('svelte:'))) {
			// 	test.skip();
			// }
			await page.goto(`#/${route}${routesExtraHash[route] ?? ''}`);
			await expect.poll(async () => (await page.locator('#root').innerHTML()).trim().length).toBeGreaterThan(0);
			await routesExtraAction[route]?.(page);
			await page.waitForSelector('.fade', {state: 'detached'}); // wait for fade transitions to be finished
			expect(await htmlSnapshot(page.locator('body'))).toMatchSnapshot(`${route}.html`);
		});
	}
});
