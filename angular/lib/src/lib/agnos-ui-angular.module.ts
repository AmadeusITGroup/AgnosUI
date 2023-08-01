import {NgModule} from '@angular/core';
import {
	ModalBodyDirective,
	ModalComponent,
	ModalFooterDirective,
	ModalHeaderDirective,
	ModalStructureDirective,
	ModalTitleDirective,
} from './modal/modal.component';
import {
	PaginationComponent,
	PaginationEllipsisDirective,
	PaginationFirstDirective,
	PaginationLastDirective,
	PaginationNextDirective,
	PaginationNumberDirective,
	PaginationPagesDirective,
	PaginationPreviousDirective,
} from './pagination/pagination.component';
import {RatingComponent, RatingStarDirective} from './rating/rating.component';
import {SelectComponent} from './select/select.component';
import {UseDirective} from './transition/use.directive';
import {SlotDirective} from './slot.directive';
import {AlertComponent} from './alert/alert.component';
import {AccordionDirective, AccordionItemComponent, AccordionHeaderDirective, AccordionBodyDirective} from './accordion/accordion.component';

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

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class AgnosUIAngularModule {}
