const e=`import type { WritableSignal } from '@amadeus-it-group/tansu';
import type { OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import type { SlotContent } from './slotTypes';
import * as i0 from "@angular/core";
export declare class SlotDefaultDirective<T extends object> implements OnInit {
    auSlotDefault: WritableSignal<{
        slotDefault?: SlotContent<T>;
    }>;
    templateRef: TemplateRef<any>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotDefaultDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotDefaultDirective<any>, "[auSlotDefault]", never, { "auSlotDefault": { "alias": "auSlotDefault"; "required": false; }; }, {}, never, never, true, never>;
}
`;export{e as default};
