import {describe, expect, test} from 'vitest';
import {getRatingDefaultConfig} from './rating';

describe(`Rating`, () => {
	test('should include a simple slot factory in the default config', () => {
		const star = getRatingDefaultConfig().star as (props: {fill: number}) => string;
		expect(star({fill: 100})).toBe('★');
		expect(star({fill: 20})).toBe('☆');
	});
});
