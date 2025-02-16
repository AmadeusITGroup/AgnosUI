const t=`import type { ToastApi, ToastProps } from './toast.gen';
declare const Toast: import("svelte").Component<Partial<ToastProps>, {
    api: ToastApi;
}, "visible">;
type Toast = ReturnType<typeof Toast>;
export default Toast;
`;export{t as default};
