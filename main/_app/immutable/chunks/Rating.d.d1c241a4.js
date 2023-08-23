const t=`import type { WidgetProps } from '@agnos-ui/core';
import { createRating } from '@agnos-ui/core';
import type { AdaptWidgetSlots } from './Slot';
export type RatingWidget = AdaptWidgetSlots<ReturnType<typeof createRating>>;
export type RatingProps = WidgetProps<RatingWidget>;
export declare function Rating(props: Partial<RatingProps>): import("react/jsx-runtime").JSX.Element;
`;export{t as default};
