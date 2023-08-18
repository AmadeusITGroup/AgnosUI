const t=`import { SvelteComponentTyped } from "svelte";
import type { WidgetPropsEvents } from '../utils';
import type { RatingProps, RatingSlots } from './rating';
declare const __propDef: {
    props: {
        rating?: number | undefined;
        ariaLabel?: string | undefined;
        disabled?: boolean | undefined;
        className?: string | undefined;
        ariaValueTextFn?: ((rating: number, maxRating: number) => string) | undefined;
        maxRating?: number | undefined;
        readonly?: boolean | undefined;
        resettable?: boolean | undefined;
        tabindex?: number | undefined;
        slotStar?: import("..").SlotContent<import("..").AdaptPropsSlots<import("@agnos-ui/core").StarContext>>;
        ariaLabelledBy?: string | undefined;
    };
    slots: RatingSlots;
    events: WidgetPropsEvents<Omit<import("@agnos-ui/core").RatingProps, \`slot\${string}\`> & {
        slotStar: import("..").SlotContent<import("..").AdaptPropsSlots<import("@agnos-ui/core").StarContext>>;
    }>;
};
type RatingProps_ = typeof __propDef.props;
export { RatingProps_ as RatingProps };
export type RatingEvents = typeof __propDef.events;
type RatingSlots_ = typeof __propDef.slots;
export { RatingSlots_ as RatingSlots };
export default class Rating extends SvelteComponentTyped<RatingProps, RatingEvents, RatingSlots> {
}
`;export{t as default};
