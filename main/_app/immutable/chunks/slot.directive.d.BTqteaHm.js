const e=`import type { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import type { SlotContent } from './types';
import * as i0 from "@angular/core";
/**
 * A directive that manages slot content and its properties.
 *
 * @template Props - A record type representing the properties for the slot.
 *
 * @remarks
 * This directive handles changes to the slot content and its properties,
 * and manages the lifecycle of the slot handler.
 */
export declare class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
    /**
     * The slot content to be managed.
     */
    slot: SlotContent<Props>;
    /**
     * The properties for the slot content.
     */
    props: Props;
    private readonly _viewContainerRef;
    private _slotType;
    private _slotHandler;
    /**
     * @param changes SimpleChanges from Angular
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotDirective<any>, "[auSlot]", never, { "slot": { "alias": "auSlot"; "required": false; }; "props": { "alias": "auSlotProps"; "required": true; }; }, {}, never, never, true, never>;
}
`;export{e as default};
