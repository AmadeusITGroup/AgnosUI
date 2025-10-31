const r=`import type { DrawerApi, DrawerProps } from './drawer.gen';
declare const Drawer: import("svelte").Component<Partial<DrawerProps>, {
    api: DrawerApi;
}, "visible" | "width" | "height">;
type Drawer = ReturnType<typeof Drawer>;
export default Drawer;
`;export{r as default};
