const o=`import type { AccordionApi, AccordionProps } from './accordion';
import type { Snippet } from 'svelte';
declare const Accordion: import("svelte").Component<Partial<AccordionProps> & {
    children: Snippet;
}, {
    api: AccordionApi;
}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
`;export{o as default};