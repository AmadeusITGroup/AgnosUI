import {beforeEach, describe, expect, test} from 'vitest';
import {getTextDirection} from './textDirection';

describe(`getTextDirection`, () => {
	let parentElement: HTMLElement;
	beforeEach(() => {
		parentElement = document.body.appendChild(document.createElement('div'));
		return () => {
			parentElement.parentElement?.removeChild(parentElement);
		};
	});

	test('Basic functionalities', () => {
		parentElement.innerHTML = `
			<div>
				<div dir="rtl" id="element1">
					<div id="element2">
						<div dir="ltr" id="element3">
							<div id="element4">
							</div>
						</div>
					</div>
				</div>
				<div id="element5"></div>
				<div id="element6" dir="auto">\u05e9\u05c1\u05b8\u05dc\u05d5\u05b9\u05dd</div>
				<div id="element7" dir="auto">\u0633\u0644\u0627\u0645</div>
				<div id="element8" dir="auto">hello</div>
			</div>
		`;
		expect(getTextDirection(document.getElementById('element1')!)).toBe('rtl');
		expect(getTextDirection(document.getElementById('element2')!)).toBe('rtl');
		expect(getTextDirection(document.getElementById('element3')!)).toBe('ltr');
		expect(getTextDirection(document.getElementById('element4')!)).toBe('ltr');
		expect(getTextDirection(document.getElementById('element5')!)).toBe('ltr');
		expect(getTextDirection(document.getElementById('element6')!)).toBe('rtl');
		expect(getTextDirection(document.getElementById('element7')!)).toBe('rtl');
		expect(getTextDirection(document.getElementById('element8')!)).toBe('ltr');
	});
});
