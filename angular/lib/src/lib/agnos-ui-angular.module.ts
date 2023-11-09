import {SlotDirective, UseDirective} from '@agnos-ui/angular-headless';
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
import {AlertBodyDirective, AlertComponent, AlertStructureDirective} from './alert/alert.component';
import {
	AccordionDirective,
	AccordionItemComponent,
	AccordionHeaderDirective,
	AccordionBodyDirective,
	AccordionItemStructureDirective,
} from './accordion/accordion.component';
import {SliderComponent} from './slider/slider.component';
import {ProgressbarComponent, ProgressbarContentDirective} from './progressbar/progressbar.component';

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

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class AgnosUIAngularModule {}
