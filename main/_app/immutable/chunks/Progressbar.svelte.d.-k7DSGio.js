const r=`import { SvelteComponent } from "svelte";
import { type ProgressbarProps, type ProgressbarSlots, type ProgressbarApi } from './progressbar';
declare const __propDef: {
    props: {
        api?: ProgressbarApi;
    } & Partial<ProgressbarProps>;
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
    get api(): ProgressbarApi;
}
`;export{r as default};
