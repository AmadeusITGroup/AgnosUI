import {globSync} from 'glob';
import path from 'path';
import {expect, test} from './fixture';
import {analyze, normalizePath} from './utils';

const pathToFrameworkDir = normalizePath(path.join(__dirname, '../demo/src/routes'));
const pathToDocsDir = normalizePath(path.join(__dirname, '../docs'));

const allRoutes = globSync(`**/+page.svelte`, {cwd: pathToFrameworkDir}).flatMap((route) => {
	const normalizedRoute = normalizePath(route)
		.replace(/\/?\+page\.svelte$/g, '')
		.replace('[framework]', 'svelte');
	return normalizedRoute === 'docs/svelte/[...slug]'
		? globSync('**/*.md', {cwd: pathToDocsDir, ignore: '**/doc.md'}).map((mdRoute) =>
				normalizePath(mdRoute)
					.replace(/^\d{2}-([^/]*)\/\d{2}-([^/]*)\.md$/, 'docs/svelte/$1/$2')
					.toLowerCase(),
			)
		: normalizedRoute;
});

test.describe.parallel('Demo Website', () => {
	for (const route of allRoutes) {
		test(`Route ${route || '/'} should be accessible`, async ({page}) => {
			await page.goto(route);
			const frames = page.frames();
			if (frames.length > 1) {
				const iframes = frames.slice(1);
				await Promise.all(iframes.map((frame) => expect.poll(() => frame.url()).not.toBe('about:blank')));
				await Promise.all(iframes.map((frame) => frame.waitForURL(frame.url())));
			}
			expect((await analyze(page, route)).violations).toEqual([]);
			await page.evaluate(() => document.documentElement.setAttribute('data-bs-theme', 'dark'));
			await page.locator('.btn-dark-mode').first().click();
			await page.locator('.dropdown-menu button:has-text("Dark")').click();
			expect((await analyze(page, route)).violations).toEqual([]);
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
