const t=`import type { WritableSignal } from '@amadeus-it-group/tansu';
import type { OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import type { SlotContent } from './types';
import * as i0 from "@angular/core";
/**
 * Directive that allows to pass the templateRef associated to a ng-content to a store.
 * The input of the directive is a {@link WritableSignal}<{children: {@link SlotContent}<T>}>.
 */
export declare class ContentAsSlotDirective<T extends object> implements OnInit {
    auContentAsSlot: WritableSignal<{
        children?: SlotContent<T>;
    }>;
    templateRef: TemplateRef<any>;
    /** @inheritdoc */
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentAsSlotDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContentAsSlotDirective<any>, "[auContentAsSlot]", never, { "auContentAsSlot": { "alias": "auContentAsSlot"; "required": true; }; }, {}, never, never, true, never>;
}
`;export{t as default};
