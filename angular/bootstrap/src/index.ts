/*
 * Public API Surface of @agnos-ui/angular-bootstrap
 */
export * from '@agnos-ui/angular-headless';

export * from './agnos-ui-angular.module';

export type {
	AccordionApi,
	AccordionItemContext,
	AccordionItemProps,
	AccordionItemState,
	AccordionItemWidget,
	AccordionProps,
	AccordionState,
	AccordionWidget,
	AccordionDirectives,
	AccordionItemApi,
	AccordionItemDirectives,
} from './components/accordion';
export {createAccordion, getAccordionDefaultConfig, createAccordionItem, factoryCreateAccordion} from './components/accordion';
export * from './components/accordion';

export type {AlertContext, AlertProps, AlertState, AlertWidget, AlertApi, AlertDirectives} from './components/alert';
export {createAlert, getAlertDefaultConfig} from './components/alert';
export * from './components/alert';

export type {CollapseProps, CollapseWidget, CollapseApi, CollapseDirectives, CollapseState} from './components/collapse';
export {createCollapse, getCollapseDefaultConfig} from './components/collapse';
export * from './components/collapse';

export type {ModalContext, ModalProps, ModalState, ModalWidget, ModalApi, ModalDirectives, ModalBeforeCloseEvent} from './components/modal';
export {createModal, getModalDefaultConfig, modalCloseButtonClick, modalOutsideClick} from './components/modal';
export * from './components/modal';

export type {
	PaginationContext,
	PaginationNumberContext,
	PaginationProps,
	PaginationState,
	PaginationWidget,
	DirectionsHrefs,
	PaginationApi,
	PaginationDirectives,
} from './components/pagination';
export {createPagination, getPaginationDefaultConfig} from './components/pagination';
export * from './components/pagination';

export type {ProgressbarContext, ProgressbarProps, ProgressbarState, ProgressbarWidget, ProgressbarDirectives} from './components/progressbar';
export {createProgressbar, getProgressbarDefaultConfig} from './components/progressbar';
export * from './components/progressbar';

export type {RatingProps, RatingState, RatingWidget, StarContext, RatingApi, RatingDirectives} from './components/rating';
export {createRating, getRatingDefaultConfig} from './components/rating';
export * from './components/rating';

export type {
	SelectContext,
	SelectItemContext,
	SelectProps,
	SelectState,
	SelectWidget,
	ItemContext,
	SelectApi,
	SelectDirectives,
} from './components/select';
export {createSelect, getSelectDefaultConfig} from './components/select';
export * from './components/select';

export type {
	SliderContext,
	SliderProps,
	SliderSlotHandleContext,
	SliderSlotLabelContext,
	SliderState,
	SliderWidget,
	SliderHandle,
	SliderTick,
	HandleDisplayOptions,
	ProgressDisplayOptions,
	SliderDirectives,
} from './components/slider';
export {createSlider, getSliderDefaultConfig} from './components/slider';
export * from './components/slider';

export type {ToastContext, ToastProps, ToastState, ToastWidget, ToastApi, ToastDirectives} from './components/toast';
export {createToast, getToastDefaultConfig} from './components/toast';

export {defaultToasterProps, ToasterService} from './components/toast';
export type {ToastPositions, ToasterProps, ToasterTimer, ToasterToast} from './components/toast';
export * from './components/toast';

export type {TreeProps, TreeState, TreeWidget, TreeApi, TreeDirectives, TreeItem, NormalizedTreeItem} from './components/tree';
export {createTree, getTreeDefaultConfig} from './components/tree';
export * from './components/tree';

export type {CarouselWidget, CarouselProps, CarouselState, CarouselApi, CarouselDirectives} from './components/carousel';
export {createCarousel, getCarouselDefaultConfig} from './components/carousel';
export * from './components/carousel';

// [export-placeholder]

export * from '@agnos-ui/core-bootstrap/services/transitions';
export * from '@agnos-ui/core-bootstrap/types';

export type {WidgetsConfig} from './config';
export {widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory} from './config';
