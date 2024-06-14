const t=`import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { RatingWidget, RatingProps } from './rating.gen';
export type * from './rating.gen';
export declare const createRating: WidgetFactory<RatingWidget>;
export declare function Rating(props: Partial<RatingProps>): import("react/jsx-runtime").JSX.Element;
`;export{t as default};
