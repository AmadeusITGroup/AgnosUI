import {computed, readable} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import type {ConfigValidator, PropsConfig} from '../services';
import {
	bindDirective,
	bindDirectiveNoArg,
	directiveSubscribe,
	mergeDirectives,
	portal,
	registrationArray,
	sliblingsInert,
	stateStores,
	typeBoolean,
	typeFunction,
	typeHTMLElementOrNull,
	typeString,
	writablesForProps,
} from '../services';
import type {TransitionFn} from '../transitions';
import {createTransition} from '../transitions';
import {fadeTransition} from '../transitions/bootstrap/fade';
import {promiseFromStore} from '../transitions/utils';
import type {Directive, SlotContent, Widget, WidgetSlotContext} from '../types';
import {noop} from '../utils';
import {removeScrollbars, revertScrollbars} from './scrollbars';

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
export const modalOutsideClick = Symbol();

/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
export const modalCloseButtonClick = Symbol();

/**
 * Context of the modal slots.
 */
export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;

/**
 * Properties of the modal widget that are also in the state of the modal.
 */
export interface ModalCommonPropsAndState<Data> extends WidgetsCommonPropsAndState {
	/**
	 * Value of the aria-label attribute to put on the close button.
	 */
	ariaCloseButtonLabel: string;

	/**
	 * Classes to add on the backdrop DOM element.
	 */
	backdropClass: string;

	/**
	 * Whether to display the close button.
	 */
	closeButton: boolean;

	/**
	 * Which element should contain the modal and backdrop DOM elements.
	 * If it is not null, the modal and backdrop DOM elements are moved to the specified container.
	 * Otherwise, they stay where the widget is located.
	 */
	container: HTMLElement | null;

	/**
	 * Body of the modal.
	 */
	slotDefault: SlotContent<ModalContext<Data>>;

	/**
	 * Footer of the modal.
	 */
	slotFooter: SlotContent<ModalContext<Data>>;

	/**
	 * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle|slotTitle}.
	 */
	slotHeader: SlotContent<ModalContext<Data>>;

	/**
	 * Structure of the modal.
	 * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.slotDefault|slotDefault} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.
	 */
	slotStructure: SlotContent<ModalContext<Data>>;

	/**
	 * Title of the modal.
	 */
	slotTitle: SlotContent<ModalContext<Data>>;

	/**
	 * Whether the modal should be visible when the transition is completed.
	 */
	visible: boolean;
	/**
	 * Data to use in content slots
	 */
	contentData: Data;
}

/**
 * Type of the parameter of {@link ModalProps.onBeforeClose|onBeforeClose}.
 */
export interface ModalBeforeCloseEvent {
	/**
	 * Result of the modal, which is the value passed to the {@link ModalApi.close|close} method
	 * and later resolved by the promise returned by the {@link ModalApi.open|open} method.
	 * If needed, it can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
	 */
	result: any;

	/**
	 * Whether to cancel the close of the modal.
	 * It can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.
	 */
	cancel: boolean;
}

/**
 * Properties of the modal widget.
 */
export interface ModalProps<Data> extends ModalCommonPropsAndState<Data> {
	/**
	 * Whether the modal and its backdrop (if present) should be animated when shown or hidden.
	 */
	animation: boolean;

	/**
	 * Whether a backdrop should be created behind the modal.
	 */
	backdrop: boolean;

	/**
	 * The transition to use for the backdrop behind the modal (if present).
	 */
	backdropTransition: TransitionFn;

	/**
	 * Whether the modal should be closed when clicking on the viewport outside the modal.
	 */
	closeOnOutsideClick: boolean;

	/**
	 * The transition to use for the modal.
	 */
	modalTransition: TransitionFn;

	/**
	 * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).
	 *
	 * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing
	 * to cancel the close process.
	 */
	onBeforeClose: (event: ModalBeforeCloseEvent) => void;

	/**
	 * Event to be triggered when the visible property changes.
	 *
	 * @param visible - new value of the visible propery
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Event to be triggered when the transition is completed and the modal is not visible.
	 */
	onHidden: () => void;

	/**
	 * Event to be triggered when the transition is completed and the modal is visible.
	 */
	onShown: () => void;
}

/**
 * State of the modal widget.
 */
export interface ModalState<Data> extends ModalCommonPropsAndState<Data> {
	/**
	 * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdrop|backdrop} is false or
	 * because {@link ModalCommonPropsAndState.visible|visible} is false and there is no current transition.
	 */
	backdropHidden: boolean;

	/**
	 * Whether the modal is fully hidden.
	 */
	hidden: boolean;

	/**
	 * Whether there is an active transition to either display or hide the modal.
	 */
	transitioning: boolean;

	/**
	 * DOM element of the modal.
	 */
	modalElement: HTMLElement | null;
}

/**
 * API of the modal widget.
 */
export interface ModalApi<Data> {
	/**
	 * Closes the modal with the given result.
	 *
	 * @param result - result of the modal, as passed in the {@link ModalBeforeCloseEvent.result|result} property of the event passed to the
	 * {@link ModalProps.onBeforeClose|onBeforeClose} event handler (and possibly changed by it) and resolved by the promise returned by the {@link ModalApi.open|open} method.
	 */
	close(result?: any): void;

	/**
	 * Opens the modal and returns a promise that is resolved when the modal is closed.
	 * The resolved value is the result passed to the {@link ModalApi.close|close} method and possibly changed by the
	 * {@link ModalProps.onBeforeClose|onBeforeClose} event handler
	 */
	open(): Promise<any>;

	/**
	 * Method to change some modal properties.
	 */
	patch: ModalWidget<Data>['patch'];
}

/**
 * Actions of the modal widget.
 */
export interface ModalActions {
	/**
	 * Action to be called when the user clicks on the close button. It closes the modal with the {@link modalCloseButtonClick} result.
	 * @param event - mouse event
	 */
	closeButtonClick(event: Pick<MouseEvent, never>): void;

	/**
	 * Action to be called when the user clicks on the modal DOM element (which is supposed to have the size of the full viewport).
	 * If the click is not done on a descendant of the modal DOM element, it is considered to be done outside the modal
	 * and, depending on the value of the {@link ModalProps.closeOnOutsideClick|closeOnOutsideClick} prop, the modal is or isn't closed
	 * (with the {@link modalOutsideClick} result).
	 * @param event - mouse event
	 */
	modalClick(event: Pick<MouseEvent, 'target' | 'currentTarget'>): void;
}

/**
 * Directives of the modal widget.
 */
export interface ModalDirectives {
	/**
	 * Directive to put on the modal DOM element.
	 */
	modalDirective: Directive;

	/**
	 * Directive to put on the backdrop DOM element.
	 */
	backdropDirective: Directive;

	/**
	 * Portal directive to put on the modal DOM element.
	 */
	modalPortalDirective: Directive;

	/**
	 * Portal directive to put on the backdrop DOM element.
	 */
	backdropPortalDirective: Directive;
}

/**
 * Modal widget.
 */
export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalActions, ModalDirectives>;

const defaultConfig: ModalProps<any> = {
	animation: true,
	ariaCloseButtonLabel: 'Close',
	backdrop: true,
	backdropClass: '',
	backdropTransition: fadeTransition, // TODO: is it ok to depend on bootstrap transition?
	closeButton: true,
	closeOnOutsideClick: true,
	container: typeof window !== 'undefined' ? document.body : null,
	className: '',
	modalTransition: fadeTransition, // TODO: is it ok to depend on bootstrap transition?
	onBeforeClose: noop,
	onVisibleChange: noop,
	onHidden: noop,
	onShown: noop,
	slotDefault: undefined,
	slotFooter: undefined,
	slotHeader: undefined,
	slotStructure: undefined,
	slotTitle: undefined,
	visible: false,
	contentData: undefined,
};

const configValidator: ConfigValidator<ModalProps<any>> = {
	animation: typeBoolean,
	ariaCloseButtonLabel: typeString,
	backdrop: typeBoolean,
	backdropClass: typeString,
	backdropTransition: typeFunction,
	closeButton: typeBoolean,
	closeOnOutsideClick: typeBoolean,
	container: typeHTMLElementOrNull,
	className: typeString,
	modalTransition: typeFunction,
	onBeforeClose: typeFunction,
	onVisibleChange: typeFunction,
	onHidden: typeFunction,
	onShown: typeFunction,
	visible: typeBoolean,
};

/**
 * Returns a copy of the default modal config.
 * @returns a copy of the default modal config
 */
export function getModalDefaultConfig() {
	return {...defaultConfig};
}

const modals$ = registrationArray<ModalWidget<any>>();
const hasModals$ = computed(() => modals$().length > 0);
const scrollbarsAction$ = computed(() => {
	if (hasModals$()) {
		removeScrollbars();
	} else {
		revertScrollbars();
	}
});
const modalsAction$ = computed(() => {
	scrollbarsAction$();
});

/**
 * Creates a new modal widget instance.
 * @param config$ - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export function createModal<Data>(config$?: PropsConfig<ModalProps<Data>>): ModalWidget<Data> {
	const [
		{
			animation$,
			backdrop$,
			backdropTransition$,
			closeOnOutsideClick$,
			container$,
			modalTransition$,
			onBeforeClose$,
			onVisibleChange$,
			onHidden$,
			onShown$,
			visible$: requestedVisible$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config$, configValidator);
	const modalTransition = createTransition({
		props: {
			transition: modalTransition$,
			visible: requestedVisible$,
			animation: animation$,
			animationOnInit: animation$,
			onVisibleChange: onVisibleChange$,
			// TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
			// (especially in case one of the two transitions takes more time than the other)
			onHidden: onHidden$,
			onShown: onShown$,
		},
	});
	const visible$ = modalTransition.stores.visible$;
	const backdropTransition = createTransition({
		props: {
			transition: backdropTransition$,
			visible: requestedVisible$,
			animation: animation$,
			animationOnInit: animation$,
		},
	});
	const transitioning$ = computed(() => modalTransition.stores.transitioning$() || (backdrop$() && backdropTransition.stores.transitioning$()));
	const hidden$ = computed(() => !transitioning$() && !visible$());
	const backdropHidden$ = computed(() => !backdrop$() || hidden$());
	let hideResult: any;

	const close = (result: any) => {
		hideResult = result;
		const beforeCloseEvent: ModalBeforeCloseEvent = {
			get result() {
				return hideResult;
			},
			set result(value: any) {
				hideResult = value;
			},
			cancel: false,
		};
		onBeforeClose$()(beforeCloseEvent);
		if (beforeCloseEvent.cancel) {
			return;
		}
		patch({visible: false});
	};

	const modalPortalDirective = bindDirective(
		portal,
		computed(() => ({container: container$()})),
	);
	const backdropPortalDirective = bindDirective(
		portal,
		computed(() => {
			const container = container$();
			const element = container ? modalTransition.stores.element$() : undefined;
			return {
				container,
				insertBefore: element?.parentElement === container ? element : undefined,
			};
		}),
	);
	const registerModalAction$ = readable(undefined, () => modals$.register(res));
	const action$ = computed(() => {
		if (modalTransition.stores.elementPresent$() && !hidden$()) {
			registerModalAction$();
		}
		modalsAction$();
	});

	const res: ModalWidget<Data> = {
		...stateStores({
			backdropHidden$,
			container$,
			hidden$,
			transitioning$,
			visible$,
			modalElement$: modalTransition.stores.element$,
			...stateProps,
		}),
		directives: {
			modalPortalDirective,
			backdropPortalDirective,
			backdropDirective: bindDirectiveNoArg(backdropTransition.directives.directive),
			modalDirective: mergeDirectives(bindDirectiveNoArg(modalTransition.directives.directive), sliblingsInert, directiveSubscribe(action$)),
		},
		patch,
		api: {
			close,
			async open() {
				patch({visible: true});
				await promiseFromStore(hidden$).promise;
				return hideResult;
			},
			patch,
		},
		actions: {
			modalClick(event) {
				if (event.currentTarget === event.target && closeOnOutsideClick$()) {
					close(modalOutsideClick);
				}
			},
			closeButtonClick(event) {
				close(modalCloseButtonClick);
			},
		},
	};

	return res;
}
