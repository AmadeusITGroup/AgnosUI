const t=`import { SlotDirective, UseDirective } from '@agnos-ui/angular-headless';
import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './components/modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, } from './components/pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './components/rating/rating.component';
import { SelectBadgeLabelDirective, SelectComponent, SelectItemDirective } from './components/select/select.component';
import { AlertBodyDirective, AlertComponent, AlertStructureDirective } from './components/alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective, AccordionItemStructureDirective, } from './components/accordion/accordion.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProgressbarComponent, ProgressbarContentDirective } from './components/progressbar/progressbar.component';
import { ToastBodyDirective, ToastComponent, ToastStructureDirective } from './components/toast/toast.component';
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
    ToastComponent,
    ToastStructureDirective,
    ToastBodyDirective,
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
        ProgressbarContentDirective,
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective], exports: [SlotDirective,
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
        ToastComponent,
        ToastStructureDirective,
        ToastBodyDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWdub3MtdWktYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNuQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsMkJBQTJCLEdBQzNCLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNySCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDL0csT0FBTyxFQUNOLGtCQUFrQixFQUNsQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QiwrQkFBK0IsR0FDL0IsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLDJCQUEyQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDakgsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOztBQUMvRywwQkFBMEI7QUFDMUIsTUFBTSxVQUFVLEdBQUc7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtDQUNsQixDQUFDO0FBT0YsTUFBTSxPQUFPLG9CQUFvQjtxRkFBcEIsb0JBQW9CO21FQUFwQixvQkFBb0I7OztpRkFBcEIsb0JBQW9CO2NBTGhDLFFBQVE7ZUFBQztnQkFDVCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxVQUFVO2FBQ25COzt3RkFDWSxvQkFBb0IsY0ExQ2hDLGFBQWE7UUFDYixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QiwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0IsYUFsQ2xCLGFBQWE7UUFDYixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QiwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRNb2RhbEJvZHlEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbEZvb3RlckRpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRNb2RhbFRpdGxlRGlyZWN0aXZlLFxufSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxufSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1JhdGluZ0NvbXBvbmVudCwgUmF0aW5nU3RhckRpcmVjdGl2ZX0gZnJvbSAnLi9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSwgU2VsZWN0Q29tcG9uZW50LCBTZWxlY3RJdGVtRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtBbGVydEJvZHlEaXJlY3RpdmUsIEFsZXJ0Q29tcG9uZW50LCBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZX0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuXHRBY2NvcmRpb25EaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG5cdEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uQm9keURpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSxcbn0gZnJvbSAnLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7U2xpZGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9ncmVzc2JhckNvbXBvbmVudCwgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmltcG9ydCB7VG9hc3RCb2R5RGlyZWN0aXZlLCBUb2FzdENvbXBvbmVudCwgVG9hc3RTdHJ1Y3R1cmVEaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFNsb3REaXJlY3RpdmUsXG5cdFNlbGVjdENvbXBvbmVudCxcblx0U2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSxcblx0U2VsZWN0SXRlbURpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRSYXRpbmdDb21wb25lbnQsXG5cdFJhdGluZ1N0YXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLFxuXHRNb2RhbENvbXBvbmVudCxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsSGVhZGVyRGlyZWN0aXZlLFxuXHRNb2RhbFRpdGxlRGlyZWN0aXZlLFxuXHRNb2RhbEJvZHlEaXJlY3RpdmUsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRBbGVydENvbXBvbmVudCxcblx0QWxlcnRTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdEFsZXJ0Qm9keURpcmVjdGl2ZSxcblx0QWNjb3JkaW9uRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuXHRBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdFNsaWRlckNvbXBvbmVudCxcblx0UHJvZ3Jlc3NiYXJDb21wb25lbnQsXG5cdFByb2dyZXNzYmFyQ29udGVudERpcmVjdGl2ZSxcblx0VG9hc3RDb21wb25lbnQsXG5cdFRvYXN0U3RydWN0dXJlRGlyZWN0aXZlLFxuXHRUb2FzdEJvZHlEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRpbXBvcnRzOiBjb21wb25lbnRzLFxuXHRleHBvcnRzOiBjb21wb25lbnRzLFxufSlcbmV4cG9ydCBjbGFzcyBBZ25vc1VJQW5ndWxhck1vZHVsZSB7fVxuIl19`;export{t as default};
