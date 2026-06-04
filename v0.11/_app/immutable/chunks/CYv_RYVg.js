const t=`import { Toaster as CoreToaster } from '@agnos-ui/core/components/toast';
import { fromStore } from 'svelte/store';
/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
export class Toaster {
    #toaster;
    toasts;
    options;
    addToast;
    removeToast;
    eventsDirective;
    closeAll;
    constructor(options) {
        this.#toaster = new CoreToaster(options);
        this.toasts = fromStore(this.#toaster.toasts);
        this.options = fromStore(this.#toaster.options);
        this.addToast = this.#toaster.addToast;
        this.removeToast = this.#toaster.removeToast;
        this.eventsDirective = this.#toaster.eventsDirective;
        this.closeAll = this.#toaster.closeAll;
    }
}
`;export{t as default};
