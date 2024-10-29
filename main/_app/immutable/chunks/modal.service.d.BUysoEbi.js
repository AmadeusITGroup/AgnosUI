const e=`import { Injector } from '@angular/core';
import type { ModalProps } from './modal.gen';
import * as i0 from "@angular/core";
interface ModalServiceOpenOptions {
    injector?: Injector;
}
/**
 * Service to handle the opening and management of modal components.
 */
export declare class ModalService {
    private readonly _injector;
    private readonly _applicationRef;
    open<Data>(options: Partial<ModalProps<Data>>, { injector }?: ModalServiceOpenOptions): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
export {};
`;export{e as default};
