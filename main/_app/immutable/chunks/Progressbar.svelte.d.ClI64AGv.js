const r=`import { SvelteComponentTyped } from "svelte";
import { type ProgressbarProps, type ProgressbarSlots, type ProgressbarApi } from './progressbar';
declare const __propDef: {
    props: {
        api?: ProgressbarApi | undefined;
    } & Partial<ProgressbarProps>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: ProgressbarSlots;
};
type ProgressbarProps_ = typeof __propDef.props;
export { ProgressbarProps_ as ProgressbarProps };
export type ProgressbarEvents = typeof __propDef.events;
type ProgressbarSlots_ = typeof __propDef.slots;
export { ProgressbarSlots_ as ProgressbarSlots };
export default class Progressbar extends SvelteComponentTyped<ProgressbarProps_, ProgressbarEvents, ProgressbarSlots_> {
    get api(): ProgressbarApi;
}
`;export{r as default};
