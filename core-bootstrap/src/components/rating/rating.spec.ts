import {describe, expect, test} from 'vitest';
import {getRatingDefaultConfig} from './rating';

describe(`Rating`, () => {
	test('should include a simple slot factory in the default config', () => {
		const slotStar = getRatingDefaultConfig().slotStar as (props: {fill: number}) => string;
		expect(slotStar({fill: 100})).toBe('★');
		expect(slotStar({fill: 20})).toBe('☆');
	});
});
