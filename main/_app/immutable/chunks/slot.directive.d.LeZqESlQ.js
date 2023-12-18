const e=`import type { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import type { SlotContent } from './slotTypes';
import * as i0 from "@angular/core";
export declare class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
    slot: SlotContent<Props>;
    props: Props;
    private _viewContainerRef;
    private _document;
    private _slotType;
    private _slotHandler;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotDirective<any>, "[auSlot]", never, { "slot": { "alias": "auSlot"; "required": false; }; "props": { "alias": "auSlotProps"; "required": false; }; }, {}, never, never, true, never>;
}
`;export{e as default};
