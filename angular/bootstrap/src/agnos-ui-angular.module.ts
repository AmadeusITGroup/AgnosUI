import {SlotDirective, UseDirective, UseMultiDirective} from '@agnos-ui/angular-headless';
import {NgModule} from '@angular/core';
import {
	ModalBodyDirective,
	ModalComponent,
	ModalFooterDirective,
	ModalHeaderDirective,
	ModalStructureDirective,
	ModalTitleDirective,
} from './components/modal/modal.component';
import {
	PaginationComponent,
	PaginationEllipsisDirective,
	PaginationFirstDirective,
	PaginationLastDirective,
	PaginationNextDirective,
	PaginationNumberDirective,
	PaginationPagesDirective,
	PaginationStructureDirective,
	PaginationPreviousDirective,
} from './components/pagination/pagination.component';
import {RatingComponent, RatingStarDirective} from './components/rating/rating.component';
import {SelectBadgeLabelDirective, SelectComponent, SelectItemLabelDirective} from './components/select/select.component';
import {AlertBodyDirective, AlertComponent, AlertStructureDirective} from './components/alert/alert.component';
import {
	AccordionDirective,
	AccordionItemComponent,
	AccordionHeaderDirective,
	AccordionBodyDirective,
	AccordionItemStructureDirective,
} from './components/accordion/accordion.component';
import {
	SliderComponent,
	SliderHandleDirective,
	SliderLabelDirective,
	SliderStructureDirective,
	SliderTickDirective,
} from './components/slider/slider.component';
import {ProgressbarComponent, ProgressbarBodyDirective, ProgressbarStructureDirective} from './components/progressbar/progressbar.component';
import {ToastBodyDirective, ToastComponent, ToastHeaderDirective, ToastStructureDirective} from './components/toast/toast.component';
import {CollapseDirective, CollapseTriggerDirective} from './components/collapse';
import {
	TreeComponent,
	TreeItemContentDirective,
	TreeItemDirective,
	TreeStructureDirective,
	TreeItemToggleDirective,
} from './components/tree/tree.component';
import {CarouselComponent, CarouselSlideDirective} from './components/carousel';

/* istanbul ignore next */
const components = [
	SlotDirective,
	SelectComponent,
	SelectBadgeLabelDirective,
	SelectItemLabelDirective,
	UseDirective,
	UseMultiDirective,
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
	PaginationStructureDirective,
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
	SliderHandleDirective,
	SliderLabelDirective,
	SliderStructureDirective,
	SliderTickDirective,
	ProgressbarComponent,
	ProgressbarStructureDirective,
	ProgressbarBodyDirective,
	ToastComponent,
	ToastStructureDirective,
	ToastBodyDirective,
	ToastHeaderDirective,
	CollapseDirective,
	CollapseTriggerDirective,
	TreeComponent,
	TreeStructureDirective,
	TreeItemToggleDirective,
	TreeItemContentDirective,
	TreeItemDirective,
	CarouselComponent,
	CarouselSlideDirective,
];

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class AgnosUIAngularModule {}
