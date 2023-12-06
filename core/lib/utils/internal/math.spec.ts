import {describe, expect, test} from 'vitest';
import {getDecimalPrecision} from './math';

describe('Math spec', () => {
	test(`Decimal precision should return correct value`, () => {
		expect(getDecimalPrecision(1)).toBe(0);
		expect(getDecimalPrecision(0.1)).toBe(1);
		expect(getDecimalPrecision(0.0000000001)).toBe(10);
		expect(getDecimalPrecision(0.12345678987654321)).toBe(17);
	});
});
