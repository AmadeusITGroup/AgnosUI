const o=`import { createCollapseTransition } from '../collapse';
const verticalConfig = {
    dimension: 'height',
    hideClasses: ['collapse'],
    showClasses: ['collapse', 'show'],
    animationPendingClasses: ['collapsing'],
};
const horizontalConfig = {
    dimension: 'width',
    hideClasses: ['collapse', 'collapse-horizontal'],
    showClasses: ['collapse', 'collapse-horizontal', 'show'],
    animationPendingClasses: ['collapsing', 'collapse-horizontal'],
};
export const collapseVerticalTransition = createCollapseTransition(verticalConfig);
export const collapseHorizontalTransition = createCollapseTransition(horizontalConfig);
`;export{o as default};
