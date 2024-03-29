import {booleanAttribute, numberAttribute} from '@angular/core';

/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 * @example
 * ```@Input({ transform: auBooleanAttribute }) status: boolean | undefined;```
 * @param value - Value to be transformed.
 * @returns the value transformed
 */
export function auBooleanAttribute(value: unknown): boolean | undefined {
	if (value === undefined) {
		return undefined;
	}
	return booleanAttribute(value);
}

/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value - Value to be transformed.
 *
 * @example
 *  ```@Input({ transform: auNumberAttribute }) id: number | undefined;```
 * @returns the value transformed
 */
export function auNumberAttribute(value: unknown): number | undefined {
	if (value === undefined) {
		return undefined;
	}
	return numberAttribute(value);
}
