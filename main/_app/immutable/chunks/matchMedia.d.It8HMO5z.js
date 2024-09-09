const e=`import { type ReadableSignal } from '@amadeus-it-group/tansu';
/**
 * Create a store tracking the state of a {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia | matchMedia} query.
 *
 * @param query - the query to match
 * @returns a readable store tracking the match media query state
 */
export declare const createMatchMedia: (query: string) => ReadableSignal<boolean>;
`;export{e as default};
