import {asWritable, computed, readable, writable} from '@amadeus-it-group/tansu';
import {focusElement} from '../../services/focusElement';
import {createMousedownPositionDirective} from '../../services/mousedownPosition';
import {portal} from '../../services/portal';
import {siblingsInert} from '../../services/siblingsInert';
import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import type {Directive, WidgetFactory} from '../../types';
import {type ConfigValidator, type PropsConfig, type Widget} from '../../types';
import {bindDirective, browserDirective, createAttributesDirective, isBrowserHTMLElement, mergeDirectives} from '../../utils/directive';
import {noop} from '../../utils/func';
import {removeScrollbars, revertScrollbars} from '../../utils/internal/scrollbars';
import {bindableProp, stateStores, true$, writablesForProps} from '../../utils/stores';
import {createWidgetFactory} from '../../utils/widget';
import {typeBoolean, typeFunction, typeHTMLElementOrNull, typeString} from '../../utils/writables';
import type {WidgetsCommonPropsAndState} from '../commonProps';

async function wait(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

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
	 * The width of the drawer when opened. Accepts any valid CSS width value (e.g., '300px', '50%', '20rem').
	 *
	 * @defaultValue `'auto'`
	 */
	width: string;
	/**
	 * The height of the drawer when opened. Accepts any valid CSS height value (e.g., '300px', '50%', '20rem').
	 *
	 * @defaultValue `'auto'`
	 */
	height: string;
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
	 * An event emitted when the width is changed.
	 *
	 * Event payload is equal to the newly selected width.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onWidthChange: (width: string) => void;
	/**
	 * An event emitted when the height is changed.
	 *
	 * Event payload is equal to the newly selected height.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHeightChange: (width: string) => void;
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
	/**
	 * Directive to put on the container DOM element in order for the drawer to size correctly.
	 */
	containerDirective: Directive;
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
	width: 'auto',
	height: 'auto',
	onWidthChange: noop,
	onHeightChange: noop,
	onVisibleChange: noop,
	resizable: false,
	backdrop: true,
	bodyScroll: false,
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
	width: typeString,
	height: typeString,
	onWidthChange: typeFunction,
	onHeightChange: typeFunction,
	onVisibleChange: typeFunction,
	resizable: typeBoolean,
	backdrop: typeBoolean,
	bodyScroll: typeBoolean,
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
			animated$,
			ariaDescribedBy$,
			ariaLabelledBy$,
			onHidden$,
			onShown$,
			width$: _dirtyWidth$,
			height$: _dirtyHeight$,
			onWidthChange$,
			onHeightChange$,
			onVisibleChange$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultDrawerConfig, config, configValidator);

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
	const width$ = bindableProp(_dirtyWidth$, onWidthChange$);
	const height$ = bindableProp(_dirtyHeight$, onHeightChange$);

	const drawerPortalDirective = bindDirective(
		portal,
		computed(() => ({container: container$()})),
	);

	let drawerElement: HTMLElement | undefined = undefined;
	const drawerElementDirective = browserDirective((element) => {
		drawerElement = element;
		return {
			destroy() {
				drawerElement = undefined;
			},
		};
	});
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
				width: computed(() => (isVertical$() ? '100%' : width$())),
				height: computed(() => (isVertical$() ? height$() : '100%')),
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

	const containerDirective = createAttributesDirective(() => ({
		styles: {
			// width: computed(() => (isVertical$() ? '100%' : width$())),
			// height: computed(() => (isVertical$() ? height$() : '100%')),
			// height: writable('100%'),
		},
	}));

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
			click: async () => {
				console.log(`🔴(DEBUG)    [drawer.ts:454]: click: `);
				await wait(0);
				await transition.api.hide();
			},
		},
	}));

	const direction = computed(() => (['inline-start', 'block-start'].some((placement) => className$().includes(placement)) ? 1 : -1));

	let startSize = 0;
	const splitterDirective = createMousedownPositionDirective({
		onMoveStart(position) {
			if (drawerElement) {
				startSize = isVertical$() ? drawerElement.offsetHeight : drawerElement.offsetWidth;
			}
		},
		onMove(position) {
			const dir = direction();
			if (isVertical$()) {
				height$.set(startSize + dir * position.dy + 'px');
			} else {
				width$.set(startSize + dir * position.dx + 'px');
			}
		},
		onMoveEnd(position) {
			if (drawerElement) {
				if (isVertical$()) {
					height$.set(drawerElement.offsetHeight + 'px');
				} else {
					width$.set(drawerElement.offsetWidth + 'px');
				}
			}
		},
	});

	const visible$ = transition.stores.visible$;
	const transitioning$ = computed(() => transition.stores.transitioning$() || backdropTransition.stores.transitioning$());
	const hidden$ = computed(() => !transitioning$() && !visible$());

	const widget: DrawerWidget = {
		...stateStores({
			...stateProps,
			backdropClass$,
			className$,
			container$,
			visible$,
			backdropHidden$,
			hidden$,
		}),
		patch,
		api: {
			open: async () => {
				// Need to wait for the classes and styles in the elements
				console.log(`🔴(DEBUG)    [drawer.ts:506]: width$: `, width$());
				await wait(500);
				await transition.api.show();
			},
			close: async () => {
				console.log(`🔴(DEBUG)    [drawer.ts:509]: close: `, close);
				// Need to wait for the classes and styles in the elements
				await wait(0);
				await transition.api.hide();
			},
		},
		directives: {
			containerDirective,
			drawerPortalDirective,
			drawerDirective: mergeDirectives(
				drawerAttributeDirective,
				transition.directives.directive, // This directive must come after the attribute directive, to b esure that all the classes and attributes are applied
				bindDirective(
					siblingsInert,
					computed(() => !bodyScroll$()),
				),
				focusElement,
			),
			backdropPortalDirective,
			backdropDirective: mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
			splitterDirective,
		},
	};
	return widget;
});
