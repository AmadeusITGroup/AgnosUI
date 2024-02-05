import AxeBuilder from '@axe-core/playwright';
import type {Page} from '@playwright/test';
import type {AxeResults} from 'axe-core';

const pathRegExp = /\\/g;
export function normalizePath(str: string) {
	return str.replace(pathRegExp, '/');
}

/**
 * Accessibility check
 * @param page
 * @param route
 * @returns
 */
export async function analyze(page: Page, route: string): Promise<AxeResults> {
	const analyser = new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);
	return analyser.analyze();
}

export async function switchTheme(page: Page, theme: 'light' | 'dark') {
	await page.evaluate((_innerTheme) => {
		const documentElement = document.documentElement;
		if (_innerTheme === 'dark') {
			document.documentElement.setAttribute('data-bs-theme', _innerTheme);
		} else {
			documentElement.removeAttribute('data-bs-theme');
		}
	}, theme);
}
