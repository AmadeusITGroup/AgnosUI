const e=`import { Injector } from '@angular/core';
import type { ModalProps } from './modal.gen';
import * as i0 from "@angular/core";
/**
 * Service to handle the opening and management of modal components.
 */
export declare class ModalService {
    private readonly _injector;
    private readonly _applicationRef;
    /**
     * Opens a modal dialog with the specified options.
     *
     * @template Data - The type of data that the modal will handle.
     * @param options - The options to configure the modal.
     * @param injector - The injector to use when creating the modal component
     * @returns A promise that resolves when the modal is closed.
     */
    open<Data>(options: Partial<ModalProps<Data>>, injector?: Injector): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
`;export{e as default};
