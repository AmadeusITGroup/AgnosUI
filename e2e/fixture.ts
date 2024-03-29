import {test as base} from '@playwright/test';
import {getSamplesList} from '../demo/scripts/listSamples.plugin';
import type {Frameworks, Project, SimpleSampleInfo} from './types';

export {expect} from '@playwright/test';

export type FixtureOptions = {
	// with option: true
	project?: Project;
	framework?: Frameworks;
	sampleKey?: string;

	// with option: false (default)
	coverage: void;
	sampleInfo?: SimpleSampleInfo;
};

let cachedSamplesList: undefined | ReturnType<typeof getSamplesList>;
export const samplesList = () => {
	if (!cachedSamplesList) {
		cachedSamplesList = getSamplesList();
	}
	return cachedSamplesList;
};

const serverManagerURL = process.env.SERVER_MANAGER_URL!;

export const test = base.extend<FixtureOptions>({
	project: [undefined, {option: true}],
	framework: [undefined, {option: true}],
	sampleKey: [undefined, {option: true}],
	sampleInfo: async ({sampleKey}, use) => {
		await use(sampleKey ? samplesList()[sampleKey] : undefined);
	},
	baseURL: [
		async ({project, framework, sampleKey, sampleInfo}, use) => {
			const req = await fetch(serverManagerURL, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({project, framework, sampleKey, sampleInfo}),
			});
			const answer = await req.json();
			if (!req.ok) {
				throw new Error(answer.error);
			}
			await use(answer.url);
		},
		{timeout: 300000, scope: 'test'},
	],
	coverage: [
		async ({page, browserName}, use) => {
			await use();
			if (process.env.COVERAGE === 'true' && browserName === 'chromium') {
				const coverage: string = await page.evaluate(() => {
					return JSON.stringify((window as any).__coverage__);
				});
				if (coverage) {
					const reportCoverage = (await import('@agnos-ui/code-coverage/reportCoverage')).default;
					await reportCoverage(import.meta.dirname, coverage);
				}
			}
		},
		{auto: true},
	],
});
