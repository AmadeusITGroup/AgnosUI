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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9hZ25vcy11aS1hbmd1bGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsMkJBQTJCLEdBQzNCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFFN0ksMEJBQTBCO0FBQzFCLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3RCLENBQUM7QUFPRixNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7K0dBQXBCLG9CQUFvQixZQS9CaEMsYUFBYTtZQUNiLGVBQWU7WUFDZixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0IsYUF2QnRCLGFBQWE7WUFDYixlQUFlO1lBQ2YsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsc0JBQXNCOytHQVFWLG9CQUFvQixZQTlCaEMsZUFBZTs7MkZBOEJILG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDVCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxVQUFVO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0TW9kYWxCb2R5RGlyZWN0aXZlLFxuXHRNb2RhbENvbXBvbmVudCxcblx0TW9kYWxGb290ZXJEaXJlY3RpdmUsXG5cdE1vZGFsSGVhZGVyRGlyZWN0aXZlLFxuXHRNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0TW9kYWxUaXRsZURpcmVjdGl2ZSxcbn0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblBhZ2VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsXG59IGZyb20gJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1JhdGluZ0NvbXBvbmVudCwgUmF0aW5nU3RhckRpcmVjdGl2ZX0gZnJvbSAnLi9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZURpcmVjdGl2ZX0gZnJvbSAnLi90cmFuc2l0aW9uL3VzZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTbG90RGlyZWN0aXZlfSBmcm9tICcuL3Nsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7QWxlcnRDb21wb25lbnR9IGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7QWNjb3JkaW9uRGlyZWN0aXZlLCBBY2NvcmRpb25JdGVtQ29tcG9uZW50LCBBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsIEFjY29yZGlvbkJvZHlEaXJlY3RpdmV9IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY29tcG9uZW50cyA9IFtcblx0U2xvdERpcmVjdGl2ZSxcblx0U2VsZWN0Q29tcG9uZW50LFxuXHRVc2VEaXJlY3RpdmUsXG5cdFJhdGluZ0NvbXBvbmVudCxcblx0UmF0aW5nU3RhckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxGb290ZXJEaXJlY3RpdmUsXG5cdEFsZXJ0Q29tcG9uZW50LFxuXHRBY2NvcmRpb25EaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG5cdEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uQm9keURpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGltcG9ydHM6IGNvbXBvbmVudHMsXG5cdGV4cG9ydHM6IGNvbXBvbmVudHMsXG59KVxuZXhwb3J0IGNsYXNzIEFnbm9zVUlBbmd1bGFyTW9kdWxlIHt9XG4iXX0=`;export{i as default};
