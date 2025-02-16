const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Directive, SSRHTMLElement } from '../types';
/**
 * Create a resize observer object
 * @returns An object containing the store with the dimentions of observed element (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export declare const createResizeObserver: () => {
    dimensions$: ReadableSignal<ResizeObserverEntry | undefined>;
    directive: Directive<void, SSRHTMLElement>;
};
`;export{e as default};
