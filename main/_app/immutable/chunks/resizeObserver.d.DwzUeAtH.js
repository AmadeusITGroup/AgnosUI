const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
/**
 * Create a resize observer object
 * @returns An object containing the store with the dimentions of observed element (ResizeObserverEntry), the directive to be applied to the html element to be observed
 */
export declare const createResizeObserver: () => {
    /**
     * Store which contains the dimensions of the observed element (ResizeObserverEntry type)
     * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)
     */
    dimensions$: ReadableSignal<ResizeObserverEntry | undefined>;
    /** Directive to be attached to html element in order to listen to resize events */
    directive: import("..").Directive<void, import("..").SSRHTMLElement>;
};
`;export{e as default};
