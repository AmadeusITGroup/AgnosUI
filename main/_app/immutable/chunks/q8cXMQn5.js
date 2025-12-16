const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Directive, SSRHTMLElement } from '../types';
/**
 * Create a resize observer that can be applied to multiple elements
 * @returns An object containing the store with the dimensions map of observed elements (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export declare const createResizeObserverMap: () => {
    dimensionsMap$: ReadableSignal<Map<HTMLElement, ResizeObserverEntry>>;
    directive: Directive<void, SSRHTMLElement>;
};
/**
 * Create a resize observer object for a single element
 * @returns An object containing the store with the dimensions of observed element (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export declare const createResizeObserver: () => {
    dimensions$: ReadableSignal<ResizeObserverEntry | undefined>;
    directive: Directive<void, SSRHTMLElement>;
};
`;export{e as default};
