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
	AccordionItemActions,
	AccordionItemApi,
	AccordionItemDirectives,
} from './components/accordion';
export {createAccordion, getAccordionDefaultConfig, createAccordionItem, factoryCreateAccordion} from './components/accordion';
export * from './components/accordion';

export type {AlertContext, AlertProps, AlertState, AlertWidget, AlertApi, AlertDirectives} from './components/alert';
export {createAlert, getAlertDefaultConfig} from './components/alert';
export * from './components/alert';

export type {
	ModalContext,
	ModalProps,
	ModalState,
	ModalWidget,
	ModalApi,
	ModalDirectives,
	ModalActions,
	ModalBeforeCloseEvent,
} from './components/modal';
export {createModal, getModalDefaultConfig, modalCloseButtonClick, modalOutsideClick} from './components/modal';
export * from './components/modal';

export type {
	PaginationContext,
	PaginationNumberContext,
	PaginationProps,
	PaginationState,
	PaginationWidget,
	DirectionsHrefs,
	PaginationActions,
	PaginationApi,
	PaginationDirectives,
} from './components/pagination';
export {createPagination, getPaginationDefaultConfig} from './components/pagination';
export * from './components/pagination';

export type {
	ProgressbarContext,
	ProgressbarProps,
	ProgressbarState,
	ProgressbarWidget,
	ProgressbarApi,
	ProgressbarDirectives,
} from './components/progressbar';
export {createProgressbar, getProgressbarDefaultConfig} from './components/progressbar';
export * from './components/progressbar';

export type {RatingProps, RatingState, RatingWidget, StarContext, RatingActions, RatingDirectives} from './components/rating';
export {createRating, getRatingDefaultConfig} from './components/rating';
export * from './components/rating';

export type {
	SelectContext,
	SelectItemContext,
	SelectProps,
	SelectState,
	SelectWidget,
	ItemContext,
	SelectActions,
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
	SliderActions,
	SliderApi,
	SliderHandle,
	HandleDisplayOptions,
	ProgressDisplayOptions,
	SliderDirectives,
} from './components/slider';
export {createSlider, getSliderDefaultConfig} from './components/slider';
export * from './components/slider';

export type {ToastContext, ToastProps, ToastState, ToastWidget, ToastApi, ToastDirectives} from './components/toast';
export {createToast, getToastDefaultConfig} from './components/toast';
export * from './components/toast';

export * from '@agnos-ui/core-bootstrap/services/transitions';
export * from '@agnos-ui/core-bootstrap/types';

export type {WidgetsConfig} from './config';
export {widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory} from './config';
