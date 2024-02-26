const e=`import { computed, readable } from '@amadeus-it-group/tansu';
import { createStoreArrayDirective } from '../utils/directive';
const evtFocusIn = 'focusin';
const evtFocusOut = 'focusout';
export const activeElement$ = readable(null, {
    onUse({ set }) {
        function setActiveElement() {
            set(document.activeElement);
        }
        setActiveElement();
        const container = document.documentElement;
        function onFocusOut() {
            setTimeout(setActiveElement);
        }
        container.addEventListener(evtFocusIn, setActiveElement, { capture: true });
        container.addEventListener(evtFocusOut, onFocusOut, { capture: true });
        return () => {
            container.removeEventListener(evtFocusIn, setActiveElement, { capture: true });
            container.removeEventListener(evtFocusOut, onFocusOut, { capture: true });
        };
    },
    equal: Object.is,
});
/**
 * Create a HasFocus
 * @returns a HasFocus
 */
export function createHasFocus() {
    const { elements$, directive } = createStoreArrayDirective();
    const hasFocus$ = computed(() => {
        const activeElement = activeElement$();
        if (!activeElement) {
            return false;
        }
        for (const element of elements$()) {
            if (element === activeElement || element.contains(activeElement)) {
                return true;
            }
        }
        return false;
    });
    return {
        directive,
        hasFocus$,
    };
}
`;export{e as default};
