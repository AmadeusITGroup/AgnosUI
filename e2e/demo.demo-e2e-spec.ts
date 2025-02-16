import {globSync} from 'glob';
import path from 'path';
import {expect, test} from './fixture';
import {analyze, normalizePath} from './utils';
import {componentsMetadata, daisyUIMetadata} from '../demo/src/lib/components-metadata';

const pathToFrameworkDir = normalizePath(path.join(import.meta.dirname, '../demo/src/routes'));
const pathToDocsDir = normalizePath(path.join(import.meta.dirname, '../docs'));

const allRoutes = globSync(`**/+page.svelte`, {cwd: pathToFrameworkDir}).flatMap((route) => {
	const normalizedRoute = normalizePath(route)
		.replace(/\/?\+page\.svelte$/g, '')
		.replace('[framework]', 'svelte')
		.replace('[type]', 'bootstrap');
	if (normalizedRoute === 'docs/svelte/[...slug]') {
		return globSync('**/*.md', {cwd: pathToDocsDir, ignore: '**/doc.md'}).map((mdRoute) =>
			normalizePath(mdRoute)
				.replace(/^\d{2}-([^/]*)\/\d{2}-([^/]*)\.md$/, 'docs/svelte/$1/$2')
				.toLowerCase(),
		);
	}
	if (normalizedRoute === 'docs/svelte/daisyUI/[component]/api') {
		return Object.keys(daisyUIMetadata).map((component) => normalizedRoute.replace('[component]', component.toLowerCase()));
	}
	if (normalizedRoute === 'docs/svelte/components/[component]/api') {
		return Object.keys(componentsMetadata).map((component) => normalizedRoute.replace('[component]', component.toLowerCase()));
	}
	if (normalizedRoute === 'api/svelte/bootstrap/[...slug]') {
		return Object.keys(componentsMetadata).map((component) => normalizedRoute.replace('[...slug]', `components/${component.toLowerCase()}`));
	}
	// because this url is already in the generated routes using daisyUIMetadata
	const exceptionUrl = 'docs/svelte/daisyUI/collapse/api';
	const routes = [normalizedRoute];
	const index = routes.indexOf(exceptionUrl);
	if (index !== -1) {
		routes.splice(index, 1);
	}
	return routes;
});

test.describe.parallel('Demo Website', () => {
	for (const route of allRoutes) {
		test(`Route ${route || '/'} should be accessible`, async ({page}) => {
			await page.goto(route);
			const frames = page.frames();
			if (frames.length > 1) {
				const iframes = frames.slice(1);
				// eslint-disable-next-line playwright/no-conditional-expect
				await Promise.all(iframes.map((frame) => expect.poll(() => frame.url()).not.toBe('about:blank')));
				await Promise.all(iframes.map((frame) => frame.waitForURL(frame.url())));
			}
			expect((await analyze(page)).violations).toEqual([]);
			await page.emulateMedia({reducedMotion: 'reduce'});
			await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
			await page.locator('.btn-dark-mode').first().click();
			await page.locator('.dropdown-menu button:has-text("Dark")').click();
			expect((await analyze(page)).violations).toEqual([]);
		});
	}
});

test.describe('Sitemap', () => {
	// eslint-disable-next-line playwright/no-skipped-test
	test.skip(process.env.CI !== 'true', 'sitemap tests for CI only');

	test(`sitemap.xml should contain the blog and framework introduction pages`, async ({page}) => {
		await page.goto('sitemap.xml');
		const domain = 'https://www.agnosui.dev/latest';
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
		const domain = 'https://www.agnosui.dev/latest';
		const routes = ['/angular/samples', '/react/samples', '/svelte/samples'];
		const urlsetLocator = page.locator('urlset');
		await urlsetLocator.waitFor({state: 'attached'});
		for (const route of routes) {
			await expect(page.locator('urlset loc', {hasText: `${domain}${route}`})).not.toBeAttached();
		}
	});
});
