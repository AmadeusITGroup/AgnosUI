import {auBooleanAttribute, auNumberAttribute} from './coercion';
import {describe, expect, it} from 'vitest';

describe('coercion functions', () => {
	describe('auBooleanAttribute', () => {
		it('should coerce undefined to undefined', () => {
			expect(auBooleanAttribute(undefined)).toBe(undefined);
		});

		it('should coerce null to false', () => {
			expect(auBooleanAttribute(null)).toBe(false);
		});

		it('should coerce the empty string to true', () => {
			expect(auBooleanAttribute('')).toBe(true);
		});

		it('should coerce zero to true', () => {
			expect(auBooleanAttribute(0)).toBe(true);
		});

		it('should coerce the string "false" to false', () => {
			expect(auBooleanAttribute('false')).toBe(false);
		});

		it('should coerce the boolean false to false', () => {
			expect(auBooleanAttribute(false)).toBe(false);
		});

		it('should coerce the boolean true to true', () => {
			expect(auBooleanAttribute(true)).toBe(true);
		});

		it('should coerce the string "true" to true', () => {
			expect(auBooleanAttribute('true')).toBe(true);
		});

		it('should coerce an arbitrary string to true', () => {
			expect(auBooleanAttribute('pink')).toBe(true);
		});

		it('should coerce an object to true', () => {
			expect(auBooleanAttribute({})).toBe(true);
		});

		it('should coerce an array to true', () => {
			expect(auBooleanAttribute([])).toBe(true);
		});
	});

	describe('auNumberAttribute', () => {
		it('should coerce undefined to undefined', () => {
			expect(auNumberAttribute(undefined)).toBe(undefined);
		});

		it('should coerce null to NaN', () => {
			expect(auNumberAttribute(null)).toBeNaN();
		});

		it('should coerce true to NaN', () => {
			expect(auNumberAttribute(true)).toBeNaN();
		});

		it('should coerce false to NaN', () => {
			expect(auNumberAttribute(false)).toBeNaN();
		});

		it('should coerce the empty string to NaN', () => {
			expect(auNumberAttribute('')).toBeNaN();
		});

		it('should coerce the string "1" to 1', () => {
			expect(auNumberAttribute('1')).toBe(1);
		});

		it('should coerce the string "123.456" to 123.456', () => {
			expect(auNumberAttribute('123.456')).toBe(123.456);
		});

		it('should coerce the string "-123.456" to -123.456', () => {
			expect(auNumberAttribute('-123.456')).toBe(-123.456);
		});

		it('should coerce an arbitrary string to NaN', () => {
			expect(auNumberAttribute('pink')).toBeNaN();
		});

		it('should coerce an arbitrary string prefixed with a number to NaN', () => {
			expect(auNumberAttribute('123pink')).toBeNaN();
		});

		it('should coerce the number 1 to 1', () => {
			expect(auNumberAttribute(1)).toBe(1);
		});

		it('should coerce the number 123.456 to 123.456', () => {
			expect(auNumberAttribute(123.456)).toBe(123.456);
		});

		it('should coerce the number -123.456 to -123.456', () => {
			expect(auNumberAttribute(-123.456)).toBe(-123.456);
		});

		it('should coerce an object to NaN', () => {
			expect(auNumberAttribute({})).toBeNaN();
		});

		it('should coerce an array to NaN', () => {
			expect(auNumberAttribute([])).toBeNaN();
		});
	});
});
