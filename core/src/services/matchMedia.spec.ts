import {describe, test, expect, vi} from 'vitest';
import {createMatchMedia} from './matchMedia';

describe('Match Media service', () => {
	describe('createMatchMedia', () => {
		test('basic functionality', () => {
			const addEventListener = vi.fn(() => {});
			const removeEventListener = vi.fn(() => {});
			const matchMediaSpy = vi
				.spyOn(window, 'matchMedia')
				.mockReturnValue({addEventListener, removeEventListener, matches: true} as any as MediaQueryList);

			const aboveMd$ = createMatchMedia('(width: 668px)');
			expect(matchMediaSpy).not.toHaveBeenCalled();
			expect(addEventListener).not.toHaveBeenCalled();
			expect(removeEventListener).not.toHaveBeenCalled();

			expect(aboveMd$()).toBe(true);
			expect(matchMediaSpy).toHaveBeenCalledWith('(width: 668px)');
			expect(addEventListener).toHaveBeenCalledOnce();
			expect(removeEventListener).toHaveBeenCalledOnce();

			vi.clearAllMocks();
		});

		test('query and event listener only created once', () => {
			const addEventListener = vi.fn(() => {});
			const removeEventListener = vi.fn(() => {});
			const matchMediaSpy = vi
				.spyOn(window, 'matchMedia')
				.mockReturnValue({addEventListener, removeEventListener, matches: true} as any as MediaQueryList);

			const aboveMd$ = createMatchMedia('(width: 668px)');
			expect(matchMediaSpy).not.toHaveBeenCalled();
			expect(addEventListener).not.toHaveBeenCalled();
			expect(removeEventListener).not.toHaveBeenCalled();

			const subscriptionA = aboveMd$.subscribe(() => {});
			const subscriptionB = aboveMd$.subscribe(() => {});
			expect(matchMediaSpy).toHaveBeenCalledWith('(width: 668px)');
			expect(addEventListener).toHaveBeenCalledOnce();
			expect(removeEventListener).not.toHaveBeenCalled();

			subscriptionA();
			expect(removeEventListener).not.toHaveBeenCalledOnce();
			subscriptionB();
			expect(removeEventListener).toHaveBeenCalledOnce();

			vi.clearAllMocks();
		});
	});
});
