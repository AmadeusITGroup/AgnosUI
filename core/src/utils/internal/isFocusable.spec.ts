import {beforeEach, describe, expect, test} from 'vitest';
import {isFocusable} from './isFocusable';

describe(`isFocusable`, () => {
	let parentElement: HTMLElement;
	beforeEach(() => {
		parentElement = document.body.appendChild(document.createElement('div'));
		return () => {
			parentElement.parentElement?.removeChild(parentElement);
		};
	});

	const checkFocusable = (element: HTMLElement) => {
		element.focus();
		return document.activeElement === element;
	};

	const testCase = (expectedResult: boolean, markup: string, querySelector?: string) => {
		const testName = querySelector ? `${querySelector} in ${markup}` : markup;
		test(testName, () => {
			parentElement.innerHTML = markup;
			const element: HTMLElement = querySelector ? parentElement.querySelector(querySelector)! : (parentElement.firstElementChild as HTMLElement);
			const isFocusableResult = isFocusable(element);
			expect(checkFocusable(element)).toBe(expectedResult);
			expect(isFocusableResult).toBe(expectedResult);
		});
	};

	describe('input', () => {
		testCase(true, '<input>');
		testCase(true, '<input type="text">');
		testCase(true, '<input type="number">');
		testCase(true, '<input type="radio">');
		testCase(true, '<input type="checkbox">');
		testCase(true, '<input type="password">');
		testCase(true, '<div><input></div>', 'input');
		testCase(false, '<input type="hidden">');
		testCase(false, '<input disabled>');
		testCase(false, '<input disabled type="text">');
		testCase(false, '<input disabled type="number">');
		testCase(false, '<input disabled type="radio">');
		testCase(false, '<input disabled type="checkbox">');
		testCase(false, '<input disabled type="password">');
		testCase(false, '<input inert>');
		testCase(false, '<input hidden>');
		testCase(false, '<fieldset disabled><input></fieldset>', 'input');
		testCase(false, '<fieldset disabled><fieldset><input></fieldset></fieldset>', 'input');
		testCase(false, '<div inert><input></div>', 'input');
		testCase(false, '<div hidden><input></div>', 'input');
		testCase(false, '<div style="display:none"><input></div>', 'input');
		testCase(false, '<div style="visibility:hidden"><input></div>', 'input');
	});

	describe('select', () => {
		testCase(true, '<select><option>click here</option></select>');
		testCase(true, '<div><select><option>click here</option></select></div>', 'select');
		testCase(false, '<select disabled><option>click here</option></select>');
		testCase(false, '<select inert><option>click here</option></select>');
		testCase(false, '<select hidden><option>click here</option></select>');
		testCase(false, '<fieldset disabled><select><option>click here</option></select></fieldset>', 'select');
		testCase(false, '<div inert><select><option>click here</option></select></div>', 'select');
		testCase(false, '<div hidden><select><option>click here</option></select></div>', 'select');
		testCase(false, '<div style="display:none"><select><option>click here</option></select></div>', 'select');
		testCase(false, '<div style="visibility:hidden"><select><option>click here</option></select></div>', 'select');
	});

	describe('textarea', () => {
		testCase(true, '<textarea>content</textarea>');
		testCase(true, '<div><textarea>content</textarea></div>', 'textarea');
		testCase(false, '<textarea disabled>content</textarea>');
		testCase(false, '<textarea inert>content</textarea>');
		testCase(false, '<textarea hidden>content</textarea>');
		testCase(false, '<fieldset disabled><textarea>content</textarea></fieldset>', 'textarea');
		testCase(false, '<div inert><textarea>content</textarea></div>', 'textarea');
		testCase(false, '<div hidden><textarea>content</textarea></div>', 'textarea');
		testCase(false, '<div style="display:none"><textarea>content</textarea></div>', 'textarea');
		testCase(false, '<div style="visibility:hidden"><textarea>content</textarea></div>', 'textarea');
	});

	describe('button', () => {
		testCase(true, '<button>click here</button>');
		testCase(true, '<div><button>click here</button></div>', 'button');
		testCase(false, '<button disabled>click here</button>');
		testCase(false, '<button inert>click here</button>');
		testCase(false, '<button hidden>click here</button>');
		testCase(false, '<fieldset disabled><button>click here</button></fieldset>', 'button');
		testCase(false, '<div inert><button>click here</button></div>', 'button');
		testCase(false, '<div hidden><button>click here</button></div>', 'button');
		testCase(false, '<div style="display:none"><button>click here</button></div>', 'button');
		testCase(false, '<div style="visibility:hidden"><button>click here</button></div>', 'button');
	});

	describe('anchor', () => {
		testCase(true, '<a href="https://github.com/AmadeusITGroup/AgnosUI">click here</a>');
		testCase(true, '<a href="https://github.com/AmadeusITGroup/AgnosUI" disabled>click here</a>'); // disabled has no effect on anchors
		testCase(true, '<a tabindex="0">click here</a>');
		testCase(true, '<a tabindex="-1">click here</a>');
		testCase(true, '<a tabindex="1">click here</a>');
		testCase(false, '<a inert href="https://github.com/AmadeusITGroup/AgnosUI">click here</a>');
		testCase(false, '<a hidden href="https://github.com/AmadeusITGroup/AgnosUI">click here</a>');
		testCase(false, '<div inert><a href="https://github.com/AmadeusITGroup/AgnosUI">click here</a></div>', 'a');
		testCase(false, '<div hidden><a href="https://github.com/AmadeusITGroup/AgnosUI">click here</a></div>', 'a');
		testCase(false, '<div style="display:none"><a href="https://github.com/AmadeusITGroup/AgnosUI">click here</a></div>', 'a');
		testCase(false, '<div style="visibility:hidden"><a href="https://github.com/AmadeusITGroup/AgnosUI">click here</a></div>', 'a');
	});

	describe('div', () => {
		testCase(true, '<div contenteditable></div>');
		testCase(true, '<div contenteditable="true"></div>');
		testCase(true, '<div contenteditable="true" disabled></div>');
		testCase(true, '<div tabindex="0"></div>');
		testCase(true, '<div tabindex="-1"></div>');
		testCase(true, '<div tabindex="1"></div>');
		testCase(true, '<div disabled tabindex="0"></div>');
		testCase(false, '<div></div>');
		testCase(false, '<div contenteditable="false"></div>');
		testCase(false, '<div hidden><div contenteditable></div></div>', 'div>div');
		testCase(false, '<div hidden><div tabindex="0"></div></div>', 'div>div');
		testCase(false, '<div inert><div contenteditable></div></div>', 'div>div');
		testCase(false, '<div inert><div tabindex="0"></div></div>', 'div>div');
		testCase(false, '<div style="display:none"><div contenteditable></div></div>', 'div>div');
		testCase(false, '<div style="display:none"><div tabindex="0"></div></div>', 'div>div');
		testCase(false, '<div style="visibility:hidden"><div contenteditable></div></div>', 'div>div');
		testCase(false, '<div style="visibility:hidden"><div tabindex="0"></div></div>', 'div>div');
	});
});
