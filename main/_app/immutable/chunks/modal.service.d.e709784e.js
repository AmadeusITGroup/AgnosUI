const e=`import type { ModalProps } from '@agnos-ui/angular-headless';
import { Injector } from '@angular/core';
import * as i0 from "@angular/core";
export interface ModalServiceOpenOptions {
    injector?: Injector;
}
export declare class ModalService {
    private _injector;
    private _applicationRef;
    open(options: Partial<ModalProps>, { injector }?: ModalServiceOpenOptions): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
`;export{e as default};
