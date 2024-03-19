import type {Page} from '@playwright/test';
import {getSamplesList} from '../demo/scripts/listSamples.plugin';
import {openDemoModal} from './demo-po/modal.po';
import {typeAndSelect} from './demo-po/select.po';
import {expect, test} from './fixture';
import {htmlSnapshot} from './htmlSnapshot';

test.describe.configure({mode: 'parallel'});

const samples = getSamplesList();

test(`Routes check`, async () => {
	expect(samples.length, `markup routes musn't be empty`).toBeGreaterThan(0);
});

test.describe(`Samples markup consistency check`, async () => {
	const routesExtraHash: Record<string, string> = {
		'modal/playground': '#{"props":{"visible":true,"slotDefault":"Dialog content","slotTitle":"Dialog"}}',
	};

	const routesExtraAction: Record<string, (page: Page) => Promise<void>> = {
		'modal/default': openDemoModal,
		'modal/stack': openDemoModal,
		'select/default': (page: Page) => typeAndSelect(page, 'a'),
	};

	for (const sample of samples) {
		if (sample.style != 'bootstrap') {
			// FIXME: add support for daisyui samples
			test.fixme(`${sample.style}/${sample.componentName}/${sample.sampleName} should have a consistent markup`, () => {});
			continue;
		}
		const route = `${sample.componentName}/${sample.sampleName}`;
		test(`${route} should have a consistent markup`, async ({page}) => {
			await page.goto(`#/${route}${routesExtraHash[route] ?? ''}`, {waitUntil: 'networkidle'});
			await expect.poll(async () => (await page.locator('#root').innerHTML()).trim().length).toBeGreaterThan(0);
			await routesExtraAction[route]?.(page);
			expect(await htmlSnapshot(page.locator('body'))).toMatchSnapshot(`${route}.html`);
		});
	}
});
