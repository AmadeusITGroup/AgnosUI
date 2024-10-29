const e=`import { type ReadableSignal } from '@amadeus-it-group/tansu';
import type { PropsConfig } from '../types';
/**
 * Interface representing the properties for the Intersection service.
 */
export interface IntersectionProps {
    /**
     * elements to observe
     */
    elements: HTMLElement[];
    /**
     * IntersectionObserverInit used in the {@link IntersectionObserver}
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options | MDN documentation}
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
    elements$: ReadableSignal<HTMLElement[]>;
    visibleElements$: ReadableSignal<Map<Element, IntersectionObserverEntry>>;
    patch: (storesValues: Partial<IntersectionProps>) => void;
};
`;export{e as default};
