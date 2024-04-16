const e=`import type { ModalProps } from './modal';
import { Injector } from '@angular/core';
import * as i0 from "@angular/core";
export interface ModalServiceOpenOptions {
    injector?: Injector;
}
export declare class ModalService {
    private readonly _injector;
    private readonly _applicationRef;
    open<Data>(options: Partial<ModalProps<Data>>, { injector }?: ModalServiceOpenOptions): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
`;export{e as default};
