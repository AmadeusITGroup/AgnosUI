const r=`import { SvelteComponent } from "svelte";
import { type ProgressbarProps, type ProgressbarSlots } from './progressbar';
declare const __propDef: {
    props: Partial<ProgressbarProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ProgressbarSlots;
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type ProgressbarProps_ = typeof __propDef.props;
export { ProgressbarProps_ as ProgressbarProps };
export type ProgressbarEvents = typeof __propDef.events;
type ProgressbarSlots_ = typeof __propDef.slots;
export { ProgressbarSlots_ as ProgressbarSlots };
export default class Progressbar extends SvelteComponent<ProgressbarProps_, ProgressbarEvents, ProgressbarSlots_> {
}
`;export{r as default};
