import type {Page} from '@playwright/test';
import {test, expect} from './fixture';
import AxeBuilder from '@axe-core/playwright';
import type {AxeResults} from 'axe-core';
import {globSync} from 'glob';
import path from 'path';
import {normalizePath} from './utils';

const pathToFrameworkDir = normalizePath(path.join(__dirname, '../demo/src/routes'));
const allRoutes = globSync(`${pathToFrameworkDir}/**/+page.svelte`).map((route) =>
	normalizePath(route).replace(pathToFrameworkDir, '').replace('/+page.svelte', ''),
);

async function analyze(page: Page, route: string): Promise<AxeResults> {
	const analyser = new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
	return analyser.analyze();
}

test.describe.parallel('Demo Website', () => {
	for (const route of allRoutes) {
		const svelteRoute = route.replace('[framework]', 'svelte');
		test(`Route ${svelteRoute || '/'} should be accessible`, async ({page}) => {
			await page.goto(svelteRoute);
			const frames = page.frames();
			if (frames.length > 1) {
				const iframes = frames.slice(1);
				await Promise.all(iframes.map((frame) => expect.poll(() => frame.url()).not.toBe('about:blank')));
				await Promise.all(iframes.map((frame) => frame.waitForURL(frame.url())));
			}
			expect((await analyze(page, svelteRoute)).violations).toEqual([]);
		});
	}
});

test.describe('Sitemap', () => {
	test.skip(process.env.CI !== 'true', 'sitemap tests for CI only');

	test(`sitemap.xml should contain the blog and framework introduction pages`, async ({page}) => {
		await page.goto('sitemap.xml');
		const domain = 'https://amadeusitgroup.github.io/AgnosUI/latest';
		const routes = [
			'/blog/2024-02-01',
			'/docs/angular/getting-started/introduction',
			'/docs/react/getting-started/introduction',
			'/docs/svelte/getting-started/introduction',
		];
		for (const route of routes) {
			await expect(page.locator('urlset loc', {hasText: `${domain}${route}`})).toBeAttached();
		}
	});

	test(`sitemap.xml should not contain the samples`, async ({page}) => {
		await page.goto('sitemap.xml');
		const domain = 'https://amadeusitgroup.github.io/AgnosUI/latest';
		const routes = ['/angular/samples', '/react/samples', '/svelte/samples'];
		const urlsetLocator = page.locator('urlset');
		await urlsetLocator.waitFor({state: 'attached'});
		for (const route of routes) {
			await expect(page.locator('urlset loc', {hasText: `${domain}${route}`})).not.toBeAttached();
		}
	});
});
