const i=`import { SlotDirective, UseDirective } from '@agnos-ui/angular-headless';
import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, } from './pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './rating/rating.component';
import { SelectComponent } from './select/select.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective, AccordionItemStructureDirective, } from './accordion/accordion.component';
import { SliderComponent } from './slider/slider.component';
import * as i0 from "@angular/core";
/* istanbul ignore next */
const components = [
    SlotDirective,
    SelectComponent,
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
    AccordionDirective,
    AccordionItemComponent,
    AccordionHeaderDirective,
    AccordionBodyDirective,
    AccordionItemStructureDirective,
    SliderComponent,
];
export class AgnosUIAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: AgnosUIAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.11", ngImport: i0, type: AgnosUIAngularModule, imports: [SlotDirective,
            SelectComponent,
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
            AccordionDirective,
            AccordionItemComponent,
            AccordionHeaderDirective,
            AccordionBodyDirective,
            AccordionItemStructureDirective,
            SliderComponent], exports: [SlotDirective,
            SelectComponent,
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
            AccordionDirective,
            AccordionItemComponent,
            AccordionHeaderDirective,
            AccordionBodyDirective,
            AccordionItemStructureDirective,
            SliderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: AgnosUIAngularModule, imports: [SelectComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: AgnosUIAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: components,
                    exports: components,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9hZ25vcy11aS1hbmd1bGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsbUJBQW1CLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUNOLG1CQUFtQixFQUNuQiwyQkFBMkIsRUFDM0Isd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QiwyQkFBMkIsR0FDM0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ04sa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLCtCQUErQixHQUMvQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFMUQsMEJBQTBCO0FBQzFCLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixlQUFlO0NBQ2YsQ0FBQztBQU9GLE1BQU0sT0FBTyxvQkFBb0I7K0dBQXBCLG9CQUFvQjtnSEFBcEIsb0JBQW9CLFlBakNoQyxhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QiwrQkFBK0I7WUFDL0IsZUFBZSxhQXpCZixhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QiwrQkFBK0I7WUFDL0IsZUFBZTtnSEFRSCxvQkFBb0IsWUFoQ2hDLGVBQWU7OzRGQWdDSCxvQkFBb0I7a0JBTGhDLFFBQVE7bUJBQUM7b0JBQ1QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsVUFBVTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Nsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRNb2RhbEJvZHlEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbEZvb3RlckRpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRNb2RhbFRpdGxlRGlyZWN0aXZlLFxufSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuXHRQYWdpbmF0aW9uQ29tcG9uZW50LFxuXHRQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSxcbn0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7UmF0aW5nQ29tcG9uZW50LCBSYXRpbmdTdGFyRGlyZWN0aXZlfSBmcm9tICcuL3JhdGluZy9yYXRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7QWxlcnRDb21wb25lbnR9IGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdEFjY29yZGlvbkRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcblx0QWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLFxufSBmcm9tICcuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7U2xpZGVyQ29tcG9uZW50fSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFNsb3REaXJlY3RpdmUsXG5cdFNlbGVjdENvbXBvbmVudCxcblx0VXNlRGlyZWN0aXZlLFxuXHRSYXRpbmdDb21wb25lbnQsXG5cdFJhdGluZ1N0YXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLFxuXHRNb2RhbENvbXBvbmVudCxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsSGVhZGVyRGlyZWN0aXZlLFxuXHRNb2RhbFRpdGxlRGlyZWN0aXZlLFxuXHRNb2RhbEJvZHlEaXJlY3RpdmUsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRBbGVydENvbXBvbmVudCxcblx0QWNjb3JkaW9uRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuXHRBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdFNsaWRlckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGltcG9ydHM6IGNvbXBvbmVudHMsXG5cdGV4cG9ydHM6IGNvbXBvbmVudHMsXG59KVxuZXhwb3J0IGNsYXNzIEFnbm9zVUlBbmd1bGFyTW9kdWxlIHt9XG4iXX0=`;export{i as default};
