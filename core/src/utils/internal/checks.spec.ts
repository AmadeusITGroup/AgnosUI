import {describe, expect, test, vi} from 'vitest';
import {allowNull, clamp, isArray, isBoolean, isFromEnum, isFunction, isHTMLElement, isNumber, isString} from './checks';

describe('Checks', () => {
	test(`'isNumber' should check if value is a number`, () => {
		expect(isNumber(0)).toBe(true);
		expect(isNumber(1)).toBe(true);
		expect(isNumber(1.1)).toBe(true);
		expect(isNumber('1')).toBe(false);
		expect(isNumber('0')).toBe(false);
		expect(isNumber('1.1')).toBe(false);
		expect(isNumber(undefined)).toBe(false);
		expect(isNumber(null)).toBe(false);
		expect(isNumber(true)).toBe(false);
		expect(isNumber({})).toBe(false);
		expect(isNumber([])).toBe(false);
		expect(isNumber(NaN)).toBe(false);
		expect(isNumber(Infinity)).toBe(false);
		expect(isNumber(-Infinity)).toBe(false);
		expect(isNumber(() => {})).toBe(false);
	});

	test(`'isBoolean' should check if value is a boolean`, () => {
		expect(isBoolean(true)).toBe(true);
		expect(isBoolean(false)).toBe(true);
		expect(isBoolean(0)).toBe(false);
		expect(isBoolean(1)).toBe(false);
		expect(isBoolean(1.1)).toBe(false);
		expect(isBoolean('1')).toBe(false);
		expect(isBoolean('0')).toBe(false);
		expect(isBoolean('1.1')).toBe(false);
		expect(isBoolean(undefined)).toBe(false);
		expect(isBoolean(null)).toBe(false);
		expect(isBoolean({})).toBe(false);
		expect(isBoolean([])).toBe(false);
		expect(isBoolean(NaN)).toBe(false);
		expect(isBoolean(Infinity)).toBe(false);
		expect(isBoolean(-Infinity)).toBe(false);
		expect(isBoolean(() => {})).toBe(false);
	});

	test(`'isFunction' should check if value is a function`, () => {
		expect(isFunction(function () {})).toBe(true);
		expect(isFunction(class {})).toBe(true);
		expect(isFunction(true)).toBe(false);
		expect(isFunction(false)).toBe(false);
		expect(isFunction(0)).toBe(false);
		expect(isFunction(1)).toBe(false);
		expect(isFunction(1.1)).toBe(false);
		expect(isFunction('1')).toBe(false);
		expect(isFunction('0')).toBe(false);
		expect(isFunction('1.1')).toBe(false);
		expect(isFunction(undefined)).toBe(false);
		expect(isFunction(null)).toBe(false);
		expect(isFunction({})).toBe(false);
		expect(isFunction([])).toBe(false);
		expect(isFunction(NaN)).toBe(false);
		expect(isFunction(Infinity)).toBe(false);
		expect(isFunction(-Infinity)).toBe(false);
		expect(isFunction(() => {})).toBe(true);
	});

	test(`'isString' should check if value is a string`, () => {
		expect(isString(true)).toBe(false);
		expect(isString(false)).toBe(false);
		expect(isString(0)).toBe(false);
		expect(isString(1)).toBe(false);
		expect(isString(1.1)).toBe(false);
		expect(isString('1')).toBe(true);
		expect(isString('0')).toBe(true);
		expect(isString('1.1')).toBe(true);
		expect(isString(undefined)).toBe(false);
		expect(isString(null)).toBe(false);
		expect(isString({})).toBe(false);
		expect(isString([])).toBe(false);
		expect(isString(NaN)).toBe(false);
		expect(isString(Infinity)).toBe(false);
		expect(isString(-Infinity)).toBe(false);
		expect(isString(() => {})).toBe(false);
	});

	test(`'isArray' should check if the value is an array`, () => {
		expect(isArray(true)).toBe(false);
		expect(isArray(false)).toBe(false);
		expect(isArray(0)).toBe(false);
		expect(isArray(1)).toBe(false);
		expect(isArray(1.1)).toBe(false);
		expect(isArray('1')).toBe(false);
		expect(isArray('0')).toBe(false);
		expect(isArray('1.1')).toBe(false);
		expect(isArray(undefined)).toBe(false);
		expect(isArray(null)).toBe(false);
		expect(isArray({})).toBe(false);
		expect(isArray([])).toBe(true);
		expect(isArray(NaN)).toBe(false);
		expect(isArray(Infinity)).toBe(false);
		expect(isArray(-Infinity)).toBe(false);
		expect(isArray(() => {})).toBe(false);
	});

	test(`'getValueInRange' should return a value is within a specific range`, () => {
		expect(clamp(1, 5)).toBe(1);
		expect(clamp(-1, 5)).toBe(0);
		expect(clamp(0, 5)).toBe(0);
		expect(clamp(-Infinity, 5)).toBe(0);
		expect(clamp(-2022, 5)).toBe(0);
		// Max could be < min
		expect(clamp(5, -5)).toBe(0);
		expect(clamp(Infinity, 5)).toBe(5);
		expect(clamp(2022, 5)).toBe(5);
		expect(clamp(0, 10, 5)).toBe(5);
		expect(clamp(5, 10, 5)).toBe(5);
		expect(clamp(6, 10, 5)).toBe(6);
		expect(clamp(10, 10, 5)).toBe(10);
		expect(clamp(2022, 10, 5)).toBe(10);
	});

	test(`'isHTMLElement' should check if value is an HTML element`, () => {
		expect(isHTMLElement(document.createElement('div'))).toBe(true);
		expect(isHTMLElement(document.body)).toBe(true);
		expect(isHTMLElement(document.documentElement)).toBe(true);
		expect(isHTMLElement(null)).toBe(false);
		expect(isHTMLElement('test')).toBe(false);
		expect(isHTMLElement('')).toBe(false);
		expect(isHTMLElement(1)).toBe(false);
		expect(isHTMLElement(0)).toBe(false);
		expect(isHTMLElement(false)).toBe(false);
		expect(isHTMLElement(true)).toBe(false);
		expect(isHTMLElement({})).toBe(false);
		expect(isHTMLElement(() => {})).toBe(false);
	});

	test(`'allowNull' should add null to accepted values of a type guard`, () => {
		const alwaysFalse = vi.fn(() => false);
		const withAllowNull = allowNull(alwaysFalse as unknown as (value: any) => value is never);
		expect(withAllowNull(null)).toBe(true);
		expect(alwaysFalse).not.toHaveBeenCalled();
		expect(withAllowNull(undefined)).toBe(false);
		expect(alwaysFalse).toHaveBeenCalledTimes(1);
		expect(withAllowNull(0)).toBe(false);
		expect(alwaysFalse).toHaveBeenCalledTimes(2);
	});

	test(`'isFromEnum' should check if the value is part of the array`, () => {
		const emptyEnumCheck = isFromEnum([]);
		expect(emptyEnumCheck('value')).toBe(false);
		const uniqEnumCheck = isFromEnum(['value']);
		expect(uniqEnumCheck('value')).toBe(true);
	});
});
