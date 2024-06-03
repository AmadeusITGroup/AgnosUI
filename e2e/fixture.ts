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

const request = async (url: string, options: RequestInit) => {
	const req = await fetch(url, options);
	const answer = await req.json();
	if (!req.ok) {
		throw new Error(answer.error + '\n\n' + (answer.logs?.join('\n\n') ?? ''));
	}
	return answer;
};

export const test = base.extend<FixtureOptions>({
	project: [undefined, {option: true}],
	framework: [undefined, {option: true}],
	sampleKey: [undefined, {option: true}],
	sampleInfo: async ({sampleKey}, use) => {
		await use(sampleKey ? samplesList()[sampleKey] : undefined);
	},
	baseURL: [
		async ({project, framework, sampleKey, sampleInfo}, use) => {
			test.skip(project === 'stackblitz' && sampleInfo?.sampleName === 'playground', 'Playground samples are not supported in stackblitz');
			test.skip(
				sampleKey === 'daisyui/modal/default' && framework === 'svelte',
				`The modal headless samples is not using a service yet, as snippets makes this so much easier.`,
			);
			const answer = await request(serverManagerURL, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({project, framework, sampleKey, sampleInfo}),
			});
			try {
				await use(answer.url);
			} finally {
				if (answer.deleteURL) {
					await request(new URL(answer.deleteURL, serverManagerURL).href, {method: 'DELETE'});
				}
			}
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
