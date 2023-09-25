const i=`import { SlotDirective, UseDirective } from '@agnos-ui/angular-headless';
import { NgModule } from '@angular/core';
import { ModalBodyDirective, ModalComponent, ModalFooterDirective, ModalHeaderDirective, ModalStructureDirective, ModalTitleDirective, } from './modal/modal.component';
import { PaginationComponent, PaginationEllipsisDirective, PaginationFirstDirective, PaginationLastDirective, PaginationNextDirective, PaginationNumberDirective, PaginationPagesDirective, PaginationPreviousDirective, } from './pagination/pagination.component';
import { RatingComponent, RatingStarDirective } from './rating/rating.component';
import { SelectComponent } from './select/select.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective, AccordionItemStructureDirective, } from './accordion/accordion.component';
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
];
export class AgnosUIAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AgnosUIAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: AgnosUIAngularModule, imports: [SlotDirective,
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
            AccordionItemStructureDirective], exports: [SlotDirective,
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
            AccordionItemStructureDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AgnosUIAngularModule, imports: [SelectComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: AgnosUIAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: components,
                    exports: components,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9hZ25vcy11aS1hbmd1bGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsbUJBQW1CLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUNOLG1CQUFtQixFQUNuQiwyQkFBMkIsRUFDM0Isd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QiwyQkFBMkIsR0FDM0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ04sa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLCtCQUErQixHQUMvQixNQUFNLGlDQUFpQyxDQUFDOztBQUV6QywwQkFBMEI7QUFDMUIsTUFBTSxVQUFVLEdBQUc7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsK0JBQStCO0NBQy9CLENBQUM7QUFPRixNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7K0dBQXBCLG9CQUFvQixZQWhDaEMsYUFBYTtZQUNiLGVBQWU7WUFDZixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsK0JBQStCLGFBeEIvQixhQUFhO1lBQ2IsZUFBZTtZQUNmLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QiwrQkFBK0I7K0dBUW5CLG9CQUFvQixZQS9CaEMsZUFBZTs7MkZBK0JILG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDVCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxVQUFVO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG59IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxufSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1N0YXJEaXJlY3RpdmV9IGZyb20gJy4vcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtBbGVydENvbXBvbmVudH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHtcblx0QWNjb3JkaW9uRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuXHRBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsXG59IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY29tcG9uZW50cyA9IFtcblx0U2xvdERpcmVjdGl2ZSxcblx0U2VsZWN0Q29tcG9uZW50LFxuXHRVc2VEaXJlY3RpdmUsXG5cdFJhdGluZ0NvbXBvbmVudCxcblx0UmF0aW5nU3RhckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcblx0UGFnaW5hdGlvbkVsbGlwc2lzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uRmlyc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25MYXN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTmV4dERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk51bWJlckRpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUGFnZXNEaXJlY3RpdmUsXG5cdE1vZGFsQ29tcG9uZW50LFxuXHRNb2RhbFN0cnVjdHVyZURpcmVjdGl2ZSxcblx0TW9kYWxIZWFkZXJEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxGb290ZXJEaXJlY3RpdmUsXG5cdEFsZXJ0Q29tcG9uZW50LFxuXHRBY2NvcmRpb25EaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG5cdEFjY29yZGlvbkhlYWRlckRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uQm9keURpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbVN0cnVjdHVyZURpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGltcG9ydHM6IGNvbXBvbmVudHMsXG5cdGV4cG9ydHM6IGNvbXBvbmVudHMsXG59KVxuZXhwb3J0IGNsYXNzIEFnbm9zVUlBbmd1bGFyTW9kdWxlIHt9XG4iXX0=`;export{i as default};
