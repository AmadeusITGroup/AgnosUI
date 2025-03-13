import type {ToastProps} from '../components/toast/toast.gen';
import {Toaster as headlessToaster} from '@agnos-ui/svelte-headless/services/toaster';
import {defaultToasterProps, ToastPositions} from '@agnos-ui/svelte-headless/services/toaster';
export {defaultToasterProps, ToastPositions};
export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
