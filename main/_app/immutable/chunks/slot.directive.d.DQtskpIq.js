const e=`import type { OnChanges, OnDestroy, SimpleChanges, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import type { SlotContent } from './types';
import type { WritableSignal } from '@amadeus-it-group/tansu';
import * as i0 from "@angular/core";
export declare class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
    slot: SlotContent<Props>;
    props: Props;
    private readonly _viewContainerRef;
    private _slotType;
    private _slotHandler;
    /** @inheritdoc */
    ngOnChanges(changes: SimpleChanges): void;
    /** @inheritdoc */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlotDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlotDirective<any>, "[auSlot]", never, { "slot": { "alias": "auSlot"; "required": false; }; "props": { "alias": "auSlotProps"; "required": true; }; }, {}, never, never, true, never>;
}
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
`;export{e as default};
