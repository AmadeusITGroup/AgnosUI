const e=`import type { TreeProps } from './tree.gen';
declare const Tree: import("svelte").Component<Partial<TreeProps>, {}, "">;
type Tree = ReturnType<typeof Tree>;
export default Tree;
`;export{e as default};
