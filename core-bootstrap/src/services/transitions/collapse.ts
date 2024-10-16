import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';
import {createCollapseTransition, type CollapseConfig} from '@agnos-ui/core/services/transitions/collapse';

const verticalConfig: CollapseConfig = {
	dimension: 'height',
	hideClasses: ['collapse'],
	showClasses: ['collapse', 'show'],
	animationPendingClasses: ['collapsing'],
};
const horizontalConfig: CollapseConfig = {
	dimension: 'width',
	hideClasses: ['collapse', 'collapse-horizontal'],
	showClasses: ['collapse', 'collapse-horizontal', 'show'],
	animationPendingClasses: ['collapsing', 'collapse-horizontal'],
};

/**
 * A transition function that handles vertical collapse animations.
 *
 * This function is created using the `createCollapseTransition` utility with
 * a vertical configuration. It is intended to be used for animating the
 * collapsing and expanding of vertical elements.
 */
export const collapseVerticalTransition: TransitionFn = createCollapseTransition(verticalConfig);
/**
 * A transition function for collapsing elements horizontally.
 *
 * This function is created using the `createCollapseTransition` utility
 * and is configured with `horizontalConfig`.
 */
export const collapseHorizontalTransition: TransitionFn = createCollapseTransition(horizontalConfig);
