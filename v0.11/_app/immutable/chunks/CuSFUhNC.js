const o=`import type { AccordionApi, AccordionProps } from './accordion';
import type { Snippet } from 'svelte';
type $$ComponentProps = Partial<AccordionProps> & {
    children: Snippet;
};
declare const Accordion: import("svelte").Component<$$ComponentProps, {
    api: AccordionApi;
}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
`;export{o as default};
