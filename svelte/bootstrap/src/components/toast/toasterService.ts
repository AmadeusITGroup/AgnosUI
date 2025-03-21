import type {ToastProps} from './toast.gen';
import {Toaster as headlessToaster} from '@agnos-ui/svelte-headless/components/toast';
export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
