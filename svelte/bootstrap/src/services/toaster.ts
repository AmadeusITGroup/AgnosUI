import type {ToastProps} from '../components/toast/toast.gen';
import {Toaster as headlessToaster} from '@agnos-ui/svelte-headless/services/toaster';
import type { ToastPositions} from '@agnos-ui/svelte-headless/services/toaster';
import {defaultToasterProps} from '@agnos-ui/svelte-headless/services/toaster';
export {defaultToasterProps};
export type {ToastPositions};

export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
