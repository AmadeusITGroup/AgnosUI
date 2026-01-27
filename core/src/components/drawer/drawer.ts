import {asWritable, computed, readable, untrack, writable} from '@amadeus-it-group/tansu';
import {focusElement} from '../../services/focusElement';
import {createPointerdownPositionDirective} from '../../services/pointerdownPosition';
import {portal} from '../../services/portal';
import {siblingsInert} from '../../services/siblingsInert';
import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import type {Directive, WidgetFactory} from '../../types';
import {type ConfigValidator, type PropsConfig, type Widget} from '../../types';
import {
	bindDirective,
	conditionalDirective,
	createAttributesDirective,
	createBrowserStoreDirective,
	directiveSubscribe,
	isBrowserHTMLElement,
	mergeDirectives,
} from '../../utils/directive';
import {noop} from '../../utils/func';
import {removeScrollbars, revertScrollbars} from '../../utils/internal/scrollbars';
import {bindableProp, stateStores, true$, writablesForProps} from '../../utils/stores';
import {createWidgetFactory} from '../../utils/widget';
import {typeBoolean, typeFunction, typeHTMLElementOrNull, typeNumberOrNull, typeString} from '../../utils/writables';
import type {WidgetsCommonPropsAndState} from '../commonProps';

/**
 * Possible values for the drawer positions
 */
export type DrawerPositions = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

interface DrawerCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `'w-full'`
	 */
	className: string;
	/**
	 * Which element should contain the drawer and backdrop DOM elements.
	 * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
	 * Otherwise, they stay where the widget is located.
	 *
	 * @defaultValue
	 * ```ts
	 * typeof window !== 'undefined' ? document.body : null
	 * ```
	 */
	container: HTMLElement | null;
	/**
	 * Classes to add on the backdrop DOM element.
	 *
	 * @defaultValue `''`
	 */
	backdropClass: string;
	/**
	 * If `true`, the drawer is shown; otherwise, it is hidden.
	 *
	 * @defaultValue `false`
	 */
	visible: boolean;
	/**
	 * If `true`, the drawer can be resized by the user.
	 *
	 * @defaultValue `false`
	 */
	resizable: boolean;
	/**
	 * Size of the drawer in pixel once the user start interacting.
	 * It corresponds to the height or the width depending on the drawer orientation
	 *
	 * @defaultValue `null`
	 */
	size: number | null;
}

/**
 * Interface representing the properties for the Drawer component.
 */
export interface DrawerProps extends DrawerCommonPropsAndState {
	/**
	 * The transition function will be executed when the drawer is displayed or hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	transition: TransitionFn;
	/**
	 * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	verticalTransition: TransitionFn;
	/**
	 * The transition to use for the backdrop behind the drawer (if present).
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	backdropTransition: TransitionFn;
	/**
	 * If `true` opening and closing will be animated.
	 *
	 * @defaultValue `true`
	 */
	animated: boolean;
	/**
	 * aria-labelledby attribute to use for the drawer element.
	 *
	 * @defaultValue `''`
	 */
	ariaLabelledBy: string;
	/**
	 * aria-describedby attribute to use for the drawer element.
	 *
	 * @defaultValue `''`
	 */
	ariaDescribedBy: string;
	/**
	 * If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
	 *
	 * @defaultValue `true`
	 */
	backdrop: boolean;
	/**
	 * If `true` allows body scrolling when the drawer is open.
	 *
	 * @defaultValue `false`
	 */
	bodyScroll: boolean;
	/**
	 * If `true` focuses the drawer when it is opened.
	 *
	 * @defaultValue `true`
	 */
	focusOnInit: boolean;
	/**
	 * Event to be triggered when the transition is completed and the drawer is not visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHidden: () => void;
	/**
	 * Event to be triggered when the transition is completed and the drawer is visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onShown: () => void;
	/**
	 * An event emitted when the drawer size changes (width or height depending on the orientation).
	 *
	 * Event payload is equal to the newly selected width or height.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onSizeChange: (size: number | null) => void;
	/**
	 * Event to be triggered when the visible property changes.
	 *
	 * @param visible - new value of the visible propery
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onVisibleChange: (visible: boolean) => void;
	/**
	 * Event to be triggered when the minimized state changes.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onMinimizedChange: (isMinimized: boolean) => void;
	/**
	 * Event to be triggered when the maximized state changes.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onMaximizedChange: (isMaximized: boolean) => void;
	/**
	 * Event to be triggered when the user starts or stops resizing the drawer.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onResizingChange: (isResizing: boolean) => void;
}

/**
 * Represents the state of a Drawer component.
 */
export interface DrawerState extends DrawerCommonPropsAndState {
	/**
	 * Whether the backdrop is fully hidden. This can be true either because {@link DrawerProps.backdrop|backdrop} is false or
	 * because {@link DrawerProps.visible|visible} is false and there is no current transition.
	 */
	backdropHidden: boolean;
	/**
	 * Flag to show whether the drawer is fully hidden.
	 */
	hidden: boolean;
	/**
	 * Flag to show whether the drawer is vertically positioned.
	 */
	isVertical: boolean;
}

/**
 * Interface representing the API for a Drawer component.
 */
export interface DrawerApi {
	/**
	 * Trigger the opening of the drawer.
	 */
	open: () => void;
	/**
	 * Trigger the closing of the drawer.
	 */
	close: () => void;
}

/**
 * Interface representing various directives used in the Drawer component.
 */
export interface DrawerDirectives {
	/**
	 * Directive to put on the drawer DOM element.
	 */
	drawerDirective: Directive;
	/**
	 * Portal directive to put on the drawer DOM element.
	 */
	drawerPortalDirective: Directive;
	/**
	 * Directive to put on the backdrop DOM element.
	 */
	backdropDirective: Directive;
	/**
	 * Portal directive to put on the backdrop DOM element.
	 */
	backdropPortalDirective: Directive;
	/**
	 * Directive to put on the splitter DOM element.
	 */
	splitterDirective: Directive;
}

/**
 * Represents a Drawer widget component.
 */
export type DrawerWidget = Widget<DrawerProps, DrawerState, DrawerApi, DrawerDirectives>;

/**
 * Retrieve a shallow copy of the default Drawer config
 * @returns the default Drawer config
 */
export function getDrawerDefaultConfig(): DrawerProps {
	return {
		...defaultDrawerConfig,
	};
}

const defaultDrawerConfig: DrawerProps = {
	animated: true,
	ariaDescribedBy: '',
	ariaLabelledBy: '',
	backdropClass: '',
	backdropTransition: noop,
	className: 'w-full',
	visible: false,
	container: typeof window !== 'undefined' ? document.body : null,
	transition: noop,
	verticalTransition: noop,
	onHidden: noop,
	onShown: noop,
	onSizeChange: noop,
	onVisibleChange: noop,
	onMinimizedChange: noop,
	onMaximizedChange: noop,
	onResizingChange: noop,
	resizable: false,
	backdrop: true,
	bodyScroll: false,
	size: null,
	focusOnInit: true,
};

const configValidator: ConfigValidator<DrawerProps> = {
	animated: typeBoolean,
	ariaDescribedBy: typeString,
	ariaLabelledBy: typeString,
	backdropClass: typeString,
	backdropTransition: typeFunction,
	className: typeString,
	visible: typeBoolean,
	transition: typeFunction,
	verticalTransition: typeFunction,
	container: typeHTMLElementOrNull,
	onHidden: typeFunction,
	onShown: typeFunction,
	onSizeChange: typeFunction,
	onVisibleChange: typeFunction,
	onMinimizedChange: typeFunction,
	onMaximizedChange: typeFunction,
	onResizingChange: typeFunction,
	resizable: typeBoolean,
	backdrop: typeBoolean,
	bodyScroll: typeBoolean,
	size: typeNumberOrNull,
	focusOnInit: typeBoolean,
};

/**
 * Create a Drawer widget with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
export const createDrawer: WidgetFactory<DrawerWidget> = createWidgetFactory('drawer', (config?: PropsConfig<DrawerProps>) => {
	const [
		{
			backdrop$,
			backdropTransition$,
			backdropClass$,
			bodyScroll$,
			transition$,
			verticalTransition$,
			visible$: requestedVisible$,
			container$,
			className$,
			size$: _dirtySize$,
			animated$,
			ariaDescribedBy$,
			ariaLabelledBy$,
			onHidden$,
			onShown$,
			onSizeChange$,
			onVisibleChange$,
			onMinimizedChange$,
			onMaximizedChange$,
			onResizingChange$,
			focusOnInit$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultDrawerConfig, config, configValidator);

	const size$ = bindableProp(_dirtySize$, onSizeChange$, (value) => (value ? Math.round(value) : value));

	const isVertical$ = computed(() => {
		const isVertical = ['block-start', 'block-end'].some((placement) => className$().includes(placement));
		return isVertical;
	});
	const transition = createTransition({
		props: {
			animated: animated$,
			animatedOnInit: animated$,
			transition: asWritable(computed(() => (isVertical$() ? verticalTransition$() : transition$()))),
			visible: requestedVisible$,
			onVisibleChange: onVisibleChange$,
			onHidden: onHidden$,
			onShown: onShown$,
		},
	});

	const drawerPortalDirective = bindDirective(
		portal,
		computed(() => ({container: container$()})),
	);

	const {directive: drawerElementDirective, element$: drawerElement$} = createBrowserStoreDirective();
	const drawerAttributeDirective = mergeDirectives(
		drawerElementDirective,
		createAttributesDirective(() => ({
			attributes: {
				class: className$,
				role: readable('dialog'),
				'aria-describedby': ariaDescribedBy$,
				'aria-labelledby': ariaLabelledBy$,
				'aria-modal': readable('true'),
				tabIndex: readable('-1'),
			},
			styles: {
				position: computed(() => {
					const container = container$();
					return container && isBrowserHTMLElement(container) && container !== document.body ? 'relative' : 'fixed';
				}),
				outline: readable('none'),
			},
			events: {
				keydown: async (e: KeyboardEvent) => {
					if (e.key === 'Escape') {
						await transition.api.hide();
					}
				},
			},
		})),
	);

	const backdropTransition = createTransition({
		props: {
			animated: animated$,
			transition: backdropTransition$,
		},
	});

	const backdropPortalDirective = bindDirective(
		portal,
		computed(() => {
			const container = container$();
			const element = container ? transition.stores.element$() : undefined;
			return {
				container,
				insertBefore: element?.parentElement === container ? element : undefined,
			};
		}),
	);

	const backdropHidden$ = computed(() => {
		if (!bodyScroll$()) {
			if (hidden$()) {
				revertScrollbars();
			} else {
				removeScrollbars();
			}
		}
		return !backdrop$() || hidden$();
	});

	const backdropAttributeDirective = createAttributesDirective(() => ({
		attributes: {
			class: backdropClass$,
			'data-agnos-ignore-inert': true$,
		},
		events: {
			click: async () => await transition.api.hide(),
		},
	}));

	const direction$ = computed(() => (['inline-start', 'block-start'].some((placement) => className$().includes(placement)) ? 1 : -1));

	const isMinimized$ = writable(<boolean | undefined>undefined);
	const isMaximized$ = writable(<boolean | undefined>undefined);

	/**
	 * Sets the size of the drawer element and updates related state.
	 *
	 * This function updates the drawer's dimensions (width or height depending on orientation),
	 * calculates the actual rendered size, and adjusts the minimized/maximized states
	 *
	 * @param size - The desired size in pixels for the drawer. Must be a non-negative number. Will be rounded to the nearest integer and clamped to a minimum of 0.
	 *
	 * @returns The actual rendered size of the drawer element in pixels after applying the style.
	 */
	function setSize(size: number) {
		const drawerElement = drawerElement$()!;
		const isVertical = isVertical$();
		size = Math.round(Math.max(0, size));
		drawerElement.style[isVertical ? 'height' : 'width'] = `${size}px`;
		const elementSize = Math.round(drawerElement[isVertical ? 'offsetHeight' : 'offsetWidth']);
		size$.set(elementSize);
		isMinimized$.set(size != null && (size < elementSize || size === 0));
		isMaximized$.set(!!size && size > elementSize);

		return elementSize;
	}

	const splitterDirective = mergeDirectives(
		createPointerdownPositionDirective((event) => {
			const drawerElement = drawerElement$()!;
			const isVertical = isVertical$();
			const startSize = drawerElement[isVertical ? 'offsetHeight' : 'offsetWidth'];
			const clientXorY = isVertical ? 'clientY' : 'clientX';
			const startPos = event[clientXorY];
			const direction = direction$();
			let isResizing = false;

			return {
				onMove(event) {
					setSize(startSize + direction * (event[clientXorY] - startPos));
					if (!isResizing) {
						isResizing = true;
						onResizingChange$()(true);
					}
				},
				onEnd() {
					drawerElement.style[isVertical ? 'height' : 'width'] = '';
					if (isResizing) {
						onResizingChange$()(false);
						isResizing = false;
					}
				},
			};
		}),
		createAttributesDirective(() => ({
			events: {
				keydown: (e: KeyboardEvent) => {
					const {key} = e;
					const size = size$() || drawerElement$()?.[isVertical$() ? 'offsetHeight' : 'offsetWidth'];
					if (size != null) {
						switch (key) {
							case 'ArrowLeft':
							case 'ArrowDown':
								onResizingChange$()(true);
								setSize(size - 10);
								onResizingChange$()(false);
								break;
							case 'ArrowRight':
							case 'ArrowUp':
								onResizingChange$()(true);
								setSize(size + 10);
								onResizingChange$()(false);
								break;
						}
					}
				},
			},
		})),
	);

	const visible$ = transition.stores.visible$;
	const transitioning$ = computed(() => transition.stores.transitioning$() || backdropTransition.stores.transitioning$());
	const hidden$ = computed(() => !transitioning$() && !visible$());

	const minSizeAction$ = computed(() => {
		const isMinimized = isMinimized$();
		if (isMinimized != null) {
			untrack(() => onMinimizedChange$()(isMinimized));
		}
	});

	const maxSizeAction$ = computed(() => {
		const isMaximized = isMaximized$();
		if (isMaximized != null) {
			untrack(() => onMaximizedChange$()(isMaximized));
		}
	});

	const action$ = computed(() => {
		minSizeAction$();
		maxSizeAction$();
	});

	const widget: DrawerWidget = {
		...stateStores({
			...stateProps,
			backdropClass$,
			className$,
			container$,
			size$,
			visible$,
			backdropHidden$,
			hidden$,
			isVertical$,
		}),
		patch,
		api: {
			open: transition.api.show,
			close: transition.api.hide,
		},
		directives: {
			drawerPortalDirective,
			drawerDirective: mergeDirectives(
				directiveSubscribe(action$),
				drawerAttributeDirective,
				bindDirective(
					siblingsInert,
					computed(() => !bodyScroll$()),
				),
				// This directive must come after the attribute directive, to ensure that all the classes and attributes are applied for the transition
				transition.directives.directive,
				conditionalDirective(focusElement, focusOnInit$),
			),
			backdropPortalDirective,
			backdropDirective: mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
			splitterDirective,
		},
	};
	return widget;
});
