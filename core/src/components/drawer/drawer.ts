import {computed, readable, writable} from '@amadeus-it-group/tansu';
import {portal} from '../../services/portal';
import {siblingsInert} from '../../services/siblingsInert';
import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import type {Directive, WidgetFactory} from '../../types';
import {type ConfigValidator, type PropsConfig, type Widget} from '../../types';
import {bindDirective, createAttributesDirective, mergeDirectives} from '../../utils/directive';
import {noop} from '../../utils/func';
import {bindableProp, stateStores, true$, writablesForProps} from '../../utils/stores';
import {createWidgetFactory} from '../../utils/widget';
import {typeBoolean, typeFunction, typeHTMLElementOrNull, typeNumber, typeString} from '../../utils/writables';
import type {WidgetsCommonPropsAndState} from '../commonProps';

/**
 * Possible values for the drawer positions
 */
export type DrawerPositions = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

interface DrawerCommonPropsAndState extends WidgetsCommonPropsAndState {
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
	 */
	animated: boolean;
	/**
	 * aria-labelledby attribute to use for the drawer element.
	 */
	ariaLabelledBy: string;
	/**
	 * aria-describedby attribute to use for the drawer element.
	 */
	ariaDescribedBy: string;
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
	 * The width of the drawer in pixels.
	 */
	width: number;
	/**
	 * The height of the drawer in pixels.
	 */
	height: number;
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
	onWidthChange: (width: number) => void;
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
	onHeightChange: (width: number) => void;
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
	className: '',
	visible: false,
	container: typeof window !== 'undefined' ? document.body : null,
	transition: noop,
	verticalTransition: noop,
	onHidden: noop,
	onShown: noop,
	width: 200,
	height: 200,
	onWidthChange: noop,
	onHeightChange: noop,
	resizable: false,
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
	width: typeNumber,
	height: typeNumber,
	onWidthChange: typeFunction,
	onHeightChange: typeFunction,
	resizable: typeBoolean,
};

/**
 * Create a Drawer widget with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
export const createDrawer: WidgetFactory<DrawerWidget> = createWidgetFactory('drawer', (config?: PropsConfig<DrawerProps>) => {
	const [
		{
			backdropTransition$,
			backdropClass$,
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
			...stateProps
		},
		patch,
	] = writablesForProps(defaultDrawerConfig, config, configValidator);

	const isVertical = computed(() => {
		const isVertical = ['block-start', 'block-end'].some((placement) => className$().includes(placement));
		console.log(isVertical);
		return isVertical;
	});
	const transition = createTransition({
		props: {
			animated: animated$,
			animatedOnInit: animated$,
			transition: isVertical() ? verticalTransition$ : transition$,
			visible: requestedVisible$,
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

	const drawerAttributeDirective = createAttributesDirective(() => ({
		attributes: {
			class: className$,
			role: readable('dialog'),
			'aria-describedby': readable(ariaDescribedBy$()),
			'aria-labelledby': readable(ariaLabelledBy$()),
			'aria-modal': readable('true'),
		},
		classNames: {
			'au-drawer': true$,
			show: visible$,
		},
		styles: {
			width: computed(() => (isVertical() ? '100%' : `${width$()}px`)),
			height: computed(() => (isVertical() ? `${height$()}px` : '100%')),
		},
	}));

	const containerDirective = createAttributesDirective(() => ({
		classNames: {
			'au-drawer-container': true$,
		},
		styles: {
			width: computed(() => (isVertical() ? '100%' : `${width$()}px`)),
			height: computed(() => (isVertical() ? `${height$()}px` : '100%')),
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

	const backdropHidden$ = computed(() => hidden$());

	const backdropAttributeDirective = createAttributesDirective(() => ({
		attributes: {
			class: backdropClass$,
			'data-agnos-ignore-inert': readable('true'),
		},
		classNames: {
			'au-drawer-backdrop': true$,
			show: visible$,
		},
		events: {
			click: async () => {
				await transition.api.hide();
			},
		},
	}));

	const direction = computed(() => (['inline-start', 'block-start'].some((placement) => className$().includes(placement)) ? 1 : -1));
	const startDimension = writable(0);
	const startPos = writable(0);
	const dimension = writable(0);

	const splitterDirective = createAttributesDirective(() => ({
		attributes: {
			draggable: readable('true'),
		},
		classNames: {
			'au-splitter': true$,
		},
		events: {
			dragstart: (e: DragEvent) => {
				startPos.set(isVertical() ? e.clientY : e.clientX);
				startDimension.set(isVertical() ? height$() : width$());
				e.dataTransfer?.setDragImage(new Image(), 0, 0); // Remove drag image
			},
			dragend: (e: DragEvent) => {
				document.body.style.cursor = '';
				// Final update of the dimension as Firefox does not contain the proper clientX/Y in drag event
				// firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
				updateDimension(e);
			},
			dragover: (event: DragEvent) => {
				event.preventDefault();
			},
			drag: (e: DragEvent) => {
				updateDimension(e);
			},
		},
	}));

	/**
	 * Utility function to update the relevant dimension of the drawer based on the positioning and input drag event
	 * @param e Drag event object
	 */
	const updateDimension = (e: DragEvent) => {
		if (!isVertical() && e.clientX > 0) {
			dimension.set(startDimension() + direction() * (e.clientX - startPos()));
			width$.set(dimension());
		} else if (isVertical() && e.clientY > 0) {
			dimension.set(startDimension() + direction() * (e.clientY - startPos()));
			height$.set(dimension());
		}
	};

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
			open: transition.api.show,
			close: transition.api.hide,
		},
		directives: {
			containerDirective,
			drawerPortalDirective,
			drawerDirective: mergeDirectives(transition.directives.directive, siblingsInert, drawerAttributeDirective),
			backdropPortalDirective,
			backdropDirective: mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
			splitterDirective,
		},
	};
	return widget;
});
