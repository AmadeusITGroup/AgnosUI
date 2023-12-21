const e=`import { SlotDirective, UseDirective } from '@agnos-ui/angular-headless';
import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './components/modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, } from './components/pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './components/rating/rating.component';
import { SelectBadgeLabelDirective, SelectComponent, SelectItemDirective } from './components/select/select.component';
import { AlertBodyDirective, AlertComponent, AlertStructureDirective } from './components/alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective, AccordionItemStructureDirective, } from './components/accordion/accordion.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProgressbarComponent, ProgressbarContentDirective } from './components/progressbar/progressbar.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWdub3MtdWktYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNuQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsMkJBQTJCLEdBQzNCLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNySCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDL0csT0FBTyxFQUNOLGtCQUFrQixFQUNsQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QiwrQkFBK0IsR0FDL0IsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLDJCQUEyQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7O0FBRWpILDBCQUEwQjtBQUMxQixNQUFNLFVBQVUsR0FBRztJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzNCLENBQUM7QUFPRixNQUFNLE9BQU8sb0JBQW9CO3FGQUFwQixvQkFBb0I7bUVBQXBCLG9CQUFvQjs7O2lGQUFwQixvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNULFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLFVBQVU7YUFDbkI7O3dGQUNZLG9CQUFvQixjQXZDaEMsYUFBYTtRQUNiLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLDJCQUEyQixhQS9CM0IsYUFBYTtRQUNiLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG59IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsXG59IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7UmF0aW5nQ29tcG9uZW50LCBSYXRpbmdTdGFyRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCBTZWxlY3RDb21wb25lbnQsIFNlbGVjdEl0ZW1EaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0FsZXJ0Qm9keURpcmVjdGl2ZSwgQWxlcnRDb21wb25lbnQsIEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdEFjY29yZGlvbkRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcblx0QWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLFxufSBmcm9tICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTbGlkZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2dyZXNzYmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY29tcG9uZW50cyA9IFtcblx0U2xvdERpcmVjdGl2ZSxcblx0U2VsZWN0Q29tcG9uZW50LFxuXHRTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLFxuXHRTZWxlY3RJdGVtRGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdFJhdGluZ0NvbXBvbmVudCxcblx0UmF0aW5nU3RhckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxGb290ZXJEaXJlY3RpdmUsXG5cdEFsZXJ0Q29tcG9uZW50LFxuXHRBbGVydFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0QWxlcnRCb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25EaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG5cdEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uQm9keURpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSxcblx0U2xpZGVyQ29tcG9uZW50LFxuXHRQcm9ncmVzc2JhckNvbXBvbmVudCxcblx0UHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0aW1wb3J0czogY29tcG9uZW50cyxcblx0ZXhwb3J0czogY29tcG9uZW50cyxcbn0pXG5leHBvcnQgY2xhc3MgQWdub3NVSUFuZ3VsYXJNb2R1bGUge31cbiJdfQ==`;export{e as default};
