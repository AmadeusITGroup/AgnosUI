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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: AgnosUIAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.5", ngImport: i0, type: AgnosUIAngularModule, imports: [SlotDirective,
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
            ProgressbarContentDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: AgnosUIAngularModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: AgnosUIAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: components,
                    exports: components,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdub3MtdWktYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvc3JjL2xpYi9hZ25vcy11aS1hbmd1bGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsbUJBQW1CLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUNOLG1CQUFtQixFQUNuQiwyQkFBMkIsRUFDM0Isd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QiwyQkFBMkIsR0FDM0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0UsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFHLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRyxPQUFPLEVBQ04sa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLCtCQUErQixHQUMvQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsMkJBQTJCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdEcsMEJBQTBCO0FBQzFCLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwyQkFBMkI7Q0FDM0IsQ0FBQztBQU9GLE1BQU0sT0FBTyxvQkFBb0I7OEdBQXBCLG9CQUFvQjsrR0FBcEIsb0JBQW9CLFlBdkNoQyxhQUFhO1lBQ2IsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsK0JBQStCO1lBQy9CLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsMkJBQTJCLGFBL0IzQixhQUFhO1lBQ2IsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsK0JBQStCO1lBQy9CLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsMkJBQTJCOytHQVFmLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDVCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxVQUFVO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdE1vZGFsQm9keURpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxTdHJ1Y3R1cmVEaXJlY3RpdmUsXG5cdE1vZGFsVGl0bGVEaXJlY3RpdmUsXG59IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7XG5cdFBhZ2luYXRpb25Db21wb25lbnQsXG5cdFBhZ2luYXRpb25FbGxpcHNpc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkZpcnN0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTGFzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbk5leHREaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OdW1iZXJEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSxcblx0UGFnaW5hdGlvblByZXZpb3VzRGlyZWN0aXZlLFxufSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1N0YXJEaXJlY3RpdmV9IGZyb20gJy4vcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCBTZWxlY3RDb21wb25lbnQsIFNlbGVjdEl0ZW1EaXJlY3RpdmV9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtBbGVydEJvZHlEaXJlY3RpdmUsIEFsZXJ0Q29tcG9uZW50LCBBbGVydFN0cnVjdHVyZURpcmVjdGl2ZX0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHtcblx0QWNjb3JkaW9uRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuXHRBY2NvcmRpb25IZWFkZXJEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkl0ZW1TdHJ1Y3R1cmVEaXJlY3RpdmUsXG59IGZyb20gJy4vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTbGlkZXJDb21wb25lbnR9IGZyb20gJy4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9ncmVzc2JhckNvbXBvbmVudCwgUHJvZ3Jlc3NiYXJDb250ZW50RGlyZWN0aXZlfSBmcm9tICcuL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRTbG90RGlyZWN0aXZlLFxuXHRTZWxlY3RDb21wb25lbnQsXG5cdFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmUsXG5cdFNlbGVjdEl0ZW1EaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0UmF0aW5nQ29tcG9uZW50LFxuXHRSYXRpbmdTdGFyRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uQ29tcG9uZW50LFxuXHRQYWdpbmF0aW9uRWxsaXBzaXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25GaXJzdERpcmVjdGl2ZSxcblx0UGFnaW5hdGlvbkxhc3REaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25OZXh0RGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uTnVtYmVyRGlyZWN0aXZlLFxuXHRQYWdpbmF0aW9uUHJldmlvdXNEaXJlY3RpdmUsXG5cdFBhZ2luYXRpb25QYWdlc0RpcmVjdGl2ZSxcblx0TW9kYWxDb21wb25lbnQsXG5cdE1vZGFsU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRNb2RhbEhlYWRlckRpcmVjdGl2ZSxcblx0TW9kYWxUaXRsZURpcmVjdGl2ZSxcblx0TW9kYWxCb2R5RGlyZWN0aXZlLFxuXHRNb2RhbEZvb3RlckRpcmVjdGl2ZSxcblx0QWxlcnRDb21wb25lbnQsXG5cdEFsZXJ0U3RydWN0dXJlRGlyZWN0aXZlLFxuXHRBbGVydEJvZHlEaXJlY3RpdmUsXG5cdEFjY29yZGlvbkRpcmVjdGl2ZSxcblx0QWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcblx0QWNjb3JkaW9uSGVhZGVyRGlyZWN0aXZlLFxuXHRBY2NvcmRpb25Cb2R5RGlyZWN0aXZlLFxuXHRBY2NvcmRpb25JdGVtU3RydWN0dXJlRGlyZWN0aXZlLFxuXHRTbGlkZXJDb21wb25lbnQsXG5cdFByb2dyZXNzYmFyQ29tcG9uZW50LFxuXHRQcm9ncmVzc2JhckNvbnRlbnREaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRpbXBvcnRzOiBjb21wb25lbnRzLFxuXHRleHBvcnRzOiBjb21wb25lbnRzLFxufSlcbmV4cG9ydCBjbGFzcyBBZ25vc1VJQW5ndWxhck1vZHVsZSB7fVxuIl19`;export{e as default};
