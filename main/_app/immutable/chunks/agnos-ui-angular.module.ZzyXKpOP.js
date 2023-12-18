const e=`import { SlotDirective, UseDirective } from '@agnos-ui/angular-headless';
import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, } from './pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './rating/rating.component';
import { SelectBadgeLabelDirective, SelectComponent, SelectItemDirective } from './select/select.component';
import { AlertBodyDirective, AlertComponent, AlertStructureDirective } from './alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective, AccordionItemStructureDirective, } from './accordion/accordion.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent, ProgressbarContentDirective } from './progressbar/progressbar.component';
import * as i0 from "@angular/core";
/* istanbul ignore next */
const components = [
    SlotDirective,
    SelectComponent,
    SelectBadgeLabelDirective,
    SelectItemDirective,
    UseDirective,
    RatingComponent,
    RatingStarDirective,
    PaginationComponent,
    PaginationEllipsisDirective,
    PaginationFirstDirective,
    PaginationLastDirective,
    PaginationNextDirective,
    PaginationNumberDirective,
    PaginationPreviousDirective,
    PaginationPagesDirective,
    ModalComponent,
    ModalStructureDirective,
    ModalHeaderDirective,
    ModalTitleDirective,
    ModalBodyDirective,
    ModalFooterDirective,
    AlertComponent,
    AlertStructureDirective,
    AlertBodyDirective,
    AccordionDirective,
    AccordionItemComponent,
    AccordionHeaderDirective,
    AccordionBodyDirective,
    AccordionItemStructureDirective,
    SliderComponent,
    ProgressbarComponent,
    ProgressbarContentDirective,
];
export class AgnosUIAngularModule {
    static { this.ɵfac = function AgnosUIAngularModule_Factory(t) { return new (t || AgnosUIAngularModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AgnosUIAngularModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({}); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AgnosUIAngularModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: components,
                exports: components,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AgnosUIAngularModule, { imports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemDirective,
        UseDirective,
        RatingComponent,
        RatingStarDirective,
        PaginationComponent,
        PaginationEllipsisDirective,
        PaginationFirstDirective,
        PaginationLastDirective,
        PaginationNextDirective,
        PaginationNumberDirective,
        PaginationPreviousDirective,
        PaginationPagesDirective,
        ModalComponent,
        ModalStructureDirective,
        ModalHeaderDirective,
        ModalTitleDirective,
        ModalBodyDirective,
        ModalFooterDirective,
        AlertComponent,
        AlertStructureDirective,
        AlertBodyDirective,
        AccordionDirective,
        AccordionItemComponent,
        AccordionHeaderDirective,
        AccordionBodyDirective,
        AccordionItemStructureDirective,
        SliderComponent,
        ProgressbarComponent,
        ProgressbarContentDirective], exports: [SlotDirective,
        SelectComponent,
        SelectBadgeLabelDirective,
        SelectItemDirective,
        UseDirective,
        RatingComponent,
        RatingStarDirective,
        PaginationComponent,
        PaginationEllipsisDirective,
        PaginationFirstDirective,
        PaginationLastDirective,
        PaginationNextDirective,
        PaginationNumberDirective,
        PaginationPreviousDirective,
        PaginationPagesDirective,
        ModalComponent,
        ModalStructureDirective,
        ModalHeaderDirective,
        ModalTitleDirective,
        ModalBodyDirective,
        ModalFooterDirective,
        AlertComponent,
        AlertStructureDirective,
        AlertBodyDirective,
        AccordionDirective,
        AccordionItemComponent,
        AccordionHeaderDirective,
        AccordionBodyDirective,
        AccordionItemStructureDirective,
        SliderComponent,
        ProgressbarComponent,
        ProgressbarContentDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWdub3MtdWktYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsMkJBQTJCLEdBQzNCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEcsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QiwrQkFBK0IsR0FDL0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLDJCQUEyQixFQUFDLE1BQU0scUNBQXFDLENBQUM7O0FBRXRHLDBCQUEwQjtBQUMxQixNQUFNLFVBQVUsR0FBRztJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzNCLENBQUM7QUFPRixNQUFNLE9BQU8sb0JBQW9CO3FGQUFwQixvQkFBb0I7bUVBQXBCLG9CQUFvQjs7O2lGQUFwQixvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNULFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLFVBQVU7YUFDbkI7O3dGQUNZLG9CQUFvQixjQXZDaEMsYUFBYTtRQUNiLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLDJCQUEyQixhQS9CM0IsYUFBYTtRQUNiLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG59IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxufSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1N0YXJEaXJlY3RpdmV9IGZyb20gJy4vcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCBTZWxlY3RDb21wb25lbnQsIFNlbGVjdEl0ZW1EaXJlY3RpdmV9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtBbGVydEJvZHlEaXJlY3RpdmUsIEFsZXJ0Q29tcG9uZW50LCBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZX0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHtcblx0QWNjb3JkaW9uRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuXHRBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsXG59IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTbGlkZXJDb21wb25lbnR9IGZyb20gJy4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9ncmVzc2JhckNvbXBvbmVudCwgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlfSBmcm9tICcuL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRTbG90RGlyZWN0aXZlLFxuXHRTZWxlY3RDb21wb25lbnQsXG5cdFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmUsXG5cdFNlbGVjdEl0ZW1EaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0UmF0aW5nQ29tcG9uZW50LFxuXHRSYXRpbmdTdGFyRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uQ29tcG9uZW50LFxuXHRQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxUaXRsZURpcmVjdGl2ZSxcblx0TW9kYWxCb2R5RGlyZWN0aXZlLFxuXHRNb2RhbEZvb3RlckRpcmVjdGl2ZSxcblx0QWxlcnRDb21wb25lbnQsXG5cdEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlLFxuXHRBbGVydEJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcblx0QWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRTbGlkZXJDb21wb25lbnQsXG5cdFByb2dyZXNzYmFyQ29tcG9uZW50LFxuXHRQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRpbXBvcnRzOiBjb21wb25lbnRzLFxuXHRleHBvcnRzOiBjb21wb25lbnRzLFxufSlcbmV4cG9ydCBjbGFzcyBBZ25vc1VJQW5ndWxhck1vZHVsZSB7fVxuIl19`;export{e as default};
