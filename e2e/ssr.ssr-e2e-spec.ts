import {expect, test} from './fixture';
import {htmlSnapshot} from './htmlSnapshot';

test.fixme(({framework}) => framework === 'react', 'SSR test is not yet fully working for React');
test.fixme(({framework}) => framework === 'svelte', 'SSR test is not yet fully working for Svelte');

test.describe('SSR without rehydration', () => {
	test.use({javaScriptEnabled: false});
	test('Markup', async ({page}) => {
		await page.goto('.', {waitUntil: 'networkidle'});
		const rehydratedContent = await htmlSnapshot(page.locator('#root'));
		expect(rehydratedContent).toMatchSnapshot('ssr.html');
	});
});

test.describe('SSR rehydration', () => {
	test('Markup', async ({page}) => {
		let resolveHydration: () => void;
		const promiseHydration = new Promise<void>((resolve) => (resolveHydration = resolve));
		const errors: string[] = [];
		page.on('console', (msg) => {
			const text = msg.text();
			if (msg.type() === 'error') {
				errors.push(text);
			}
			if (text === 'AGNOSUI-SSR-HYDRATION-COMPLETE') {
				resolveHydration();
			}
		});
		await page.goto('.', {waitUntil: 'networkidle'});
		await promiseHydration;
		await page.evaluate(() => {
			// sveltekit adds an extra svelte-announcer div
			document.getElementById('svelte-announcer')?.remove();
		});
		const rehydratedContent = await htmlSnapshot(page.locator('#root'));
		expect(rehydratedContent).toMatchSnapshot('ssr.html');
		expect(errors).toEqual([]);
	});
});
