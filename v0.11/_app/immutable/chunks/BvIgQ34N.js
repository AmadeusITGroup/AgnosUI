const o=`declare const addToast: (props: Partial<import("./toast.gen").ToastProps>) => number, removeToast: (id: number) => void, closeAll: () => void;
export { addToast, removeToast, closeAll };
import { type ToasterProps } from './toast.gen';
declare const Toaster: import("svelte").Component<ToasterProps, {}, "">;
type Toaster = ReturnType<typeof Toaster>;
export default Toaster;
`;export{o as default};
