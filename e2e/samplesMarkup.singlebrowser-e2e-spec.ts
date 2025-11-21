import type {Page} from '@playwright/test';
import {openDemoDrawer} from './demo-po/drawer.po';
import {openDaisyUIDemoModal, openDemoModal} from './demo-po/modal.po';
import {typeAndSelect} from './demo-po/select.po';
import {expect, samplesList, test} from './fixture';
import {htmlSnapshot} from './htmlSnapshot';
import {preventTransitions} from './utils';

test.describe.configure({mode: 'parallel'});

const samples = Object.keys(samplesList());

test(`Routes check`, () => {
	expect(samples.length, `markup routes musn't be empty`).toBeGreaterThan(0);
});

test.describe(`Samples markup consistency check`, () => {
	const samplesExtraHash: Record<string, string> = {
		'bootstrap/modal/playground': '#{"props":{"visible":true,"children":"Dialog content","title":"Dialog"}}',
	};

	const samplesExtraAction: Record<string, (page: Page) => Promise<void>> = {
		'bootstrap/modal/default': openDemoModal,
		'bootstrap/modal/stack': openDemoModal,
		'bootstrap/select/default': (page: Page) => typeAndSelect(page, 'a'),
		'bootstrap/drawer/basic': openDemoDrawer,
		'bootstrap/drawer/position': openDemoDrawer,
		'bootstrap/drawer/sizes': openDemoDrawer,
		'bootstrap/drawer/body': openDemoDrawer,
		'daisyui/modal/default': openDaisyUIDemoModal,
	};

	for (const sampleKey of samples) {
		test.describe(`Sample ${sampleKey}`, () => {
			test.use({sampleKey});
			// eslint-disable-next-line playwright/no-skipped-test
			test.skip(({sampleInfo}) => !sampleInfo, `The sample cannot be tested in this configuration`);

			test(`should have a consistent markup`, async ({page, baseURL}) => {
				// eslint-disable-next-line playwright/no-networkidle
				await page.goto(`${baseURL}${samplesExtraHash[sampleKey] ?? ''}`, {waitUntil: 'networkidle'});
				await expect.poll(async () => (await page.locator('#root').innerHTML()).trim().length).toBeGreaterThan(0);
				await preventTransitions(page);
				await samplesExtraAction[sampleKey]?.(page);
				expect(await htmlSnapshot(page.locator('body'))).toMatchSnapshot(`${sampleKey.toLowerCase()}.html`);
			});
		});
	}
});
