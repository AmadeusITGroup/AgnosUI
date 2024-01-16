const e=`import type { PropsConfig } from '../types';
export interface IntersectionProps {
    /**
     * elements to observe
     */
    elements: HTMLElement[];
    /**
     * IntersectionObserverInit used in the IntersectionObserver
     *
     * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)
     */
    options: Partial<IntersectionObserverInit> | undefined;
}
/**
 * Create an intersection service.
 *
 * The returned service includes the patch method to set the elements to observe / intersection options and the states to track the visible elements.
 *
 * @param config - the props config for the intersection service
 * @returns the intersection service
 */
export declare const createIntersection: (config?: PropsConfig<IntersectionProps>) => {
    /**
     * Readable of observed elements
     */
    elements$: import("@amadeus-it-group/tansu").ReadableSignal<HTMLElement[]>;
    /**
     * Store of map that contains the visible elements (for the key) and the corresponding entries
     *
     * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
     */
    visibleElements$: import("@amadeus-it-group/tansu").ReadableSignal<Map<Element, IntersectionObserverEntry>>;
    patch: <U extends Partial<IntersectionProps>>(storesValues?: void | U | undefined) => void;
};
`;export{e as default};
