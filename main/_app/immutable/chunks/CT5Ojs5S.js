const e=`declare const addToast: any, removeToast: any, closeAll: any;
export { addToast, removeToast, closeAll };
import { type ToasterProps } from './toast.gen';
declare const Toaster: import("svelte").Component<ToasterProps, {}, "">;
type Toaster = ReturnType<typeof Toaster>;
export default Toaster;
`;export{e as default};
