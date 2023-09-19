import type {CollapseConfig} from '../collapse.js';
import {createCollapseTransition} from '../collapse.js';

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

export const collapseVerticalTransition = createCollapseTransition(verticalConfig);
export const collapseHorizontalTransition = createCollapseTransition(horizontalConfig);
