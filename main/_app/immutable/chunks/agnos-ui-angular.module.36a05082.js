const i=`import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, } from './pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './rating/rating.component';
import { SelectComponent } from './select/select.component';
import { UseDirective } from './transition/use.directive';
import { SlotDirective } from './slot.directive';
import { AlertComponent } from './alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective } from './accordion/accordion.component';
import * as i0 from "@angular/core";
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
];
export class AgnosUIAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, imports: [SlotDirective,
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
            AccordionBodyDirective], exports: [SlotDirective,
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
            AccordionBodyDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, imports: [SelectComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AgnosUIAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: components,
                    exports: components,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9hZ25vcy11aS1hbmd1bGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsMkJBQTJCLEdBQzNCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFFN0ksTUFBTSxVQUFVLEdBQUc7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDdEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxvQkFBb0I7OEdBQXBCLG9CQUFvQjsrR0FBcEIsb0JBQW9CLFlBL0JoQyxhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHNCQUFzQixhQXZCdEIsYUFBYTtZQUNiLGVBQWU7WUFDZixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0I7K0dBUVYsb0JBQW9CLFlBOUJoQyxlQUFlOzsyRkE4Qkgsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLFVBQVU7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRNb2RhbEJvZHlEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbEZvb3RlckRpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRNb2RhbFRpdGxlRGlyZWN0aXZlLFxufSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuXHRQYWdpbmF0aW9uQ29tcG9uZW50LFxuXHRQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSxcbn0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7UmF0aW5nQ29tcG9uZW50LCBSYXRpbmdTdGFyRGlyZWN0aXZlfSBmcm9tICcuL3JhdGluZy9yYXRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7VXNlRGlyZWN0aXZlfSBmcm9tICcuL3RyYW5zaXRpb24vdXNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Nsb3REaXJlY3RpdmV9IGZyb20gJy4vc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtBbGVydENvbXBvbmVudH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHtBY2NvcmRpb25EaXJlY3RpdmUsIEFjY29yZGlvbkl0ZW1Db21wb25lbnQsIEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSwgQWNjb3JkaW9uQm9keURpcmVjdGl2ZX0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFNsb3REaXJlY3RpdmUsXG5cdFNlbGVjdENvbXBvbmVudCxcblx0VXNlRGlyZWN0aXZlLFxuXHRSYXRpbmdDb21wb25lbnQsXG5cdFJhdGluZ1N0YXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QcmV2aW91c0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLFxuXHRNb2RhbENvbXBvbmVudCxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsSGVhZGVyRGlyZWN0aXZlLFxuXHRNb2RhbFRpdGxlRGlyZWN0aXZlLFxuXHRNb2RhbEJvZHlEaXJlY3RpdmUsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRBbGVydENvbXBvbmVudCxcblx0QWNjb3JkaW9uRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuXHRBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRpbXBvcnRzOiBjb21wb25lbnRzLFxuXHRleHBvcnRzOiBjb21wb25lbnRzLFxufSlcbmV4cG9ydCBjbGFzcyBBZ25vc1VJQW5ndWxhck1vZHVsZSB7fVxuIl19`;export{i as default};
