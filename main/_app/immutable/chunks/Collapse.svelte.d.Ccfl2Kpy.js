const e=`import type { CollapseProps, CollapseApi } from './collapse.gen';
import type { Snippet } from 'svelte';
declare const Collapse: import("svelte").Component<Partial<CollapseProps> & {
    children: Snippet;
}, {
    api: CollapseApi;
}, "visible">;
type Collapse = ReturnType<typeof Collapse>;
export default Collapse;
`;export{e as default};
