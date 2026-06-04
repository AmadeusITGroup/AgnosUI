const e=`import type { AccordionItemApi, AccordionItemProps } from './accordion';
declare const Item: import("svelte").Component<Partial<AccordionItemProps>, {
    api: AccordionItemApi;
}, "visible">;
type Item = ReturnType<typeof Item>;
export default Item;
`;export{e as default};
