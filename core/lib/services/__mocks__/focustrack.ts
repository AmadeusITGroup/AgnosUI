import {asReadable, writable} from '@amadeus-it-group/tansu';
import {vi} from 'vitest';
import type {HasFocus, createHasFocus as realCreateHasFocus} from '../focustrack';

export const createHasFocus = vi.fn<Parameters<typeof realCreateHasFocus>, ReturnType<typeof realCreateHasFocus>>();

const noop = () => {
	/* empty function */
};

export function createHasFocusMock() {
	const hasFocusWritable = writable(false);
	const hasFocus: HasFocus = {
		directive: noop,
		hasFocus$: asReadable(hasFocusWritable),
	};
	createHasFocus.mockReset().mockReturnValue(hasFocus);

	return {
		setMockedFocus(isFocused: boolean) {
			hasFocusWritable.set(isFocused);
		},
		hasFocus,
	};
}
