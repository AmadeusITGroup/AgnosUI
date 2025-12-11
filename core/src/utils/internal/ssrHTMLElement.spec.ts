/* eslint-disable vitest/no-standalone-expect */
import {describe, expect, test} from 'vitest';
import {cssTextFromObject, ssrHTMLElement, ssrHTMLElementAttributesAndStyle} from './ssrHTMLElement';
import type {SSRHTMLElement} from '../../types';

interface TestEnvironment<T extends SSRHTMLElement> {
	name: string;
	elementFactory: () => T;
	getCSSText: (el: T) => string;
}

const testEnvironments: TestEnvironment<any>[] = [
	{
		name: 'SSR behavior',
		elementFactory: ssrHTMLElement,
		getCSSText: (el: SSRHTMLElement) => cssTextFromObject((el as any)[ssrHTMLElementAttributesAndStyle]().style),
	} satisfies TestEnvironment<SSRHTMLElement>,
	{
		name: 'browser behavior',
		elementFactory: () => document.createElement('div'),
		getCSSText: (el: HTMLElement) => el.style.cssText,
	} satisfies TestEnvironment<HTMLElement>,
];

interface TestCase {
	name: string;
	run: <T extends SSRHTMLElement>(environment: TestEnvironment<T>) => void;
}

const testCases: TestCase[] = [
	{
		name: 'basic style',
		run(testEnvironement) {
			const htmlElement = testEnvironement.elementFactory();
			const style = htmlElement.style;
			style['backgroundColor'] = 'red';
			expect(style.backgroundColor).toBe('red');
			style['backgroundColor'] = 'blue !important'; // ignored because of important
			expect(style.backgroundColor).toBe('red');
			expect(style.removeProperty('backgroundColor')).toBe(''); // ignored because of camelCase
			expect(style.backgroundColor).toBe('red');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('background-color: red;');
			style.setProperty('background-color', 'green', 'important');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('background-color: green !important;');
			expect(style.backgroundColor).toBe('green');
			style['background-color' as 'backgroundColor'] = 'yellow';
			expect(style.backgroundColor).toBe('yellow');
			expect(style.removeProperty('background-color')).toBe('yellow');
			expect(style.backgroundColor).toBe('');
			style.setProperty('backgroundColor', 'green'); // ignored because of camelCase (not supported by setProperty)
			expect(style.backgroundColor).toBe('');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('');
			style['backgroundColor'] = 'blue';
			expect(style.backgroundColor).toBe('blue');
			// delete does nothing:
			delete (style as any)['background-color'];
			delete style['backgroundColor'];
			expect(style.backgroundColor).toBe('blue');
		},
	},
	{
		name: 'custom property',
		run(testEnvironement) {
			const htmlElement = testEnvironement.elementFactory();
			const style = htmlElement.style;
			style.setProperty('--my-custom-prop', 'my-value');
			expect((style as any)['--my-custom-prop']).toBeUndefined(); // custom properties are not accessible via direct property access
			expect(testEnvironement.getCSSText(htmlElement)).toBe('--my-custom-prop: my-value;');
			style.setProperty('--my-custom-prop', 'my-value', 'important');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('--my-custom-prop: my-value !important;');
			expect(style.removeProperty('--my-custom-prop')).toBe('my-value');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('');
			style.setProperty('--my:custom;prop with special*chars', 'my-value');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('--my\\:custom\\;prop\\ with\\ special\\*chars: my-value;');
			expect(style.removeProperty('--my:custom;prop with special*chars')).toBe('my-value');
			expect(testEnvironement.getCSSText(htmlElement)).toBe('');

			// direct property access is not supported for custom properties, but we test it works as a normal property
			(style as any)['--my-custom-prop'] = 'some-value';
			expect(testEnvironement.getCSSText(htmlElement)).toBe('');
			expect((style as any)['--my-custom-prop']).toBe('some-value'); // this is just a normal property
			delete (style as any)['--my-custom-prop'];
			expect((style as any)['--my-custom-prop']).toBeUndefined();
		},
	},
];

describe(`ssrHTMLElement`, () => {
	for (const testCase of testCases) {
		for (const environment of testEnvironments) {
			// eslint-disable-next-line vitest/expect-expect
			test(`${testCase.name} (${environment.name})`, () => {
				testCase.run(environment);
			});
		}
	}
});
