const e=`import type { CollapseProps, CollapseApi } from './collapse.gen';
import type { Snippet } from 'svelte';
type $$ComponentProps = Partial<CollapseProps> & {
    children: Snippet;
};
declare const Collapse: import("svelte").Component<$$ComponentProps, {
    api: CollapseApi;
}, "visible">;
type Collapse = ReturnType<typeof Collapse>;
export default Collapse;
`;export{e as default};
