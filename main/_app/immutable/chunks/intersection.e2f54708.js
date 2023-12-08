const e=`import { asReadable, derived } from '@amadeus-it-group/tansu';
import { noop } from '../utils/internal/func';
import { writablesForProps } from '../utils/stores';
const defaultValues = {
    elements: [],
    options: undefined,
};
export const createIntersection = (config) => {
    const [{ elements$, options$ }, patch] = writablesForProps(defaultValues, config);
    const visibleElements$ = derived([elements$, options$], ([elements, options], set) => {
        if (elements.length) {
            const visibleElements = new Map();
            const observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    const { target, isIntersecting } = entry;
                    if (isIntersecting) {
                        visibleElements.set(target, entry);
                    }
                    else {
                        visibleElements.delete(target);
                    }
                }
                set(visibleElements);
            }, options);
            for (const element of elements) {
                observer.observe(element);
            }
            return () => {
                observer.disconnect();
            };
        }
        return noop;
    }, new Map());
    return {
        /**
         * Readable of observed elements
         */
        elements$: asReadable(elements$),
        /**
         * Store of map that contains the visible elements (for the key) and the corresponding entries
         *
         * See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
         */
        visibleElements$: asReadable(visibleElements$),
        patch,
    };
};
`;export{e as default};
