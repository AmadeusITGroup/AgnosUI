import {isArray, isBoolean, isFunction, isNumber, isString} from './checks';
import type {WritableWithDefaultOptions} from './stores';
import {INVALID_VALUE} from './stores';

export const testToNormalizeValue =
	<T>(filter: (value: T) => boolean) =>
	(value: T) =>
		filter(value) ? value : INVALID_VALUE;

export const typeNumber: WritableWithDefaultOptions<number> = {
	normalizeValue: testToNormalizeValue(isNumber),
};

export const typeBoolean: WritableWithDefaultOptions<boolean> = {
	normalizeValue: testToNormalizeValue(isBoolean),
};

export const typeString: WritableWithDefaultOptions<string> = {
	normalizeValue: testToNormalizeValue(isString),
};

export const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any> = {
	normalizeValue: testToNormalizeValue(isFunction),
	equal: Object.is,
};

export const typeArray: WritableWithDefaultOptions<any[]> = {
	normalizeValue: testToNormalizeValue(isArray),
	equal: (a, b) => {
		if (a === b) {
			return true;
		} else {
			if (a?.length !== b?.length) {
				return false;
			}
			return a.every((val, index) => val === b[index]);
		}
	},
};
