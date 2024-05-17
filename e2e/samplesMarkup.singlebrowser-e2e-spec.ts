import type {Page} from '@playwright/test';
import {openDemoModal, openDaisyUIDemoModal} from './demo-po/modal.po';
import {typeAndSelect} from './demo-po/select.po';
import {expect, test, samplesList} from './fixture';
import {htmlSnapshot} from './htmlSnapshot';

test.describe.configure({mode: 'parallel'});

const samples = Object.keys(samplesList());

test(`Routes check`, async () => {
	expect(samples.length, `markup routes musn't be empty`).toBeGreaterThan(0);
});

test.describe(`Samples markup consistency check`, async () => {
	const samplesExtraHash: Record<string, string> = {
		'bootstrap/modal/playground': '#{"props":{"visible":true,"slotDefault":"Dialog content","slotTitle":"Dialog"}}',
	};

	const samplesExtraAction: Record<string, (page: Page) => Promise<void>> = {
		'bootstrap/modal/default': openDemoModal,
		'bootstrap/modal/stack': openDemoModal,
		'bootstrap/select/default': (page: Page) => typeAndSelect(page, 'a'),
		'daisyui/modal/default': openDaisyUIDemoModal,
	};

	for (const sampleKey of samples) {
		test.describe(`Sample ${sampleKey}`, () => {
			test.use({sampleKey});
			test.skip(({sampleInfo}) => !sampleInfo, `The sample cannot be tested in this configuration`);

			test(`should have a consistent markup`, async ({page, baseURL}, {project: {name: projectName}}) => {
				test.fixme(
					sampleKey === 'daisyui/modal/default' && projectName === 'singleBrowser:svelte:chromium',
					`The modal headless samples is not using a service yet, as snippets makes this so much easier.`,
				);
				await page.goto(`${baseURL}${samplesExtraHash[sampleKey] ?? ''}`, {waitUntil: 'networkidle'});
				await expect.poll(async () => (await page.locator('#root').innerHTML()).trim().length).toBeGreaterThan(0);
				await samplesExtraAction[sampleKey]?.(page);
				expect(await htmlSnapshot(page.locator('body'))).toMatchSnapshot(`${sampleKey.toLowerCase()}.html`);
			});
		});
	}
});
