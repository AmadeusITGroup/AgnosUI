const e=`import { type AlertApi, type AlertProps } from './alert.gen';
declare const Alert: import("svelte").Component<Partial<AlertProps>, {
    api: AlertApi;
}, "visible">;
type Alert = ReturnType<typeof Alert>;
export default Alert;
`;export{e as default};
