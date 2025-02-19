import {readable, type ReadableSignal} from '@amadeus-it-group/tansu';
import {BROWSER} from 'esm-env';
import {addEvent} from '../utils/internal/dom';
import {false$} from '../utils/stores';

/**
 * Create a store tracking the state of a {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia | matchMedia} query.
 *
 * @param query - the query to match
 * @returns a readable store tracking the match media query state
 */
export const createMatchMedia = (query: string): ReadableSignal<boolean> =>
	BROWSER
		? readable(false, {
				onUse({set}) {
					const mql = window.matchMedia(query.trim());
					set(mql.matches);
					return addEvent(mql, 'change', (val: MediaQueryListEvent) => set(val.matches));
				},
			})
		: false$;
