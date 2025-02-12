import {createTransition} from '@agnos-ui/core/services/transitions/baseTransitions';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '@agnos-ui/core/types';
import {idWithDefault, stateStores, writablesForProps} from '@agnos-ui/core/utils/stores';
import {createAttributesDirective, mergeDirectives} from '@agnos-ui/core/utils/directive';
import {typeBoolean, typeFunction, typeString} from '@agnos-ui/core/utils/writables';
import {collapseHorizontalTransition, collapseVerticalTransition} from '../../services/transitions/collapse';
import {asWritable, computed} from '@amadeus-it-group/tansu';
import {noop} from '@agnos-ui/core/utils/func';

/**
 * Interface representing the common properties and state for a collapse component.
 */
export interface CollapseCommonPropsAndState {
	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	className: string;
	/**
	 * If `true`, collapse will be done horizontally.
	 *
	 * @defaultValue `false`
	 */
	horizontal: boolean;
	/**
	 * If `true` the collapse is visible to the user
	 *
	 * @defaultValue `true`
	 */
	visible: boolean;
}

/**
 * Represents the state of a collapse component.
 * Extends the properties and state from `CollapseCommonPropsAndState`.
 */
export interface CollapseState extends CollapseCommonPropsAndState {
	/**
	 * Is `true` when the collapse is hidden. Compared to `visible`, this is updated after the transition is executed.
	 */
	hidden: boolean;
}

/**
 * Properties for the Collapse component.
 */
export interface CollapseProps extends CollapseCommonPropsAndState {
	/**
	 * Callback called when the collapse visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 * @param visible - The new visibility state of the collapse.
	 */
	onVisibleChange: (visible: boolean) => void;

	/**
	 * Callback called when the collapse is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHidden: () => void;

	/**
	 * Callback called when the collapse is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onShown: () => void;

	/**
	 * If `true`, collapse opening will be animated at init time.
	 *
	 * @defaultValue `false`
	 */
	animatedOnInit: boolean;

	/**
	 * If `true`, collapse closing and opening will be animated.
	 *
	 * @defaultValue `true`
	 */
	animated: boolean;
	/**
	 * id of the collapse
	 *
	 * @defaultValue `''`
	 */
	id: string;
}

/**
 * Interface representing the API for a collapsible component.
 */
export interface CollapseApi {
	/**
	 * Triggers collapse closing programmatically.
	 */
	close(): void;

	/**
	 * Triggers the collapse content to be displayed for the user.
	 */
	open(): void;

	/**
	 * Toggles the collapse content visibility.
	 */
	toggle(): void;
}

/**
 * Interface representing the directives used in a collapse component.
 */
export interface CollapseDirectives {
	/**
	 * Directive to apply the collapse.
	 */
	collapseDirective: Directive;
	/**
	 * Directive to apply to a trigger;
	 */
	triggerDirective: Directive;
}

/**
 * Represents a widget for handling collapse functionality.
 *
 * This type defines the structure of a CollapseWidget, which includes properties, state, API, and directives
 * necessary for managing the collapse behavior in the UI.
 *
 * @type {Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>}
 */
export type CollapseWidget = Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>;

const defaultCollapseConfig: CollapseProps = {
	visible: true,
	horizontal: false,
	onVisibleChange: noop,
	onShown: noop,
	onHidden: noop,
	animated: true,
	animatedOnInit: false,
	className: '',
	id: '',
};

/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
export function getCollapseDefaultConfig(): CollapseProps {
	return {...defaultCollapseConfig};
}

const commonCollapseConfigValidator: ConfigValidator<CollapseProps> = {
	horizontal: typeBoolean,
	onVisibleChange: typeFunction,
	onHidden: typeFunction,
	onShown: typeFunction,
	animatedOnInit: typeBoolean,
	animated: typeBoolean,
	className: typeString,
	visible: typeBoolean,
	id: typeString,
};

/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
export function createCollapse(config?: PropsConfig<CollapseProps>): CollapseWidget {
	const [
		{animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, horizontal$, id$: _dirtyId$, ...stateProps},
		patch,
	] = writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);

	const id$ = idWithDefault(_dirtyId$);
	const currentTransitionFn$ = asWritable(computed(() => (horizontal$() ? collapseHorizontalTransition : collapseVerticalTransition)));

	const transition = createTransition({
		props: {
			transition: currentTransitionFn$,
			visible: requestedVisible$,
			animated: animated$,
			animatedOnInit: animatedOnInit$,
			onVisibleChange: onVisibleChange$,
			onHidden: onHidden$,
			onShown: onShown$,
		},
	});

	const visible$ = transition.stores.visible$;
	const hidden$ = transition.stores.hidden$;
	return {
		...stateStores({...stateProps, visible$, hidden$, horizontal$}),
		patch,
		api: {
			open: transition.api.show,
			close: transition.api.hide,
			toggle: transition.api.toggle,
		},
		directives: {
			collapseDirective: mergeDirectives(
				transition.directives.directive,
				createAttributesDirective(() => ({
					attributes: {
						id: id$,
					},
					classNames: {
						'au-collapse': true,
					},
				})),
			),
			triggerDirective: createAttributesDirective(() => ({
				attributes: {
					'aria-expanded': computed(() => `${visible$()}`),
					'aria-controls': id$,
				},
				events: {
					click: () => transition.api.toggle(),
				},
			})),
		},
	};
}
