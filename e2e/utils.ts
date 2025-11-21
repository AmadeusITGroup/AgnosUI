import AxeBuilder from '@axe-core/playwright';
import type {Page} from '@playwright/test';
import type {AxeResults} from 'axe-core';

const pathRegExp = /\\/g;
export function normalizePath(str: string) {
	return str.replace(pathRegExp, '/');
}

export type PromiseValue<T> = T extends Promise<infer U> ? U : never;

/**
 * Accessibility check
 * @param page
 * @param route
 * @returns
 */
export async function analyze(page: Page): Promise<AxeResults> {
	const analyser = new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
	return analyser.analyze();
}

export async function switchTheme(page: Page, theme: 'light' | 'dark') {
	await page.evaluate((_innerTheme) => {
		const documentElement = document.documentElement;
		if (_innerTheme === 'dark') {
			document.documentElement.setAttribute('data-theme', _innerTheme);
		} else {
			documentElement.removeAttribute('data-theme');
		}
	}, theme);
}

/**
 * Prevents CSS transitions on all elements of the page.
 *
 * @param page - The Playwright Page object to modify.
 *
 */
export async function preventTransitions(page: Page) {
	await page.addStyleTag({
		content: `
        * {
          transition: none !important;
          animation: none !important;
        }
      `,
	});
}
